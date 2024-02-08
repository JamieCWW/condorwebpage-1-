import { SectionBody } from "./components/SectionBody";
import { ContactUsButton } from "./components/ContactUsButton";
import { ServicesCards } from "./components/ServicesCards";
import Image from "next/image";
import { AboutUsContent } from "./components/AboutUsContent";
import { ContactUsForm } from "./components/ContactUsForm";

export default function Home() {
  return (
    <main className="">
      <SectionBody additionalClasses="relative bg-wave-svg bg-cover -mt-20">
        <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-40 text-center text-7xl text-white">
          <h1 className="w-full font-exo">Transform your online presence</h1>
          <ContactUsButton />
        </div>
      </SectionBody>
      <SectionBody additionalClasses="flex flex-col justify-center items-center h-fit gap-20 py-10">
        <h3 className="font-exo text-6xl font-bold text-blue-900">
          What we do!
        </h3>
        <div className="flex size-full flex-col items-center justify-evenly gap-2 lg:flex-row">
          <ServicesCards
            header="Websites"
            body={[
              "Custom Static Website Design",
              "Responsive Website Design",
              "Search Engine Optimization (SEO)",
              "Website Maintenance and Support",
              "Domain Name Registration",
            ]}
          />
          <ServicesCards
            header="Web Apps"
            body={[
              "Custom Web Application Development",
              "Real-Time Features Implementation (e.g., chat, notifications)",
              "Integration with Third-Party Services",
              "Interactive Features",
            ]}
          />
          <ServicesCards
            header="UI/UX Design"
            body={[
              "User Research and Analysis",
              "Wireframing and Prototyping",
              "Interface Design",
              "Usability Testing",
              "User Experience Optimization",
            ]}
          />
        </div>
      </SectionBody>
      <SectionBody additionalClasses="flex justify-center items-center p-4 md:p-20 md:py-32 bg-indigo-900 text-blue-200">
        <AboutUsContent />
      </SectionBody>
      <SectionBody additionalClasses="flex justify-center items-center">
        <ContactUsForm />
      </SectionBody>
    </main>
  );
}
