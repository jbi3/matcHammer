import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './accueil.html';

checkEmailIsValid = function (aString) {
  aString = aString || '';
  return aString.length > 1 && aString.indexOf('@') > -1;
}

checkPasswordIsValid = function (aString) {
  aString = aString || '';
  return aString.length > 7;
}
////////////////////////
////// open modals//////
////////////////////////
Template.accueil.events({
  'click #login': function(e) {
    e.preventDefault();
    
    $('#loginModal').modal('show');
  }
});
Template.accueil.events({
  'click #register': function(e) {
    e.preventDefault();
    
    $('#registerModal').modal('show');
  }
});
//footer open modal
Template.accueil.events({
  'click #footerUse': function(e) {
    e.preventDefault();
    $('#footerModal').modal('show');
  }
});
///////////////////////////////
/////login/register events/////
///////////////////////////////
if (Meteor.isClient){
Template.loginModalTemplate.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
        console.log("Form submitted.");
        //$('#modal').modal('hide'); Router.go('route_after_dissmiss')
        	/*Router.go('/matchmaking');*/
        	$('.modal-backdrop').remove();
    }
});

Template.registerModalTemplate.events({
    'submit form': function(event) {
        event.preventDefault();
        var registerPasswordVar = event.target.registerPassword.value;
        var registerConfirmPasswordVar = event.target.registerConfirmPassword.value;

        if (checkEmailIsValid && registerPasswordVar == registerConfirmPasswordVar) {
        var usernameVar = event.target.registerPseudo.value;
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        Accounts.createUser({
        	username:usernameVar,
            email: emailVar,
            password: passwordVar
            
        });
    }
    else{
    	console.log("error");
      $('#registerModal').modal('show');
      Router.go('/accueil');
    }
	}
});
}