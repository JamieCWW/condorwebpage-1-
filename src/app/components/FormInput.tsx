type FormInput = {
  type: string;
  pattern?: string;
};

export function FormInput({ type }: FormInput) {
  return (
    <>
      <input type="text" />
    </>
  );
}
