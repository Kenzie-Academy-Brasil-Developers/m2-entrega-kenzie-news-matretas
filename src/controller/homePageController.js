import Request from "./requestController.js";
import Cards from "../modules/cards.js";
import HighlightNews from "../modules/highlightNews.js";

class HomePageController {

    static async newHighlightNews() {
        const highlight = document.querySelector(".highlight");
        highlight.innerHTML = "";

        const newsData = await Request.getData();
        const randomId = Math.floor(Math.random() * (11 - 2 + 1)) + 2;

        for(let i = 0; i < newsData.length; i++) {

            if(newsData[i].id == randomId) {

                const newHighlight = new HighlightNews (newsData[i].imagem, newsData[i].categoria, newsData[i].titulo, newsData[i].resumo, newsData[i].fonte, newsData[i].noticia_completa);

                const highlightCard = newHighlight.createHighlight();

                highlight.append(highlightCard);
            }
        };
    };

    static async showCards() {
        const cardsContainer = document.querySelector(".cards--container");
        cardsContainer.innerHTML = "";

        const cardsData = await Request.getData();

        for(let i = 0; i < cardsData.length; i++) {
            const newCard = new Cards (cardsData[i].imagem, cardsData[i].categoria, cardsData[i].titulo, cardsData[i].resumo, cardsData[i].fonte, cardsData[i].noticia_completa);

                const createdCard = newCard.createCards();

                cardsContainer.append(createdCard);
        };
    };
};

export default HomePageController;

