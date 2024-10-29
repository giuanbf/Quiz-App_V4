import { useState, useEffect, useCallback } from "react";
import QuizContext from "./quizContext";

const QuizState = (props) => {
    const [data, setData] = useState(null);
    const [score, setScore] = useState({ rightAnswers: 0, wrongAnswers: 0 });
    const [score2, setScore2] = useState({ rightAnswers: 0, wrongAnswers: 0 });
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const processIds = [2745, 179, 634, 278, 291, 1710, 1330, 3387, 1717, 301, 1434, 224, 238, 237, 266, 273, 274, 275, 1114, 1111, 296, 1175];
        const randomId = processIds[Math.floor(Math.random() * processIds.length)];

        const fetchData = async () => {
            try {
                const response = await fetch(`https://law.biofy.tech/api/v1/processes_obfuscated/search/${randomId}`);
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Removemos processIds das dependências

    const updateScore = useCallback((update) => {
        setScore(prevScore => ({
            ...prevScore,
            rightAnswers: (prevScore.rightAnswers || 0) + (update.rightAnswers || 0),
            wrongAnswers: (prevScore.wrongAnswers || 0) + (update.wrongAnswers || 0),
        }));
    }, []);

    const updateScore2 = useCallback((update) => {
        setScore2(prevScore2 => ({
            ...prevScore2,
            rightAnswers: (prevScore2.rightAnswers || 0) + (update.rightAnswers || 0),
            wrongAnswers: (prevScore2.wrongAnswers || 0) + (update.wrongAnswers || 0),
        }));
    }, []);

    return (
        <QuizContext.Provider value={{ data, score, score2, updateScore, updateScore2, userData, setUserData }}>
            {props.children}
        </QuizContext.Provider>
    );
};

export default QuizState;
