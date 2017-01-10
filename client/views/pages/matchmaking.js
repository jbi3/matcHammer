import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './matchmaking.html';

/*Template.matchmaking("currentFieldValue", function (fieldName) {
  return AutoForm.getFieldValue("reactiveCurrentValueForm", fieldName) || "not selected";
});*/
AutoForm.hooks({
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
});