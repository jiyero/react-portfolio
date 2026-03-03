import Section from "../../components/Section";

const About = () => {
  return (
    <Section title="" className="gap-16 bg-accent" id="about">
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 mx-4 text-center">
        <h1 className="text-6xl font-bold">About</h1>
        <p className="max-w-md text-lg">
          Hey there! I'm Jihro Abendano, I'm currently a Frontend developer from
          the Philippines and I have been developing web designs with React for
          2 years, 1 year professionally and 1 year on my final year in college.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden w-full max-w-3xl">
        <div className="animate-marquee py-12 whitespace-nowrap">
          <span className="mx-4 text-4xl">Marquee Item 1</span>
          <span className="mx-4 text-4xl">Marquee Item 2</span>
          <span className="mx-4 text-4xl">Marquee Item 3</span>
          <span className="mx-4 text-4xl">Marquee Item 4</span>
          <span className="mx-4 text-4xl">Marquee Item 5</span>
        </div>

        <div className="absolute top-0 animate-marquee2 py-12 whitespace-nowrap">
          <span className="mx-4 text-4xl">Marquee Item 1</span>
          <span className="mx-4 text-4xl">Marquee Item 2</span>
          <span className="mx-4 text-4xl">Marquee Item 3</span>
          <span className="mx-4 text-4xl">Marquee Item 4</span>
          <span className="mx-4 text-4xl">Marquee Item 5</span>
        </div>
      </div>
    </Section>
  );
};

export default About;
