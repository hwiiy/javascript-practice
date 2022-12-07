
let news = [];
const getLatestNews = async () => {
    let url = new URL(`https://api.newscatcherapi.com/v2/search?q=Apple&from='2021/12/15' &countries=KO&page_size=10`);
    let header = new Headers({
        'x-api-key':'IYlEal90kQMPXkG8o8dZO3sUAATAcnSN90PuGnFOaM8',
    });
    let response = await fetch(url,{headers:header});
    let data = await response.json();
    news = data.articles;
    console.log(news)
    render ();
}


const render= () => {
    let newsHTML = '';
    newsHTML = news.map((news) => {
        return `
        <div class="row news">
        <div class="col-lg-4">
            <img class="news-img-size"
                src=${news.media}
                alt="">
        </div>
        <div class="col-lg-8">
            <h2 id="news-title">title</h2>
            <p class="contents">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis
                cumque eaque amet
                iste autem consectetur laboriosam, dolor modi! Odit at reiciendis ullam fuga nobis vel iure,
                asperiores maiores eveniet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sit deserunt expedita doloremque
                repellat possimus porro adipisci eligendi, voluptatem eius accusantium ex, excepturi quasi
                recusandae. Fugit ipsam velit consectetur ducimus?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ipsam repellat dignissimos,
                atque odio est repudiandae reprehenderit maxime ullam quos praesentium quisquam. Architecto
                magni blanditiis illum ullam soluta. Fuga, molestias!
            </p>
            <div id="published-date">KBS* 2022/12/6</div>
        </div>
    </div>
        `
    }).join("")


    document.getElementById("news-board").innerHTML = newsHTML;
};


getLatestNews();
