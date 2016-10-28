Router.route('/', function () {
  this.render('accueil');
});

Router.route('/connexion', function () {
  this.render('connexion');
});

Router.route('/register', function () {
  this.render('register');
});

Router.route('/matchmaking', function () {
  this.render('matchmaking');
});
Router.route('/gamesManager', function () {
  this.render('gamesManager');
});

Router.route('/friendsList', function () {
  this.render('friendsList');
});

Router.route('/profile', function () {
  this.render('profile');
});

Router.route('/conversations', function () {
  this.render('conversations');
});

Router.route('/profileModification', function () {
  this.render('profileModification');
});

Router.route('/connexion', function () {
  this.render('secondPage');
});