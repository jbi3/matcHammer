Matchmakings = new Mongo.Collection("matchmakings");
Matchmakings.attachSchema(new SimpleSchema({
  moverange: {
    type: Number,
    label: "possibilité de déplacement en kilomètres",
    min: 0
  },
  pointsMini: {
    type: Number,
    label: "minimum de point",
    min: 0
  },
  pointsMaxi: {
  	type: Number,
    label: "maximum de point",
    min: 0
  },
  army: {
    type: String,
    label: "armée( s ) ( optionnel )",
    optional: true
  }
}));