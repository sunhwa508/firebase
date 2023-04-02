import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

interface Props{
    data: {id: string, option: string}[]
}
function Roulette({data}: Props) {
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
       <>
        <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            outerBorderColor={"#dedede"}
            outerBorderWidth={10}
            innerBorderColor={"#dedede"}
            radiusLineColor={"#dedede"}
            radiusLineWidth={5}
            textColors={["#ffffff"]}
            fontSize={20}
            backgroundColors={[
                "#F22B35",
                "#F99533",
                "#24CA69",
                "#514E50",
                "#46AEFF",
                "#9145B7"
            ]}
            onStopSpinning={() => {
                setMustSpin(false);
            }}
            />
            <button onClick={handleSpinClick}>
                SPIN
            </button>
            <br />
       </>
    );
}
export default Roulette;
