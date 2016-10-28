import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.startup(() => {
  // code to run on server at startup
 var UsersList = new Mongo.Collection("users");
UsersList.insert({ text: "jean jacque", createdAt: new Date() });
});
