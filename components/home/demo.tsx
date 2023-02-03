import { useState } from "react";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import LinkCard from "@/components/home/link-card";
import PlaceholderCard from "@/components/home/placeholder-card";
import { Link, LoadingDots } from "@/components/shared/icons";
import Tooltip, { TooltipContent } from "@/components/shared/tooltip";
import { FRAMER_MOTION_LIST_ITEM_VARIANTS } from "@/lib/constants";
import useLocalStorage from "@/lib/hooks/use-local-storage";
import { SimpleLinkProps } from "@/lib/types";

const Demo = () => {
  const [saving, setSaving] = useState(false);
  const [url, setUrl] = useState("");
  const [hashes, setHashes] = useLocalStorage<SimpleLinkProps[]>("hashes", []);
  const [showDefaultLink, setShowDefaultLink] = useState(true);

  return (
    <div className="mx-auto w-full max-w-lg px-2.5 sm:px-0">
      <Toaster />
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setSaving(true);
          fetch(`/api/edge/links?url=${encodeURIComponent(url)}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async (response) => {
            setSaving(false);
            if (response.ok) {
              const json = await response.json();
              setHashes([...hashes, json]);
              setUrl("");
            }
          });
        }}
      >
        {hashes.length >= 3 ? (
          <Tooltip
            content={
              <TooltipContent
                //   title="Maximum number of links reached. Swipe to delete existing links or
                // create a free account."
                //   cta="Start For Free"
                title="Número máximo de enlaces alcanzado. Desliza para eliminar enlaces existentes o
                crea una cuenta gratuita."
                cta="Comienza Gratis"
                ctaLink="https://app.corewave.xyz/register"
              />
            }
          >
            <div className="relative flex w-full items-center">
              <div className="block w-full rounded-md border border-gray-200 bg-white p-3 pl-3 pr-12 text-sm text-gray-400 shadow-lg focus:border-black">
                {/* Shorten your link */}
                Acorta tu enlace
              </div>
              <div className="absolute inset-y-0 right-0 top-1/2 mr-1.5 flex w-10 -translate-y-1/2 cursor-not-allowed items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400">
                <p>↵</p>
              </div>
            </div>
          </Tooltip>
        ) : (
          <div className="relative flex items-center">
            <Link className="absolute inset-y-0 left-0 top-1/2 ml-3 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="url"
              // placeholder="Shorten your link"
              placeholder="Acorta tu enlace"
              value={url}
              onInput={(e) => {
                setUrl((e.target as HTMLInputElement).value);
              }}
              required
              className="peer block w-full rounded-md border border-gray-200 bg-white p-3 pl-10 pr-12 text-sm shadow-lg focus:border-black focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              disabled={saving}
              className={`${
                saving
                  ? "cursor-not-allowed"
                  : "hover:border-gray-700 hover:text-gray-700 peer-focus:border-gray-700 peer-focus:text-gray-700"
              } absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400`}
            >
              {saving ? <LoadingDots color="#e5e7eb" /> : <p>↵</p>}
            </button>
          </div>
        )}
      </form>

      <motion.ul
        key={hashes.length + 1} // workaround for https://github.com/framer/motion/issues/776, add 1 to account for the demo GH link
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="mt-3 grid gap-2"
      >
        {showDefaultLink && (
          <LinkCard
            key="lanzamiento"
            _key="lanzamiento"
            url="https://corewave.xyz/lanzamiento"
            hashes={hashes}
            setHashes={setHashes}
            setShowDefaultLink={setShowDefaultLink}
          />
        )}
        {hashes.map(({ key, url }) => (
          <LinkCard
            key={key}
            _key={key}
            url={url}
            hashes={hashes}
            setHashes={setHashes}
          />
        ))}
        {Array.from({
          length: showDefaultLink ? 3 - hashes.length : 4 - hashes.length,
        }).map((_, i) => (
          <PlaceholderCard key={i} />
        ))}
        <motion.li
          variants={FRAMER_MOTION_LIST_ITEM_VARIANTS}
          className="rounded-md border border-gray-200 bg-white p-3 text-sm text-gray-500 shadow-lg"
        >
          {/* Note: Public links will be automatically-deleted after 30 minutes.{" "} */}
          Nota: los enlaces públicos se eliminarán automáticamente después de 30
          minutos.{" "}
          <a
            href="https://app.corewave.xyz/register"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-gray-700 underline transition-all hover:text-black"
          >
            {/* Create a free account */}
            Crea una cuenta gratuita
          </a>{" "}
          {/* to keep your links forever. */}
          para mantener tus enlaces para siempre.
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Demo;
