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
/* global $, spa */
var 
	spa
;
spa = (function ($) {
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
		retractedHeight: 15,
		retractedTitle: 'Click to extend...',
		// underscore.js template option...
		// templateHtml: _.template($('#spa-template').html())
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
	initModule = function ($container) { 
		spa.shell.initModule($container);
		$container.html(configMap.templateHtml);
		$chatSlider = $container.find('.spa-shell-chat');
		$chatSlider.attr('title', configMap.retractedTitle).click(onClickSlider);
		return true;
	}; 
	return { initModule: initModule };
}(jQuery));