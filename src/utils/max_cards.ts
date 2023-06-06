export const cardWidth = 400;
export const calcMaxCards = () => {
  const windowWidth = window.innerWidth - 30;
  const maxCardsCount = Math.round(windowWidth / cardWidth);
  return maxCardsCount * cardWidth > windowWidth
    ? maxCardsCount - 1
    : maxCardsCount;
};
