class Request {
    static url = "https://kenzie-news-api.herokuapp.com/api/news";

    static async getData() {
        const dados = await fetch(this.url)
        .then((response) => response.json())
        .then((response) => response)
        .catch((err) => {console.log(err)});

        return dados;
    };
};

export default Request;