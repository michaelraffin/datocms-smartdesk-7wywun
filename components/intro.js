export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Welcome to SmartdeskPh!.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Built for last{" "}
        <a
          href="https://www.smartdeskph.com/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Dual Motor
        </a>{" "}
        and{" "}
        <a
          href="https://www.smartdeskph.com/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Solid Wood Table Top
        </a>
        .
      </h4>
    </section>
  );
}
