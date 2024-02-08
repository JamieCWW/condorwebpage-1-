type SectionProps = {
  additionalClasses?: string;
  children?: React.ReactNode;
};

export function SectionBody({
  additionalClasses,
  children,
  ...additionalProps
}: SectionProps) {
  return (
    <section
      className={`${additionalClasses} min-h-[calc(100vh-5rem)] w-full`}
      {...additionalProps}
    >
      {children}
    </section>
  );
}
