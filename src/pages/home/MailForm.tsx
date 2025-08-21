import { motion } from "motion/react";

const MailForm = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center px-8 w-full lg:w-1/2">
      <h2 className="text-3xl text-pink-500 font-bold">Contact Me</h2>
      <form className="w-full space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-xl text-white outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-xl text-white outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-xl text-white outline-none"></textarea>
      </form>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="w-full p-3 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-semibold hover:cursor-pointer">
        Send Message
      </motion.button>
    </div>
  );
};

export default MailForm;
