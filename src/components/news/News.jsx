import React, { useState, useEffect } from 'react';

function News() {
  const [popularArticles, setPopularArticles] = useState([]);
  const [sportsArticles, setSportsArticles] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d5ad91cf30fa42abb9608f7095af7c53')
      .then(response => response.json())
      .then(data => {
        // Filter popular articles based on their source name
        const popular = data.articles.filter(article => article.source.name === "The Wall Street Journal");
        setPopularArticles(popular);

        // Filter sports articles based on their source name
        const sports = data.articles.filter(article => article.source.name === "ESPN");
        setSportsArticles(sports);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Popular Articles</h1>
      <ul>
        {popularArticles.map((article, index) => (
          <li key={index}>
            <a href={article.url}>{article.title}</a>
            <p>{article.description}</p>
            <img src={article.urlToImage} alt="newimg" />
          </li>
        ))}
      </ul>

      <h1>Sports Articles</h1>
      <ul>
        {sportsArticles.map((article, index) => (
          <li key={index}>
            <a href={article.url}>{article.title}</a>
            <p>{article.description}</p>
            <img src={article.urlToImage} alt="newimg" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
