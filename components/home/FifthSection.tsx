"use client";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { PlusSmallIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Ziel: Mehr Interessenten",
    subtitle: "Glasklare Positionierung",
    description:
      "Wir entwickeln deine individuelle Strategie, deinen Stellenwert im Markt und kreieren ein Branding, das deine Zielgruppe lieben wird.",
    icon: "./c1.svg",
  },
  {
    title: "Ziel: Mehr Interessenten",
    subtitle: "Durchdachtes Marketing",
    description:
      "Wir bringen dein Unternehmen und deine Marke durch effektive Marketingmaßnahmen in die heutige Sichtbarkeit.",
    icon: "./c2.svg",
  },
  {
    title: "Ziel: Mehr Verkäufe",
    subtitle: "Strukturierter Vertriebsprozess",
    description:
      "Gemeinsam bauen wir einen gut strukturierten Vertriebsprozess auf, damit du Neukunden überhaupt bedienen kannst.",
    icon: "./c3.svg",
  },
  {
    title: "Ziel: Mehr Verkäufe",
    subtitle: "(Digitale) Neu-kundengewinnung",
    description:
      "Wir erarbeiten funktionierende Strategien, um nun nicht nur mehr Interessenten zu generieren, sondern vor allem abzuschließen.",
    icon: "./c4.svg",
  },
  {
    title: "Ziel: Höhere Gewinne",
    subtitle: "Funktionierende Prozesse & Systeme",
    description:
      "Wir etablieren in deinem Unternehmen Systeme, die wiederkehrende Abläufe automatisieren und Prozesse vereinfachen.",
    icon: "./c5.svg",
  },
  {
    title: "Ziel: Höhere Gewinne",
    subtitle: "Umfassende Digitalisierung",
    description:
      "Wir arbeiten gemeinsam daran, dein Unternehmen in die heutige Zeit zu bringen und dadurch wettbewerbsfähig zu machen.",
    icon: "./c6.svg",
  },

  {
    title: "Ziel: Mehr Freiheit",
    subtitle: "Die besten Mitarbeiter",
    description:
      "Wir implementieren Proof-Of-Concept Lösungen, sodass sich Traum-Mitarbeiter bei dir proaktiv bewerben.",
    icon: "./c7.svg",
  },
  {
    title: "Ziel: Mehr Freiheit",
    subtitle: "Exzellentes Leadership",
    description:
      "Wir bringen dich als Leader dazu, charismatisch deine Mitarbeiter zu führen und eine starke Unternehmenskultur aufzubauen.",
    icon: "./c8.svg",
  },
];

const FifthSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  console.log(isOpen, currentCard);
  return (
    <div className="mx-auto px-2 pb-24 sm:px-10 sm:pb-0 md:py-24">
      <div className="grid-cols-1 gap-x-4 space-y-16 rounded-[30px] bg-[#0C224A] py-10 sm:grid sm:grid-cols-3 sm:space-y-0 sm:p-20 md:py-24">
        <div className="mx-auto w-72 text-center md:text-left">
          <p className="mt-2 text-base font-medium leading-[20px] text-white sm:text-xl sm:leading-6">
            Einblicke in die Beratung
          </p>
          <p className=" text-2xl font-bold leading-7 tracking-tight text-white sm:text-[40px] sm:leading-[45.81px]">
            Wo wir konkret anpacken
          </p>
          <div className="mt-16">
            <button className="text-md hidden items-center gap-x-2 rounded-md bg-white py-3 pl-5 pr-3 font-semibold text-[#0C224A] hover:text-gray-600 sm:mt-0 sm:flex">
              <p>Erstgespräch vereinbaren</p>
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid gap-y-4 sm:grid-cols-2">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="relative mx-auto w-[328px] space-y-4 rounded-2xl bg-white p-5 text-[#0C224A] md:h-[230px] md:w-[355px] md:px-8"
              >
                <div className="flex items-center justify-between md:items-stretch">
                  <div className="mt-1">
                    <h3 className="hidden rounded-md bg-[#0C224A] px-2 py-1 text-sm font-semibold text-white shadow-2xl sm:inline-block">
                      {card.title}
                    </h3>
                    <div className="flex items-center justify-center gap-x-3">
                      <img
                        className="h-6 w-6 md:hidden"
                        src={card.icon}
                        alt="Image"
                      />
                      <h1 className="text-left text-base font-bold leading-5 sm:text-[25px] sm:leading-[30px] md:mt-5">
                        {card.subtitle}
                      </h1>
                    </div>
                  </div>
                  <div className="">
                    <img
                      className="mb-4 hidden h-6 w-6 sm:h-[54px] sm:w-[54px] md:block"
                      src={card.icon}
                      alt="Image"
                    />
                    {isOpen && currentCard === idx ? (
                      <XMarkIcon
                        className="h-3 w-3 text-[#0D1A2C]"
                        onClick={() => {
                          setIsOpen(!isOpen);
                        }}
                      />
                    ) : (
                      <PlusSmallIcon
                        className="block h-3 w-3 text-[#0D1A2C] md:hidden"
                        onClick={() => {
                          setIsOpen(!isOpen);
                          setCurrentCard(idx);
                        }}
                      />
                    )}
                  </div>
                </div>
                {isOpen && currentCard === idx ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <p className="block text-sm font-normal leading-4 md:hidden">
                      {card.description}
                    </p>
                    <h3 className="inline-block rounded-md bg-[#0C224A] px-2 py-1 text-sm font-semibold text-white shadow-2xl">
                      {card.title}
                    </h3>
                  </motion.div>
                ) : null}
                <p className="hidden text-sm font-normal leading-4 md:block">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
