import React, {useMemo, useState} from "react";
import { Wheel } from "react-custom-roulette";
import * as S from './Roulette.styled'
interface Props{
    data: {id: string, option: string}[]
}
function Roulette({data}: Props) {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const colorList = useMemo(() =>
        [...new Array(data.length)].map((_) => "#" + Math.round(Math.random() * 0xffffff).toString(16)),
        [data]);

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
            outerBorderColor={"#dedede"}
            outerBorderWidth={10}
            innerBorderColor={"#dedede"}
            radiusLineColor={"#dedede"}
            radiusLineWidth={5}
            textColors={["#ffffff"]}
            fontSize={20}
            backgroundColors={colorList}
            onStopSpinning={() => {
                setMustSpin(false);
            }}
            />
            <button onClick={handleSpinClick}>
                SPIN
            </button>
            <br />
       </S.Wrapper>
    );
}
export default Roulette;
