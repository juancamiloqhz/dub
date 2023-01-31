import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlImage,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "mjml-react";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Header from "./components/Header";
import { grayDark, purple } from "./components/theme";

export default function WelcomeEmail({
  domains,
}: {
  domains?: string[];
}): JSX.Element {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={500}>
        <MjmlWrapper cssClass="container">
          <Header
            title="¡Tardía Bienvenida a CoreWave!"
            // title="A Belated Welcome to CoreWave"
          />
          <MjmlSection padding="0">
            <MjmlColumn>
              <MjmlImage
                cssClass="hero"
                padding="0"
                align="left"
                src="https://raw.githubusercontent.com/juancamiloqhz/dub/main/public/_static/thumbnail.png"
              />
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection cssClass="smooth">
            <MjmlColumn>
              <MjmlText cssClass="paragraph">
                Bienvenido a CoreWave - !La gestión de enlaces para equipos de
                marketing modernos!
                {/* Welcome to CoreWave - the open-source Bitly alternative! */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Disculpas por el mensaje de bienvenida tardío - acabo de{" "}
                {/* Apologies for the belated welcome message - I just{" "} */}
                <a
                  href="https://twitter.com/juancamiloqhz/status/1579471673325408257"
                  target="_blank"
                >
                  {/* got transactional emails working */}
                  poner a funcionar los correos transaccionales
                </a>{" "}
                esta semana.
                {/* this weekend. */}
              </MjmlText>
              {domains ? (
                <MjmlText cssClass="paragraph">
                  Hemos notado que has estado usando CoreWave con tu
                  {domains.length > 1 ? "s" : ""} propio
                  {domains.length > 1 ? "s" : ""} dominio
                  {domains.length > 1 ? "s" : ""} personalizado
                  {/* I noticed that you've been successfully using CoreWave with
                  your custom domain */}
                  {domains.length > 1 ? "s" : ""}{" "}
                  {domains.map((domain) => (
                    <span key={domain}>
                      <code>
                        <a
                          rel="nofollow"
                          style={{
                            textDecoration: "none",
                            color: `${purple} !important`,
                          }}
                        >
                          {domain}
                        </a>
                      </code>
                      {", "}
                    </span>
                  ))}{" "}
                  y queríamos preguntarte si tienes alguna sugerencia o pregunta
                  sobre CoreWave. ¡Nos encantaría escucharte!
                  {/* and I wanted to reach out to ask if you have any feedback or
                  suggestions for CoreWave? I'd love to hear from you! */}
                </MjmlText>
              ) : (
                <MjmlText cssClass="paragraph">
                  Hemos notado que te registraste en CoreWave pero aún no has
                  conectado un dominio personalizado con éxito, y queríamos
                  preguntarte si tienes alguna pregunta al respecto.
                  {/* I noticed that you recently signed up for CoreWave but haven't
                  successfully connected a custom domain yet, and I wanted to
                  reach out to ask if you have any questions about that? */}
                </MjmlText>
              )}
              <MjmlText cssClass="paragraph">
                Por cierto, también hemos renovado nuestro modelo de precios y
                lo he hecho más asequible para todos. Puedes leer más sobre esto{" "}
                {/* In case you missed it, I also revamped our pricing model and
                made it more affordable for everyone. You can read more about it{" "} */}
                <a
                  href="https://twitter.com/corewave/status/1579466952594292737"
                  target="_blank"
                >
                  aquí
                  {/* here */}
                </a>
                .
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Si no has hecho nada de lo anterior, aquí hay algunas cosas más
                que puedes hacer:
                {/* If you haven't already, here are a few more things you can do: */}
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Sigue a CoreWave en{" "}
                {/* •&nbsp;&nbsp;Follow us on{" "} */}
                <a href="https://twitter.com/corewave/" target="_blank">
                  Twitter
                </a>
              </MjmlText>
              {/* <MjmlText cssClass="li">
                •&nbsp;&nbsp;Star the repo on{" "}
                <a href="https://github.com/juancamiloqhz/dub" target="_blank">
                  GitHub
                </a>
              </MjmlText> */}
              {domains ? (
                <MjmlText cssClass="paragraph" color={grayDark}>
                  P.S.: Recibirás un correo electrónico de Trustpilot en los
                  próximos días - si has disfrutado usando CoreWave,
                  significaría mucho si pudieras dejar una reseña; si no, ¡nos
                  encantaría saber qué podemos hacer para mejorar CoreWave!
                  {/* P.S.: You'll receive an email from Trustpilot in the next
                  couple of days - if you enjoyed using CoreWave, it would mean
                  a lot if you could leave a review; if not, I'd love to hear
                  what I can do to improve CoreWave! */}
                </MjmlText>
              ) : (
                <MjmlText cssClass="paragraph">
                  ¡Esperamos escuchar de ti pronto!
                  {/* Looking forward to hearing from you! */}
                </MjmlText>
              )}
              <MjmlText cssClass="paragraph" color={grayDark}>
                Juan de CoreWave
                {/* Juan from CoreWave */}
              </MjmlText>
              <Divider />
            </MjmlColumn>
          </MjmlSection>
          <Footer unsubscribe />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
}
