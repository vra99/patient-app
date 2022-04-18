module.exports = function(app) {
  app.use(
    '/patients',
    function(req, res) {
      res.json(require(__dirname + '/../public/data.json'));
    }
  );
};