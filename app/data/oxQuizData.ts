// app/data/oxQuizData.ts

export interface OxQuizItem {
    id: string;
    question: string;
    answer: boolean;
    explanation?: string;
  }
  
  export const oxQuizData: OxQuizItem[] = [
    {
      id: "q1",
      question: "甲은 木의 양(陽)이다.",
      answer: true,
      explanation: "甲은 천간 중 양의 木입니다. 木의 음(陰)으로는 乙이 있죠.",
    },
    {
      id: "q2",
      question: "자평진전과 자평진전평주는 같은 책이다.",
      answer: false,
      explanation: "자평진전은 청나라 시절 심효첨에 의해 쓰여졌고, 자편진전 평주는 1936년 서락오에 의해 쓰여졌습니다.",
    },
    {
      id: "q3",
      question: "戊土는 癸水와 합하여 물을 낳는다.",
      answer: false,
      explanation: "무계합화화 입니다. 병신합화수죠죠.",
    },
    {
        id: "q4",
        question: "음과 양은 고정되어있는 것이 아니다.",
        answer: true,
        explanation: "음과 양은 고정되어있는 것이 아니라 변화하는 것입니다. 예를 들면 끓는물은 화로불과 비교하면 음이지만, 얼음물과 비교하면 양입니다.",
    },
    {
        id: "q5",
        question: "천간은 오행 운동을, 지지는 사계절 운동을 합니다.",
        answer: true,
        explanation: "천간과 지지의 공통점과 차이점에 대한 단편편적인 설명입니다. 천간은 목화토금수 오행의 상생운동을, 지지는 인묘진, 사오미, 신유술, 해자축의 사계절운동을 합니다. 그래서 천간의 해석과 지지의 해석은 달라져야 합니다.",
    },
  ];
  