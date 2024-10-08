export interface Games {
  id: number;
  title: string;
  type_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface DetailGames {
  title: string;
  type: string;
  questions: QuestionGames[];
}

export interface QuestionGames {
  question_id: number;
  question_text: string;
  choices: ChoicesGames[];
}

export interface ChoicesGames {
  choice_id: number;
  choice_text: string;
  is_correct: Boolean;
}
