import type { FC } from "react";
import { motion } from "motion/react";
import { Copy } from "lucide-react";
import toast from "react-hot-toast";

const MailModal: FC<{
  setShowMailModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShowMailModal }) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-bl from-[#99004c] to-[#64192d] p-6 rounded-lg w-96 text-center flex flex-col gap-6">
        <h2 className="text-lg font-semibold">
          Reach Out — I’d Love to Hear From You
        </h2>
        <div className="flex gap-4 w-full items-center justify-center">
          <p className="">vrashalinaitam2001@gmail.com</p>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="hover:cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText("vrashalinaitam2001@gmail.com");
              toast("Email copied!!");
            }}>
            <Copy size={20} />
          </motion.button>
        </div>
        <motion.button
          whileTap={{ scale: 0.8 }}
          className="bg-black/90 rounded-lg w-fit h-fit mx-auto px-4 py-2 hover:cursor-pointer"
          onClick={() => setShowMailModal(false)}>
          Close
        </motion.button>
      </motion.div>
    </div>
  );
};

export default MailModal;
