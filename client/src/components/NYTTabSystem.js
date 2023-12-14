import React, { useState } from 'react';
import NYTSnippets from './NYTSnippets';
import NYTUSNews from './NYTUSNews';
import NYTHomePage from './NYTHomePage';
import './Tabs.css'

const NYTTabSystem = () => {
    const [activeTab, setActiveTab] = useState('snippets');

    const handleTabClick = (tab) => {
	setActiveTab(tab);
    };

    return (
	<div>
	    <div className='tab-buttons'>
		<button 
		    className={activeTab === 'snippets' ? 'active' : ''}
		    onClick={() => handleTabClick('snippets')}
		>
		    NYT Snippets
		</button>
		<button 
		    className={activeTab === 'homepage' ? 'active' : ''}
		    onClick={() => handleTabClick('homepage')}
		>
		    NYT Home Page
		</button>
		<button 
		    className={activeTab === 'us' ? 'active' : ''}
		    onClick={() => handleTabClick('us')}
		>
		    NYT U.S. News
		</button>
	    </div>

	    <div className='tab-content'>
		{activeTab == 'snippets' && <NYTSnippets />}
		{activeTab == 'homepage' && <NYTHomePage />}
		{activeTab == 'us' && <NYTUSNews />}
	    </div>
	</div>     
    );
};

export default NYTTabSystem;
