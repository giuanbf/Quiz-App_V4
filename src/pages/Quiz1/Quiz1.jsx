import React, { useContext } from 'react';
import QuizArea from '../QuizArea/QuizArea';
import quizContext from '../../context/quizContext';
import { useNavigate } from 'react-router-dom';


const Quiz1 = ({ questions, onQuizComplete }) => {
    const { updateScore, score } = useContext(quizContext);
    const navigate = useNavigate();

    const handleQuiz1Complete = () => {
        onQuizComplete();
        navigate('/summary');
    };
    console.log(score)

    return (
        <QuizArea
            questions={questions}
            onQuizComplete={handleQuiz1Complete}
            onAnswerClick={updateScore}
            quizType="initial"
        />
    );
};


export default Quiz1;