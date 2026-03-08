import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}
export function TwoDice(): React.JSX.Element {
    const [dLeft, rollLeft] = useState<number>(1);
    const [dRight, rollRight] = useState<number>(2);

    function dRollLeft(): void {
        rollLeft(d6());
    }

    function dRollRight(): void {
        rollRight(d6());
    }

    return <div>
        <span data-testid="left-die">{dLeft}</span>
        <span data-testid="right-die">{dRight}</span>
        <Button onClick={dRollLeft}>Roll Left</Button>
        <Button onClick={dRollRight}>Roll Right</Button>
        {dLeft === dRight && dLeft !== 1 ? <div>Win</div> : null}
        {dLeft === dRight && dLeft === 1 ? <div>Lose</div> : null}
    </div>;
}
