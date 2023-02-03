import Background from "@/components/shared/background";
import HomeLayout from "@/components/layout/home";

export default function IntroducingCorewave() {
  return (
    <HomeLayout
      meta={{
        title:
          "Presentamos CoreWave - Gestión de enlaces para equipos de marketing modernos",
        description:
          "CoreWave es una plataforma de gestión de enlaces para equipos de marketing modernos. Crea, gestiona y analiza tus enlaces de forma sencilla y eficiente.",
      }}
    >
      <div className="z-10 flex flex-col items-center justify-center">
        <h1 className="bg-gradient-to-r from-[#C7BF00] to-[#E43838] bg-clip-text text-7xl font-extrabold text-transparent">
          Presentamos CoreWave
        </h1>
        <p className="text-3xl">Página en construcción</p>
      </div>
      <Background />
    </HomeLayout>
  );
}
