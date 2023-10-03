fetch('http://localhost:1337/api/articles')
.then(response => response.json())
.then(data => buildArticles(data.data));


function buildArticles(articles){
    for(let i = 0; i < articles.length; i++){
        const article = articles[i];
        console.log(articles[i])
        const articleElement = buildArticle(article);
        document.querySelector('#articles').appendChild(articleElement);
    }
}
function buildArticle(article){
    const articleElement = document.createElement('div');
    articleElement.classList.add('article');
    articleElement.innerHTML = `
        <h2>${article.attributes.title}</h2>
        <p>${article.attributes.description}</p>
    `;
    return articleElement;
}