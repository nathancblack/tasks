import React, { useState } from "react";
import { flushSync } from "react-dom";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");

    function gainAttempts(): void {
        const parsed = parseInt(attemptsRequested);
        if (!isNaN(parsed)) {
            flushSync(() => {
                setAttemptsLeft(attemptsLeft + parsed);
                setAttemptsRequested("");
            });
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attemptsLeft}</div>
            <Form.Group controlId="attemptsInput">
                <Form.Label>Attempts to gain:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setAttemptsRequested(e.target.value);
                    }}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    flushSync(() => { setAttemptsLeft(attemptsLeft - 1); });
                }}
                disabled={attemptsLeft === 0}
            >
                use
            </Button>
            <Button onClick={gainAttempts}>gain</Button>
        </div>
    );
}
