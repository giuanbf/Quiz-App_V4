// QuizArea.jsx
import { useState, useCallback } from 'react';
import QuestionBox from '../../components/QuestionBox/QuestionBox';
import { useNavigate } from 'react-router-dom';

const QuizArea = ({ questions, onQuizComplete, onAnswerClick, quizType }) => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);

    const handleNext = useCallback(() => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prevQuestion => prevQuestion + 1);
            setSelectedAnswer(null);
            setShowFeedback(false);
        } else {
            onQuizComplete();
            if (quizType === 'initial') {
                navigate('/summary');
            } else if (quizType === 'summary') {
                navigate('/results');
            }
        }
    }, [currentQuestion, questions.length, onQuizComplete, quizType, navigate]);

    const handleOptionClick = useCallback((answer) => {
        setSelectedAnswer(answer);
        setShowFeedback(true);

        const isCorrect = answer === questions[currentQuestion].correct_answer;

        if (isCorrect) {
            onAnswerClick({ rightAnswers: 1 });
        } else {
            onAnswerClick({ wrongAnswers: 1 });
        }

    }, [currentQuestion, questions, onAnswerClick, setSelectedAnswer, setShowFeedback]);

    const currentQuestionData = questions[currentQuestion];

    return (
        <div className="container p-4">
            {currentQuestionData && (
                <QuestionBox
                    options={currentQuestionData.options}
                    question={currentQuestionData.question}
                    correctAnswer={currentQuestionData.correct_answer}
                    onAnswerClick={handleOptionClick}
                    selectedAnswer={selectedAnswer}
                    onNextClick={handleNext}
                    showNextButton={showFeedback}
                    currentQuestion={currentQuestion}
                    totalQuestions={questions.length}
                    quizType={quizType}
                />
            )}
        </div>
    );
};

export default QuizArea;