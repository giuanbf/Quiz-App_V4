// Quiz1.jsx
import React, { useContext } from 'react';
import QuizArea from '../QuizArea/QuizArea';
import quizContext from '../../context/quizContext';
import { useNavigate } from 'react-router-dom';  // Import useNavigate


const Quiz1 = ({ questions, onQuizComplete }) => {
    const { updateScore } = useContext(quizContext);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleQuiz1Complete = () => {
        onQuizComplete();  // Call onQuizComplete from props, if needed.
        navigate('/summary');
    };

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