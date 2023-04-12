import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import * as S from "./Roulette.styled";
import { Button } from "react95";
interface Props {
  data: { id: string; option: string }[];
}
function Roulette({ data }: Props) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <S.Wrapper>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        outerBorderColor={"#fff"}
        outerBorderWidth={5}
        fontFamily={"DungGeunMo"}
        radiusLineColor={"#fff"}
        radiusLineWidth={5}
        textColors={["#000"]}
        backgroundColors={["#CCCCCC"]}
        pointerProps={{
          src: "https://o.remove.bg/downloads/eb270a82-72cd-4698-a2a0-479d155be097/cursor-removebg-preview.png",
          style: {
            transform: "rotate(-110deg) scale(1.3)",
            right: 5,
            top: 50,
          },
        }}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <Button variant="raised" size="lg" onClick={handleSpinClick}>
        SPIN
      </Button>

      <br />
    </S.Wrapper>
  );
}
export default Roulette;
