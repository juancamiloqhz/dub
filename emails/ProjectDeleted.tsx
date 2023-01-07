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
          <Header title="Project Deleted" />
          <MjmlSection cssClass="smooth">
            <MjmlColumn>
              <MjmlText cssClass="paragraph">Hey there!</MjmlText>
              <MjmlText cssClass="paragraph">
                Just wanted to let you know that your domain{" "}
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
                for your CoreWave project{" "}
                <a
                  href={`https://app.corewave.xyz/${projectSlug}`}
                  target="_blank"
                >
                  {projectSlug}↗
                </a>{" "}
                has been invalid for 30 days. As a result, your project has been
                deleted from CoreWave.
              </MjmlText>
              <MjmlText cssClass="paragraph">
                If you would like to restore the project, you can easily create
                it again on CoreWave with the link below.
              </MjmlText>
              <ButtonPrimary
                link={`https://app.corewave.xyz/`}
                uiText="Create a new project"
              />
              <MjmlText cssClass="paragraph">
                If you did not want to keep this project on CoreWave anyway, you
                can simply ignore this email.
              </MjmlText>
              <MjmlText cssClass="paragraph" color={grayDark}>
                Juan from CoreWave
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
