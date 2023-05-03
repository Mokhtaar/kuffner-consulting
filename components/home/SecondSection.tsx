import { ChevronRightIcon } from "@heroicons/react/24/outline";

const incentives = [
  {
    name: "Fehlende Struktur im Vertrieb & Unternehmen",
    imageSrc: "./3 Probleme Grafiken Consulting Page-2.gif",
    description:
      "62% aller Geschäftsführer geben an, dass sie keine klaren Vertriebsprozesse haben und die Neukundengewinnung „irgendwie zufällig passiert. 87% bestätigen, dass ihr Geschäft ohne sie als Geschäftsführer nicht lange funktionieren würde.",
  },
  {
    name: "Verschwendetes Marketingbudget",
    imageSrc: "./3 Probleme Grafiken Consulting Page-3.gif",
    description:
      "Über 60% der Unternehmen haben keine eindeutige und effektive Positionierung, um sich von der Konkurrenz abzuheben. Knapp 64% nutzen immer noch nicht die Möglichkeiten der heutigen, digitalen Zeit und verschwenden Geld in nicht funktionierendes “out-dated” Marketing.",
  },
  {
    name: "Erfolgloses Recruiting qualifizierter Mitarbeiter",
    imageSrc: "3 Probleme Grafiken Consulting Page-4.gif",
    description:
      "Über die Hälfte aller Unternehmer geben den Mangel an guten Mitarbeitern als sehr problematisch an. Auch die wirksame Führung, die Entwicklung von Leadership Qualitäten und einer attraktiven Unternehmenskultur ist ein großes Problem in heutigen Unternehmen.",
  },
];

export default function SecondSection() {
  return (
    <div className="mx-auto px-6 py-24 sm:px-6 lg:px-28">
      <div className="mx-auto max-w-xl text-[#0C224A] lg:max-w-none">
        <div className="flex items-center sm:justify-between">
          <h2 className="w-[90%] text-[25px] font-bold leading-[30.26px] tracking-tight sm:w-[40%] sm:text-[40px] sm:leading-[48.1px] ">
            Die 3 häufigsten Probleme von Unternehmern
          </h2>
          <button className="hidden items-center gap-x-2 rounded-md bg-[#0C224A] py-3 pl-4 pr-2 text-lg font-semibold leading-6 text-white hover:text-gray-300 lg:flex">
            <p>Erstgespräch vereinbaren</p>
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          {incentives.map((incentive) => (
            <div
              key={incentive.name}
              className=" space-y-4 rounded-lg bg-gray-100 px-4 pb-8 pt-4 sm:flex lg:block"
            >
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <img
                    className="mx-auto h-44 w-44"
                    src={incentive.imageSrc}
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-3 space-y-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-center text-[20px] font-bold sm:text-left sm:text-[25px] lg:w-72">
                  {incentive.name}
                </h3>
                <p className="mt-2 text-[14px] sm:text-[16px]">
                  {incentive.description}
                </p>
              </div>
            </div>
          ))}
          <div className="flex justify-center lg:hidden">
            <button className="flex items-center gap-x-2 rounded-md bg-[#0C224A] py-2 pl-4 pr-2 text-base font-semibold leading-6 text-white hover:text-gray-300 ">
              <p>Erstgespräch vereinbaren</p>
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
