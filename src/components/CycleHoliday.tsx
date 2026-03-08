import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎄" | "🎆" | "💝" | "🎇";

// Alphabetical order: Christmas(C), Halloween(H), Independence(I), New Year(N), Valentine's(V)
const ALPHABET_TRANSITIONS: Record<Holiday, Holiday> = {
    "🎄": "🎃",
    "🎃": "🎇",
    "🎇": "🎆",
    "🎆": "💝",
    "💝": "🎄"
};

// Year order: New Year(Jan), Valentine's(Feb), Independence(Jul), Halloween(Oct), Christmas(Dec)
const YEAR_TRANSITIONS: Record<Holiday, Holiday> = {
    "🎆": "💝",
    "💝": "🎇",
    "🎇": "🎃",
    "🎃": "🎄",
    "🎄": "🎆"
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎃");

    function advanceAlphabet(): void {
        setHoliday(ALPHABET_TRANSITIONS[holiday]);
    }

    function advanceYear(): void {
        setHoliday(YEAR_TRANSITIONS[holiday]);
    }

    return <div>
        <span>Holiday: {holiday}</span>
        <Button onClick={advanceAlphabet}>Advance by Alphabet</Button>
        <Button onClick={advanceYear}>Advance by Year</Button>
    </div>;
}
