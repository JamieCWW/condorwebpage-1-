import {
  faCheckCircle,
  faFileCode,
  faLaptopCode,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ServiceCardType = {
  header: string;
  body: string[] | undefined;
};

type IconType = {
  [key: string]: IconDefinition; // Here, key can be any string, and the value is IconDefinition
};

const iconType: IconType = {
  Websites: faLaptopCode,
  "Web Apps": faFileCode,
  "UI/UX Design": faObjectGroup,
};

export function ServicesCards({ header, body = [] }: ServiceCardType) {
  return (
    <div className="flex w-96 flex-col rounded-lg border bg-gradient-to-tr from-blue-700 to-indigo-900 p-4 text-center md:h-full lg:h-96">
      <h1 className="flex flex-col gap-6 border-b border-blue-200 pb-5 font-exo text-4xl text-white">
        <FontAwesomeIcon icon={iconType[header]} />
        {header}
      </h1>
      <ul className="flex flex-col gap-5 pt-5 text-left">
        {body.map((el) => {
          return (
            <li key={el} className="flex items-center gap-4 px-4 text-white">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-2xl text-blue-400"
              />
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
