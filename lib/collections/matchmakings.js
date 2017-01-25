//test schema

RangeSchema = new SimpleSchema({
  lower: {
    type: Number
  },
  upper: {
    type: Number
  }
});

//content//

Matchmakings = new Mongo.Collection("matchmakings");
Matchmakings.attachSchema(new SimpleSchema({
  moverange: {
    type: Number,
    label: "Rayon de déplacement en kilomètres :",
    min: 0
  },
  pointsMini: {
    type: Number,
    label: "Minimum de points :",
    min: 0
  },
  pointsMaxi: {
  	type: Number,
    label: "Maximum de points :",
    min: 0
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
//test slider
	slider: {
    type: RangeSchema,
    max: 1500,
    min: 100,
/*    start: [500,1000],*/
    autoform: {
      type: "noUiSlider",
      noUiSliderOptions: {
        step: 50
      },      
      noUiSlider_pipsOptions: {
        mode: 'steps',
        density: 15
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

