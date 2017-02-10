import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './loginLayout.html';

$(document).ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 3000);
});