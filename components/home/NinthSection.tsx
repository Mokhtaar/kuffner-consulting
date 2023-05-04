import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function NinthSection() {
  return (
    <div className="px-2 py-24 lg:px-12">
      <div className="overflow-hidden rounded-[30px] bg-[#0C224A] sm:h-[540px]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-0 lg:px-8">
          <div className="mx-auto max-w-2xl justify-center gap-x-28 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className=" max-w-xl text-white md:mb-12 xl:max-w-xl">
              <h1 className="text-center text-2xl font-bold  leading-7 tracking-tight sm:text-left sm:text-[40px] sm:leading-[48.41px]">
                Lass uns gemeinsam dein Unternehmen noch weiter nach vorne
                bringen!
              </h1>
              <p className="mt-9 hidden text-sm font-medium leading-4 sm:text-lg sm:leading-5 md:block">
                Trage dich für ein kostenloses und unverbindliches Erstgespräch
                ein und erfahre, wie wir dir konkret helfen können, dein
                Unternehmen zum Wachsen zu bringen.
              </p>
              <div className="mt-16  hidden items-center gap-x-6 md:flex">
                <button className=" flex items-center gap-x-2 rounded-md bg-white py-3 pl-5 pr-3 text-lg font-semibold leading-5 text-[#0C224A] hover:text-gray-600 sm:mt-0">
                  <p>Erstgespräch vereinbaren</p>
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="mt-9 flex h-full space-x-3 sm:-mt-44 sm:mr-10 sm:gap-8 sm:space-x-0 sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="flex flex-col sm:items-end sm:justify-end sm:gap-y-7">
                <img
                  src="./g1.png"
                  className="h-[177px] w-48 rounded-[10px] object-cover sm:h-[272px] sm:rounded-none"
                ></img>
                <img
                  src="./g3.png"
                  className="mt-3 h-[141px] w-48 rounded-[10px] object-cover sm:mb-5 sm:mt-0 sm:h-[192px] sm:rounded-t-2xl"
                ></img>
              </div>
              <div className="flex flex-col  sm:items-end sm:justify-end sm:gap-y-3">
                <img
                  src="./g2.png"
                  className="h-[140px] w-48 rounded-[10px] object-cover sm:h-[248px] sm:rounded-none"
                ></img>
                <img
                  src="./g4.png"
                  className="mt-4 h-[176px] w-48 rounded-[10px] object-cover sm:mb-7 sm:h-[264px] sm:rounded-none md:mt-4"
                ></img>
              </div>
            </div>
            <div className="block text-white md:hidden">
              <p className="mt-12 text-sm font-medium leading-4 sm:text-lg sm:leading-5">
                Trage dich für ein kostenloses und unverbindliches Erstgespräch
                ein und erfahre, wie wir dir konkret helfen können, dein
                Unternehmen zum Wachsen zu bringen.
              </p>
              <div className="mt-6 flex items-center gap-x-6">
                <button className=" flex items-center gap-x-2 rounded-md bg-white py-3 pl-5 pr-3 text-lg font-semibold leading-5 text-[#0C224A] hover:text-gray-600 sm:mt-0">
                  <p>Erstgespräch vereinbaren</p>
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
