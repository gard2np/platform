export interface MultiChoiceQuiz {
    id: string;
    question: string;
    options: string[];
    answerIndex: number;
    explanation?: string;
  }
  
  export const multiChoiceQuizList: MultiChoiceQuiz[] = [
    {
      id: "mcq001",
      question: "다음 중 틀린 설명은?",
      options: [
        "갑목은 음간이다.",
        "천간과 지지는 해석할 때 다르다.",
        "자평진전 평주는 자평진전의 해설서다.",
        "갑목일간은 활발한 성격일 가능성이 높다.",
      ],
      answerIndex: 0,
      explanation: "갑목은 음간이 아니라 양간입니다. 천간과 지지는 해석할 때 같습니다. 자평진전 평주는 자평진전의 해설서입니다. 갑목일간은 활발한 성격일 가능성이 높다.",
    },
    {
      id: "mcq002",
      question: "갑목의 특성으로 옳은 것은?",
      options: [
        "감정 표현이 서툴다.",
        "마른 가지 같은 유약함을 가진다.",
        "직선적이고 추진력이 강하다.",
        "물처럼 유연하다.",
      ],
      answerIndex: 2,
      explanation: "갑목의 물상은 곧고 뻗어나가는 소나무입니다. 그래서 직선적이고 장애물을 돌파하듯이 추진력이 강합니다.",
    },
    {
      id: "mcq003",
      question: "지지 인목과 관계없는 것은은?",
      options: [
        "지장간으로 무, 병, 갑을 가진다.",
        "12개 월 중에서 2월을 의미한다.",
        "24시간 중 5시 30분 ~ 7시 30분을 의미한다.",
        "지지 신금(申金)과 만나서 충돌한다.",
      ],
      answerIndex: 2,
      explanation: "인목은 축시 다음으로 3시 30분 ~ 5시 30분을 의미합니다..",
    },
    {
      id: "mcq004",
      question: "십신 중 상관과 관련하여 설명이 바른것은?",
      options: [
        "편관을 상하게 한다는 의미를 가진다.",
        "경금(庚金)일간에게 상관은 계수(癸水)이다.",
        "인성이 강하면 상관도 반드시시 강해진다.",
        "식상혼잡은 일간에게 있는 천부적인 재능을 의미한다",
      ],
      answerIndex: 1,
      explanation: "정관을 상하게 한다는 의미. 인성이 상관을 제어합니다. 식상혼잡은 식신과 상관이 혼재하여 혼란스러워 합니다.",
    },
  ];
  