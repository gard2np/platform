import React, { useState } from "react";
import SScomponent from "../../components/SScomponenet";
import ResultsComponent from "../../components/ResultsComponent";

interface IncorrectQuestion {
  문제: string;
  정답: string;
  입력한_답: string;
}

const QuizApp: React.FC = () => {
    const [quizFinished, setQuizFinished] = useState(false);
    const [score, setScore] = useState(0);
    const [incorrectQuestions, setIncorrectQuestions] = useState<IncorrectQuestion[]>([]);

    const finishQuiz = (finalScore: number, wrongQuestions: IncorrectQuestion[]) => {
        setScore(finalScore);
        setIncorrectQuestions(wrongQuestions);
        setQuizFinished(true);
    };

    return (
        <div>
            {!quizFinished ? (
                <SScomponent onFinish={finishQuiz} />
            ) : (
                <ResultsComponent score={score} totalQuestions={10} incorrectQuestions={incorrectQuestions} />
            )}
        </div>
    );
};

export default QuizApp;