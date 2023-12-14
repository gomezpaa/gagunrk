import React, { useEffect, useState } from "react";
import axios from "axios";
import './Card.css';

function NYTHomePage(){
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const pageSize = 8;

    useEffect (() => {
	fetchSnippets();
    }, [currentPage]);

    const fetchSnippets = () => {
	axios.get(`https://www.gagunrk.com/api/nytHomePage/articles?page=${currentPage}&pageSize=${pageSize}`)
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

    const openModal = (article) => {
	setSelectedArticle(article);
    }

    const closeModal = () => {
	setSelectedArticle(null);
    }
    
    return (
	<div className="News">
	    <div className="card-container">
		{articles.map(article => (
		    <>
			<div className="card" key={article.id}>
			    <h2 className="card-title">{article.title}</h2>
			    <p className="card-description">{article.description}</p>
			    <p className="card-pubDate">{article.date}</p>
			    <button className="modal-btn" onClick={() => openModal(article)}>Read More</button>
			</div>
		    </>
		))}	
	    </div>
	    {selectedArticle && (
		<div className="modal">
		    <div className="modal-content">
			<span className="close" onClick={closeModal}>&times;</span>
			<h2 className="modal-title">{selectedArticle.title}</h2>
			<p className="modal-body">{selectedArticle.full_article}</p>
		    </div>
		</div>
	    )}

	    <div className="page-btn">
		<button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
		<p className="pageCount">Page {currentPage}</p>
		<button onClick={() => goToPage(currentPage + 1)}>Next</button>
	    </div>
	</div>
    )
}

export default NYTHomePage;
