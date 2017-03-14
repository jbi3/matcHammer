import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/*Schemas = {}*/

//base de travail
/*Profile = new Mongo.Collection("profile");*/

/*Profile.attachSchema(new SimpleSchema({
  picture: {
  type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        accept: 'image/*',
        label: 'Choose file'
      }
    }
  },
  userSurname: {
    type: String
  },
   location:  {
        type: String,
        autoform:{
            afFieldInput:{
                type: 'map',
                mapType: 'terrain',
                zoom: 8,
                geolocation: true
              }
            }
          }
}));*/


//test schema only
var Schema = {};

UserProfile = new Mongo.Collection('userProfile');
UserProfile.allow({
insert: function(userId, doc){
  return !!userId;
},
update: function(userId, doc){
  return !!userId;
}
});

Schema.UserProfileSchem = new SimpleSchema({
profileId: {
  type: String,
  label: "Profile ID",
  autoValue: function() {
    return this.userId
  },
  autoform: {
    type: "hidden"
  }
},
profilePicture: {
  type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        accept: 'image/*',
        label: 'Choose file'
      }
    }
  },
  userSurname: {
    type: String
  },
   location:  {
        type: String,
        autoform:{
            afFieldInput:{
                type: 'map',
                mapType: 'terrain',
                zoom: 8,
                geolocation: true
              }
            }
          }
      });

UserProfile.attachSchema( Schema.UserProfileSchem );

//test redéfinition du user ( à priori à discard )

/*Schema.User = new SimpleSchema({
    username: {
        type: String,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    emails: {
        type: Array,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    // Use this registered_emails field if you are using splendido:meteor-accounts-emails-field / splendido:meteor-accounts-meld
    registered_emails: {
        type: Array,
        optional: true
    },
    'registered_emails.$': {
        type: Object,
        blackbox: true
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.UserProfileSchem,
        optional: true
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
     heartbeat: {
        type: Date,
        optional: true
    }
});

Meteor.users.attachSchema(Schema.User);*/