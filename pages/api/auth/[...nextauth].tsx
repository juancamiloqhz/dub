import { PrismaAdapter } from "@next-auth/prisma-adapter";
import sendMail, { sendMarketingMail } from "emails";
import LoginLink from "emails/LoginLink";
import WelcomeEmail from "emails/WelcomeEmail";
import NextAuth, { type NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import prisma from "@/lib/prisma";
import { getBlackListedEmails } from "@/lib/utils";

const VERCEL_DEPLOYMENT = !!process.env.VERCEL_URL;

export const authOptions: NextAuthOptions = {
  providers: [
    EmailProvider({
      sendVerificationRequest({ identifier, url }) {
        try {
          sendMail({
            subject: "Tu enlace de inicio de sesión en CoreWave",
            // subject: "Your CoreWave Login Link",
            to: identifier,
            component: <LoginLink url={url} />,
          });
        } catch (e) {
          console.log("ERRORORORORO: ", e);
        }
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  cookies: {
    sessionToken: {
      name: `${VERCEL_DEPLOYMENT ? "__Secure-" : ""}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        // When working on localhost, the cookie domain must be omitted entirely (https://stackoverflow.com/a/1188145)
        domain: VERCEL_DEPLOYMENT ? ".corewave.xyz" : undefined,
        secure: VERCEL_DEPLOYMENT,
      },
    },
  },
  callbacks: {
    signIn: async ({ user }) => {
      const BLACKLISTED_EMAILS = await getBlackListedEmails();
      if (BLACKLISTED_EMAILS.has(user.email)) {
        return false;
      }
      return true;
    },
    jwt: async ({ token, account }) => {
      const BLACKLISTED_EMAILS = await getBlackListedEmails();
      if (BLACKLISTED_EMAILS.has(token.email)) {
        return {};
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = {
        // @ts-ignore
        id: token.sub,
        ...session.user,
      };
      return session;
    },
  },
  events: {
    async signIn(message) {
      if (message.isNewUser) {
        const email = message.user.email;
        await Promise.all([
          sendMarketingMail({
            subject: "✨ ¡Bienvenido a CoreWave! ✨",
            // subject: "✨ Welcome to CoreWave! ✨",
            to: email,
            component: <WelcomeEmail />,
          }),
          prisma.user.update({
            where: { email },
            data: { billingCycleStart: new Date().getDate() },
          }),
        ]);
      }
    },
  },
};

export default NextAuth(authOptions);
