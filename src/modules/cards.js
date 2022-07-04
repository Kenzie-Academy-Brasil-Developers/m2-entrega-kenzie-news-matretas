class Cards {  
    constructor(img, category, title, resume, font, newsURL) {
        this.img = img;
        this.category = category;
        this.title = title;
        this.resume = resume;
        this.font = font;
        this.newsURL = newsURL;
    };
    
    criarCards() {
        const card = document.createElement("div");
        const category = document.createElement("div");
        const title = document.createElement("h3");
        const link = document.createElement("a")
        const resume = document.createElement("p");
        const font = document.createElement("span");

        card.classList.add("card");
        category.classList.add("card--category");
        title.classList.add("card--title");
        resume.classList.add("card--resume");
        font.classList.add("card--font");

        category.innerText = this.category;
        link.innerText = this.title;
        link.href = this.newsURL;
        resume.innerText = this.resume;
        font.innerText = this.font;

        title.append(link);
        card.append(category, title, resume, font);

        return card;
    };
};

export default Cards;