import React, { useContext } from 'react';
import quizContext from '../../context/quizContext';
import { Chart } from 'react-google-charts';
import {
    Box,
    Heading,
    Text,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    SimpleGrid,
    Center,
    Button,
    Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Data from "../../Data/data.json";

const Results = () => {
    const context = useContext(quizContext);
    const { score, score2 } = context;

    const quiz1Score = score;
    const quiz2Score = score2;

    const quiz1Total = Object.keys(Data.process_text_questions.questions).length;
    const quiz2Total = Object.keys(Data.process_summary_questions.questions).length;

    const totalQuestions = quiz1Total + quiz2Total;
    const totalCorrect = quiz1Score.rightAnswers + quiz2Score.rightAnswers;
    const percentageScore = (totalCorrect * 100 / totalQuestions).toFixed(2);

    let scoreMessage = "";
    if (percentageScore >= 90) {
        scoreMessage = "Excelente!";
    } else if (percentageScore >= 70) {
        scoreMessage = "Bom!";
    } else if (percentageScore >= 50) {
        scoreMessage = "Regular";
    } else {
        scoreMessage = "Precisa melhorar mais, boa sorte na próxima vez.";
    }

    const chartData = [
        ['Quiz', 'Score'],
        ['Quiz 1', quiz1Score.rightAnswers],
        ['Quiz 2', quiz2Score.rightAnswers],
    ];

    const chartOptions = {
        title: 'Quiz Results',
        is3D: true,
    };

    return (
        <Center h="100vh">
            <Box
                p={8}
                maxWidth="600px"
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg"
                bg="purple.500"
                color="white"
            >
                <Heading as="h2" size="xl" mb={4}>Your Score</Heading>

                <Text fontSize="6xl" fontWeight="bold" mb={2}>
                    {percentageScore} %
                </Text>
                <Text mb={4} color={percentageScore >= 50 ? 'green' : 'red'}>
                    {scoreMessage}
                </Text>

                <Chart
                    chartType="PieChart"
                    data={chartData}
                    options={chartOptions}
                    width={'600px'}
                    height={'400px'}
                />

                <SimpleGrid columns={2} spacing={4} mt={6}>
                    <Stat>
                        <StatLabel>Acertos Quiz 1</StatLabel>
                        <StatNumber>{quiz1Score.rightAnswers}</StatNumber>
                        <StatHelpText>de {quiz1Total} perguntas</StatHelpText>
                    </Stat>
                    <Stat>
                        <StatLabel>Acertos Quiz 2</StatLabel>
                        <StatNumber>{quiz2Score.rightAnswers}</StatNumber>
                        <StatHelpText>de {quiz2Total} perguntas</StatHelpText>
                    </Stat>
                </SimpleGrid>


                <SimpleGrid columns={4} spacing={4} mt={6}>
                    <Link as={RouterLink} to="/about">
                        <Button colorScheme="purple" mt={4}>Home</Button>
                    </Link>
                </SimpleGrid>

            </Box>
        </Center>
    );
};

export default Results;