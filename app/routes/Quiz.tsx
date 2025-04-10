import React from 'react';
import { CardTitle, Card } from '~/components/ui/card';

const Quiz: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <Card className="w-full max-w-lg p-6 shadow-lg items-center">
        <CardTitle className="w-full mt-4 mb-4 text-xl font-bold text-center">
          <p>본 사이트는 데모입니다.</p>
          <p>정식 서비스는 2025년 하반기 제공 예정입니다.</p>
        </CardTitle>
      </Card>
    </div>
  );
};

export default Quiz;
