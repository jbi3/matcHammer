Matchmakings = new Mongo.Collection("matchmakings");
Matchmakings.attachSchema(new SimpleSchema({
  moverange: {
    type: Number,
    label: "Rayon de déplacement en kilomètres",
    min: 0
  },
  pointsMini: {
    type: Number,
    label: "minimum de points",
    min: 0
  },
  pointsMaxi: {
  	type: Number,
    label: "Maximum de points",
    min: 0
  },
  army: {
    type: String,
    label: "armée(s) (optionnel)",
    optional: true
  }
}));