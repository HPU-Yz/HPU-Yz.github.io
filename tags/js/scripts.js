<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>/*****************************************
	
    *Author			Bryan Maxim
	*Website		www.bryanmaxim.com
		
 *****************************************/
 
 /* 1. Transition Animations for All Pages
  * 2. Menu Transition Links
  * 3. Transition Between Pages
  * 4. Transition Links
  * 5. Owl Carousell
  * 6. Magnific Popup Image
  * 7. Ajax Subscribe
  * 8. Ajax Contact
  * 9. Google Maps
  * 10. Countdown Date of Release
 */


$(document).ready(function() {
'use strict';

/*Start Page Loader*/
setTimeout(function() {

			  $('.loader').fadeOut('slow');
			  
}, 1240);
/*End Page Loader*/

/* == 01. Transition Animations for All Pages == */	

	setTimeout(function() {

			  $('.logo').addClass('animated fadeInDown');
}, 0);
	setTimeout(function() {

			  $('.sitename').addClass('animated fadeInUp');
}, 0);
	setTimeout(function() {

			  $('.sitedesc').addClass('animated fadeInUp');
}, 0);
	setTimeout(function() {

			  $('.pagetitle').addClass('animated fadeInDown');
}, 0);
	setTimeout(function() {

			  $('.subtext').addClass('animated fadeIn');
}, 0);
	setTimeout(function() {

			  $('.galleryitem').addClass('animated fadeIn');
}, 0);
	setTimeout(function() {

			  $('.infoitem').addClass('animated fadeInUp');
}, 0);
	setTimeout(function() {

			  $('.nextbut').addClass('animated fadeInUp');
}, 0);
	setTimeout(function() {

			  $('.service').addClass('animated fadeIn');
}, 0);
	setTimeout(function() {

			  $('.contact-form').addClass('animated fadeIn');
}, 0);
	setTimeout(function() {

			  $('.socialitem').addClass('animated fadeIn');
}, 0);
	setTimeout(function() {

			  $('#map').addClass('animated fadeIn');
}, 0);





/* == 02. Begin Menu Transition Links == */
function clickHome() {
	'use strict';
		$('#home-page').fadeIn('fast');
		$('#about-page').fadeOut('fast');
		$('#subscribe-page').fadeOut('fast');
		$('#services-page').fadeOut('fast');
		$('#contactus-page').fadeOut('fast');
	}
function clickAbout() {
	'use strict';
		$('#home-page').fadeOut('fast');
		$('#about-page').fadeIn('fast');
		$('#subscribe-page').fadeOut('fast');
		$('#services-page').fadeOut('fast');
		$('#contactus-page').fadeOut('fast');
	}
function clickServices() {
	'use strict';
		$('#home-page').fadeOut('fast');
		$('#about-page').fadeOut('fast');
		$('#subscribe-page').fadeOut('fast');
		$('#services-page').fadeIn('fast');
		$('#contactus-page').fadeOut('fast');
	}
function clickContact() {
	'use strict';
		$('#home-page').fadeOut('fast');
		$('#about-page').fadeOut('fast');
		$('#subscribe-page').fadeOut('fast');
		$('#services-page').fadeOut('fast');
		$('#contactus-page').fadeIn('fast');
	}
/* == End Menu Transition Links == */


/* == 03. Transition Between Pages == */
	
/*1.Transition When You Subscribe on HomePage*/
function showSubscribe() {
	'use strict';
		$('#home-page').fadeOut('fast');
		$('#subscribe-page').fadeIn('slow');
	}
/*2.Transition When You click Back on Subscribe*/
function hideSubscribe() {
	'use strict';
		$('#subscribe-page').fadeOut('fast');
		$('#home-page').fadeIn('slow');
	}
/*3.Transition When You click Back on About*/
function hideAbout() {
	'use strict';
		$('#about-page').fadeOut('fast');
		$('#home-page').fadeIn('slow');
	}
	
/*4.Transition When You click Our Services on About*/
function showServices() {
	'use strict';
		$('#about-page').fadeOut('fast');
		$('#services-page').fadeIn('slow');
	}
/*5.Transition When You click back on Services*/
function hideServices() {
	'use strict';
		$('#services-page').fadeOut('fast');
		$('#about-page').fadeIn('slow');
	}
/*6.Transition When You click back on Contact*/
function hideContact() {
	'use strict';
		$('#contactus-page').fadeOut('fast');
		$('#services-page').fadeIn('slow');
	}
	
/*7.Transition When You click Go Home on Contact us*/
function goHome() {
	'use strict';
		$('#contactus-page').fadeOut('fast');
		$('#home-page').fadeIn('slow');
	}
	

/* == 04. Transition Links == */	

/*BackButton on Subscribe Page*/
$('.backsub').click(function() {	
		hideSubscribe();	
});
/*BackButton on About Page*/
$('.backabout').click(function() {	
		hideAbout();	
});
/*BackButton on Contact Page*/
$('.backcontact').click(function() {	
		hideContact();	
});
/*Our Services Button on About Page*/
$('.ourservbut').click(function() {	
		showServices();	
});
/*BackButton on Services Page*/
$('.backserv').click(function() {	
		hideServices();	
});
/*Contact Us Button on Our Services Page*/
$('.contactusbut').click(function() {	
		clickContact();	
});
/*Go home Button on Contact Page*/
$('.gohomebut').click(function() {	
		goHome();	
});
	

/*Begin Menu Transition Links*/
	
$('.homebut').click(function() {	
		clickHome();	
});
$('.aboutbut').click(function() {	
		clickAbout();	
});
$('.servicesbut').click(function() {	
		clickServices();	
});
$('.contactbut').click(function() {	
		clickContact();	
});
/*End Menu Transition Links*/
	

/* == 05. Owl Carousell == */

$("#servicescar").owlCarousel(
  	{
  		items : 4,
  		pagination : true
  	}
  );
  
/* == 06. Magnific Popup Image == */
  
$('.img-about').magnificPopup({ 
type: 'image'
});

/* == 07. Ajax Subscribe == */

	$('.subscribe-form').submit(function() {
		  var postdata = $('.subscribe-form').serialize();
		  $.ajax({
			  type: 'POST',
			  url: 'inc/subscribe.php',
			  data: postdata,
			  dataType: 'json',
			  success: function(json) {
				  if(json.valid == 0) {
					  $('.status-message').html(json.error);
					  $('.status-message').fadeIn('slow');
					  $('.status-message').css('margin-top','5px');
				  }
				  else {
					  $("input, textarea").val('');
					  $('.subscribe-form button').prop('disabled',true);
					  $('.status-message').html(json.message);
					  $('.status-message').fadeIn('slow');
					  $('.status-message').css('margin-top','5px');
				  }
			  }
			});
			return false;
		});
		
/* == 08. Ajax Contact == */

	$('.contact-form form').submit(function() {
	
			$('.contact-form form .nameLabel').html('Name');
			$('.contact-form form .emailLabel').html('Email');
			$('.contact-form form .messageLabel').html('Message');
	
			var postdata = $('.contact-form form').serialize();
			$.ajax({
				type: 'POST',
				url: 'inc/sendmail.php',
				data: postdata,
				dataType: 'json',
				success: function(json) {
					if(json.nameMessage != '') {
						$('.contact-form form .nameLabel').append(' - <span class="status"> ' + json.nameMessage + '</span>');
					}
					if(json.emailMessage != '') {
						$('.contact-form form .emailLabel').append(' - <span class="status"> ' + json.emailMessage + '</span>');
					}
					if(json.messageMessage != '') {
						$('.contact-form form .messageLabel').append(' - <span class="status"> ' + json.messageMessage + '</span>');
					}
					if(json.nameMessage == '' && json.emailMessage == '' && json.messageMessage == '') {
							$('.status-message-contact').addClass('animated fadeIn').html('EMAIL SENT SUCCESSFULLY.');
							$('input[type="text"],textarea').val('');
					}
				}
			});
			return false;
		});	
        
/* == 10. Countdown Date of Release == */

	 $('.countdown').countdown('2015/09/10', function(event) { /*Edit the Date of Release Here*/
     $(this).html(event.strftime('<div class="col-md-3"><li class="count"><span>%D</span> <p>days</p></li></div><div class="col-md-3"> <li class="count"><span>%H</span> <p>hours</p></li></div><div class="col-md-3"><li class="count"><span>%M</span> <p>minutes</p></li></div><div class="col-md-3"><li class="count"><span>%S</span> <p>seconds</p></li></div>'));
   });

});