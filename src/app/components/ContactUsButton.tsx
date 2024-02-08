"use client";

import React from "react";

export function ContactUsButton() {
  function scrollTo() {
    document
      .querySelector("#contactPage")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollTo}
      className="w-fit animate-bounce rounded-lg bg-gradient-to-tr from-orange-600 to-red-600 p-4 text-lg text-white hover:to-orange-600"
    >
      Contact Us
    </button>
  );
}
