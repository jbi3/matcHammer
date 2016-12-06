//
//
//////////////////////////
// Router Scaffolder
//////////////////////////
//Router = {
 //   uri: /*Current URL*/,
 //   routes: [],
     
  //  addRoute: /* function to add a route */,
   // getMatchingRoute:  function to get matching route ,
  //  run: /* function to display the matched route's template */
//};


/*
 router 
*/

//config
Router.configure({
	layoutTemplate:'layout1',
    loadingTemplate: 'loading',

});

 if(Meteor.isClient){

//redirect method 1
 //redirect to login if the user is not identified
/*Router.onBeforeAction(function() {
        if(!Meteor.userId()) {
            this.redirect('accueil');
        } else {
            this.next();
        }
    },
    {
        except: ['accueil']
    });
*/

//redirect method 2
	//redirects user to login page if not logged in
/*	var requireLogin = function(){
		if(!Meteor.user()){
			if(Meteor.loggingIn()){
				Router.go('home');
				this.next();
			} else{
				Router.go('login');
				this.next();
			}
		}else{
			this.next();
		}
	}

Router.onBeforeAction(requireLogin, {
	except: ['register']
*/

//redirect method 3
var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function(pause) {
      if (!Meteor.userId()) {       
        Router.go('accueil');
        return pause();
      }else{
            this.next();
        }
    }
};
Router.onBeforeAction(OnBeforeActions.loginRequired, {
    except: ['accueil']
});
Router.map(function() {
    this.route('accueil',{
        path: 'accueil',
        layoutTemplate: 'loginLayout'  // override main layout and use 'loginLayout' templatate as main layout
    });
    /*this.route('notFound', {
    path: '*'
    });*/

});
//router de layout

/*Router.route('/loginLayout',{
	layoutTemplate: 'loginLayout'
});

Router.route('/layout1',{
	layoutTemplate: 'layout1'
});*/

//accueil router avec le layout sans menu
Router.route('/', function () {
  this.render('accueil')
});
//Configure route for login
Accounts.onLogin(function () {
	redirect:'/matchmaking'
});

//actual website

Router.route('/matchmaking', function(){
    this.render('matchmaking')
   /* name: 'matchmaking',
    template: 'matchmaking'*/
});

Router.route('/friendsList', function(){
    this.render('friendsList')
});

Router.route('/gamesManager', function(){
    this.render('gamesManager')
});

Router.route('/conversations', function(){
    this.render('conversations')
});

Router.route('/profile', function(){
    this.render('profile')
});

Router.route('/profileModification', function(){
    this.render('profileModification')
});
}