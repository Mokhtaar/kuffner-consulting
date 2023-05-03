import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const Features = [
  {
    name: "Messbare Erfolge erzielen",
    href: "#",
  },
  {
    name: "Stetiges Wachstum generieren",
    href: "#",
  },
  {
    name: "Zum echten Unternehmer werden",
    href: "#",
  },
];
const FourthSection = () => {
  return (
    <div className="mx-auto mb-32 max-w-7xl px-6 sm:mt-32 lg:px-8">
      <div className="justify-between gap-x-4 space-y-16 text-[#0C224A] sm:flex sm:space-y-0">
        <div>
          <div>
            <p className="w-[220px] text-2xl font-bold leading-7 tracking-tight sm:w-[500px] sm:text-4xl sm:text-[40px] sm:leading-[48.41px]">
              Die Küffner Formel <br /> 5 Hebel für 60% mehr Umsatz
            </p>
            <p className="mt-2 text-sm font-semibold sm:text-lg sm:leading-6">
              Keep it simpel, überlasse deinen Erfolg nicht dem Zufall!
            </p>
            <p className="mt-16 w-[328px] text-sm font-medium leading-4 sm:w-[511px] sm:text-base sm:leading-5">
              5 einfache Hebel sorgen für planbares und nachhaltiges
              Unternehmenswachstum, massiver Umsatzsteigerung und deutlich mehr
              Gewinn bei weniger eigenem Stress und reibungsloseren Abläufen. Am
              Ende bleibt: Mehr Geld + mehr Zeit für die wesentlichen Dinge des
              Lebens.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:max-w-none lg:grid-cols-1">
              {Features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <div className="flex items-center gap-x-5 text-base font-bold leading-5 underline ">
                    <img
                      className="h-5 w-5 flex-none object-cover "
                      src="./vector.png"
                    />
                    {feature.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-28 hidden gap-x-10 sm:flex">
            <img
              className="h-[16.68px] w-[84.13px] object-cover"
              src="path3953.png"
              alt="Image"
            />
            <img
              src="Vector (1).png"
              className="h-[20.9px] w-[77px] object-cover"
              alt="Image"
            />
            <img
              src="Group 36.png"
              className="h-[19.86px] w-[177.68px] object-cover"
              alt="Image"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-between sm:flex-col sm:items-end">
          <button className="mt-12 flex items-center gap-x-2 rounded-md bg-[#0C224A] py-3 pl-5 pr-3 text-sm font-semibold text-white hover:text-gray-300 sm:mt-0">
            <p>Erstgespräch vereinbaren</p>
            <ChevronRightIcon className="h-4 w-4" />
          </button>
          <img src="./Group 170.png"></img>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
