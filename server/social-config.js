import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

//service configuration for log in
ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

//facebook configuration
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '753838591439705',
    secret: 'e8bed3a6991e20df15e544e73009a10a'
});
/*if (Meteor.isServer){*/

//get profile facebook profile picture
/*Accounts.onCreateUser(function(options, user) {
        options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
        user.profile = options.profile;
    return user;

    });*/
//}