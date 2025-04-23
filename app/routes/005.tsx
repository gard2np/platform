import React from 'react';
import { Link } from 'react-router';
import { Button } from '~/components/ui/button';
import { CardTitle, Card, CardFooter } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';

const Quiz: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 h-[89vh]">
      <Card className="w-full max-w-lg p-6 shadow-lg items-center">
        <CardTitle className="w-full mt-4 mb-4 text-xl font-bold text-center">
          <div className="flex flex-col items-center justify-center">
          <Link to="/jjk">
          <Button variant="outline" className="text-purple-700 font-bold text-xl rounded-full">
              01
          </Button>
          </Link>
          <p className="text-gray-400 text-lg font-bold mt-2">회원가입 서비스는 준비중입니다.</p>
          </div>
        </CardTitle>
      </Card>
    </div>
  );
};

export default Quiz;
