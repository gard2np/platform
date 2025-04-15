import React, { useState } from 'react';
import { heavenlyStems, earthlyBranches, hiddenStems } from '~/data/stems';
import BranchCard from '../../components/BranchCard';
import Slot from '../../components/Slot';
import StemButton from '../../components/StemButton';
import StemsTable from '../../components/Stemstable';
import { Button } from "../../components/ui/button";
import { CardTitle, CardFooter, Card } from "../../components/ui/card";

const getRandomBranch = () => earthlyBranches[Math.floor(Math.random() * earthlyBranches.length)];

const JJK: React.FC = () => {
  const [branch, setBranch] = useState(getRandomBranch());
  const [selectedSlot, setSelectedSlot] = useState<'initial' | 'middle' | 'final' | null>(null);
  const [answers, setAnswers] = useState<{ initial?: string; middle?: string; final?: string }>({});
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);

  const correctAnswer = hiddenStems[branch];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <Card className="w-full max-w-lg p-6 shadow-lg items-center">
      <CardTitle className="w-full mt-4 mb-4 text-2xl font-bold text-center">
        지장간 암기 도우미
      </CardTitle>

      <BranchCard branch={branch} />
      <div className="flex space-x-4 mt-8">
        <Slot label="초기" selectedStem={answers.initial} isSelected={selectedSlot === 'initial'} onSelect={() => setSelectedSlot('initial')} />
        {correctAnswer.middle && <Slot label="중기" selectedStem={answers.middle} isSelected={selectedSlot === 'middle'} onSelect={() => setSelectedSlot('middle')} />}
        <Slot label="여기" selectedStem={answers.final} isSelected={selectedSlot === 'final'} onSelect={() => setSelectedSlot('final')} />
      </div>

      <div className="grid grid-cols-5 gap-2 mt-8 w-full max-w-md">
        {heavenlyStems.map((stem) => (
          <StemButton key={stem} stem={stem} onClick={() => selectedSlot && setAnswers((prev) => ({ ...prev, [selectedSlot]: stem }))} />
        ))}
      </div>

      <div className="mt-8 mb-4 flex items-center justify-center">
        <Button className="mr-4 text-xl bg-gray-900 text-white p-3 rounded-lg" onClick={() => setIsCorrect(
          answers.initial === correctAnswer.initial &&
          answers.middle === correctAnswer.middle &&
          answers.final === correctAnswer.final
        )}>
          정답확인
        </Button>
        <Button className="mr-4 text-xl bg-gray-900 text-white p-3 rounded-lg" onClick={() => {
          setBranch(getRandomBranch());
          setAnswers({});
          setIsCorrect(null);
        }}>
          문제생성
        </Button>
        <Button className="text-xl bg-teal-500 text-white p-3 rounded-lg" onClick={() => setShowHint(!showHint)}>
          {showHint ? "힌트 닫기" : "힌트 보기"}
        </Button>


      </div>
        {showHint && <StemsTable />}
        {isCorrect !== null && (
          <div className={`mt-4 px-6 py-3 rounded-lg text-lg font-bold ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
            {isCorrect ? '정답입니다! 🎉' : '틀렸습니다. 다시 시도해보세요! ❌'}
          </div>
        )}
      </Card>
    </div>
  );
};

export default JJK;
