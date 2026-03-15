import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "pink",
    "brown"
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((c: string) => (
                <Form.Check
                    inline
                    key={c}
                    type="radio"
                    id={`color-${c}`}
                    name="color"
                    label={c}
                    value={c}
                    checked={color === c}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setColor(e.target.value);
                    }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{ backgroundColor: color }}
            >
                {color}
            </div>
        </div>
    );
}
