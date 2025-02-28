export const highlightCard = (event: MouseEvent | TouchEvent) => {
  const target = event.currentTarget as HTMLElement;
  const allCards = document.querySelectorAll<HTMLElement>(".card"); // Type as HTMLElement

  allCards.forEach((card: HTMLElement) => {
    card.classList.remove("highlighted");
    card.classList.add("faded");
  });

  target.classList.add("highlighted");
  target.classList.remove("faded");
};

export const resetCards = () => {
  const allCards = document.querySelectorAll<HTMLElement>(".card");
  allCards.forEach((card: HTMLElement) => {
    card.classList.remove("highlighted", "faded");
  });
};
