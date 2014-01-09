'use strict';
/* jslint settings
	browser: true,
	continue: true,
	devel: true,
	indent: 2,
	maxerr: 50,
	newcap: true,
	nomen: true,
	plusplus: true,
	regexp: true,
	sloppy: true,
	vars: true,
	white: true
*/
/**
* declare, initialize, execute...
*/
// jquery
// 1st
// (function ($) {
// Module /spa/
// chat slider functionality
	// 2nd
	var 
		spa
	;
	spa = (function ($) {
		// module scope vars
		var
			configMap,
			$chatSlider,
			toggleSlider,
			onClickSlider,
			initModule
		;
		// constants
		// 3rd
		configMap = { 
			extendedHeight: 500,
			extendedTitle: 'Click to retract...',
			retractedHeight: 20,
			retractedTitle: 'Click to extend...',
			// temp underscore template...
			templateHtml: _.template($('#spa-slider-template').html())
		};	
		// dom /toggleSlider/
		// alternates slider height
		toggleSlider = function () {
			var 
				sliderHeight
			;
			sliderHeight = $chatSlider.height();
			// extend the slider if fully retracted
			if (sliderHeight === configMap.retractedHeight) {
				$chatSlider.animate({
					height: configMap.extendedHeight
				}).attr('title', configMap.extendedTitle);
				return true;
			}
			// retract slider if fully extended
			else if (sliderHeight === configMap.extendedHeight) {
				$chatSlider.animate({
					height: configMap.retractedHeight
				}).attr('title', configMap.retractedTitle);
				return true;
			}
			// do nothing while slider is in transition
			return false;
		};
		// event handler /onClickSlider/
		// receive click event and call toggleSlider
		onClickSlider = function (event) {
			toggleSlider();
			return false;
		};
		// public method /initModule/
		// set init state and provide feature
		initModule = function ($container) { 
			// render html
			$container.html(configMap.templateHtml);
			$chatSlider = $container.find('.spa-slider');
			// init slider height and title
			// bind user click event and event handler
			$chatSlider.attr('title', configMap.retractedTitle).click(onClickSlider);
			return true;
		}; 
		return { initModule: initModule };
	}(jQuery));
// }(jQuery));