import React, { useEffect, useState } from "react";
import { multiChoiceQuizList, type MultiChoiceQuiz } from "../data/mtQuizData";
import { Button } from "../components/ui/button";
import { Card } from "./ui/card";

interface ShuffledQuiz {
  id: string;
  question: string;
  choices: string[];
  correctIndex: number;
  explanation?: string;
}

const shuffleQuiz = (quiz: MultiChoiceQuiz): ShuffledQuiz => {
  const paired = quiz.options.map((option, index) => ({
    option,
    originalIndex: index,
  }));

  const shuffled = paired.sort(() => Math.random() - 0.5);
  const correctIndex = shuffled.findIndex(p => p.originalIndex === quiz.answerIndex);

  return {
    id: quiz.id,
    question: quiz.question,
    choices: shuffled.map(p => p.option),
    correctIndex,
    explanation: quiz.explanation
  };
};

const MultipleChoiceQuiz: React.FC = () => {
  const total = multiChoiceQuizList.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quiz, setQuiz] = useState<ShuffledQuiz | null>(null);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const current = multiChoiceQuizList[currentIndex];
    setQuiz(shuffleQuiz(current));
    setSelected(null);
    setShowResult(false);
  }, [currentIndex]);

  const handleAnswer = (index: number) => {
    if (selected !== null) return; // prevent double selection
    setSelected(index);
    setShowResult(true);
    if (index === quiz?.correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < total) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert(`퀴즈 완료! 점수: ${score}/${total}`);
      // 초기화
      setCurrentIndex(0);
      setScore(0);
    }
  };

  if (!quiz) return null;

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 h-[89vh]">
      <Card className="w-full max-w-xl p-6">
      <h2 className="text-xl font-bold mb-4 text-center">
        [{currentIndex + 1}/{total}] {quiz.question}
      </h2>
      <div className="grid grid-cols-1 gap-3 mb-6">
        {quiz.choices.map((choice, index) => (
          <Button
            key={index}
            onClick={() => handleAnswer(index)}
            className={`text-left font-bold justify-start px-4 py-2 ${
              selected !== null
                ? index === quiz.correctIndex
                  ? "bg-green-200 text-green-800"
                  : index === selected
                    ? "bg-red-200 text-red-800"
                    : "bg-gray-100"
                : "bg-gray-400"
            }`}
          >
            {`${index + 1}. ${choice}`}
          </Button>
        ))}
      </div>

      {showResult && (
        <div className="mb-4 text-sm font-bold">
          {selected === quiz.correctIndex ? (
            <span className="text-green-600">정답입니다! 🎉</span>
          ) : (
            <div>
            <p className="text-red-600">틀렸습니다. 정답은 {quiz.correctIndex + 1}번입니다.</p>
            <p className="text-gray-900">해설: {quiz.explanation}</p>
            </div>
          )}
        </div>
      )}

      {showResult && (
        <Button onClick={handleNext} className="bg-gray-900 text-white">
          다음 문제
        </Button>
      )}
    </Card>
    </div>
  );
};

export default MultipleChoiceQuiz;
