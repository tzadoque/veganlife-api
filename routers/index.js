module.exports = app => {
  app.get('/', (req, res) => {
    console.log(req.body);
    res.send('hello world!');
  });

  app.post('/hello', (req, res) => {
    console.log(req.body);
    res.send('hello world by post!');
  });
};
