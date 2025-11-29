import { PrimaryCard, SecondaryCard, ThirdCard } from "./cardImage";

export default function CardImage({ primary }) {
  const primaryContainer = {
    visible: {
      y: 0,
      transition: { duration: 0.5, delayChildren: 0.5, staggerChildren: 0.1 },
    },
    hidden: { y: 100 },
  };

  const miniModal = {
    visible: {
      y: 0,
      transition: { duration: 0.5, delay: 0.5 },
    },
    hidden: {
      y: 100,
    },
  };

  const fakeProfiles = [
    {
      id: 0,
      name: "Nitrogen",
      amount: "125 kg/ha",
      avatar: "/N.png"
    },
    {
      id: 1,
      name: "Phosphorus",
      amount: "616 kg/ha",
      avatar: "/P.png"
    },
    {
      id: 3,
      name: "Potassium",
      amount: "145 kg/ha",
      avatar: "/K.png"
    },
  ];

  if (primary==="1")
  {
    return (
      <PrimaryCard
        primaryContainer={primaryContainer}
        miniModal={miniModal}
        fakeProfiles={fakeProfiles}
      />
    );
  }
  if(primary==="2")
  {
    return <SecondaryCard />;
  }
  if(primary==="3")
  {
    return <ThirdCard 
    primaryContainer={primaryContainer}
        miniModal={miniModal}
        fakeProfiles={fakeProfiles}
    />;
  }
}
