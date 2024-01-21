window.onload = function() {
    const cardDeck = document.querySelector('#cardDeck');
    const card = document.querySelector('.card');
    const cardWidth = card ? card.offsetWidth : 0;

    function scrollLeft() {
        cardDeck.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }

    function scrollRight() {
        cardDeck.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }

    document.querySelector('#prevBtn').addEventListener('click', scrollLeft);
    document.querySelector('#nextBtn').addEventListener('click', scrollRight);
}