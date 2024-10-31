import { motion } from "framer-motion";

const StatCard = ({ name, icon: Icon, value, color }) => {
  return (
    <motion.div
      className="bg-slate-900 bg-opacity-30 rounded-md border border-slate-500 border-opacity-30 cursor-pointer"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-extralight text-slate-400">
          <Icon size={20} className="mr-2" style={{ color }} />
          {name}
        </span>
        <p className="mt-1 text-3xl font-normal text-slate-100">{value}</p>
      </div>
    </motion.div>
  );
};
export default StatCard;
