const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const projects = require('./data/Projects.json');

app.get('/', (req, res) => {
    res.send('portfolio API is Running');
});

app.get('/projects', (req, res) => {
    res.send(projects)
});

app.get('/projects/:id', (req, res) => {
    const id = req.params.id;
    const selectedProject = projects.find(project => project.id === id);
    res.send(selectedProject);
});

app.listen(port, () => {
    console.log('portfolio Project Server running on port', port);
})