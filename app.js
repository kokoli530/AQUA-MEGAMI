document.addEventListener('alpine:init', () => {
    Alpine.data('gambarFigure', () => ({
        items: [
            {id: 1, name: 'figure miko', img: 'img/anime2.jpg', price: 20000},
            {id: 2, name: 'figure miko', img: 'img/anime3.jpg', price: 20000},
            {id: 3, name: 'figure miko', img: 'img/anime4.jpg', price: 20000},
            {id: 4, name: 'figure miko', img: 'img/anime5.jpg', price: 20000},
        ],
    }));
});
