import { useFormContext } from "react-hook-form";

type InputType = {
  name: string;
};

export function ContactUsBody({ name }: InputType) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const isError = errors[name];

  return (
    <div className="relative w-full p-4 pt-10">
      <label className="absolute left-0 top-0 w-fit px-6 text-left text-blue-800">
        {name}
      </label>
      <textarea
        {...register(name, { required: true })}
        className={`-mt-4 w-full resize-none rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none lg:h-52 ${
          isError && "border-red-500"
        }`}
      />
      <textarea />
    </div>
  );
}
