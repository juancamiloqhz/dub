import Link from "next/link";
import { Github, Twitter } from "@/components/shared/icons";

const Hero = () => {
  return (
    <div className="mx-auto mt-20 mb-10 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0">
      <a
        // href="https://corewave.xyz/launch"
        href="https://corewave.xyz/lanzamiento"
        target="_blank"
        rel="noreferrer"
        className="mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-all hover:bg-blue-200"
      >
        <Twitter className="h-5 w-5 text-[#1d9bf0]" />
        <p className="text-sm font-semibold text-[#1d9bf0]">
          Presentamos CoreWave
          {/* Introducing CoreWave */}
        </p>
      </a>

      <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
        {/* Short Links With */}
        Enlaces con
        <br />
        <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
          {/* Superpowers */}
          Superpoderes
        </span>
      </h1>
      <h2 className="mt-5 text-lg text-gray-600 sm:text-xl">
        CoreWave es una herramienta de administración de enlaces para equipos de
        marketing modernos. <br /> Crea, comparte y rastrea tus enlaces.
        {/* CoreWave is an open-source link management tool for modern marketing
        teams to create, share, and track short links. */}
      </h2>

      <div className="mx-auto mt-10 flex max-w-fit space-x-4">
        <Link
          href="https://app.corewave.xyz/register"
          className="rounded-full border border-black bg-black py-2 px-5 text-sm text-white shadow-lg transition-all hover:bg-white hover:text-black"
        >
          {/* Start For Free */}
          Comienza Gratis
        </Link>
        <Link
          href="/como-funciona"
          className="flex items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white py-2 px-5 shadow-lg transition-all hover:border-gray-800"
        >
          <p className="text-sm">¿Cómo funciona?</p>
        </Link>
        {/* <a
          className="flex items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white py-2 px-5 shadow-lg transition-all hover:border-gray-800"
          href="https://corewave.xyz/github"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="h-5 w-5 text-black" />
          <p className="text-sm">Star on GitHub</p>
        </a> */}
      </div>
    </div>
  );
};

export default Hero;
