export type FaqItem = {
  value: string;
  question: string;
  answer: React.ReactNode;
};

export interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
}
