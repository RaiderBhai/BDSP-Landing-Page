import CardItem from "./cardItem";

export default function Card() {
  return (
    <div className="container mx-auto max-w-[1344px]" id="problems">
      <div className="flex flex-col px-5 py-20 gap-20 sm:px-10 overflow-hidden lg:gap-40">
        <CardItem
          subhead="Comprehensive Soil Data"
          paragraph="Track key metrics like NPK, pH, moisture, and organic matter."
          img="/card-1.png"
          primary="1"
        />
        <CardItem
          subhead="Continuous Monitoring"
          paragraph="Receive continuous updates based on real-time data."
          img="/card-2.png"
          primary="2"
        />
        <CardItem
          subhead="Digital Farm Records"
          paragraph="Maintain a complete digital history of soil health and treatments."
          img="/card-1.png"
          primary="3"
        />
      </div>
    </div>
  );
}
