import { MjmlColumn, MjmlSection, MjmlText } from "mjml-react";

export default function Footer({
  unsubscribe,
  footnote = true,
}: {
  unsubscribe?: boolean;
  footnote?: boolean;
}): JSX.Element {
  return (
    <MjmlSection cssClass="smooth">
      <MjmlColumn>
        <MjmlText cssClass="footer">
          © {new Date().getFullYear()} CoreWave
          {unsubscribe && (
            <>
              &nbsp;&nbsp;·&nbsp;&nbsp;
              <a href="{{{ pm:unsubscribe }}}" target="_blank">
                Cancelar suscripción
                {/* Unsubscribe */}
              </a>
            </>
          )}
        </MjmlText>
        {footnote && (
          <MjmlText cssClass="footer">
            Si tienes alguna sugerencia o pregunta sobre este correo,
            simplemente responde a este correo. ¡Nos encantaría escucharte!
            {/* If you have any feedback or questions about this email, simply reply
            to it. I'd love to hear from you! */}
          </MjmlText>
        )}
      </MjmlColumn>
    </MjmlSection>
  );
}
