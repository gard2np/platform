import React from 'react';
import { Button } from '~/components/ui/button';
import { CardTitle, Card, CardFooter } from '~/components/ui/card';

const Quiz: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <Card className="w-full max-w-lg p-6 shadow-lg items-center">
        <CardTitle className="w-full mt-4 mb-4 text-xl font-bold text-center">
          <div className="flex flex-col items-center justify-center">
          <Button variant="outline" className="text-purple-700 font-bold text-xl rounded-full">
              01
          </Button>
          <p className="text-gray-400 text-lg font-bold mt-2">명리학 공부를 스마트하게</p>
          <p className="text-gray-800 text-sm mt-2 w-85 text-center mb-14">독학하며 겪은 어려움을 바탕으로 만든 서비스입니다. 내가 잘 알고 있는걸까? 실력은 얼마나 되는걸까?<br/> "용해"를 통해서 점검해보세요.</p>
          </div>
          <div className="flex flex-col items-center justify-center">
          <Button variant="outline" className="text-purple-700 font-bold text-xl rounded-full">
              02
          </Button>
          <p className="text-gray-400 text-lg font-bold mt-2">현업 술사가 운영합니다.</p>
          <p className="text-gray-800 text-sm mt-2 w-85 text-center">실전 풀이 사례를 만나보세요. 커뮤니티 기능을 활용하여 도반들과 함께 성장하세요.</p>
          </div>
        </CardTitle>
      </Card>
      <div className="p-4 items-center text-center text-gray-500">
        <p className="text-xs text-gray-500 mt-6">
          <CardFooter>© 2025 사주 읽는 치히로 All rights reserved.</CardFooter>
        </p>
      </div>
    </div>
  );
};

export default Quiz;
