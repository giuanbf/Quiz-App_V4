// Quiz2.jsx
import React, { useContext } from 'react';
import QuizArea from '../QuizArea/QuizArea';
import quizContext from '../../context/quizContext';
import { useNavigate } from 'react-router-dom';

const Quiz2 = ({ questions, onQuizComplete }) => {
    const { updateScore2, score2 } = useContext(quizContext);
    const navigate = useNavigate();

    const handleQuiz2Complete = () => {
        onQuizComplete();
        navigate('/results');
    };
console.log("Score2", score2)

    return (
        <QuizArea questions={questions} onQuizComplete={handleQuiz2Complete} onAnswerClick={updateScore2} quizType="summary" />
    );
};

export default Quiz2;