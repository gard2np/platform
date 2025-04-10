// app/components/OxQuiz.tsx

import { useState } from "react";
import { oxQuizData } from "../data/oxQuizData";
import { Card, CardFooter } from "../components/ui/card"; 
import { Button } from "../components/ui/button";

const OxQuiz: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const current = oxQuizData[index];

  const handleAnswer = (userAnswer: boolean) => {
    const correct = userAnswer === current.answer;
    if (correct) setScore((prev) => prev + 1);
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleNext = () => {
    setIsCorrect(null);
    setShowResult(false);
    if (index < oxQuizData.length - 1) {
      setIndex(index + 1);
    } else {
      alert(`퀴즈 종료! 점수: ${score} / ${oxQuizData.length}`);
      setIndex(0);
      setScore(0);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <Card className="w-full max-w-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-center">OX 퀴즈</h2>

        <p className="text-lg font-semibold text-center mb-6">
          문제 {index + 1}. {current.question}
        </p>

        {!showResult ? (
          <div className="flex justify-center gap-6">
            <Button className="bg-gray-400 text-white px-8 py-2" onClick={() => handleAnswer(true)}>O</Button>
            <Button className="bg-teal-400 text-white px-8 py-2" onClick={() => handleAnswer(false)}>X</Button>
          </div>
        ) : (
          <div className="text-center">
            <p className={`text-lg font-bold mt-4 ${isCorrect ? "text-green-600" : "text-red-600"}`}>
              {isCorrect ? "정답입니다! ✅" : "틀렸습니다 ❌"}
            </p>
            {current.explanation && (
              <p className="text-sm text-gray-600 mt-2">※ 해설: {current.explanation}</p>
            )}
            <Button className="mt-6 bg-blue-500 text-white px-6 py-2" onClick={handleNext}>
              다음 문제
            </Button>
          </div>
        )}

        <p className="mt-8 text-sm text-gray-500 text-center">현재 점수: {score}</p>
      </Card>
      <div className="p-4 items-center text-center text-gray-500">
      <p className="text-xs text-gray-500 mt-6">
        <CardFooter>© 2025 사주 읽는 치히로 All rights reserved.</CardFooter>
      </p>
      </div>
    </div>
    
  );
};

export default OxQuiz;
