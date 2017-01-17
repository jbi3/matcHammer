import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './profile.html';

Template.profile.helpers({
  Name: function() {
    return Meteor.user().profile.username;
  }
});