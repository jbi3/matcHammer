/*//param range nouisliders
RangeSchema = new SimpleSchema({
  lower: {
    type: Number
  },
  upper: {
    type: Number
  }
});

matchmakingSchema = new SimpleSchema({
  slider: {
    type: RangeSchema,
    max: 150,
    min: 30,
    autoform: {
      type: "noUiSlider",
      noUiSliderOptions: {
        step: 10
      },      
      noUiSlider_pipsOptions: {
        mode: 'steps',
        density: 5
      }
    }
  }
});

Schemas.matchmakingSchema = new SimpleSchema({
    points: {
        type: Number,
        optional: false,
        label: "distance de déplacement",
        max: 3000
    },
    pointRange: {
        type: Number,
        optional: false,
        label: "Number and street",
        max: 32
    },    
});
*/