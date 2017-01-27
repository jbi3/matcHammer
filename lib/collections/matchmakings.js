//test schema

RangeSchema = new SimpleSchema({
  lower: {
    type: Number
  },
  upper: {
    type: Number
  }
});

/*SimpleSchema.messages({
  badDate: 'End date must be after the start date.',
  notDateCombinationUnique: 'The start/end date combination must be unique'
});*/

/*Dates._ensureIndex( { start: 1, end: 1 }, { unique: true } )*/

//content//

Matchmakings = new Mongo.Collection("matchmakings");
Matchmakings.attachSchema(new SimpleSchema({
  moverange: {
    type: Number,
    label: "Rayon de déplacement en kilomètres :",
    max: 100,
    min: 5,
        autoform: {
      type: "noUiSlider",
      noUiSliderOptions: {
        step: 5
      },      
      noUiSlider_pipsOptions: {
        mode: 'steps',
        density: 15
      }
    }
  },
  rangePoints: {
    type: RangeSchema,
    label: "Nombre de points (minimum et maximum) :",
    max: 3000,
    min: 500,
/*    start: [500,1000],*/
    autoform: {
      type: "noUiSlider",
      noUiSliderOptions: {
        step: 250
      },      
      noUiSlider_pipsOptions: {
        mode: 'steps',
        density: 15
      }
    }
  },
  army: {
    type: String,
    label: "Armée(s) (optionnel) :",
    optional: true
  },
  /*'army': {
    type: String,
    allowedValues: ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
    autoform: {
      afFieldInput: {
        firstOption: "(Select a State)"
      }
    }
  },*/
  createdBy: {
    type: String,
    autoValue:function(){ return this.userId }
},
createdByName: {
    type: String,
    autoValue:function(){ return Meteor.user().username }
},
startDate: {
    type: Date,
/*    custom: function() {
        var myMinDate = new Date(); //today
        if(myMinDate > this.value) {
            return 'minDate';  //Error string according to the docs.
        } else {
            return true;
        }
    },*/
    autoform: {
      afFieldInput: {
        type: "date"
      }
    }
  },
endDate: {
    type: Date,
    /*custom: function() {
    // get a reference to the fields
    var start = this.field('startDate');
    var end = this;
    // Make sure the fields are set so that .value is not undefined
    if (start.isSet && end.isSet) {
      if (moment(end.value).isBefore(start.value)) return "End date must be after the start date";
    }
  },*/
    autoform: {
      afFieldInput: {
        type: "date"
      }
    }
}

/* createdAt should be implemented*/

/*,
  state:{
  	type: Boolean,
  	defaultValue:function(){ 
  		if ()
  	}
  }*/
}));

