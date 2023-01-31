import Link from "next/link";
import {
  Airplay,
  Chart,
  QR,
  Users,
  Link as LinkIcon,
  Photo,
} from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { useState } from "react";
import Accordion from "@/components/shared/accordion";
import { AnimatePresence, motion } from "framer-motion";
import { useLinkQRModal } from "../app/modals/link-qr-modal";
import { DEFAULT_LINK_PROPS } from "@/lib/constants";
import { useAddEditLinkModal } from "../app/modals/add-edit-link-modal";

const featureList = [
  {
    key: "analytics",
    title: "Análisis que importan",
    // title: "Analytics that matter",
    icon: <Chart className="h-5 w-5 text-gray-600" />,
    description:
      "CoreWave ofrece análisis poderosos para tus enlaces, incluida la geolocalización, el dispositivo, el navegador y la información del remitente.",
    // description:
    //   "CoreWave provides powerful analytics for your links, including geolocation, device, browser, and referrer information.",
    cta: (
      <Link
        href={{ pathname: "/", query: { key: "github" } }}
        as="/stats/github"
        shallow
        scroll={false}
        className="block max-w-fit rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
      >
        Ver demo
        {/* View demo */}
      </Link>
    ),
    demo: "https://d2vwwcvoksz7ty.cloudfront.net/analytics.mp4",
    thumbnail: "/_static/features/analytics.png",
  },
  {
    key: "domains",
    title: "Usa tu propio dominio",
    // title: "Use your own domain",
    icon: <Airplay className="h-5 w-5 text-gray-600" />,
    description:
      "CoreWave ofrece dominios personalizados gratuitos en todos los planes - ¡comienza a personalizar tus enlaces ahora!",
    // description:
    //   "CoreWave offers free custom domains on all plans - start personalizing your links today.",
    cta: (
      <a
        href="https://app.corewave.xyz"
        target="_blank"
        rel="noreferrer"
        className="block max-w-fit rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
      >
        Crea tu proyecto
        {/* Create your project */}
      </a>
    ),
    demo: "https://d2vwwcvoksz7ty.cloudfront.net/custom-domain.mp4",
  },
  {
    key: "link",
    title: "Poderoso generador de enlaces",
    // title: "Powerful link builder",
    icon: <LinkIcon className="h-5 w-5 text-gray-600" />,
    description:
      "Crea tus enlaces con parámetros UTM, protección por contraseña, fechas de vencimiento, iOS / Android targeting, etc.",
    // description:
    //   "Build your links with UTM parameters, password protection, expiration dates, iOS/Android targeting, etc.",
    cta: "Ver demo", //custom cta
    // cta: "View demo", //custom cta
    demo: "https://d2vwwcvoksz7ty.cloudfront.net/link.mp4",
  },
  {
    key: "social",
    title: "Tarjetas de redes sociales personalizadas",
    // title: "Custom social media cards",
    icon: <Photo className="h-5 w-5 text-gray-600" />,
    description:
      "Usa imágenes OG personalizadas en tus enlaces para que destaquen en las redes sociales.",
    // description:
    //   "Overlay custom OG images on your links to make them stand out on social media.",
    cta: "Ver demo", //custom cta
    // cta: "View demo", //custom cta
    demo: "https://d2vwwcvoksz7ty.cloudfront.net/og.mp4",
  },
  {
    key: "qr",
    title: "Generador de códigos QR gratuito",
    // title: "Free QR code generator",
    icon: <QR className="h-5 w-5 text-gray-600" />,
    description:
      "Los códigos QR y los enlaces cortos son como dos gotas de agua. Por eso hemos construido un generador de códigos QR directamente en CoreWave.",
    // description:
    //   "QR codes and short links are like peas in a pod. That's why we've built a QR code generator right into CoreWave.",
    cta: "Ver demo", //custom cta
    // cta: "View demo", //custom cta
    demo: "https://d2vwwcvoksz7ty.cloudfront.net/qr.mp4",
  },
  {
    key: "team",
    title: "Colabora con tu equipo",
    // title: "Collaborate with your team",
    icon: <Users className="h-5 w-5 text-gray-600" />,
    description:
      "Con CoreWave, puedes invitar a miembros ilimitados de tu equipo para colaborar en tu proyecto de forma gratuita - ¡no más compartir inicios de sesión a través de grupos de Google!",
    // description:
    //   "With CoreWave, you can invite unlimited team members to collaborate on your project for free - no more sharing logins via Google groups.",
    cta: (
      <a
        href="https://app.corewave.xyz"
        target="_blank"
        rel="noreferrer"
        className="block max-w-fit rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
      >
        Invita a tu equipo
        {/* Invite your teammates */}
      </a>
    ),
    demo: "https://d2vwwcvoksz7ty.cloudfront.net/team.mp4",
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const { setShowAddEditLinkModal, AddEditLinkModal } = useAddEditLinkModal({
    props: DEFAULT_LINK_PROPS,
    homepageDemo: true,
  });
  const { setShowLinkQRModal, LinkQRModal } = useLinkQRModal({
    props: {
      key: "github",
      url: "https://github.com/juancamiloqhz/dub",
    },
  });
  return (
    <div id="features">
      <AddEditLinkModal />
      <LinkQRModal />
      {featureList.map(({ key, demo }) => (
        // preload videos
        <link key={key} rel="preload" as="video" href={demo} />
      ))}
      <MaxWidthWrapper className="py-10">
        <div className="mx-auto max-w-md text-center sm:max-w-2xl">
          <h2 className="font-display text-4xl font-extrabold leading-tight text-black sm:text-5xl sm:leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Poderosas
              {/* Powerful */}
            </span>{" "}
            características para {/* features for{" "} */}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              equipos de marketing
              {/* modern */}
            </span>{" "}
            modernos
            {/* marketing teams */}
          </h2>
          <p className="mt-5 text-gray-600 sm:text-lg">
            CoreWave es más que un acortador de enlaces. Hemos construido una
            suite de características poderosas que te da superpoderes de
            marketing.
            {/* CoreWave is more than just a link shortener. We've built a suite of
            powerful features that gives you marketing superpowers. */}
          </p>
        </div>

        <div className="my-10 h-[840px] w-full overflow-hidden rounded-xl border border-gray-200 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur lg:h-[630px]">
          <div className="grid grid-cols-1 gap-10 p-5 lg:grid-cols-3">
            <Accordion
              items={featureList.map(
                ({ key, title, icon, description, cta }) => ({
                  trigger: (
                    <div className="flex items-center space-x-3 p-3">
                      {icon}
                      <h3 className="text-left text-base font-semibold text-gray-600">
                        {title}
                      </h3>
                    </div>
                  ),
                  content: (
                    <div className="p-3">
                      <p className="mb-4 text-sm text-gray-500">
                        {description}
                      </p>
                      {key === "link" || key === "social" ? (
                        <button
                          onClick={() => setShowAddEditLinkModal(true)}
                          className="block max-w-fit rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
                        >
                          Ver demo
                          {/* View demo */}
                        </button>
                      ) : key === "qr" ? (
                        <button
                          onClick={() => setShowLinkQRModal(true)}
                          className="block max-w-fit rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
                        >
                          Ver demo
                          {/* View demo */}
                        </button>
                      ) : (
                        cta
                      )}
                    </div>
                  ),
                }),
              )}
              activeTab={activeFeature}
              setActiveTab={setActiveFeature}
            />
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {featureList.map((feature, index) => {
                  if (index === activeFeature) {
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{
                          y: 10,
                          opacity: 0,
                        }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{
                          y: -10,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.15,
                          stiffness: 300,
                          damping: 30,
                        }}
                        className="relative min-h-[600px] w-full overflow-hidden whitespace-nowrap rounded-2xl bg-white shadow-2xl lg:mt-10 lg:w-[800px]"
                      >
                        <video
                          autoPlay
                          muted
                          loop
                          width={800}
                          height={600}
                          poster={feature.thumbnail}
                        >
                          <source src={feature.demo} type="video/mp4" />
                          Tu navegador no soporta el elemento video.
                          {/* Your browser does not support the video tag. */}
                        </video>
                      </motion.div>
                    );
                  }
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
