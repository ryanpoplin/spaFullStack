'use strict';
/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/
/*global $, spa */
// 'spa' is the global module, yo...
var spa = (function ($) {
	var
		configMap,
		$chatSlider,
		toggleSlider,
		onClickSlider,
		initModule
	;
	configMap = { 
		extendedHeight: 500,
		extendedTitle: 'Click to retract...',
		retractedHeight: 25,
		retractedTitle: 'Click to extend...',
	};	
	toggleSlider = function () {
		var 
			sliderHeight
		;
		sliderHeight = $chatSlider.height();
		if (sliderHeight === configMap.retractedHeight) {
			$chatSlider.animate({
				height: configMap.extendedHeight
			}).attr('title', configMap.extendedTitle);
			return true;
		}
		else if (sliderHeight === configMap.extendedHeight) {
			$chatSlider.animate({
				height: configMap.retractedHeight
			}).attr('title', configMap.retractedTitle);
			return true;
		}
		return false;
	};
	onClickSlider = function (event) {
		toggleSlider();
		return false;
	};
	// Pass in the SPA element...
	initModule = function ($container) { 
		// Now we have access to the '#spa' element...
		// A 'bottom up' execution...
		spa.shell.initModule($container);
		$chatSlider = $container.find('.spa-shell-chat');
		$chatSlider.attr('title', configMap.retractedTitle).click(onClickSlider);
		return true;
	};
	// It's the return value for 'spa'...
	return { initModule: initModule };
}(jQuery));