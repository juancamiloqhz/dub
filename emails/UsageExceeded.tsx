import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "mjml-react";
import { getPlanFromUsageLimit } from "@/lib/stripe/constants";
import { nFormatter } from "@/lib/utils";
import ButtonPrimary from "./components/ButtonPrimary";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Header from "./components/Header";
import { grayDark } from "./components/theme";

export default function UsageExceeded({
  usage,
  usageLimit,
  type,
}: {
  usage: number;
  usageLimit: number;
  type: "first" | "second";
}): JSX.Element {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={500}>
        <MjmlWrapper cssClass="container">
          <Header
            title="Límite de Uso Excedido"
            // title="Usage Limit Exceeded"
          />
          <MjmlSection cssClass="smooth">
            <MjmlColumn>
              <MjmlText cssClass="paragraph">
                👋 Hola!
                {/* Hey there! */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Queríamos avisarte que tu cuenta ha excedido el límite del{" "}
                <strong>Plan {getPlanFromUsageLimit(usageLimit)}</strong> del
                límite de <strong>{nFormatter(usageLimit)} clics</strong>. Has
                usado <strong>{nFormatter(usage, 2)} clics</strong> en todos tus
                proyectos en el ciclo de facturación actual.
                {/* Just wanted to reach out and let you know that your account has
                exceeded the
                <strong> {getPlanFromUsageLimit(usageLimit)} Plan </strong>
                limit of <strong>{nFormatter(usageLimit)} link clicks</strong>.
                You have used{" "}
                <strong>{nFormatter(usage, 2)} link clicks</strong> across all
                your projects in your current billing cycle. */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Todos tus enlaces existentes seguirán funcionando, y seguimos
                recopilando datos sobre ellos, pero necesitarás actualizar tu
                plan para ver sus estadísticas, editarlos o agregar más enlaces.
                {/* All your existing links will continue to work, and I'm still
                collecting data on them, but you'll need to upgrade to view
                their stats, edit them, or add more links. */}
              </MjmlText>
              <ButtonPrimary
                link={`https://app.corewave.xyz/settings`}
                uiText="Actualizar mi plan"
                // uiText="Upgrade my plan"
              />
              <MjmlText cssClass="paragraph">
                Para respetar tu bandeja de entrada,{" "}
                {/* To respect your inbox,{" "} */}
                {type === "first"
                  ? "Solo te enviaremos un correo electrónico más sobre esto en 3 días"
                  : "este será el último correo electrónico que te enviaremos sobre esto"}
                . Siéntete libre de ignorar este correo electrónico si no
                planeas actualizar tu plan, o responde para hacernos saber si
                tienes alguna pregunta!
                {/* {type === "first"
                  ? "I will only send you one more email about this in 3 days"
                  : "this will be the last time I'll email you about this"}
                . Feel free to ignore this email if you don't plan on upgrading,
                or reply to let me know if you have any questions! */}
              </MjmlText>
              <MjmlText cssClass="paragraph" color={grayDark}>
                Juan de CoreWave
              </MjmlText>
              <Divider />
            </MjmlColumn>
          </MjmlSection>
          <Footer />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
}
