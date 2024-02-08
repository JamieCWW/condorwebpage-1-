import {
  faComments,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ContactUsActionType = {
  type?: string;
  href: string;
  body?: string;
};

type IconType = {
  [key: string]: IconDefinition; // Here, key can be any string, and the value is IconDefinition
};

const iconSetup: IconType = {
  Phone: faPhone,
  Email: faEnvelope,
  Message: faComments,
};

export function ContactUsAction({ type, href, body }: ContactUsActionType) {
  return (
    <>
      <li className="flex w-full items-center justify-start gap-4  text-left">
        <div className="z-10 flex size-16 items-center justify-center rounded-full border-2 border-white bg-indigo-700 p-2">
          <FontAwesomeIcon icon={iconSetup[type || ""]} className="text-2xl" />
        </div>
        <a
          href={href}
          className="-ml-6 w-full rounded-r-full border-2 border-white bg-indigo-700 p-2 pl-4"
          target="__blank"
        >
          {body}
        </a>
      </li>
    </>
  );
}
