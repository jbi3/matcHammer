/*matchmakingForms = new Mongo.Collection('matchmakingForms');
matchmakingForms.attachSchema(matchmakingSchema);

matchmakingForms.allow({
  insert: function(uid,doc){
    console.log("insertDoc", doc );
    return true;
  },
  update: function(uid,doc){
    console.log("updateDoc", doc );
    return true;
  },
  remove: function(){
    return true;
  }
});

if( Meteor.isClient ){
  Meteor.subscribe("matchmakingForms");
}

if( Meteor.isServer ){
  Meteor.publish("matchmakingForms",function(){
    return matchmakingForms.find();
  });
}*/