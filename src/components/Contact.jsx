import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className={`xl:mt-8 flex xl:flex-row flex-col-reverse gap-6 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-6 rounded-xl'  // Reduced padding and rounded corners
      >
        <p className={`${styles.sectionSubText} mb-1`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} mb-4`}>Contact</h3>

        <div className='flex flex-col gap-4'> 
          <div>
            <p className='text-white text-sm mb-3'>Connect with me:</p> 
            
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/anuvendhan_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white hover:text-[#E1306C] text-sm"  // Smaller gap and text
              >
                <FaInstagram size={18} /> 
                <span>@anuvendhan_</span>
              </a>
              
              <a
                href="https://x.com/AnuVendhan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white hover:text-[#1DA1F2] text-sm"
              >
                <FaXTwitter size={18} />
                <span>@AnuVendhan</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/anuvendhan-a00466265/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white hover:text-[#0077B5] text-sm"
              >
                <FaLinkedin size={18} />
                <span>Anuvendhan</span>
              </a>
            </div>
          </div>

          <div>
            <p className='text-white text-sm mb-1'>Email me:</p> 
            <a 
              href="mailto:anuvendhan73@gmail.com" 
              className="text-secondary hover:text-white text-sm"  // Smaller text
            >
              anuvendhan73@gmail.com
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-[400px] md:h-[350px] h-[250px]'  // Reduced heights
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");