/*
Schemas.Cities = new SimpleSchema({
    location: {
        type: Object
        autoform:
            type: 'map',
            afFieldInput:
    'location.lat':
        type: Number,
        decimal: true
    'location.lng':
        type: Number,
        decimal: true,
      }
});
*/
/*Schemas = {}*/

/*Cities = new Meteor.Collection('cities');*/
/*Schemas.Cities = new SimpleSchema({
    location:
        type: [Number]
        decimal: true
        autoform:
            type: 'map'
  });*/

UserProfiles = new Mongo.Collection("userProfiles");
UserProfiles.attachSchema(new SimpleSchema({
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
}));

