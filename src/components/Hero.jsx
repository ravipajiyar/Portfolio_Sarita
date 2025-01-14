import { motion } from "framer-motion";
import { styles } from "../styles";
import { CivilCanvas } from "./canvas";
import sarruImage from '../assets/sarru.jpeg';
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Typical from "react-typical";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Main Content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 ml-20`}
      >
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text Section */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Sarita</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Typical
              steps={[
                "Crafting Structure, Building Future", 2000,
                "Designing innovative and sustainable engineering solutions", 3000,
                "Let's build a stronger tomorrow together!", 3000,
              ]}
              loop={Infinity}
              wrapper="span"
            />
          </p>
        </div>
      </div>

      {/* Image and Social Media Section */}
      <div className="absolute top-[150px] right-[150px] flex flex-col items-center gap-40 z-50">
        {/* Profile Image with Enhanced Animation */}
        <motion.div
          className="relative w-48 h-48"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotate: 0,
          }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.div
            className="w-full h-full rounded-full p-1"
            animate={{
              boxShadow: [
                "0 0 0 0px rgba(145, 94, 255, 0.2)",
                "0 0 0 20px rgba(145, 94, 255, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <motion.div
              className="w-full h-full rounded-full overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={sarruImage}
                alt="Profile Picture"
                className="rounded-full object-cover h-full w-full opacity-75 hover:opacity-100 transition duration-400"
                style={{ border: "4px solid #915EFF" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Social Media Icons - Remaining code stays the same */}
        <div className="flex flex-col space-y-8 z-50">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/sarita.sapkota.35325074"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <motion.div
              className="text-[#1877F2] text-3xl hover:text-white transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaFacebook />
            </motion.div>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@saritasapkota1364"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <motion.div
              className="text-[#FF0000] text-3xl hover:text-white transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaYoutube />
            </motion.div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sarita-sapkota-80683b332/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <motion.div
              className="text-[#0A66C2] text-3xl hover:text-white transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/sarita_sapkotaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <motion.div
              className="text-[#E4405F] text-3xl hover:text-white transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaInstagram />
            </motion.div>
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/Sarita99444"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <motion.div
              className="text-[#1877F2] text-3xl hover:text-white transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaTwitter />
            </motion.div>
          </a>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      {/* Civil Canvas Integration */}
      <CivilCanvas />
    </section>
  );
};

export default Hero;