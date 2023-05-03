import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const text1 = [
  {
    date: "2007 - 2010",
    title: "Bachelor-Studium Medienmanagement",
    description:
      "Andreas Küffner studierte mit Besten-Abschluss an der Macromedia in München und absolvierte parallel vielfache Praktika bei renommierten Unternehmen, wie Kentaro und Adidas als Sales & Marketing Manager.",
  },
  {
    date: "2012 - 2014",
    title: "Master in Marketing & Sales",
    description:
      "An der FOM für Ökonomie & Management absolvierte er seinen Master und schrieb seine Thesis über “Empfehlungsmarketing als Instrument für den signifikanten Vertriebserfolg”.",
  },
  {
    date: "2011 - 2014",
    title: "Consultant bei actori GmbH",
    description:
      "4 Jahre lernte und bewirkte Andreas bei der Spin-Off von Roland Berger seine ersten großen Erfolge. Sponsorings & Vermarktung, Consulting & Management.",
  },
];
const text2 = [
  {
    date: "2014 - 2017",
    title: "Rein ins Unternehmertum!",
    description:
      "Mit der S5 - Die Finanzpartner GmbH stieg Andreas Küffner in das Unternehmertum ein und skalierte die Firma in nur 3 Jahren an die Spitze der Finanzindustrie und wurde sogar 2016 zum Jungmakler des Jahres gekürt.",
  },
  {
    date: "2017 - 2019",
    title: "Es folgen weitere Erfolge...",
    description:
      "In den Folgejahren gründete er weitere Unternehmungen in verschiedenen Branchen und wandte sein erlerntes und erarbeitets Know-How kombiniert mit Netzwerk erfolgreich an. Zeitgleich fing er an, aktiv in Start-Ups zu investieren.",
  },
  {
    date: "2018 - heute",
    title: "Der Rekordkurs im Network Marketing",
    description:
      "In nur 4 Jahren gelang Andreas im Network Marketing das Scheinbar Unmögliche. Rekordumsätze in Millionen Höhe, über 30 Tausend Vertriebspartner weltweit und der Aufbau eines Teams, das den Award “Bestes Vertriebs-Team 2022” erhielt.",
  },
];
const text3 = [
  {
    date: "2020 - heute",
    title: "Die eigene In-House Medien Agentur",
    description:
      "Zusammen mit Clemens Kauschke gründete er die mittlerweile rennomierte Medienagentur NXT YOU, die sich in ihren Vorhaben auf Digitales Marketing, Content Creation, Social Media Consulting und Branding fokussiert.",
  },
  {
    date: "2021 - heute",
    title: "Gründung der KÜFFNER Group",
    description:
      "Nun bündelt Andreas in seiner Unternehmensgruppe all seine Kompetenzen, Erfahrungen und Firmen rund um die Themen Investments, Consultings, Coachings, Agentur-Produktionen und Sportvermarktungen - aus Vision wurde Realität.",
  },
];

const ThirdSection = () => {
  return (
    <div className="px-10 py-24">
      <div className="mx-auto h-screen overflow-y-auto rounded-[30px] bg-[#0C224A]">
        <div className="px-4 py-24 sm:px-6 lg:px-24">
          <div className="flex justify-between">
            <div className="grid w-full gap-y-44">
              {/*first section*/}
              <div className="flex-col justify-between space-y-11 sm:flex  sm:flex-row">
                <div>
                  <div className="mb-16 hidden text-white sm:block">
                    <h4 className="text-2xl font-semibold leading-8">
                      Vom Unternehmer - Für Unternehmer
                    </h4>
                    <h1 className="text-[45px] font-bold leading-[56.71px]">
                      Über Andreas Küffner
                    </h1>
                  </div>
                  <div
                    className="h-[360px] w-[490px] rounded-[15px]"
                    style={{
                      backgroundImage: `url("Rectangle 331.jpg")`,
                      // backgroundPosition: "50% 20%",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className="mt-1 hidden items-center sm:flex">
                    <img
                      src="Design ohne Titel-59 1.png"
                      className="mt-4 h-16 w-16"
                    ></img>
                    <p className="ml-3 cursor-pointer text-sm font-medium text-white underline">
                      mehr über Andreas Küffner
                    </p>
                    <ArrowTopRightOnSquareIcon className="ml-2 h-6 w-6 cursor-pointer text-white" />
                  </div>
                </div>
                <div>
                  <div className="mt-2 max-w-[455px] space-y-12">
                    {text1.map((paragraph) => (
                      <div key={paragraph.title}>
                        <p className="inline-block rounded-[5px] bg-white px-3 py-1 text-sm font-semibold sm:text-xl">
                          {paragraph.date}
                        </p>
                        <h1 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                          {paragraph.title}
                        </h1>
                        <p className="mt-4 text-sm font-normal text-white sm:text-base">
                          {paragraph.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/*second section*/}
              <div className="flex-col justify-between space-y-11 sm:flex sm:flex-row">
                <div>
                  <div className="mb-16 hidden text-white sm:block">
                    <h4 className="text-2xl font-semibold leading-8">
                      Aus der Praxis - Für die Praxis
                    </h4>
                    <h1 className="text-[45px] font-bold leading-[56.71px]">
                      Über Andreas Küffner
                    </h1>
                  </div>
                  <div
                    className="h-[360px] w-[490px] rounded-[15px]"
                    style={{
                      backgroundImage: `url("Rectangle 556.jpg")`,
                      backgroundPosition: "50% 25%",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className="mt-1 hidden items-center sm:flex">
                    <img
                      src="Design ohne Titel-59 1.png"
                      className="mt-4 h-16 w-16"
                    ></img>
                    <p className="ml-3 cursor-pointer text-sm font-medium text-white underline">
                      mehr über Andreas Küffner
                    </p>
                    <ArrowTopRightOnSquareIcon className="ml-2 h-6 w-6 cursor-pointer text-white" />
                  </div>
                </div>
                <div>
                  <div className="mt-2 max-w-[455px] space-y-12">
                    {text2.map((paragraph) => (
                      <div key={paragraph.title}>
                        <p className="inline-block rounded-[5px] bg-white px-3 py-1 text-sm font-semibold sm:text-xl">
                          {paragraph.date}
                        </p>
                        <h1 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                          {paragraph.title}
                        </h1>
                        <p className="mt-4 text-sm font-normal text-white sm:text-base">
                          {paragraph.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/*third section*/}
              <div className="flex-col justify-between space-y-11 sm:flex sm:flex-row">
                <div>
                  <div className="mb-16 hidden text-white sm:block">
                    <h4 className="text-2xl font-semibold leading-8">
                      Aus der Praxis - Für die Praxis
                    </h4>
                    <h1 className="text-[45px] font-bold leading-[56.71px]">
                      Über Andreas Küffner
                    </h1>
                  </div>
                  <div
                    className="h-[360px] w-[490px] rounded-[15px]"
                    style={{
                      backgroundImage: `url("f.jpeg")`,
                      backgroundPosition: "50% 20%",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className="mt-1 hidden items-center sm:flex">
                    <img
                      src="Design ohne Titel-59 1.png"
                      className="mt-4 h-16 w-16"
                    ></img>
                    <p className="ml-3 cursor-pointer text-sm font-medium text-white underline">
                      mehr über Andreas Küffner
                    </p>
                    <ArrowTopRightOnSquareIcon className="ml-2 h-6 w-6 cursor-pointer text-white" />
                  </div>
                </div>
                <div>
                  <div className="mt-2 max-w-[455px] space-y-12">
                    {text3.map((paragraph) => (
                      <div key={paragraph.title}>
                        <p className="inline-block rounded-[5px] bg-white px-3 py-1 text-sm font-semibold sm:text-xl">
                          {paragraph.date}
                        </p>
                        <h1 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                          {paragraph.title}
                        </h1>
                        <p className="mt-4 text-sm font-normal text-white sm:text-base">
                          {paragraph.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
