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
import { purple } from "./components/theme";

export default function ProjectInvite({
  url,
  projectName,
}: {
  url: string;
  projectName: string;
}): JSX.Element {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={500}>
        <MjmlWrapper cssClass="container">
          <Header
            title="Tu Invitación a CoreWave"
            // title="Your CoreWave Invite"
          />
          <MjmlSection cssClass="smooth">
            <MjmlColumn>
              <MjmlText cssClass="paragraph">
                ¡Te han invitado a unirte al proyecto{" "}
                <strong>{projectName}</strong> en CoreWave!
                {/* You've been invited to join the <strong>{projectName}</strong>{" "}
                project on CoreWave! */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Puedes usar el enlace de abajo para iniciar sesión en CoreWave y
                unirte al proyecto.
                {/* You can use the magic link below to sign in to CoreWave and join
                the project. */}
              </MjmlText>
              <ButtonPrimary
                link={url}
                uiText="Unirme al Proyecto"
                // uiText="Join Project"
              />
              <MjmlText cssClass="paragraph">
                Si estás en un dispositivo móvil, también puedes copiar el
                enlace de abajo y pegarlo en el navegador de tu elección.
                {/* If you're on a mobile device, you can also copy the link below
                and paste it into the browser of your choice. */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                <a
                  rel="nofollow"
                  style={{
                    textDecoration: "none",
                    color: `${purple} !important`,
                  }}
                >
                  {url.replace(/^https?:\/\//, "")}
                </a>
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Si no solicitaste este correo electrónico, puedes ignorarlo con
                total seguridad.
                {/* If you did not request this email, you can safely ignore it. */}
              </MjmlText>
              <Divider />
            </MjmlColumn>
          </MjmlSection>
          <Footer footnote={false} />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
}
