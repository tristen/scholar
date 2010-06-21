/*--------------------------------------------------------
	Remove Drupal's Default Grippie.
 ---------------------------------------------------------*/
var addNewEvent;

if (document.addEventListener) {
	addNewEvent= function(element, type, handler) {
		element.addEventListener(type, handler, false);
	};
} else if (document.attachEvent) {
	addNewEvent= function(element, type, handler) {
		element.attachEvent("on" + type, handler);
	};
} else {
	addNewEvent= new Function;
}

addNewEvent(window, 'load', RemoveGrippies);

function RemoveGrippies() {
	var objs = document.getElementsByTagName("div");
	var oi = 0;
	var thisObj;

	for (oi = 0; oi != objs.length; oi++) {
		thisObj = objs[oi];
		if (thisObj.className == 'grippie') {
		        thisObj.className = "";
		}
	}
	return;
}

/*--------------------------------------------------------
	Animation for Messages
 ---------------------------------------------------------*/
Drupal.behaviors.messages = function (context) {
  $('#messages > div:not(.processed)').each(function() {
    $(this).addClass('processed');
    $('span.close', this).click(function() {
      $(this).parent().fadeOut('6000');
    });
    if ($(this).is('.autoclose')) {
      // If a message contains a link, autoclosing is probably a bad idea.
      if ($('a', this).size() > 0) {
        $(this).removeClass('autoclose');
      }
      else {
        // This essentially adds a 3 second pause before hiding the message.
        $(this).animate({opacity:.95}, 3000, 'linear', function() {
          $(this).fadeOut('5000');
        });
      }
    }
  });
}

/*--------------------------------------------------------
	General Base style.
 ---------------------------------------------------------*/
 Drupal.behaviors.interface = function (context) {
   
   //Growing textarea
 	$('textarea').autogrow();
 }