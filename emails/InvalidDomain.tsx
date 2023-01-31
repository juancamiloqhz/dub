import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "mjml-react";
import ButtonPrimary from "./components/ButtonPrimary";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Header from "./components/Header";
import { grayDark, purple } from "./components/theme";

export default function InvalidDomain({
  domain,
  projectSlug,
  invalidDays,
}: {
  domain: string;
  projectSlug: string;
  invalidDays: number;
}): JSX.Element {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={500}>
        <MjmlWrapper cssClass="container">
          <Header
            title="Configuración de Dominio Inválida"
            // title="Invalid Domain Configuration"
          />
          <MjmlSection cssClass="smooth">
            <MjmlColumn>
              <MjmlText cssClass="paragraph">
                👋 Hola!
                {/* Hey there! */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Hicimos un escaneo de todos nuestros proyectos y notamos que tu
                dominio{" "}
                {/* I did a scan of all our projects and noticed that your domain{" "} */}
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
                </code>{" "}
                de tu proyecto en CoreWave{" "}
                {/* for your CoreWave project{" "} */}
                <a
                  href={`https://app.corewave.xyz/${projectSlug}`}
                  target="_blank"
                >
                  {projectSlug}↗
                </a>{" "}
                ha estado inválido por {invalidDays} días.
                {/* has been invalid for {invalidDays} days. */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Si tu dominio permanece sin configurar por 30 días, tu proyecto
                será eliminado automáticamente. Por favor, haz clic en el enlace
                a continuación para configurar tu dominio.
                {/* If your domain remains unconfigured for 30 days, your project
                will be automatically deleted. Please click the link below to
                configure your domain. */}
              </MjmlText>
              <ButtonPrimary
                link={`https://app.corewave.xyz/${projectSlug}/settings`}
                uiText="Configurar mi dominio"
                // uiText="Configure my domain"
              />
              <MjmlText cssClass="paragraph">
                Si no quieres mantener este proyecto en CoreWave, puedes{" "}
                {/* If you do not want to keep this project on CoreWave, you can{" "} */}
                <a
                  href={`https://app.corewave.xyz/${projectSlug}/settings`}
                  target="_blank"
                >
                  eliminarlo
                  {/* delete it */}
                </a>{" "}
                o simplemente ignora este correo electrónico. Para respetar tu
                bandeja de entrada,{" "}
                {/* or simply ignore this email. To respect your inbox,{" "} */}
                {/* {invalidDays < 28
                  ? `I will only send you one more email about this in ${
                      28 - invalidDays
                    } days.`
                  : "this will be the last time I'll email you about this."} */}
                {invalidDays < 28
                  ? `te enviaremos un correo electrónico más sobre esto en ${
                      28 - invalidDays
                    } días.`
                  : "este será el último correo electrónico que te enviaremos sobre esto."}
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
