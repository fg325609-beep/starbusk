import AnimatedText from "./AnimatedText";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subcopy?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subcopy,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && (
        <span data-aos="fade-up" className="text-xs font-bold uppercase tracking-[0.25em] text-green-400">
          {eyebrow}
        </span>
      )}
      <AnimatedText
        as="h2"
        text={title}
        className="max-w-2xl text-4xl font-extrabold leading-[1.1] text-cream md:text-5xl"
      />
      {subcopy && (
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="max-w-xl text-base leading-relaxed text-gray-400"
        >
          {subcopy}
        </p>
      )}
    </div>
  );
}
