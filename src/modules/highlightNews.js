class HighlightNews {
    constructor(img, category, title, resume, font, newsURL) {
        this.img = img;
        this.category = category;
        this.title = title;
        this.resume = resume;
        this.font = font;
        this.newsURL = newsURL;
    };

    createHighlightMobile() {
        const highllight = document.querySelector(".highlight");

        const content = document.createElement("div");
        const category = document.createElement("div");
        const title = document.createElement("h2");
        const font = document.createElement("span");
        const link = document.createElement("a");

        content.classList.add("highlight--content");
        category.classList.add("highlight--category");
        title.classList.add("highlight--title");
        font.classList.add("highlight--font");

        highllight.style.backgroundImage = `url(${this.img})`;
        category.innerText = this.category;
        link.innerText = this.title;
        link.href = this.newsURL;
        font.innerText = `Fonte: ${this.font}`;

        title.append(link);
        content.append(category, title, font);

        return content;
    };
};

export default HighlightNews;
