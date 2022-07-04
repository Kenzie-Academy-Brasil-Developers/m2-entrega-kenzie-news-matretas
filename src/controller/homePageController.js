import Request from "./requestController.js";
import Cards from "../modules/cards.js";
import HighlightNews from "../modules/highlightNews.js";

class HomePageController {

    static async newHighlightNewsMobile() {
        const highlight = document.querySelector(".highlight");
        highlight.innerHTML = "";

        const news = await Request.getData();
        const newsID = Math.floor(Math.random() * (11 - 2 + 1)) + 2;

        for(let i = 0; i < news.length; i++) {

            if(news[i].id == newsID) {

                const newHighlight = new HighlightNews(news[i].imagem, news[i].categoria, news[i].titulo, news[i].resumo, news[i].fonte, news[i].noticia_completa);

                const highlightCard = newHighlight.createHighlightMobile();

                highlight.append(highlightCard);
            }
        };
    };
};

export default HomePageController;

