// src/pages/NotFound.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="pb-25 flex items-center justify-center bg-linear-to-br from-white to-gray-50/30 p-6">
      <div className="text-center">
        <motion.p
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: [0, 1], y: [8, 0] }}
          transition={{ duration: 0.8 }}
        >
          {t('notFound.message')}
        </motion.p>

        <motion.div
          className="mb-6"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2tjZmhhYml6N2R5NWY2ZmI5cHg1eDloYmxsOWVoZm1zZ2puNTBwZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/phZwzaoAGAomewIBFK/giphy.gif"
            alt="404 gif"
            className="mx-auto w-64 h-64 object-contain"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <Link
            to="/"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200"
          >
            {t('notFound.backToHome')}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;