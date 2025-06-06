import React, { useState, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

interface RelationMap {
    [key: string]: string;
}

interface Relations {
    [key: string]: RelationMap;
}

const heavenlyStems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const earthlyBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const relations : Relations = {
    '甲': {
        '甲': '비견', '乙': '겁재', '丙': '식신', '丁': '상관', '戊': '편재', 
        '己': '정재', '庚': '편관', '辛': '정관', '壬': '편인', '癸': '정인', 
        '子': '정인', '丑': '정재', '寅': '비견', '卯': '겁재', '辰': '편재', 
        '巳': '식신', '午': '상관', '未': '정재', '申': '편관', '酉': '정관', 
        '戌': '편재', '亥': '편인'
    },

    '乙': {
        '甲': '겁재', '乙': '비견', '丙': '상관', '丁': '식신', '戊': '정재', 
        '己': '편재', '庚': '정관', '辛': '편관', '壬': '정인', '癸': '편인', 
        '子': '편인', '丑': '편재', '寅': '겁재', '卯': '비견', '辰': '정재', 
        '巳': '상관', '午': '식신', '未': '편재', '申': '정관', '酉': '편관', 
        '戌': '정재', '亥': '정인'
    },
    '丙': {
        '甲': '편인', '乙': '정인', '丙': '비견', '丁': '겁재', '戊': '식신', 
        '己': '상관', '庚': '편재', '辛': '정재', '壬': '편관', '癸': '정관', 
        '子': '정관', '丑': '상관', '寅': '편인', '卯': '정인', '辰': '식신', 
        '巳': '비견', '午': '겁재', '未': '상관', '申': '편재', '酉': '정재', 
        '戌': '식신', '亥': '편관'
    },
    '丁': {
        '甲': '정인', '乙': '편인', '丙': '겁재', '丁': '비견', '戊': '상관', 
        '己': '식신', '庚': '정재', '辛': '편재', '壬': '정관', '癸': '편관', 
        '子': '편관', '丑': '식신', '寅': '정인', '卯': '편인', '辰': '상관', 
        '巳': '겁재', '午': '비견', '未': '식신', '申': '정재', '酉': '편재', 
        '戌': '상관', '亥': '정관'
    },
    '戊': {
        '甲': '편관', '乙': '정관', '丙': '편인', '丁': '정인', '戊': '비견', 
        '己': '겁재', '庚': '식신', '辛': '상관', '壬': '편재', '癸': '정재', 
        '子': '정재', '丑': '겁재', '寅': '편관', '卯': '정관', '辰': '비견', 
        '巳': '편인', '午': '정인', '未': '겁재', '申': '식신', '酉': '상관', 
        '戌': '비견', '亥': '편재'
    },
    '己': {
        '甲': '정관', '乙': '편관', '丙': '정인', '丁': '편인', '戊': '겁재', 
        '己': '비견', '庚': '상관', '辛': '식신', '壬': '정재', '癸': '편재', 
        '子': '편재', '丑': '비견', '寅': '정관', '卯': '편관', '辰': '겁재', 
        '巳': '정인', '午': '편인', '未': '비견', '申': '상관', '酉': '식신', 
        '戌': '겁재', '亥': '정재'
    },
    '庚': {
        '甲': '편재', '乙': '정재', '丙': '편관', '丁': '정관', '戊': '편인', 
        '己': '정인', '庚': '비견', '辛': '겁재', '壬': '식신', '癸': '상관', 
        '子': '상관', '丑': '정인', '寅': '편재', '卯': '정재', '辰': '편인', 
        '巳': '편관', '午': '정관', '未': '정인', '申': '비견', '酉': '겁재', 
        '戌': '편인', '亥': '식신'
    },
    '辛': {
        '甲': '정재', '乙': '편재', '丙': '정관', '丁': '편관', '戊': '정인', 
        '己': '편인', '庚': '겁재', '辛': '비견', '壬': '상관', '癸': '식신', 
        '子': '식신', '丑': '편인', '寅': '정재', '卯': '편재', '辰': '정인', 
        '巳': '정관', '午': '편관', '未': '편인', '申': '겁재', '酉': '비견', 
        '戌': '정인', '亥': '상관'
    },
    '壬': {
        '甲': '식신', '乙': '상관', '丙': '편재', '丁': '정재', '戊': '편관', 
        '己': '정관', '庚': '편인', '辛': '정인', '壬': '비견', '癸': '겁재', 
        '子': '겁재', '丑': '정관', '寅': '식신', '卯': '상관', '辰': '편관', 
        '巳': '편재', '午': '정재', '未': '정관', '申': '편인', '酉': '정인', 
        '戌': '편관', '亥': '비견'
    },
    '癸': {
        '甲': '상관', '乙': '식신', '丙': '정재', '丁': '편재', '戊': '정관', 
        '己': '편관', '庚': '정인', '辛': '편인', '壬': '겁재', '癸': '비견', 
        '子': '비견', '丑': '편관', '寅': '상관', '卯': '식신', '辰': '정관', 
        '巳': '정재', '午': '편재', '未': '편관', '申': '정인', '酉': '편인', 
        '戌': '정관', '亥': '겁재'
    },
};

interface IncorrectQuestion {
    문제: string;
    정답: string;
    입력한_답: string;
}

interface QuizComponentProps {
    onFinish: (finalScore: number, wrongQuestions: IncorrectQuestion[]) => void;
}

const SS: React.FC<QuizComponentProps> = ({ onFinish }) => {
    const totalQuestions = 10;
    const [currentQuiz, setCurrentQuiz] = useState({ dayStem: "", other: "" });
    const [userAnswer, setUserAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState("");
    const [questionNumber, setQuestionNumber] = useState(1);
    const [incorrectQuestions, setIncorrectQuestions] = useState<IncorrectQuestion[]>([]);
    const [quizFinished, setQuizFinished] = useState(false);

    useEffect(() => {
        generateQuiz();
    }, []);

    useEffect(() => {
        if (quizFinished) {
            onFinish(score, incorrectQuestions);
        }
    }, [quizFinished, score, incorrectQuestions, onFinish]);

    const generateQuiz = () => {
        const dayStem = heavenlyStems[Math.floor(Math.random() * heavenlyStems.length)];
        const other = [...heavenlyStems, ...earthlyBranches][Math.floor(Math.random() * 22)];
        setCurrentQuiz({ dayStem, other });
    };

    const checkAnswer = () => {
        const correctAnswer = relations[currentQuiz.dayStem]?.[currentQuiz.other] || "알 수 없음";
        let newScore = score;

        if (userAnswer === correctAnswer) {
            newScore += 1;
            setScore(newScore);
            setMessage("정답입니다!");
        } else {
            setMessage(`틀렸습니다. 정답은 ${correctAnswer}입니다.`);
            setIncorrectQuestions((prev) => [
                ...prev,
                { 문제: `일간: ${currentQuiz.dayStem}, 십신: ${currentQuiz.other}`, 정답: correctAnswer, 입력한_답: userAnswer },
            ]);
        }

        if (questionNumber < totalQuestions) {
            setQuestionNumber(questionNumber + 1);
            generateQuiz();
        } else {
            setQuizFinished(true);
        }

        setUserAnswer("");
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 bg-gray-50 h-[89vh]">
            <Card className="w-full max-w-lg p-6 shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-800">십신 암기 도우미</h1>
                <p className="text-gray-600 text-center mt-2">[{questionNumber}/{totalQuestions}]</p>
                <p className="text-lg font-semibold text-center text-gray-700 mt-4">
                    일간 <span className="font-bold text-blue-600">{currentQuiz.dayStem}</span>일 때 {currentQuiz.other}의 십신은?
                </p>

                <input
                    placeholder="정답을 입력하세요"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="mt-4 w-full p-3 border rounded-lg"
                    onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
                />

                <div className="mt-4 flex justify-center">
                    <Button
                        className="w-40 bg-blue-600 text-white px-4 py-2 rounded-lg"
                        onClick={checkAnswer}
                    >
                        제출
                    </Button>
                </div>

                <p className="text-md text-gray-700 mt-4 text-center">{message}</p>
                <p className="text-md text-gray-700 mt-2 text-center">점수: {score}</p>
            </Card>
        </div>
    );
};

export default SS;
