const express = require('express');
const app = express();
const port = 3000;

// Temporary storage
let users = [];

app.use(express.json());


app.listen(port, '0.0.0.0', () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});

// create account route
app.post('/api/create-account', (req, res) => {
    const { email, password } = req.body;

    
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password required' });
    }

    if (users.find((user) => user.email === email)) {
        return res.status(400).json({ message: 'Email is already registered' });
    }

    try {
        users.push({ email, password }); 
        res.status(201).json({ message: 'Account created successfully!' });
    } catch (error) {
        console.error('Error creating account:', error);
        res.status(500).json({ message: 'Failed to create account.' });
    }
});

// login route
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Login attempt:', email, password);

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password required.' });
    }

    const user = users.find((u) => u.email === email);
    console.log('Found user:', user);

    if (!user) {
        return res.status(400).json({ message: 'Email not found.' });
    }

    if (user.password !== password) {
        console.log('Password mismatch:', user.password, 'vs', password);
        return res.status(400).json({ message: 'Incorrect password.' });
    }

    return res.json({ message: 'Logged in successfully!' });
});


app.get('/api/users', (req, res) => {
    res.json(users);
});
