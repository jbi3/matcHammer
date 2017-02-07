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
        optgroup: "IMPERIUM",
        options: [
          {label: "Space Marines", value: "Space Marines"},
          {label: "Blood Angels", value: "Blood Angels"},
          {label: "Dark Angels", value: "Dark Angels"},
          {label: "Deathwatch", value: "Deathwatch"},
          {label: "Grey Knight", value: "Grey Knight"},
          {label: "Space Wolves", value: "Space Wolves"},
          {label: "Astra Militarium", value: "Astra Militarium"},
          {label: "Militarium Tempestus", value: "Militarium Tempestus"},
          {label: "Adepta Sororitas", value: "Adepta Sororitas"},
          {label: "Cult Mechanicus", value: "Cult Mechanicus"},
          {label: "Skitarii", value: "Skitarii"},
          {label: "Inquisition", value: "Inquisition"},
          {label: "Imperial Knights", value: "Imperial Knights"},
          {label: "Officio Assassinorium", value: "Officio Assassinorium"}
        ]
      },
      {
        optgroup: "CHAOS",
        options: [
          {label: "Chaos Space Marines", value: "Chaos Space Marines"},
          {label: "Thousand Sons", value: "Thousand Sons"},
          {label: "Renegade Knights", value: "Renegade Knights"},
          {label: "Khorne Daemonkin", value: "Khorne Daemonkin"},
          {label: "Chaos Daemons", value: "Chaos Daemons"}
        ]
      },
      {
        optgroup: "XENOS",
        options: [
          {label: "Orks", value: "Orks"},
          {label: "Eldar", value: "Eldars"},
          {label: "Dark Eldar", value: "Dark Eldar"},
          {label: "Harlequins", value: "Harlequins"},
          {label: "Necrons", value: "Necrons"},
          {label: "Tau Empire", value: "Tau Empire"},
          {label: "Tyranids", value: "Tyranids"},
          {label: "Genestealer Cults", value: "Genestealer Cults"}
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

