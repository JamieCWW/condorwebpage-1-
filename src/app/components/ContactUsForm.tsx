"use client";
import {
  FormProvider,
  useForm,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import { ContactUsAction } from "./ContactUsAction";
import axios from "axios";
import { ContactUsInput } from "./ContactUsInput";
import { ContactUsBody } from "./ContactUsBody";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export function ContactUsForm() {
  const methods = useForm();
  const [isSubmitted, setSubmitted] = useState(false);
  const { formState } = methods;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await axios.post("/api/contactform", data);
      setSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
    }

    // Perform your submit logic here
  };

  return (
    <>
      <div className=" my-4 flex min-h-96 w-2/3 flex-col rounded-lg border shadow-lg lg:flex-row">
        <div className="relative flex w-full  flex-col rounded-t-lg bg-gradient-to-tr from-blue-700 to-indigo-900 px-4 py-2 text-white lg:w-1/3 lg:rounded-l-lg">
          <h4 className="w-full text-center font-exo text-xl">Get In Touch!</h4>
          <div className="absolute -bottom-9 left-1/2 size-0 -translate-x-1/2  rotate-180 border-[20px] border-solid border-transparent border-b-indigo-800 lg:left-full lg:top-1/2 lg:-translate-x-1 lg:-translate-y-1/2 lg:rotate-90"></div>

          <ul className="flex w-full grow flex-col items-center justify-evenly gap-4 text-left lg:gap-0">
            <ContactUsAction
              type="Phone"
              href="tel:+447845 293283"
              body="+447845 293283"
            />
            <ContactUsAction
              type="Message"
              href="https://wa.me/07845293283"
              body="Whatsapp Message"
            />
            <ContactUsAction
              type="Email"
              href="mailto:Info@condorwebworks.co.uk"
              body="Info@condorwebworks.co.uk"
            />
          </ul>
        </div>

        <div className="w-full">
          {!isSubmitted ? (
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="flex flex-col items-center justify-center px-2 py-4"
                id="contactPage"
              >
                <div className="flex flex-wrap">
                  <ContactUsInput name="Firstname" />
                  <ContactUsInput name="Surname" />
                  <ContactUsInput
                    name="Email"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  />
                  <ContactUsInput name="Subject" />
                  <ContactUsBody name="Body" />
                </div>

                <button
                  type="submit"
                  className="mx-10 w-fit rounded-lg bg-gradient-to-tr from-orange-600 to-red-600 p-4 text-white shadow-lg hover:to-orange-600"
                >
                  {formState.isSubmitting ? "Submitting" : "Submit"}
                </button>
              </form>
            </FormProvider>
          ) : (
            <div className="flex size-full flex-col items-center justify-center gap-4  text-3xl text-green-600">
              <FontAwesomeIcon icon={faCircleCheck} />
              <span> Message submitted successfully!</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
