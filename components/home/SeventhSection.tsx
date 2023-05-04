import { ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";

const services = [
  {
    title: "1:1 Consulting",
    description:
      "Persönlich mit dir werden wir an deinem individuellen Unternehmen arbeiten.",
    icon: "./s1.png",
  },
  {
    title: "Keynote-Speeches",
    description:
      "Packende Keynotes von Andreas Küffner zu verschiedenen Themen für dein Team!",
    icon: "./s2.png",
  },
  {
    title: "Growth Circle Mentoring",
    description:
      "Exklusives Mentoring über einen längeren Zeitraum 1:1 mit Andreas Küffner.",
    icon: "./s3.png",
  },
  {
    title: "Workshops",
    description:
      "Wir zeigen Dir im Detail, wie Du Dein Geschäft skalierst und automatisierst. Für mehr Zeit, Umsatz & Gewinn.",
    icon: "./s4.png",
  },
  {
    title: "Events & Masterminds",
    description:
      "In kleinen Gruppen verantalten wir regelmäßige exklusive Roundtable-Treffen und Mastermind-Reisen. ",
    icon: "./s5.png",
  },
  {
    title: "Technische Umsetzung",
    description:
      "Auf Wunsch setzen wir den gesamten Prozess für dich um, damit du den Fokus auf dein Tagesgeschäft setzen kannst.",
    icon: "./s6.png",
  },
];

const SeventhSection = () => {
  return (
    <div className="mx-auto mb-32 max-w-7xl px-6 text-[#0C224A] sm:mt-16 lg:px-20">
      <div>
        <p className="text-base font-semibold leading-5 sm:text-lg sm:leading-6">
          Mentoring mit Resultaten
        </p>
        <div className="flex justify-between">
          <div className="w-full sm:max-w-2xl">
            <p className="mt-2 text-2xl font-bold leading-[30.26px] tracking-tight sm:mt-0 sm:text-[40px] sm:leading-[48.41px]">
              Echte Ergebnisse durch erfolgs- und erfahrungsbasiertes Consulting
            </p>
          </div>
          <div className="">
            <button className="mt-12 hidden items-center gap-x-2 rounded-md bg-[#0C224A] py-3 pl-5 pr-3 text-lg font-semibold leading-5 text-white hover:text-gray-300 sm:mt-0 md:flex md:text-lg">
              <p>Erstgespräch vereinbaren</p>
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium leading-4 sm:w-[576px] sm:text-base sm:leading-5">
              Wachstum ist planbar. Doch dafür brauchst du die richtigen
              Strategien. Und die funktionieren in jeder Branche. Mit unseren
              Proof-Of-Concept Bluprints setzt du auf der Stelle das um, was du
              in regelmäßigen Mentorings mit uns lernst. Wir begleiten Dich, bis
              Deine Ziele erreicht wurden.
            </p>
            <p className="mt-8 text-sm font-medium leading-4  sm:w-[576px] sm:text-base sm:leading-5">
              Andreas Küffner selbst kommt aus dem Consulting gepaart mit
              Praxiserfahrung aus den letzten 10 Jahren Unternehmertum mit
              mehrfachen Rekord-Erfolgen in verschiedenen Branchen. Unser
              professionelles Berater-Team besteht mittlerweile aus über 7
              Experten. Sie eröffnen dir völlig neue Perspektiven, andere
              Blickwinkel und zeigen dir individuelle und innovative
              Lösungsansätze auf. Sie kennen die Theorien, können sie umsetzen
              und begleiten dich dabei, es selbst zu tun.
            </p>
            <div className="mt-16 hidden gap-x-10 pb-3 sm:flex">
              <img
                className="h-[40px] w-[271px] object-fill"
                src="./Peoplekueffner.png"
                alt="Image"
              />
            </div>
          </div>
          <div>
            <img
              src="./imac 1.png"
              className="mt-8 h-[216px] max-w-[515px] object-cover sm:mt-0 sm:h-[328px]"
            ></img>
            <img
              className="mt-5 h-[31px] w-[207px] object-fill md:hidden"
              src="./Peoplekueffner.png"
              alt="Image"
            />
            <button className="mt-20 flex items-center justify-center gap-x-2 rounded-md bg-[#0C224A] py-3 pl-5 pr-3 text-base font-semibold leading-5 text-white hover:text-gray-300 sm:mt-0 md:hidden md:text-lg">
              <p>Erstgespräch vereinbaren</p>
              <ChevronRightIcon className="mt-[3px] h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-24 space-y-11 sm:mt-20 sm:grid sm:grid-cols-3 sm:gap-x-12 sm:gap-y-24 sm:space-y-0">
        {services.map((service) => (
          <div key={service.title}>
            <div>
              <img
                src={service.icon}
                className="h-10 w-10 object-contain"
              ></img>
            </div>
            <div className="mt-4 sm:mt-7">
              <h3 className="text-lg font-semibold leading-5 sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 text-left text-sm font-medium leading-4 sm:mt-4 sm:max-w-sm sm:text-base sm:leading-5">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeventhSection;
