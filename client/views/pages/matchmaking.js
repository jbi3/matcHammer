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