import SubHead from "../Atoms/subhead"
import Paragraph from "../Atoms/paragraph"

export default function TestimonialItem() {
  return (
    <div className="flex flex-col gap-[50px] items-center md:flex-row md:items-end lg:gap-44 lg:items-center">
      <img
        className="w-[300px] md:w-8/12 lg:w-2/5"
        src="/ahmad.PNG"
        alt="testimonial"
      />
      <div className="flex flex-col sm:w-10/12">
        <SubHead style="mb-[18px] w-9/12 md:w-full">
          Sensor Integration
        </SubHead>
        <Paragraph style="mb-9">
          “Integrates soil sensors and IoT devices to collect real-time soil parameters and transmit data to the system.”
        </Paragraph>
        <div className="flex flex-col font-body">
          <h5 className="text-primary-100 mb-2.5 font-medium">Ahmad Ali</h5>
          <p className="text-black-300">22k-4385</p>
        </div>
      </div>
    </div>
  );
}
