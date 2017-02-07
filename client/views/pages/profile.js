import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './profile.html';

if (Meteor.isClient) {
/*	
	//Changement de l'avatar, a venir
  Template.body.events({
    'click .AddPlaceButton': function (e) {
      e.preventDefault();
      console.log("You pressed the button");
    }
  });

*/

//Template.profile.user_image = function () { if(Meteor.user().services.facebook){ return "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large"; } };

//affichage des informations
Template.profile.helpers ({

	'mail': function() {
    return Meteor.user().emails[0].address;
},
	'mailingAddress': function() {
	return Meteor.user().postCode;
	}
});

}