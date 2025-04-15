import React from 'react';
import { Link } from 'react-router';
import { Button } from '~/components/ui/button';
import { CardTitle, Card, CardFooter } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';

const Quiz: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <Card className="w-full max-w-lg p-6 shadow-lg items-center">
        <CardTitle className="w-full mt-4 mb-4 text-xl font-bold text-center">
          <div className="flex flex-col items-center justify-center">
          <Link to="/jjk">
          <Button variant="outline" className="text-purple-700 font-bold text-xl rounded-full">
              01. 지장간 암기
          </Button>
          </Link>
          <p className="text-gray-400 text-lg font-bold mt-2">버튼을 클릭하세요</p>
          <p className="text-gray-800 text-sm mt-2 w-85 text-center">지장간 암기 도우미입니다.</p>
          </div>
          <Separator className="w-full mt-10 mb-10" />
          <div className="flex flex-col items-center justify-center mt-10">
          <Link to="/ss">
          <Button variant="outline" className="text-purple-700 font-bold text-xl rounded-full">
              02. 십신 암기
          </Button>
          </Link>
          <p className="text-gray-400 text-lg font-bold mt-2">버튼을 클릭하세요</p>
          <p className="text-gray-800 text-sm mt-2 w-85 text-center">십신 암기 도우미입니다.</p>
          </div>
          <Separator className="w-full mt-10 mb-10" />
          <div className="flex flex-col items-center justify-center mt-10">
          <Link to="/ox">
          <Button variant="outline" className="text-purple-700 font-bold text-xl rounded-full">
              03. OX 퀴즈
          </Button>
          </Link>
          <p className="text-gray-400 text-lg font-bold mt-2">버튼을 클릭하세요</p>
          <p className="text-gray-800 text-sm mt-2 w-85 text-center">OX 퀴즈 입니다.</p>
          </div>
          <Separator className="w-full mt-10 mb-10" />
          <div className="flex flex-col items-center justify-center mt-10">
          <Link to="/sky">
          <Button variant="outline" className="text-purple-700 font-bold text-xl rounded-full">
              04. 4지선다 퀴즈
          </Button>
          </Link>
          <p className="text-gray-400 text-lg font-bold mt-2">버튼을 클릭하세요</p>
          <p className="text-gray-800 text-sm mt-2 w-85 text-center">4지선다 퀴즈 입니다.</p>
          </div>
        </CardTitle>
      </Card>
    </div>
  );
};

export default Quiz;
