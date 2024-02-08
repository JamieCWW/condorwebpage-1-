import { useFormContext } from "react-hook-form";

type InputType = {
  type?: string;
  name: string;
  pattern?: string;
};

export function ContactUsInput({
  type = "text",
  pattern = "",
  name,
}: InputType) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const isError = errors[name];

  return (
    <div className="relative w-full p-4 pt-10 lg:w-1/2">
      <label className="absolute left-0 top-1 w-fit px-6 text-left text-blue-800">
        {name}
      </label>
      <input
        type={type}
        {...register(name, {
          required: true,
        })}
        pattern={pattern !== "" ? pattern : undefined}
        className={`-mt-4 w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none ${
          isError && "border-red-500"
        }`}
      />
    </div>
  );
}
