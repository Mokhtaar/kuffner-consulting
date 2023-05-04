import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function SixthSection() {
  return (
    <div className="hidden px-2 py-24 sm:block lg:px-12">
      <div className="overflow-hidden rounded-[30px] bg-[#0C224A] sm:h-[540px]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-0 lg:px-8">
          <div className="mx-auto max-w-2xl justify-center gap-x-28 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className=" max-w-xl text-white md:mb-7 xl:max-w-xl">
              <h1 className="text-2xl  font-bold leading-7 tracking-tight sm:text-[40px] sm:leading-[48.41px]">
                Erlebe unvergessliche Keynotes von Andreas Küffner für dein Team
                & Unternehmen!
              </h1>
              <p className="mt-10 text-sm font-medium leading-4 sm:text-base sm:leading-5">
                Durch seine langjährigen Erfahrungen auf internationalen
                Top-Bühnen ist Andreas Küffner ein gefragter und begnadetet
                Keynote Speaker. Er fokussiert sich im Kern auf die Themen
                Skillset, Mindset und Heartset und schafft es auf unterhaltende
                Art und Weise nicht nur zu inspirieren, sondern vor allem zur
                Umsetzung zu motivieren - offline wie online.
              </p>
              <div className="mt-12 flex items-center gap-x-6">
                <button className=" flex items-center gap-x-2 rounded-md bg-white py-3 pl-5 pr-3 text-lg font-semibold text-[#0C224A] hover:text-gray-600 sm:mt-0">
                  <p>Hier mehr Informationen</p>
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="mr-10 mt-14 flex h-full gap-8 sm:-mt-44 sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="flex flex-col items-end justify-end gap-y-7">
                <img
                  src="./Rectangle 553.png"
                  className="h-[272px] w-48 object-cover"
                ></img>
                <img
                  src="./Rectangle 556.png"
                  className="h-[180px] w-48 object-cover sm:mb-[6px]"
                ></img>
              </div>
              <div className="flex flex-col items-end justify-end gap-y-3">
                <img
                  src="./Rectangle 555.png"
                  className="h-[246px] w-48 object-cover"
                ></img>
                <img
                  src="./Rectangle 554.png"
                  className="h-[248px] w-48 object-cover sm:mb-10"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
