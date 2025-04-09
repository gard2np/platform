import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "~/components/ui/dialog";
import { Separator } from "~/components/ui/separator";

interface IncorrectQuestion {
  문제: string;
  정답: string;
  입력한_답: string;
}

interface ResultsComponentProps {
  score: number;
  totalQuestions: number;
  incorrectQuestions: IncorrectQuestion[];
}

const ResultsComponent: React.FC<ResultsComponentProps> = ({ score, totalQuestions, incorrectQuestions }) => {
  const [open, setOpen] = useState(false);

  const handleTossLinkClick = () => {
    const tossLink =
      "supertoss://send?amount=1000&bank=%ED%86%A0%EC%8A%A4%EB%B1%85%ED%81%AC&accountNo=100000243206&origin=qr";

    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = tossLink;
    } else {
      alert("이 기능은 모바일 기기에서만 사용할 수 있습니다.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-lg p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800">퀴즈 결과</h1>
        <p className="text-lg text-center text-gray-700 mt-2">
          점수: <span className="font-bold text-blue-600">{score}</span> / {totalQuestions}
        </p>

        <h2 className="text-lg font-semibold text-center text-gray-800 mt-6">틀린 문제 목록</h2>
        <Separator className="my-4" />

        {incorrectQuestions.length === 0 ? (
          <p className="text-center text-green-600 font-semibold">🎉 모든 문제를 맞췄습니다! 🎉</p>
        ) : (
          <ul className="w-full text-gray-700 space-y-3">
            {incorrectQuestions.map((question, index) => (
              <li key={index} className="p-3 border rounded-lg bg-white shadow-sm">
                <p className="text-sm font-medium">문제 {index + 1}: {question.문제}</p>
                <p className="text-sm text-gray-600">정답: <span className="font-bold">{question.정답}</span></p>
                <p className="text-sm text-gray-500">입력한 답: {question.입력한_답}</p>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex flex-col gap-4">
          <Button className="bg-gray-900 text-white w-full py-3" onClick={() => setOpen(true)}>
            후원하기
          </Button>
          <Button className="bg-gray-900 text-white w-full py-3" onClick={() => window.open("https://naver.me/53lexFZd", "_blank")}>
            상담받기
          </Button>
          <Button className="bg-teal-500 text-white w-full py-3" onClick={() => window.location.reload()}>
            다시 시작하기
          </Button>
        </div>
      </Card>

      {/* 후원 모달 */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-center">후원 안내</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center">
            <img
              src="/qr_only.png"
              alt="toss"
              className="w-40 h-40 cursor-pointer mt-4"
              onClick={handleTossLinkClick}
            />
            <p className="text-lg font-semibold text-blue-600 mt-4">1,000원</p>
            <p className="text-center text-gray-600 text-sm mt-2">
              본 콘텐츠가 유익하셨다면 후원하실 수 있습니다.<br />
              스마트폰 카메라로 QR코드를 스캔하거나<br/> 클릭하면 토스로 연결됩니다.
            </p>
          </div>
          <DialogFooter className="mt-4">
            <Button onClick={() => setOpen(false)} className="bg-gray-700 text-white w-full py-3">
              닫기
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <p className="text-xs text-gray-500 mt-6">
        © 2025 사주 읽는 치히로 All Rights Reserved.
      </p>
    </div>
  );
};

export default ResultsComponent;
