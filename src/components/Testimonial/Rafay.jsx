import SubHead from "../Atoms/subhead"
import Paragraph from "../Atoms/paragraph"

export default function TestimonialItem() {
  return (
    <div className="flex flex-col gap-[50px] items-center md:flex-row md:items-end lg:gap-44 lg:items-center">
      <img
        className="w-[300px] md:w-8/12 lg:w-2/5"
        src="/rofay.png"
        alt="testimonial"
      />
      <div className="flex flex-col sm:w-10/12">
        <SubHead style="mb-[18px] w-9/12 md:w-full">
          Web Developer
        </SubHead>
        <Paragraph style="mb-9">
          “Designs and implements the frontend, backend, databases, and GIS-based farm mapping for the platform.”
        </Paragraph>
        <div className="flex flex-col font-body">
          <h5 className="text-primary-100 mb-2.5 font-medium">Abdul Rafay</h5>
          <p className="text-black-300">22k-4462</p>
        </div>
      </div>
    </div>
  );
}
