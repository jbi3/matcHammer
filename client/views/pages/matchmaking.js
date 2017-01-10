import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './matchmaking.html';

/*Template.matchmaking("currentFieldValue", function (fieldName) {
  return AutoForm.getFieldValue("reactiveCurrentValueForm", fieldName) || "not selected";
});*/
var sliderValue = salut.value;
Template.matchmaking.rangeValue=function(){
     
     return sliderValue;
     //then you can get this session and return it in a helper to display on your page
};


/*AutoForm.hooks({
  matchMaker: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
      
      if (customHandler(insertDoc)) {
        this.done(console.log("submission succeded"));
      } else {
        this.done(new Error("Submission failed"));
      }
      return false;
    }
  }
});*/