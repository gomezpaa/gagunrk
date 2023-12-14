import React, { useEffect, useState} from "react";
import axios from 'axios';
import '../Card.css';

function Snippets() {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;

    useEffect (() => {
	fetchSnippets();
    }, [currentPage]);

    const fetchSnippets = () => {
	axios.get(`https://www.gagunrk.com/api/test/articles?page=${currentPage}&pageSize=${pageSize}`)
	    .then(response => {
		setArticles(response.data);
	    })
	    .catch(error => {
		console.error(error);
	    });
    };

    const goToPage = (page) => {
	setCurrentPage(page);
    };

    return (
	<div className="News">
	    <div className="card-container">
		{articles.map(article => (
		    <div className="card" key={article.id}>
			<h2 className="card-title">{article.title}</h2>
			<p className="card-description">{article.description}</p>
			<p className="card-pubDate">{article.pubDate}</p>
			<a href={article.link}><p className="card-link">Read More</p></a>
		    </div>
		))}
	    </div>
	    <div className="page-btn">
		<button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
		<p className="pageCount">Page {currentPage}</p>
		<button onClick={() => goToPage(currentPage + 1)}>Next</button>
	    </div>
	</div>
    )
}

export default Snippets;
