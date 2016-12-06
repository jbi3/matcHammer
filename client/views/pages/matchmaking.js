import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './matchmaking.html';

/*  Template.matchmaking.event = function (){
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

var stepSlider = document.getElementById('slider-step');

noUiSlider.create(stepSlider, {
  start: [ 4000 ],
  step: 1000,
  range: {
    'min': [  2000 ],
    'max': [ 10000 ]
  }
});

var stepSliderValueElement = document.getElementById('slider-step-value');

stepSlider.noUiSlider.on('update', function( values, handle ) {
  stepSliderValueElement.innerHTML = values[handle];
});

Template.points2PlayWith.rendered = function() {
    $('.slider').each(function() {
      var $this = $(this);
      $this.noUiSlider({
        start: 5,
        connect: "lower",
        step: 0,
        format: wNumb({
          decimals: 0,
        }),
        range: {
          'min': 0,
          'max': 10
        }
      });
      $this.Link('lower').to($('.range'));
    });
  };
