// QuizArea.jsx
import { useState, useCallback } from 'react';
import QuestionBox from '../../components/QuestionBox/QuestionBox';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

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
        onAnswerClick(answer);
    }, [setSelectedAnswer, setShowFeedback, onAnswerClick]);

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
                    category={currentQuestionData.category || 'General Knowledge'}
                />
            )}
            {showFeedback && (
                <div>
                    {selectedAnswer === currentQuestionData.correct_answer ? (
                        <p style={{ color: 'green' }}>Correct!</p>
                    ) : (
                        <p style={{ color: 'red' }}>Incorrect. The correct answer was: {currentQuestionData.correct_answer}</p>
                    )}

                    <Button onClick={handleNext} colorScheme="blue" m={2}>
                        Next
                    </Button>
                </div>
            )}
        </div>
    );
};

export default QuizArea;