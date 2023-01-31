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
import { grayDark } from "./components/theme";

export default function WelcomeEmail({ name }: { name?: string }): JSX.Element {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={500}>
        <MjmlWrapper cssClass="container">
          <Header
            title="Bienvenido a CoreWave"
            // title="Welcome to CoreWave"
          />
          <MjmlSection padding="0">
            <MjmlColumn>
              <MjmlImage
                cssClass="hero"
                padding="0"
                align="left"
                src="https://corewave.xyz/_static/thumbnail.png"
              />
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection cssClass="smooth">
            <MjmlColumn>
              <MjmlText cssClass="paragraph">
                ¡Gracias por registrarte{name && `, ${name}`}!
                {/* Thanks for signing up{name && `, ${name}`}! */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Mi nombre es Juan, y soy uno de los creadores de CoreWave - el
                gestor de enlaces para equipos de marketing modernos. ¡Estamos
                muy emocionados de tenerte a bordo!
                {/* My name is Steven, and I'm the creator of CoreWave - the
                open-source Bitly alternative. I'm excited to have you on board! */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Aquí hay algunas cosas que puedes hacer:
                {/* Here are a few things you can do: */}
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Crea un {/* •&nbsp;&nbsp;Create a custom{" "} */}
                <a href="https://app.corewave.xyz/links" target="_blank">
                  enlace personalizado de CoreWave
                  {/* CoreWave short link */}
                </a>
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Crea un nuevo{" "}
                {/* •&nbsp;&nbsp;Create a new{" "} */}
                <a href="https://app.corewave.xyz/" target="_blank">
                  proyecto
                  {/* project */}
                </a>{" "}
                y agrega tu dominio personalizado
                {/* and add your custom domain */}
              </MjmlText>
              {/* <MjmlText cssClass="li">
                •&nbsp;&nbsp;Star the repo on{" "}
                <a href="https://github.com/juancamiloqhz/dub" target="_blank">
                  GitHub
                </a>
              </MjmlText> */}
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Síguenos en {/* •&nbsp;&nbsp;Follow us on{" "} */}{" "}
                <a href="https://twitter.com/corewave/" target="_blank">
                  Twitter
                </a>
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Déjanos saber si tienes alguna pregunta o sugerencia. ¡Estamos
                siempre felices de ayudar!
                {/* Let me know if you have any questions or feedback. I'm always
                happy to help! */}
              </MjmlText>
              <MjmlText cssClass="paragraph" color={grayDark}>
                Juan de CoreWave
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
