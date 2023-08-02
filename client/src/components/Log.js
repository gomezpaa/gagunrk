function Log() {
    return (
    <div className="Log">
	<div className="report-log">
	    <p className="report-log-text">
		----- Nov 15 2022 -----
		I contacted Professor Spetka about being my capstone advisor for the Spring semester.
		My idea for this project was the following "I want to grab news headlines from different
		news sources and post them on a website that updates. The main goal from the website is to
		go back to a specific date and read the headline from then. A website that does something
		similar is archive.org, where you can pull up archives from the past. I was thinking of
		making a database that would hold the headlines and details."
	    </p>
	</div>
	<div className="report-log">
	    <p className="report-log-text">
	        ----- Winter Break (Dec 2022 - Jan 2023) -----
	        I focused on doing research on how this could be possible. Building a website with Node.js
	        was not new to me but I never used MySQL in development before. Addtionally, I do not know
	        how to grab these news sources. Professor Joshua White told me to look into using
	        BeautifulSoup4

	        BeautifulSoup4(BS4) is a library that makes is easy to scrape information from web pages. This
	        library sits atop an HTML or XML parser and provide Pythonic idioms for iterating, searching,
	        and modiyfing the parse tree. In this case, I will be using a XML parser because I decided to
	        scrape the New York Times' RSS feeds. RSS (Really Simple Syndication) refers to files easily
	        read by a computer, called XML files, that automatically update information. This allows
	        authors to publish notifications of new content, like newscasts, blog posts, and weather reports,
		on their website. With BS4 and a XML parser, I can scrape NYT RSS feeds of different NYT sections.
	    </p>
	</div>

	<div className="report-log">
	    <p className="report-log-text">
	        ----- Jan 22 - 28 2023 -----
		I started using the BS4 library with Python. The Python script, scraper.py would make a request
		to the RSS feed link and iterate through each item tag and extract the contents from the title,
		link, description, and pubDate tags. The content from the tags were then print out on the
		terminal screen, essentially printing out headline snippets. I also created a Git repository so I
		can save all of my files. Additionally, I linked the database to the Python script, so whenever I
		execute it, it will save the contents in a table.
    	    </p>
	</div>

        <div className="report-log">
	    <p className="report-log-text">
		----- Feb 1 - 8 2023 -----
		Now that articles were being stored in a database, I wanted to make the web app that will display
		the contents that are stored in the database. To do this, I start developing a a very simple Node
		web app. The web app renders a home, login, signup, and an about page. I made a dropdown navigation
		bar using HTML and CSS, W3Schools has great tutorials on how to make it by scratch. I also worked on
		using div tags to make cards, which will hold the information extracted from the RSS feeds. Once I
		had initial layout of the website, I created a seperate db.js file that connect to the "test" database
		and queries the 'nyt_us' table "SELECT * FROM nyt_us;". This query will allow me to pass the data to
		home page. I am using EmbededJavaScript (EJS) to loop through each entry of the table and displayeach
		article in card format.
	    </p>
	</div>

	<div className="report-log">
		<p className="report-log-text">
		    ----- Feb 13 2023 -----
		    I emailed Professor Spetka to show the working prototype that I had.
		</p>
	</div>

	<div className="report-log">
		<p className="report-log-text">
		    ----- Feb 14 2023 -----
		    Met with Professor Spetka and spoke to him about uploading progress to DogNet. The meeting went great
		    and I need to implement other features like login and register. I will also look into searching and
		    scraping from the other websites.
		</p>
	</div>

	<div className="report-log">
		<p className="report-log-text">
		    ----- Feb 28 2023 -----
		    I looked into using Bootstrap to make navigation bars and the div cards. It was messing up with my
		    links and other CSS files. Instead, I looked into using CSS media queries. This allows me to make the
		    nav bar buttons to stack on top of each other when the screen was too small. I also rearranged the CSS
		    stylesheets to make it easier to edit.                              
		</p>                                                                        
	</div>                                                                              
												    
	<div className="report-log">                                                            
	    <p className="report-log-text">                                                 
		----- Mar 2 2023 -----                                              
		I made a massive break through! I started wondering how Google has access to the full article. If you
		copy and paste a paragraph from an article and search it on Google, you will get a link to the specific
		article. Upon further research, Google has webcrawlers, Googlebot, that crawl websites on the internet
		without restriction to any resource. This is possible to User-Agent request headers. This is a characteristic
		string that lets servers and network peers identify the application, operating system, vendor, and/or
		version of the requesting User-Agent. Google has special User-Agents that lets servers know that it is
		a Googlebot. I can use the Python request library to use a Googlebot User-Agent request header which will
		return results of the request. If I use the Googlebot User-Agent header, the scraper Python script will
		be able to scrape full NYT articles without having an account.      
	    </p>                                                                        
	</div>                                                                              
												    
	<div className="report-log">                                                            
	    <p className="report-log-text">                                                 
		----- Mar 4 2023 -----                                              
		New version of scraper.py will check in the database if the article has been previously saved. If there
		is a new article, then it will add the new ones and update if the article changed. I created a new Python
		script, rss_scraper.py, that scrapes full NYT articles. I also created a new database named "NYT" which is
		where the full articles are being stored. I edited the db.js file to connect to the 'NYT' database and query
		the database to display the articles on the new NYT page. The NYT pa    ge has a tab selector for the different
		scraper made.                                                       
	    </p>                                                                        
	</div>                                                                              
												    
	<div className="report-log">                                                            
	    <p className="report-log-text">                                                 
		----- Spring Break! Mar 12 - 19 2023 -----                          
		I did not make any progress on my CS capstone because I needed to start working on my NCS capstone as well.
		My NCS capstone is to host the site I am making on my own home network. So, I'll be transfering the files to
		my to the web server. It is running on a Raspberry Pi 4. I also want to look into preventing SQL injection
		attacks because it will be available on the internet. The last thing I want is an unauthorized user getting
		access to my database.                                              
	    </p>                                                                        
	</div>                                                                              
												    
	<div className="report-log">                                                            
	    <p className="report-log-text">                                                 
		----- Mar 20 - Apr 7 2023 -----                                     
		I have not made any progress on either capstone projects. There were other assignments, and midterms that
		I needed to catch up on. However, I was still doing research relevant to preventing SQL injection attacks.
		OWASP 2021 Top 10 vulnerabilities states that injection attacks was ranked third. They state that SQL
		injection flaws are introduced in the code when developers use dynamic queries and concatenate user-supplied
		input as strings. I will look into using parameterized queries to prevent SQL injection attacks.
	    </p>                                                                        
	</div>                                                                              
												    
	<div className="report-log">                                                            
	    <p className="report-log-text">                                                 
		----- Apr 9 - 13 2023 -----                                         
		I finally got the register and login forms to fully work. I created     a new table in the 'test' database named
    		'users' which stores the username, email address, and password. As an additional method security, I am storing
		the hashed password instead of plain-text. This is possible with the bcrypt library, by performing 10 salt rounds
		to hash the password. When a user logs in, the code will check if the username exists in the 'users' table. If so,
		the hashed password will be pulled up and be used to compare to the password the user submitted in the form.
	    </p>                                                                        
	</div>                                                                              
												    
	<div className="report-log">                                                            
	    <p className="report-log-text">                                                 
		----- Apr 15 - 17 2023 -----                                        
		I added a new dropdown menu for a logout button. When the user logs in, a new dropdown menu replaces the login
		and register buttons with the username. I also started messing around with cookies and sessions, if the user is
	        inactive for 15 mins, the user is logged out. 
	    </p>                                                                        
	</div> 

    </div>
    )
}

export default Log;
