import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
      
    function startQuiz(): void {
        setInProgress(true);
        setAttempts(attempts - 1)
    }
    
    function stopQuiz(): void {
      setInProgress(false);
    }

    
    // Start Quiz -> inProgress == true and attempts -= 1
    // Stop Quiz -> inProgress == false
    // Mulligan -> attempts += 1
    // inProgess === true -> Start Quiz and Mulligan === disabled
    // inProgress === false -> Stop Quiz === disabled
    //
    return <div>
      <div>{attempts}</div>
      <Button disabled={inProgress || attempts === 0 } onClick={startQuiz}>Start Quiz</Button>
      <Button disabled={!inProgress} onClick={stopQuiz}>Stop Quiz</Button>
      <Button disabled={inProgress} onClick={() => {setAttempts(attempts + 1)}}>Mulligan</Button>
    </div>
}
