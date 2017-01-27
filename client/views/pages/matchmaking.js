import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './matchmaking.html';




/*Template.matchmaking.helper("armyOptions", function() {
    return [
        {label: "2013", value: 2013},
        {label: "2014", value: 2014},
        {label: "2015", value: 2015}
    ];
});*/


Template.matchmaking.helpers({
  armyOptions: function () {
    return [
      {
        optgroup: "Imperium",
        options: [
          {label: "Adeptus Astartes", value: "Adeptus Astartes"},
          {label: "Space Marines", value: "Space Marines"},
          {label: "Adeptus sororitas", value: "Adeptus sororitas"}
        ]
      },
      {
        optgroup: "Oreilles pointues",
        options: [
          {label: "Eldars", value: "Eldars"},
          {label: "Eldars noirs", value: "Eldars noirs"},
          {label: "Arlequins", value: "Arlequins"}
        ]
      },
      {
        optgroup: "Xenos",
        options: [
          {label: "Tyranides", value: "Tyranides"},
          {label: "Orks", value: "Orks"},
          {label: "Chaos", value: "Chaos"},
          {label: "Chaos Demons", value: "Chaos Demons"},
          {label: "Necrons", value: "Necrons"}
        ]
      }
    ];
  }
});

AutoForm.hooks({
  matchMakers: { // Use whatever name you have given your form
    before: {
      method: function(doc) {
        var form = this;
        // clear the error that gets added on the previous error so the form can proceed the second time
        form.removeStickyValidationError('startDate');
        return doc;
      }
    },
    onSuccess: function(operation, result, template) {
      if (result) {
        // do whatever you want if the form submission is successful;
      }
    },
    onError: function(operation, error) {
      var form = this;
      if (error) {

        if (error.reason && error.reason.indexOf('duplicate key error')) {
          // We add this error to the first field so it shows up there
          form.addStickyValidationError('startDate', 'notDateCombinationUnique'); // of course you have added this message to your definition earlier on
          AutoForm.validateField(form.formId, 'startDate');
        }

      }
    }
  }
});


/////////////////////////////////////////////////////////////////////////////////////
////////////////////              tests                          ////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/*Template.matchmaking("currentFieldValue", function (fieldName) {
  return AutoForm.getFieldValue("reactiveCurrentValueForm", fieldName) || "not selected";
});*/
/*var sliderValue = salut.value;
Template.matchmaking.rangeValue=function(){
     
     return sliderValue;
     //then you can get this session and return it in a helper to display on your page
};



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
});*/

/*Template.matchmaking.helpers({

'moverangeSliderVal' : function(){
  return moverange.val();
}
});*/