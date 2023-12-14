const express = require('express');
const { spawn } = require('child_process');
const rss = require('rss');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const { error } = require('console');
const { stdout, stderr } = require('process');

const app = express();
app.use(express.json());
app.use(cors());
require('dotenv').config();

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
console.log(dbUsername, dbPassword);
const saltRounds = 10;

// Create a MySQL connection
const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: dbUsername,
    password: dbPassword,
    database: 'test',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const userPool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: dbUsername,
    password: dbPassword,
    database: 'test',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, connection) => {
	if (err) throw err;

	connection.query('SELECT 1', (error, results) => {
		connection.release();
	});
});

app.get('/api/rss/articles', async (req, res) => {
    const { page, pageSize } = req.query;
    const pageNumber = parseInt(page);
    const pageSizeNumber = parseInt(pageSize);
    const offset = (pageNumber - 1) * pageSizeNumber;
    
    try {
	const query = 'SELECT * FROM nyt_us ORDER BY id DESC LIMIT ?, ?';
	const results = await pool.promise().query(query, [offset, pageSizeNumber]);

	const feed= new rss({
	    title: "Gagunrk RSS Feed",
	    description: "A sample RSS feed for testing!",
	    feed_url: "https://www.gagunrk.com/api/rss/articles"
	});

	results.forEach((row) => {
	    feed.item({
		title: row.title,
		description: row.description,
		url: row.url,
		date: row.date,
	    });
	});

	res.set('Content-Type', 'application/rss+xml');
	res.send(feed.xml());

    } catch (error) {
	console.error('Error executing the query: ', error);
	res.status(500).json({ error: 'Error executing the query' });
    }
});

app.get('/api/test/articles', async (req, res) => {
    try {
	const { page, pageSize } = req.query;
	const pageNumber = parseInt(page);
	const pageSizeNumber = parseInt(pageSize);
	const offset = (pageNumber - 1) * pageSizeNumber;
	const query = 'SELECT * FROM nyt_us ORDER BY id DESC LIMIT ?, ?';
	const results = await pool.promise().query(query, [offset, pageSizeNumber]);
	res.json(results[0]);
    } catch (error) {
	console.error('Error executing the query: ', error);
	res.status(500).json({ error: 'Error executing the query' });
    }
});


app.get('/api/nytToday/articles', async (req, res) => {
    try {
	const { page, pageSize } = req.query;
	const pageNumber = parseInt(page);
	const pageSizeNumber = parseInt(pageSize);
	const offset = (pageNumber - 1) * pageSizeNumber;
	const query = 'SELECT * FROM nytToday_US ORDER BY id DESC LIMIT ?, ?';
	const results = await pool.promise().query(query, [offset, pageSizeNumber]);
	res.json(results[0]);
    } catch (error) {
	console.error('Error executing the query: ', error);
	res.status(500).json({ error: 'Error executing the query' });
    }
});

app.get('/api/nytHomePage/articles', async (req, res) => {
    try {
	const { page, pageSize } = req.query;
	const pageNumber = parseInt(page);
	const pageSizeNumber = parseInt(pageSize);
	const offset = (pageNumber - 1) * pageSizeNumber;
	const query = 'SELECT * FROM nytHome_US ORDER BY id DESC LIMIT ?, ?';  
	const results = await pool.promise().query(query, [offset, pageSizeNumber]);
	res.json(results[0]);
    } catch (error) {
	console.error('Error executing the query: ', error);
	res.status(500).json({ error: 'Error executing the query' });
    }
});

app.get('/api/scrapeScript', async(req, res) => {
    const articleLink = req.query.articleLink;
    const path = '/home/gomezpa/gagunrk/scripts/nytScraper.py'
    const pythonEnv = '/home/gomezpa/Capstone/bin/python'

    function runScraper(scriptPath, arg) {
	const pyProgram = spawn(pythonEnv, [scriptPath].concat('-l', arg));
	let data = '';

	pyProgram.stdout.on('data', (stdout) => {
	    data += stdout.toString();
	});

	pyProgram.stderr.on('data', (stderr) => {
	    console.log(`stderr: ${stderr}`);
	    console.log(data);
	});

	pyProgram.on('close', (code) => {
	    console.log(`Child process exited with code: ${code}`);
	    const dataArray = data.split('\n').filter(Boolean)
	    console.log(dataArray);
	    res.send(dataArray);
	});
    }

    results = runScraper(path, articleLink);
});

app.post('/api/register', async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const sqlCheck = "SELECT * FROM users WHERE username = ? OR email = ?";
    const sqlInsert = "INSERT INTO users (username, email, password) VALUES (?,?,?)";
    const valueCheck = [username, email];
    const hash = bcrypt.hashSync(req.body.password, saltRounds);
    const valueInsert = [username, email, hash];

    try {
	const [rows] = await userPool.promise().query(sqlCheck, valueCheck);
	const existingUser = rows.length > 0;

	if (existingUser) {
	    res.status(409).json({message: 'Username or email already exists'});
	} else {
	    await userPool.promise().query(sqlInsert, valueInsert);
	    res.status(200).json({message: 'User registered successfully'});
	}
    } catch (error) {
	console.error('Error registering user:', error);
	res.status(500).json({message: 'Error registering user'});
    }
});

app.post('/api/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const sqlCheck = 'SELECT password FROM users WHERE username = ?';
    const valueCheck = [username];

    try {
	const [rows] = await userPool.promise().query(sqlCheck, valueCheck);
	const userExists = rows.length > 0;

	if (userExists) {
	    const savedHash = rows[0].password;
	    const passwordMatch = await bcrypt.compare(password, savedHash);

	    if (passwordMatch) {
		res.status(200).json({message: 'Login successful'});
	    } else {
		res.status(401).json({message: 'Incorrect password'});
	    }
	} else {
	    res.status(404).json({message: 'User not found'});
	}
    } catch (error) {
	console.log('Error during login:', error);
	res.status(500).json({ message: 'Error during login'});
    }

});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
