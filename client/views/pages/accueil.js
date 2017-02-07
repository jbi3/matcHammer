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
/*	
  'click #register': function(e) {
    e.preventDefault();
    
    $('#registerModal').modal('show');
  },*/
  'click #login': function(e) {
    e.preventDefault();
    
    Modal.show('loginModalTemplate');
  },
  'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },
  'click #footerUse': function(e) {
    e.preventDefault();
    $('#footerModal').modal('show');
  }
});

///////////////////////////////
/////login/register events/////
///////////////////////////////

/*if (Meteor.isClient){

  Template.loginModalTemplate.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
        console.log("Form submitted.");
        //$('#modal').modal('hide'); Router.go('route_after_dissmiss')
        	Router.go('/matchmaking');
        	$('.modal-backdrop').remove();
     }
   });

   Template.registerModalTemplate.events({
     'submit form': function(event) {
       event.preventDefault();
       var registerPasswordVar = event.target.registerPassword.value;
       var registerConfirmPasswordVar = event.target.registerConfirmPassword.value;

       if (checkEmailIsValid && (registerPasswordVar == registerConfirmPasswordVar)) 
       {
         var usernameVar = event.target.registerPseudo.value;
         var emailVar = event.target.registerEmail.value;
         var passwordVar = event.target.registerPassword.value;
         var addressVar = event.target.registerAddress.value;
           Accounts.createUser({
             username: usernameVar,
              email: emailVar,
              password: passwordVar,
              postCode: addressVar
              
             });
           }
         else{
        	console.log("error");
          $('.modal-backdrop').remove();
          Router.go('/accueil');
         }
	   }
 });
}
*/


/*if (Meteor.isClient){



Accounts.onCreateUser(function(options, user) {  
  user.profile = {};

  // we wait for Meteor to create the user before sending an email
  Meteor.setTimeout(function() {
    Accounts.sendVerificationEmail(user._id);
  }, 2 * 1000);

  return user;
});

}*/

// test accounts package

  mySubmitFunc = function(error, state){
  if (!error) {
    if (state === 'signIn') {
      $('#loginModal').modal('toggle');
      $('.modal-backdrop').remove();
      /*Modal.hide('loginModalTemplate');*/
      Router.go('/matchmaking');
    }
    if (state === 'signUp') {
      // Successfully registered
      $('.modal-backdrop').remove();
      /*Modal.hide('loginModalTemplate');*/
      Router.go('/profile');    
    }
  }
};

AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: true,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/matchmaking',
    redirectTimeout: 4000,

    // Hooks
   // onLogoutHook: myLogoutFunc,
    onSubmitHook: mySubmitFunc,
   // preSignUpHook: myPreSubmitFunc,
   // postSignUpHook: myPostSubmitFunc,

    // Texts
    texts: {
      button: {
          signUp: "Création de compte"
      },
      socialSignUp: "Créer un compte",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
      forgotPwd: "mot de passe oublier",
      signIn: "connexion"
      },
    },
});

