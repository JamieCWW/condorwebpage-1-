import { NextResponse } from "next/server";

import { FormData } from "../../../../types";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function POST(request: Request) {
  const formData: FormData = await request.json();
  console.log(process.env.RESEND_API);

  const { data, error } = await resend.emails.send({
    from: "Info <info@condorwebworks.co.uk>",
    to: ["jamie@condorwebworks.co.uk"],
    subject: "Website Query",
    text: `${JSON.stringify(formData)} - "Form Data-`,
  });
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }

  return NextResponse.json(formData);
}
