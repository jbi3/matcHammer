import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './layout1.html';

//notifications dropdown function
$(function() {
  // Setup drop down menu
  $('.dropdown-toggle').dropdown();
 
  // Fix input element click problem
  $('.dropdown input, .dropdown label').click(function(e) {
    e.stopPropagation();
  });
});

//match hammer redirect
Template.layout1.events({
  'click #navbarMatchmakingLink': function(e) {
    e.preventDefault();
    Router.go('matchmaking');
  }
});
//menu open modal
Template.layout1.events({
  'click #menu': function(e) {
    e.preventDefault();
    $('#menuModal').modal('show');
  }
});
//footer open modal
Template.layout1.events({
  'click #footerUse': function(e) {
    e.preventDefault();
    $('#footerModal').modal('show');
  }
});

////////////////////////////////////////
//menu template change view view links//
////////////////////////////////////////
Template.menuModal.events({
    'click #menuMatchmakingLink': function(e, t){
      console.log("You clicked");
      console.log(this);
       /*Meteor.Router.to('/rooms/' + this.id);*/
       $('#menuModal').modal('hide');
       Router.go('/matchmaking');

     }
});
     Template.menuModal.events({
     'click #menuGamesManagerLink': function(e, t){
      console.log("You clicked");
      console.log(this);
       $('#menuModal').modal('hide');
       Router.go('/gamesManager');
     }
});
     Template.menuModal.events({
     'click #menuConversationsLink': function(e, t){
      console.log("You clicked");
      console.log(this);
      $('#menuModal').modal('hide');
       Router.go('/conversations');
     }
});
     Template.menuModal.events({
     'click #menuFriendsListLink': function(e, t){
      console.log("You clicked");
      console.log(this);
      $('#menuModal').modal('hide');
       Router.go('/friendsList');
     }
});
     Template.menuModal.events({
     'click #menuProfileLink': function(e, t){
      console.log("You clicked");
      console.log(this);
      $('#menuModal').modal('hide');
       Router.go('/profile');
     }
});
//close dialogue onClick
/*     'click .menuLinks': function(e, t){
      console.log("You clicked");
      console.log(this);
      $('#menuModal').modal('hide');
     }*/
