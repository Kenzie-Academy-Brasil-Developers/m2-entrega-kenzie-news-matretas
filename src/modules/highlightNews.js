class HighlightNews {
    constructor(img, category, title, resume, font, newsURL) {
        this.img = img;
        this.category = category;
        this.title = title;
        this.resume = resume;
        this.font = font;
        this.newsURL = newsURL;
    };

    createHighlight() {
        const container = document.createElement("div");
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const textBox = document.createElement("div");
        const category = document.createElement("div");
        const title = document.createElement("h2");
        const resume = document.createElement("p");
        const font = document.createElement("span");
        const link = document.createElement("a");

        container.classList.add("highlight--container");
        figure.classList.add("highlight--imgBox");
        textBox.classList.add("highlight--textBox");
        category.classList.add("highlight--category");
        resume.classList.add("highlight--resume")
        title.classList.add("highlight--title");
        font.classList.add("highlight--font");

        category.innerText = this.category;
        resume.innerText = this.resume;
        link.innerText = this.title;
        link.href = this.newsURL;
        font.innerText = `Fonte: ${this.font}`;
        document.documentElement.style.setProperty("--imgURL", `url(${this.img})`)

        title.append(link);
        textBox.append(category, title, resume, font);
        container.append(textBox, figure);

        return container;
    };
};

export default HighlightNews;
