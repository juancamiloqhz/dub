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

export default function FeatureUpdates(): JSX.Element {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={500}>
        <MjmlWrapper cssClass="container">
          <Header
            title="Nuevas Características de CoreWave"
            // title="New Features from CoreWave"
          />
          <MjmlSection padding="0">
            <MjmlColumn>
              <MjmlImage
                cssClass="hero"
                padding="0"
                align="left"
                src="https://d2vwwcvoksz7ty.cloudfront.net/email-assets/features.gif"
              />
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection cssClass="smooth">
            <MjmlColumn>
              <MjmlText cssClass="paragraph">
                Feliz miércoles! Aquí están algunas de las{" "}
                {/* Happy Wednesday! Here are some of the{" "} */}
                <a
                  href="https://twitter.com/juancamiloqhz/status/1587828901174284288"
                  target="_blank"
                >
                  nuevas características
                  {/* new features */}
                </a>{" "}
                que hemos agregado recientemente a CoreWave:
                {/* that were recently added to CoreWave: */}
              </MjmlText>
              <Divider bottomPadding />
              <MjmlText cssClass="subtitle">
                1. Enlaces con superpoderes
                {/* 1. Links with superpowers */}
              </MjmlText>

              <MjmlText cssClass="paragraph">
                Con CoreWave, puedes crear enlaces con:
                {/* With CoreWave, you can create links with: */}
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Personalización de la vista previa de redes social
                (etiquetas OG)
                {/* •&nbsp;&nbsp;Custom social previews (OG tags) */}
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;parámetros UTM
                {/* •&nbsp;&nbsp;UTM parameters */}
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Protección con contraseña
                {/* •&nbsp;&nbsp;Password-protection */}
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Fechas de expiración
                {/* •&nbsp;&nbsp;Expiration dates */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Más información sobre {/* See{" "} */}
                <a href="https://corewave.xyz#features" target="_blank">
                  cómo funciona
                  {/* how this works */}
                </a>
                .
              </MjmlText>

              <Divider bottomPadding />
              <MjmlText cssClass="subtitle">
                2. Usa tu propio dominio personalizado
                {/* 2. Use your own custom domain */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                La mayoría de los acortadores de enlaces como Bitly cobran un
                mínimo de $29/mes para que uses tu propio dominio en tus enlaces
                cortos.
                {/* Most link shorteners like Bitly charge a minimum of $29/mo for
                you to use your own domain for your short links. */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Con CoreWave, puedes hacerlo por $0/mes.
                {/* With CoreWave, you can do that for $0/mo. */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Comienza a{/* Start{" "} */}{" "}
                <a href="https://app.corewave.xyz" target="_blank">
                  acortar tus enlaces
                  {/* shortening your links */}
                </a>{" "}
                con tu propio dominio.
                {/* with your own domain. */}
              </MjmlText>

              <Divider bottomPadding />
              <MjmlText cssClass="subtitle">
                3. Analíticas que importan
                {/* 3. Analytics that matter */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                CoreWave proporciona análisis poderosos para tus enlaces:
                {/* CoreWave provides powerful analytics for your links: */}
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Geolocalización (país, ciudad)
                {/* •&nbsp;&nbsp;Geolocation (country, city) */}
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Tipo de dispositivo
                {/* •&nbsp;&nbsp;Device type */}
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Tipo de navegador
                {/* •&nbsp;&nbsp;Browser type */}
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Tipo de sistema operativo
                {/* •&nbsp;&nbsp;OS type */}
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Sitios de referencia (Twitter, LinkedIn)
                {/* •&nbsp;&nbsp;Referrer websites (Twitter, LinkedIn) */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Mira una demostración en vivo {/* Check out a live demo{" "} */}
                <a href="https://corewave.xyz/stats/github" target="_blank">
                  aquí
                  {/* here */}
                </a>
                .
              </MjmlText>

              <Divider bottomPadding />
              <MjmlText cssClass="subtitle">
                4. Generador de códigos QR gratuito
                {/* 4. Free QR code generator */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                CoreWave te permite generar códigos QR de tus enlaces cortos de
                forma gratuita.
                {/* CoreWave allows you to generate QR codes of your short links for
                free. */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Incluso si excedes tu límite de clics (1K/mes para el plan
                gratuito), tus códigos QR seguirán funcionando (solo necesitas
                actualizar el plan para ver las estadísticas).
                {/* Even if you exceed your clicks limit (1K/mo for the free plan),
                your QR codes will continue to work (you just need to upgrade to
                see the stats). */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                No más preocupaciones por códigos QR rotos.
                {/* No more worrying about broken QR codes. */}
              </MjmlText>

              <Divider bottomPadding />
              <MjmlText cssClass="subtitle">
                5. Colabora con tu equipo
                {/* 5. Collaborate with your team */}
              </MjmlText>

              <MjmlText cssClass="paragraph">
                Recientemente agregamos una nueva función de invitaciones de
                equipo que te permite invitar a tus amigos y compañeros de
                trabajo a tu proyecto de CoreWave.
                {/* We recently added a new "team invites" feature that allows you
                to invite your friends & teammates to your CoreWave project. */}
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Con CoreWave, obtienes invitaciones ilimitadas para cada
                proyecto – no más compartir inicios de sesión a través de grupos
                de Google.
                {/* With CoreWave, you get unlimited team invites for every project
                – no more sharing logins via Google groups. */}
              </MjmlText>

              <Divider bottomPadding />
              <MjmlText cssClass="paragraph">
                Por cierto, también renovamos nuestro modelo de precios y lo
                hicimos más asequible para todos. Puedes leer más sobre ello{" "}
                {/* In case you missed it, we also revamped our pricing model and
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
