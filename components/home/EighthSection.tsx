import { ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";
const list = [
  {
    title: "Schritt 1 von 3",
    subtitle: "Kostenfreies Erstgespräch vereinbaren",
    description:
      "Fülle hier auf der Seite das Bewerbungsformular aus und buche dir anschließend direkt ein kostenfreies Gespräch mit einem unserer Experten oder Berater.",
    imageSrc: "./scroll1.png",
  },
  {
    title: "Schritt 2 von 3",
    subtitle: "Deine Erstanalyse ",
    description:
      "Im 30-minütigen, kostenfreien Beratungsgespräch sprechen wir über deine aktuelle Situation als Unternehmer und durchgehen eine Erstanalyse deines Unternehmens, um Schwachstellen und Optimierungsbedarf zu identifizieren.",
    imageSrc: "./scroll2.png",
  },
  {
    title: "Schritt 3 von 3",
    subtitle: "Unsere Zusammenarbeit (vor Ort & online)",
    description:
      "Sollte es zwischenmenschlich und kapazitär zwischen uns passen, so hast du die Möglichkeit, dich für unsere individuelle und maßgeschneiderte Begleitung zu bewerben.",
    imageSrc: "./scroll3.png",
  },
];

const EighthSection = () => {
  return (
    <div className="mx-auto mb-32 max-w-7xl px-6 text-[#0C224A] sm:pt-24 lg:px-20">
      <div>
        <div className="flex justify-between">
          <div className="w-full sm:max-w-2xl">
            <p className="text-2xl font-bold leading-[30.26px] tracking-tight sm:mt-0 sm:text-[40px] sm:leading-[48.41px]">
              Werde vom Selbstständigen zum Unternehmer.
            </p>
          </div>
          <div>
            <button className="mt-12 hidden items-center gap-x-2 rounded-md bg-[#0C224A] py-3 pl-5 pr-3 text-lg font-semibold leading-5 text-white hover:text-gray-300 sm:mt-0 md:flex md:text-lg">
              <p>Erstgespräch vereinbaren</p>
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
        <p className="mt-3 text-base font-semibold leading-5 sm:mt-5 sm:text-lg sm:leading-6">
          In 3 Schritten zu einer erfolgreichen Zusammenarbeit.
        </p>
      </div>
      <div className="mt-3 flex-col justify-between sm:flex sm:flex-row sm:space-y-0">
        <div className="w-full">
          {list.map((item) => (
            <div
              key={item.title}
              className="mt-12 flex flex-col space-y-9 sm:mt-16 sm:flex sm:flex-row sm:items-center sm:justify-between sm:space-y-9"
            >
              <div
                className="order-last sm:order-first sm:max-w-md"
                key={item.title}
              >
                <h1 className="mt-8 text-base font-normal leading-5 sm:mt-0">
                  {item.title}
                </h1>
                <h1 className="mt-3 text-xl font-bold leading-6 sm:text-2xl">
                  {item.subtitle}
                </h1>
                <p className="mt-3 text-sm font-normal leading-4 sm:mt-5 sm:text-base sm:leading-5">
                  {item.description}
                </p>
              </div>
              <div className="h-[230px] max-w-[633px]  sm:h-[332px]">
                <img
                  src={item.imageSrc}
                  className="h-full rounded-2xl object-cover"
                ></img>
              </div>
            </div>
          ))}
          <div>
            <button className="mt-12 flex items-center gap-x-2 rounded-md bg-[#0C224A] py-3 pl-5 pr-3 text-lg font-semibold leading-5 text-white hover:text-gray-300 sm:mt-0 md:hidden md:text-lg">
              <p>Erstgespräch vereinbaren</p>
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EighthSection;
