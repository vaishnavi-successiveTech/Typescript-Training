export interface CounterWithSteps{
    initialCount? : number; // ? -> means ist is optional
  step?: number;
  
}

export interface TimeNow{
    timeInterface:string; // date is i astring 
}
export const images: string[] = [
  "/images/education.jpeg",
  "/images/girl.jpg",
  "/images/image-1.jpeg",
  "/images/image-3.jpg",
  "/images/image-4.jpg",
  "/images/image-5.jpeg",
  "/images/image-7.jpeg",
  "/images/image-8.jpeg",
  "/images/image-9.jpeg",
  "/images/man.jpg",
];

export type Player = "X" | "O";
export type CellValue = Player | null;
export type Winner = Player | "Draw" | null;
export type Board = CellValue[];
