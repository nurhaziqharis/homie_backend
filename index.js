const express = require('express');
const { get } = require('mongoose');
const app = express();

app.use(express.json());

router.get('/signin', async(req, res) => {
    try {
        const indexs = await Index.find()
        res.send(indexs)
    } catch (error) {
        res.status(500).send(error.message)
    }
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
});

app.listen(8080, () => {
  console.log(`Server running at http://localhost:8080`);
});