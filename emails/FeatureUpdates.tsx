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
          <Header title="New Features from CoreWave" />
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
                Happy Wednesday! Here are some of the{" "}
                <a
                  href="https://twitter.com/juancamiloqhz/status/1587828901174284288"
                  target="_blank"
                >
                  new features
                </a>{" "}
                that were recently added to CoreWave:
              </MjmlText>
              <Divider bottomPadding />
              <MjmlText cssClass="subtitle">1. Links with superpowers</MjmlText>

              <MjmlText cssClass="paragraph">
                With CoreWave, you can create links with:
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Custom social previews (OG tags)
              </MjmlText>
              <MjmlText cssClass="li">•&nbsp;&nbsp;UTM parameters</MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Password-protection
              </MjmlText>
              <MjmlText cssClass="li">•&nbsp;&nbsp;Expiration dates</MjmlText>
              <MjmlText cssClass="paragraph">
                See{" "}
                <a href="https://corewave.xyz#features" target="_blank">
                  how this works
                </a>
                .
              </MjmlText>

              <Divider bottomPadding />
              <MjmlText cssClass="subtitle">
                2. Use your own custom domain
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Most link shorteners like Bitly charge a minimum of $29/mo for
                you to use your own domain for your short links.
              </MjmlText>
              <MjmlText cssClass="paragraph">
                With CoreWave, you can do that for $0/mo.
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Start{" "}
                <a href="https://app.corewave.xyz" target="_blank">
                  shortening your links
                </a>{" "}
                with your own domain.
              </MjmlText>

              <Divider bottomPadding />
              <MjmlText cssClass="subtitle">3. Analytics that matter</MjmlText>
              <MjmlText cssClass="paragraph">
                CoreWave provides powerful analytics for your links:
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Geolocation (country, city)
              </MjmlText>
              <MjmlText cssClass="li">•&nbsp;&nbsp;Device type</MjmlText>
              <MjmlText cssClass="li">•&nbsp;&nbsp;Browser type</MjmlText>
              <MjmlText cssClass="li">•&nbsp;&nbsp;OS type</MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Referrer websites (Twitter, LinkedIn)
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Check out a live demo{" "}
                <a href="https://corewave.xyz/stats/github" target="_blank">
                  here
                </a>
                .
              </MjmlText>

              <Divider bottomPadding />
              <MjmlText cssClass="subtitle">4. Free QR code generator</MjmlText>
              <MjmlText cssClass="paragraph">
                CoreWave allows you to generate QR codes of your short links for
                free.
              </MjmlText>
              <MjmlText cssClass="paragraph">
                Even if you exceed your clicks limit (1K/mo for the free plan),
                your QR codes will continue to work (you just need to upgrade to
                see the stats).
              </MjmlText>
              <MjmlText cssClass="paragraph">
                No more worrying about broken QR codes.
              </MjmlText>

              <Divider bottomPadding />
              <MjmlText cssClass="subtitle">
                5. Collaborate with your team
              </MjmlText>

              <MjmlText cssClass="paragraph">
                We recently added a new "team invites" feature that allows you
                to invite your friends & teammates to your CoreWave project.
              </MjmlText>
              <MjmlText cssClass="paragraph">
                With CoreWave, you get unlimited team invites for every project
                – no more sharing logins via Google groups.
              </MjmlText>

              <Divider bottomPadding />
              <MjmlText cssClass="paragraph">
                In case you missed it, we also revamped our pricing model and
                made it more affordable for everyone. You can read more about it{" "}
                <a
                  href="https://twitter.com/corewave/status/1579466952594292737"
                  target="_blank"
                >
                  here
                </a>
                .
              </MjmlText>
              <MjmlText cssClass="paragraph" color={grayDark}>
                Juan from CoreWave
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
