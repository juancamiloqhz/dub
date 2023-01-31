import { default as BelatedWelcomeEmail } from "../BelatedWelcome";
import { default as FeatureUpdatesEmail } from "../FeatureUpdates";

export function BelatedWelcome() {
  return (
    <BelatedWelcomeEmail domains={["https://vibra.la", "https://google.com"]} />
    // <BelatedWelcomeEmail />
  );
}

export function FeatureUpdates() {
  return <FeatureUpdatesEmail />;
}
