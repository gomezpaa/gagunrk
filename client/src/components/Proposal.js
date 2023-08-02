function Proposal () {
    return (
	<div className="Proposal">
	    <div className="proposal">
		<p className="proposal-text">
		    The importance of the news cannot be overstated. News play a crucial role in informing people about events,
		    issues, and developments that affect their lives. It allows individuals to stay informed about what is happening
		    in their communities, their country, and the world. Access to news is critcal for a democracy to be fully functional.
		    It is essential for individuals to have access to this valuable resource. Without access to news, people would be left
		    uninformed, vulnerable to misinformation, and unable to make informed decisions. It also provides a check on those who
		    hold power in government or corporations. News informs us of the actions of those in power and we can hold them accountable
		    for their decisions and actions.
		</p>
	    </div>

	    <div className="proposal">
		<p className="proposal-text">
		    For my capstone project, I focused on scraping NYT articles from their RSS feeds. The scraped information will be stored in a
		    MySQL database. Information like: title, description, date published, and a link to the article. I will then create a website
		    that uses this database to present to the user the articles. Once that is finshed, I will focus on features like login and
		    registration. Additionally, I want to make sure the login and registration forms do not have SQL flaws like SQL injection. If
		    I have time, I want to also scrape other news sites like Fox News and CNN.
		</p>
	    </div>

	    <div className="proposal">
		<p className="proposal-text">
		    The main goal from this capstone is gain more experience using MySQL and Node.js. I also want to improve writing code in HTML,
		    CSS, and JavaScript. To accomplish the scraping, I will be using Python and BeautifulSoup4. The website itself will be running
		    off a Raspberry Pi 4 Model B.
		</p>
	    </div>
	</div>
    )
}

export default Proposal;
