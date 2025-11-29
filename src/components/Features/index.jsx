import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import Paragraph from "../Atoms/paragraph";
import FeatureItem from "./featureItem";
import { motion } from "framer-motion";

export default function Features() {
  const dataFeatures = [
    {
      id: 1,
      title: "Slow & Manual",
      logo: "/time.png",
      content:
        "Fragmented data from slow, manual soil testing.",
    },
    {
      id: 2,
      title: "No Real-Time Insights",
      logo: "/clock-check.svg",
      content:
        "Farmers lack immediate, actionable insights for their soil.",
    },
    {
      id: 3,
      title: "Poor Data Preservation",
      logo: "/db.svg",
      content:
        "Valuable soil data is not digitally preserved or tracked.",
    },
    {
      id: 4,
      title: "Leads to Lower Yield",
      logo: "/decrease.png",
      content:
        "Ineffective management reduces yield and harms the environment.",
    },
    {
      id: 5,
      title: "Limited Expert Accessibility",
      logo: "/farmer.png",
      content:
        "Farmers often lack timely access to agronomists and soil specialists.",
    },
    {
      id: 6,
      title: "High Cost of Repeated Testing",
      logo: "/coin.svg",
      content:
        "Frequent manual soil tests increase operational costs for farmers.",
    },
  ];

  const content = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: -100, opacity: 0 },
  };

  return (
    <div className="container mx-auto max-w-[1344px]" id="problems">
      <div className="px-5 py-16 flex flex-col gap-10 sm:pb-28 sm:px-10 md:pb-36">
        {/* Head Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={content}
          className="text-center flex flex-col items-center"
        >
          <SubHead style="mb-[18px] sm:w-8/12 md:w-9/12 lg:w-7/12">
            The Problem with Traditional Soil Management
          </SubHead>
          <Paragraph
            fontSize="text-sm"
            color="text-black-400"
            style="sm:w-3/5 md:w-7/12 lg:w-1/3"
          >
            Modern agriculture needs accurate, real-time, and digital soil intelligence to overcome the limitations of outdated methods.
          </Paragraph>
        </motion.div>

        {/* Feature Items */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          {dataFeatures?.map((feature, index) => (
            <FeatureItem key={feature.id} feature={feature} i={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
