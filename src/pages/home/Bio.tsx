import { GradientText } from "@/components/animate-ui/text/gradient";
import { motion } from "motion/react";

const Bio = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      transition={{ duration: 1.5 }}
      style={{ overflow: "hidden" }}
      className="flex flex-col">
      <GradientText
        className="text-2xl font-bold"
        text="Frontend Developer | UI/UX Focused | Creative with a Technical Edge"
      />
      <GradientText
        className="text-lg"
        gradient="linear-gradient(90deg, #fff 0%, #f19cac 20%, #ec4899 50%, #f7d3db 80%, #eb647e 100%)"
        text="I’m a frontend developer with a strong foundation in React.js, UI/UX design, and visual tools like Figma and Adobe Illustrator. I bring a design-first approach to frontend development, ensuring user interfaces are both functional and visually engaging."
      />
    </motion.div>
  );
};

export default Bio;
