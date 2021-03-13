function carousel() {
  const cards = document.querySelectorAll('.card img');
  const cardInfo = document.querySelectorAll('.info > div');

  function showCardInfo(index) {
    cardInfo.forEach((card) => (card.style.display = 'none'));

    cardInfo[index].style.display = 'block';
  }

  cards.forEach((card, index) =>
    card.addEventListener('click', () => showCardInfo(index))
  );
}

export default carousel;
