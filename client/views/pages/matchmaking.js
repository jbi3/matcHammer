import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './matchmaking.html';

/*  Template.matchmaking.rendered = function (){
    var handle = $( "#custom-handle" );
    $( "#sliderDistance" ).slider({
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      }
    });
  };*/
  $('#ex1').slider({
  formatter: function(value) {
    return 'Current value: ' + value;
  }
});

$("#ex2").slider({});