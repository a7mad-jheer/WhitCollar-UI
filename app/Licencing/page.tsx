import { HeroTitle } from "@/Components/global/page";

export const Licencing = () => {
  return (
    <section className="py-10 xl:py-20 xl:px-50">
      <div className="mb-5 ">
        <HeroTitle title="Templete Information" description="Licencing" />
      </div>

      <div className="p-5 flex flex-col gap-5 xl:px-30 md:px-10">
        <div className="flex flex-col gap-5">
          <div className ="xl:flex xl:flex-col xl:gap-2">
            <h1 className="font-bold text-2xl md:text-3xl">Icons & Graphics</h1>
            <p className="text-gray-500 text-sm xl:text-base">
              Icons and Graphics were manually desgined by the VictorFlow team.
              You may download these and edit them to your website without
              asking for permission or providing credit.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">
              Phosphor Icons :{" "}
              <span className="text-red-300 font-normal">License</span>
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="xl:flex xl:flex-col xl:gap-2">
            <h1 className="font-bold text-2xl md:text-3xl">Photography</h1>
            <p className="text-sm text-gray-500 xl:text-base ">
              All images used in the Whitecollar webflow templete are licensed
              for free personal and commerical use. if you woud like to use any
              specific image. you can check the licenses and download the image
              for free Unsplsh, pexels.
            </p>
          </div>

          <ul className="flex flex-col gap-5">
            <li className="xl:flex xl:flex-col xl:gap-2">
              <h1 className="font-semibold text-xl">
                Pexels:{" "}
                <span className="text-red-300 font-normal">License</span>
              </h1>
              <p className="text-sm text-gray-500 xl:text-base">
                Image 1 , Image 2 , Image 3 , Image 4 , Image 5 , Image 6 ,
                Image 7 , Image 8 , Image 9 , Image 10 , Image 11 , Image 12 ,
                Image13 , Image 14 , Image 15 , Image 16 , Image 17 , Image 18 ,
                Image 19 , Image 20
              </p>
            </li>
            <li className="xl:flex xl:flex-col xl:gap-2">
              <h1 className="font-semibold text-xl">
                Unsplash:{" "}
                <span className="text-red-300 font-normal">License</span>
              </h1>
              <p className="text-sm text-gray-500 xl:text-base">
                Image 1 , Image 2 , Image 3 , Image 4 , Image 5 , Image 6 ,
                Image 7 , Image 8 , Image 9 , Image 10 , Image 11 , Image 12 ,
                Image13 , Image 14 , Image 15 , Image 16 , Image 17
              </p>
            </li>
          </ul>
        </div>

        <div className="xl:flex xl:flex-col xl:gap-2">
          <h1 className="font-bold text-2xl md:text-3xl">Fonts</h1>
          <p className="text-sm text-gray-500 xl:text-base">
            WhiteCollar template uses free licensed <span>Google Fonts</span>{" "}
            Please Check <span>Poppins</span> and <span>Inter</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Licencing;
