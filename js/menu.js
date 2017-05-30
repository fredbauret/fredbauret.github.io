

menu.js


/*
		$(document).ready(function() {
			$('#selected-plays > li').addClass('horizontal');
			$('#selected-plays li:not(.horizontal)').addClass('sub-level');
			$('a[href^="mailto:"]').addClass('mailto');
			$('a[href$=".pdf"]').addClass('pdflink');
			$('a[href^="http"][href*="henry"]').addClass('henrylink');
		});
*/

		$(document).ready(function() {


			// jQuery('body').text('jQuery c\'est par là').attr('href', 'http://www.jquery.com');

			// $('body').attr({id:'creux-creux'});

			// jQuery('body').attr('id', 'home');

			// $('id=').appendTo('body');

			$('<a>jQuery</a>').attr('href', 'http://www.jquery.com').appendTo('body');

			function wmenu( ww ) {
				//$('#imgmenu').attr({style:'margin-left:'+ ww +'px'}).addClass('kiki');
				$('#imgmenu').animate({marginLeft: + ww +'px'}, 500);
			}

				var $halfimg = 70; // Moitiée de l'image (140/2) #imgmenu (images/img_menu.svg)

				var $m1 = $('.l1').width();
				var $m2 = $('.l2').width();
				var $m3 = $('.l3').width();
				var $m4 = $('.l4').width();
				var $m5 = $('.l5').width();

				var $z1 = $m1/2 - $halfimg;
				var $z2 = $m1 + $m2/2 - $halfimg;
				var $z3 = $m1 + $m2 + $m3/2 - $halfimg;
				var $z4 = $m1 + $m2 + $m3 + $m4/2 - $halfimg;
				var $z5 = $m1 + $m2 + $m3 + $m4 + $m5/2 - $halfimg;

				$('#imgmenu').attr({style:'margin-left:-' + 2000 + 'px'});

        var $delay = 50;

				if ($('body').hasClass('home')){
					$('#imgmenu').animate({marginLeft:$z1}, $delay);
				}
				else if ($('body').hasClass('about')){
					$('#imgmenu').animate({marginLeft:$z2}, $delay);
				}
				else if ($('body').hasClass('news')){
					$('#imgmenu').animate({marginLeft:$z3}, $delay);
				}
				else if ($('body').hasClass('carousel-1')){
					$('#imgmenu').animate({marginLeft:$z4}, $delay);
				}
				else if ($('body').hasClass('carousel-2')){
					$('#imgmenu').animate({marginLeft:$z5}, $delay);
				}

				// var $m1 = $('.l1').width() - ($mleft);

				// alert($z1 + ' - ' + $z2 + ' - ' + $z3 + ' - ' + $z4 + ' - ' + $z5);

				// var $mleft = 70; // Moitiée de l'image (140/2=70) que l'on retire : -70 plus margin-left de la balise UL : +60 = -10

				$('#getl1').click(function() {
					wmenu( $z1 );
					//$('body').attr({class:'home'});
				});

				$('#getl2').click(function() {
					wmenu( $z2 );
					//$('body').attr({class:'about'});
				});

				$('#getl3').click(function() {
					wmenu( $z3 );
					$('body').attr({class:'news'});
				});

				$('#getl4').click(function() {
					wmenu( $z4 );
				});
				$('#getl5').click(function() {
					wmenu( $z5 );
				});



			function showWidth( loulou, w ) {
				$('div.coucou').text( 'La largeur du ' + loulou + ' is ' + w + 'px.' );
			}

				$( "#getd" ).click(function() {
				  showWidth( "document", $( document ).width() );
				});
				$("#getw").click(function() {
				  showWidth( "window", $( window ).width() );
				});

			var imageFile = $('img').attr('src') + " Height " + $('img').attr('height') + "px. "+ " Width " + $('img').attr('width') + "px.";
			// alert(imageFile);

			var $tailleImage = $('div#imgmenu').attr('style');

			var $animenu = $('div#imgmenu');
			var defaultSize = $animenu.css('marginLeft');

			var $pContent = $('p#text1').text();

			// alert($pContent + ' La taille de l\'image : ' + $tailleImage);

			/*
			var strongContent = $('strong').html();
			var pContent = $('p').html();
			$('strong').html(pContent);
			$('p').html(strongContent);
			*/

			$('#switcher button').click(function() {
				var num = parseFloat( $animenu.css('marginLeft') );
				switch (this.id) {
				case 'switcher-large':
				num *= 1.4;
				break;
				case 'switcher-small':
				num /= 1.4;
				break;
				default:
				num = parseFloat(defaultSize);
			}

			$animenu.css('marginLeft', num + 'px');

			});
		});