export default function Footer() {
  return (
    <div className="sm:mt-16 text-[#0C224A]">
      <div className="justify-between sm:flex">
        <div className="flex max-w-sm flex-col px-6 sm:ml-32 sm:px-0">
          <img
            src="./kuffnerlogo.svg"
            className=" h-[136px] w-[248px] object-cover"
          ></img>
          <p className="mt-8 text-xs sm:text-sm sm:font-semibold sm:leading-4">
            Eine Marke der Küffner Group <br /> Tölzerstraße 1,
            <br /> 82031 Grünwald bei München
          </p>
          <div className="mt-12">
            <div className="flex space-x-2">
              <img src="./web.svg" className="h-4 w-4"></img>
              <p className="text-xs sm:text-sm sm:font-normal sm:leading-4">
                www.kueffner-group.com
              </p>
            </div>
            <div className="mt-3 flex space-x-2">
              <img src="./mail.png" className="h-4 w-4"></img>
              <p className="text-xs sm:text-sm sm:font-normal sm:leading-4">
                info@kueffner-group.com
              </p>
            </div>
          </div>
          <p className="mt-16 text-xs sm:text-sm sm:font-normal sm:leading-4">
            © 2023 KÜFFNER. Alle Rechte vorbehalten.
          </p>
          <div className="mb-14 mt-3 flex space-x-4 text-xs sm:mb-0 sm:text-sm sm:font-normal sm:leading-4">
            <p>Impressum</p>
            <p>Datenschutz</p>
          </div>
        </div>
        <div>
          <img
            src="./footer.jpeg"
            className="h-[364px] w-[970px] object-cover sm:h-[553px]"
          ></img>
        </div>
      </div>
    </div>
  );
}
