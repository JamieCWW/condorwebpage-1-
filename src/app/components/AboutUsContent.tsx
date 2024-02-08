import Image from "next/image";
import CWWLogoSmall from "@/../public/condorsm.png";

export function AboutUsContent() {
  return (
    <>
      <div className="relative h-fit w-full rounded-lg bg-indigo-800 p-4 sm:p-0 md:w-3/4">
        <div className="w-full rounded-lg px-10 py-2 text-center font-exo text-4xl lg:absolute lg:-left-10 lg:-top-10 lg:w-fit lg:bg-indigo-700/80 lg:text-6xl">
          Who are we?
        </div>
        <div className="z-10 p-10 lg:mx-5  lg:my-10 ">
          <strong>Welcome to Condor Web Works </strong> , your premier
          destination for web development solutions in Leicester, UK!
          <br />
          <br />
          Founded by Jamie, Condor Web Works is a one-person powerhouse
          dedicated to helping small businesses establish or enhance their
          online presence. With a deep passion for web development and a
          commitment to excellence, Jamie brings a wealth of expertise and
          creativity to every project.
          <br />
          <br />
          Driven by a desire to empower entrepreneurs, Jamie specializes in
          providing personalized web solutions tailored to the unique needs of
          small businesses. Whether you&apos;re a startup looking to make your
          mark or an established business seeking to expand your digital
          footprint, we are here to guide you through the process.
          <br />
          <br />
          But Condor Web Works isn&apos;t just about building websites –
          it&apos;s about building relationships. We takes pride in providing
          personalized attention and support to every client, ensuring a
          seamless experience from start to finish.
          <br />
          <br />
          Your success is top priority, and we will go above and beyond to make
          sure you&apos;re satisfied with the results.
          <br />
          <br />
          Let&apos;s work together to turn your vision into reality and take
          your business to new heights. Get in touch today to learn more about
          how Condor Web Works can help you succeed online!
        </div>
        <div className="absolute bottom-0 right-0 z-0 size-1/2 bg-sm-logo bg-contain bg-center bg-no-repeat opacity-20 brightness-50 	contrast-[0.8] hue-rotate-[195deg] invert-[.48] saturate-[3207] sepia-[.13]">
          {/* invert(48%) sepia(13%) saturate(3207%) hue-rotate(195deg)
          brightness(95%) contrast(80%) */}
          {/* <Image
            alt="Condor Web Works - Logo small"
            src={CWWLogoSmall}
            className="mix-blend-color-burn"
          /> */}
        </div>
      </div>
    </>
  );
}
