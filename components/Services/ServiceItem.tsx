import { FC } from "react";
import type { Service } from "@/constants/Services";
import { motion } from "framer-motion";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const ServiceItem: FC<Service> = ({ description, title, icon }) => {
  return (
    <motion.div variants={item}>
      {icon}
      <div className="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
        <div className="bg-primary w-9 h-0.5"></div>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-default-800 ">
          {title}
        </h3>
        <p className="mt-1 text-default-500">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceItem;
