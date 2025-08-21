import { Timeline } from "@/components/ui/timeline";

const About = () => {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <div className="flex flex-col mb-6 font-bold md:text-lg text-neutral-200">
            Junior Frontend Developer
            <p className="font-medium flex gap-2 items-center text-white/70">
              <p className="font-semibold text-base">Chakravue</p>
              <p className="italic text-sm">Jun 2025 - Present</p>
            </p>
          </div>
          <p className="pb-2 font-bold">My roles and responsibilities:</p>
          <p>
            As a Junior Frontend Engineer, I have been responsible for building
            and maintaining the entire frontend of a web application using
            React.js and Tailwind CSS. I worked closely with designers to
            translate Figma wireframes into responsive and reusable components,
            ensuring a smooth and consistent user experience. Along with
            frontend development, I integrated REST APIs, implemented
            authentication with JWT and cookies, and contributed to overall
            application performance and usability.
          </p>
        </div>
      ),
    },
    {
      title: "2024-2025",
      content: (
        <div>
          <div className="flex flex-col mb-6 font-bold md:text-lg text-neutral-200">
            Frontend Developer Intern
            <p className="font-medium flex gap-2 items-center text-white/70">
              <p className="font-semibold text-base">Chakravue</p>
              <p className="italic text-sm">Dec 2024 - May 2025</p>
            </p>
          </div>
          <p className="pb-2 font-bold">My roles and responsibilities:</p>
          <p className="pb-2">
            During my internship as a Frontend Developer Intern, I worked
            extensively with React.js, Tailwind CSS, and TypeScript to design
            and build responsive, user-friendly web interfaces. I translated
            Figma designs into pixel-perfect components, ensuring consistent UI
            and smooth user experience across different devices. I also utilized
            Adobe Illustrator to refine icons and visuals, contributing to a
            clean and engaging design system.
          </p>
          <p>
            I collaborated closely with the team to integrate frontend
            components with APIs, implemented routing with React Router, and
            optimized layouts for performance and accessibility. This role gave
            me hands-on exposure to modern frontend workflows, design-to-code
            implementation, and reinforced my ability to work in a fast-paced
            startup environment where adaptability and attention to detail were
            crucial.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="flex flex-col mb-6 font-bold md:text-lg text-neutral-200">
            Backend Developer Intern
            <p className="font-medium flex gap-2 items-center text-white/70">
              <p className="font-semibold text-base">Voice Owl</p>
              <p className="italic text-sm">Jan 2023- Mar 2023</p>
            </p>
          </div>
          <p className="pb-2 font-bold">My roles and responsibilities:</p>
          <p className="pb-2">
            I gained hands-on experience working with Node.js, Express.js, and
            MongoDB to build and manage server-side applications. I contributed
            to the development of RESTful APIs, including creating CRUD
            operations and integrating third-party APIs for a flight booking
            project. I also practiced working within an MVC architecture, which
            helped me understand structured code organization and scalable
            backend design.
          </p>
          <p>
            In addition to coding, I collaborated with the backend team to debug
            issues, test API endpoints with Postman, and ensure data consistency
            across services. This internship strengthened my foundation in
            backend development and gave me exposure to industry practices like
            version control with Git, API documentation, and teamwork in a
            professional environment.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative bg-none w-full overflow-y-auto z-10 mt-4">
      <Timeline data={data} />
    </div>
  );
};

export default About;
