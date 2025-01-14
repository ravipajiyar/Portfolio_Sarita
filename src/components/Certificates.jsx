import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

const CertificateCard = ({
  title,
  issuer,
  year,
  credentialId,
  downloadLink,
  icon
}) => (
    <Tilt className="xs:w-[300px] w-full">
       <motion.div
       variants={fadeIn("up", "spring", 0.5, 0.75)}
         className="bg-black-100 p-6 rounded-2xl  shadow-card relative min-h-[280px]"
       >
        <div className="absolute top-4 right-4 text-gray-400">{year}</div>
          <img
           src={icon}
             alt="web-development"
              className="w-16 h-16 object-contain mb-4"
            />
        <h3 className="text-white text-[20px] font-bold mb-2">{title}</h3>
        <p className="mt-1 text-secondary text-[14px]">{issuer}</p>
        <p className="mt-2 text-secondary text-[12px]">Credential ID: {credentialId}</p>

           <a
              href={downloadLink}
               download
              className="bg-[#915EFF] mt-4 text-white py-2 px-4 rounded-md shadow-md text-sm font-bold hover:bg-[#7d4fe3] transition absolute bottom-4 right-4"
           >
              Download
           </a>
      </motion.div>
    </Tilt>
);


const Certificates = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-center`}>Professional Development</p>
           <h2 className={`${styles.sectionHeadText} text-center`}>Certifications</h2>
      </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-10">
            {certificates.slice(0,3).map((certificate, index) => (
             <CertificateCard key={index} {...certificate} />
            ))}
        </div>


      <h3 className="text-white text-[24px] font-bold mt-10 text-center">Additional Certifications</h3>
         <div className="mt-10 flex flex-wrap justify-center gap-10">
             {certificates.slice(3).map((certificate, index) => (
                <CertificateCard key={index} {...certificate} />
              ))}
            </div>

      </>
  );
};

export default SectionWrapper(Certificates, "certificate");