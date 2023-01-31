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

export default function ProjectDeleted({
  domain,
  projectSlug,
}: {
  domain: string;
  projectSlug: string;
}): JSX.Element {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={500}>
        <MjmlWrapper cssClass="container">
          <Header
            title="Proyecto Eliminado"
            // title="Project Deleted"
          />
          <MjmlSection cssClass="smooth">
            <MjmlColumn>
              <MjmlText cssClass="paragraph">
                👋 Hola!
                {/* Hey there! */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Queríamos avisarte que tu dominio{" "}
                {/* Just wanted to let you know that your domain{" "} */}
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
                ha sido inválido por 30 días. Como resultado, tu proyecto ha
                sido eliminado de CoreWave.
                {/* has been invalid for 30 days. As a result, your project has been
                deleted from CoreWave. */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Si quieres restaurar el proyecto, puedes crearlo de nuevo en
                CoreWave con el enlace de abajo.
                {/* If you would like to restore the project, you can easily create
                it again on CoreWave with the link below. */}
              </MjmlText>
              <ButtonPrimary
                link={`https://app.corewave.xyz/`}
                uiText="Crear un nuevo proyecto"
                // uiText="Create a new project"
              />
              <MjmlText cssClass="paragraph">
                Si no quieres restaurar el proyecto, puedes ignorar este correo
                electrónico.
                {/* If you did not want to keep this project on CoreWave anyway, you
                can simply ignore this email. */}
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
