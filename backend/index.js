import express from 'express';

const app = express();

app.get('/test', (req, res) => {
  return res.json('ok test')
})

app.get('/create-story', (req, res) => {
  const url = req.query.url;

  

  return res.json(url);
})

app.listen(8080, () => console.log('Server is running on port 8080'));