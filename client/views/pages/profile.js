import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './profile.html';

Template.profile.helpers ({

	'mail': function() {
    return Meteor.user().emails[0].address;
},
	'mailingAddress': function() {
	return Meteor.user().postCode;
	}
});