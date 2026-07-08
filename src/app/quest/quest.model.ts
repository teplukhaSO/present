export interface Gift {
  step: number;
  emoji: string;
  name: string;
  message: string;
}

export const GIFTS: Gift[] = [
  {
    step: 1,
    emoji: '🧣',
    name: 'шарф',
    message: 'Ми даруємо тобі шарф, щоб не було холодно'
  },
  {
    step: 2,
    emoji: '🎖️',
    name: 'патч на рюкзак',
    message: 'Ми даруємо тобі патч, щоб було чим прикрасити рюкзак'
  },
  {
    step: 3,
    emoji: '🌷',
    name: 'лего-квіти',
    message: 'Ми даруємо тобі лего-квіти, які ніколи не зів’януть'
  },
  {
    step: 4,
    emoji: '💡',
    name: 'LED-стрічка',
    message: 'Ми даруємо тобі LED-стрічку, щоб було ще яскравіше'
  },
  {
    step: 5,
    emoji: '🦆',
    name: 'гумова качечка',
    message: 'Ми даруємо тобі гумову качечку — офіційного напарника з дебагінгу'
  }
];

export const TOTAL_STEPS = GIFTS.length;
