import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './gamesManager.html';

/*var userLogged = Meteor.user()*/
/*var playerId = this._id;*/
Template.gamesWaitingList.helpers ({

	'match': function() {
  return Matchmakings.find();

}
});
Template.gamesActiveList.helpers ({

	'match': function() {
  return Matchmakings.find();

}
});
Template.gamesPastList.helpers ({

	'match': function() {
  return Matchmakings.find();

}
});
