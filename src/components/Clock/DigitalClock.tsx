import React from "react";
import {ClockViewType} from "./Clock";

export const get2DigitString = (num: number) => num < 10 ? '0' + num : num

export const DigitalClock: React.FC<ClockViewType> = ({date}) => {
    return <div>
        {get2DigitString(date.getHours())}
        :
        {get2DigitString(date.getMinutes())}
        :
        {get2DigitString(date.getSeconds())}
    </div>
}