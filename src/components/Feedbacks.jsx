import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FeedbackCard = ({ index, testimonial, name, username, platform, link, image }) => {
  return (
    <div className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            {/* 🔗 Hyperlinked Name */}
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> 
              <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">
                {name}
              </a>
            </p>
            <p className="text-secondary text-[14px]">
              Username: <span className="text-white">{username}</span>
            </p>
            {platform && (
              <p className="mt-1 text-secondary text-[12px]">
                {platform}
              </p>
            )}
          </div>

          <img src={image} alt={`feedback_by-${name}`} className="w-10 h-10 rounded-full object-cover" />
        </div>
      </div>
    </div>
  );
};


const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <div>
          <p className={styles.sectionSubText}>Coding Platforms</p>
          <h2 className={styles.sectionHeadText}>Where I Code.</h2>
        </div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  justify-items-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
