// QuizState.js
import { useState, useCallback } from "react";
import QuizContext from "./quizContext";
import Data from "../Data/data.json";

const QuizState = (props) => {
    const [score, setScore] = useState({ rightAnswers: 0, wrongAnswers: 0 });
    const [score2, setScore2] = useState({ rightAnswers: 0, wrongAnswers: 0 });

    const updateScore = useCallback((update) => {
        setScore(prevScore => {
            return {
                rightAnswers: prevScore.rightAnswers + (update.rightAnswers || 0),
                wrongAnswers: prevScore.wrongAnswers + (update.wrongAnswers || 0),
            }
        });
    }, []);

    const updateScore2 = useCallback((update) => {
        setScore2(prevScore2 => {
            return {
                rightAnswers: prevScore2.rightAnswers + (update.rightAnswers || 0),
                wrongAnswers: prevScore2.wrongAnswers + (update.wrongAnswers || 0),
            }
        });
    }, []);

    return (
        <QuizContext.Provider value={{ Data, score, score2, updateScore, updateScore2 }}>
            {props.children}
        </QuizContext.Provider>
    );
};

export default QuizState;