"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Über", href: "#" },
  { name: "Beratung", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Leistungen", href: "#" },
  { name: "Mentoring", href: "#" },
  { name: "Events", href: "#" },
  { name: "Keynotes", href: "#" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50 ">
        <nav
          className="flex items-center justify-between p-6 lg:px-28"
          aria-label="Global"
        >
          <div className="flex text-center text-white lg:flex-1">
            <a href="#">
              <h1 className="text-2xl font-extrabold leading-none sm:text-3xl">
                KÜFFNER.
              </h1>
              <h1 className="text-[8px] font-medium tracking-[.17em] sm:text-[10px]">
                CONSULTING
              </h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-x-7">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white hover:text-gray-200"
              >
                {item.name}
              </a>
            ))}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button className="flex items-center gap-x-2 rounded-md bg-[#0C224A] py-2 pl-4 pr-2 text-sm font-semibold leading-6 text-white shadow-2xl hover:text-gray-300">
                <p>Erstgespräch vereinbaren</p>
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex justify-between">
              <a
                href="#"
                className="-m-1.5 mb-8 p-1.5 text-center text-[#0C224A]"
              >
                <a href="#">
                  <h1 className="text-2xl font-extrabold leading-none">
                    KÜFFNER.
                  </h1>
                  <h1 className="text-[8px] font-medium tracking-[.17em]">
                    CONSULTING
                  </h1>
                </a>
              </a>
              <button
                type="button"
                className="-m-2.5 mb-6 rounded-md p-2.5 text-gray-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-3xl font-bold text-[#0C224A] hover:text-gray-400"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="pt-6 text-xs font-semibold text-[#0C224A]">
                  <p className="mb-4 w-52">
                    Küffner consulting ist eine Marke der
                    <span className="ml-[4px] underline">Küffner Group</span>
                  </p>
                  <p className="w-48 ">
                    © 2023 COPYRIGHT. <br /> IMPRESSUM DATENSCHUTZ
                  </p>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate pt-14">
        <div className="absolute inset-0 -z-10">
          <picture className="h-screen">
            <source media="(min-width: 1024px)" srcSet="./HeroImg.png" />
            <source
              media="(min-width: 768px)"
              srcSet="./Background Consulting Page tab.png"
            />
            <img
              src="./Background Consulting Page (1).png"
              alt=""
              className="h-full w-full object-cover"
            />
          </picture>
        </div>

        <div className="mt-20 flex flex-col justify-center py-32 sm:mt-0 sm:block sm:min-h-screen sm:py-48 lg:px-28">
          <div className="max-w-lg">
            <div className="flex items-center justify-center sm:block">
              <p className="text-base text-white sm:text-lg">
                Unternehmer-und Unternehmensberatung
              </p>
            </div>
            <div className="text-center text-white sm:text-left">
              <h1 className="text-[40px] font-bold leading-[42.41px] tracking-tight sm:text-[55px] sm:leading-[57.49px]">
                Aus der Praxis <br /> für die Praxis
              </h1>
              <p className="mt-6 text-sm font-medium sm:text-lg">
                Zielgerichtetes Unternehmenswachstům: <br />
                Wir verhelfen Geschäftsführern & Gründern zu mehr
                Vertriebserfolg, nachhaltigen Systemen & Prozessen, der
                richtigen Positionierung sowie einer effektiven
                Mitarbeitergewinnung- und führung.
              </p>
              <div className="mt-10 flex justify-center sm:block">
                <button className="flex items-center gap-x-2 rounded-md bg-[#0C224A] py-2 pl-5 pr-3 text-sm font-semibold hover:text-gray-300">
                  <p>Erstgespräch vereinbaren</p>
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto mb-8 mt-12 w-[90%] border border-gray-500 sm:mt-32 sm:w-full"></div>
          <div className="flex justify-between">
            <div className="inline-flex items-center">
              <p className="inline-block text-lg text-gray-400">
                bekannt <br /> aus
              </p>
              <div className="inline-block w-14 -rotate-[75deg] border border-gray-500"></div>
            </div>
            <img
              src="./Group.png"
              className="w-[80%] overflow-hidden object-contain"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
