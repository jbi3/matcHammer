import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './profile.html';
/*import { users };*/


/*Template.profile.helpers({
  users() {
    return users;
  }
});*/

Template.profile.events({
/*	
  'click #register': function(e) {
    e.preventDefault();
    
    $('#registerModal').modal('show');
  },*/
  'click #locate': function(e) {
    e.preventDefault();
    
    Modal.show('locationModalTemplate');
  }
});
