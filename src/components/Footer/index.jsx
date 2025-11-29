import { motion } from "framer-motion";
import MainButton from "../Atoms/button";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";

export default function Footer() {
  const footerContent = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  const footerImage = {
    visible: { y: 0, transition: { duration: 1 } },
    hidden: { y: -100 },
  };

  const handleContactClick = () => {
    const email = "k224462@nu.edu.pk";
    const subject = "Inquiry about Bio-Digital Soil Passport";
    const body = "Hello,%0D%0A%0D%0AI would like to learn more about the Bio-Digital Soil Passport project.%0D%0A%0D%0AThank you!";
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="bg-primary-300" id="contact">
      {/* Contact */}
      <div className="border-b border-white/15 relative overflow-hidden">
        <div className="container mx-auto max-w-[1344px]">
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={footerContent}
            className="px-5 py-10 flex flex-col items-center text-center sm:px-10"
          >
            <SubHead
              color="text-white"
              style="mb-[18px] sm:w-9/12 md:w-9/12 lg:w-6/12"
            >
              Get in Touch
            </SubHead>
            <Paragraph
              color="text-white/70"
              fontSize="text-sm"
              style="mb-[30px] sm:w-7/12 lg:w-5/12"
            >
              Have questions or want to explore the Bio-Digital Soil Passport? Contact our team for project details, demos, or academic collaboration.
            </Paragraph>
            <div onClick={handleContactClick}>
              <MainButton style="w-full sm:w-9/12 sm:w-fit lg:w-fit hover:bg-primary-300 hover:border-white hover:text-white transition-all duration-200 ease-in cursor-pointer">
                CONTACT US
              </MainButton>
            </div>
          </motion.section>
        </div>

        {/* Eclipse */}
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{
            rotate: 360,
            transition: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          }}
          variants={footerImage}
          className="hidden lg:block absolute top-1/4 -left-28"
          src="/eclipse-1.svg"
          alt="eclipse"
        />
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{
            rotate: 360,
            transition: { duration: 30, repeat: Infinity, ease: "easeInOut" },
          }}
          variants={footerImage}
          className="hidden lg:block absolute top-[20%] -right-24"
          src="/eclipse-2.svg"
          alt="eclipse"
        />
      </div>
    </div>
  );
}