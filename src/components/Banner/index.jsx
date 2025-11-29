import SubHead from "../Atoms/subhead";
import Paragraph from "../Atoms/paragraph";
import { motion } from "framer-motion";

export default function Banner() {
  const bannerContainer = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  const bannerImage = {
    visible: { y:  0, opacity: 1, transition: { duration: .5 } },
    hidden: { y: 200, opacity: 1 },
  };

  return (
    <div className="bg-primary-100 " id="solutions">
      <div className="container mx-auto max-w-[1344px]">
        <div className="flex px-5 py-9 flex flex-col gap-8 sm:gap-10 md:gap-16 md:pb-0 lg:gap-20 lg:px-10 lg:pt-12 overflow-hidden">
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={bannerContainer}
            viewport={{ once: true }}
            className="text-center space-y-[18px] flex flex-col items-center"
          >
            <SubHead color="text-white" style="sm:w-4/5 md:w-9/12 lg:w-9/12">
              Our Solution: A Digital Passport for Soil
            </SubHead>
            <Paragraph
              color="text-white/70"
              style="sm:w-11/12 md:w-9/12 lg:w-1/2"
            >
              A single source of truth for all soil-related data, storing properties, history, and recommendations in a dynamic digital identity for your land.
            </Paragraph>
          </motion.section>
          <div className="w-full flex justify-center">
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={bannerImage}
              className="w-[375px] sm:w-[550px] md:w-[723px] lg:w-full h-auto object-cover"
              src="/farms.png"
              alt="Soil Passport"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
