import React, { useState } from "react";
import { flushSync } from "react-dom";
import { Button } from "react-bootstrap";

function Doubler({
    dhValue,
    setDhValue
}: {
    dhValue: number;
    setDhValue: (newValue: number) => void;
}): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({
    dhValue,
    setDhValue
}: {
    dhValue: number;
    setDhValue: (newValue: number) => void;
}): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    function setDhValueSync(newValue: number) {
        flushSync(() => setDhValue(newValue));
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValueSync}></Doubler>
            <Halver dhValue={dhValue} setDhValue={setDhValueSync}></Halver>
        </div>
    );
}
