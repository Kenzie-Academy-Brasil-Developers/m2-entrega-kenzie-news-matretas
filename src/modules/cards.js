class Cards {  
    constructor(img, category, title, resume, font, newsURL) {
        this.img = img;
        this.category = category;
        this.title = title;
        this.resume = resume;
        this.font = font;
        this.newsURL = newsURL;
    };
    
    createCards() {
        const card = document.createElement("div");
        const textBox = document.createElement("div");
        const figure = document.createElement("figure");
        const category = document.createElement("div");
        const title = document.createElement("h3");
        const link = document.createElement("a")
        const resume = document.createElement("p");
        const font = document.createElement("span");

        card.classList.add("card");
        textBox.classList.add("card--textBox");
        figure.classList.add("card--imgBox");
        category.classList.add("card--category");
        title.classList.add("card--title");
        resume.classList.add("card--resume");
        font.classList.add("card--font");

        figure.style.backgroundImage = `url(${this.img})`;
        category.innerText = this.category;
        link.innerText = this.title;
        link.href = this.newsURL;
        resume.innerText = this.resume;
        font.innerText = `Fonte: ${this.font}`;
        
        title.append(link);
        textBox.append(category, title, resume, font);
        card.append(figure, textBox);

        return card;
    };
};

export default Cards;