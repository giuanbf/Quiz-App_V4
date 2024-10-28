import { useState } from "react";
import QuizContext from "./quizContext";
import Data from "../Data/data.json";

const QuizState = (props) => {
    const [score, setScore] = useState({ rightAnswers: 0, wrongAnswers: 0 });
    const [score2, setScore2] = useState({ rightAnswers: 0, wrongAnswers: 0 });

    const updateScore = (update) => {
        setScore(prevScore => ({ ...prevScore, ...update }));
    };

    const updateScore2 = (update) => {
        setScore2(prevScore2 => ({ ...prevScore2, ...update }));
    };

    return (
        <QuizContext.Provider value={{ Data, score, updateScore, score2, updateScore2, setScore, setScore2 }}> {/* Removed next and setNext */}
            {props.children}
        </QuizContext.Provider>
    );
};

export default QuizState;