// 'use strict';
/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/
/*global $, spa */
spa.shell = (function () {
  var
    configMap = {
      mainTemplate : String()
        + '<div class="spa-shell-head">'
          + '<div class="spa-shell-head-logo"></div>'
          + '<div class="spa-shell-head-acct"></div>'
          + '<div class="spa-shell-head-search"></div>'
        + '</div>'
        + '<div class="spa-shell-main">'
          + '<div class="spa-shell-main-nav"></div>'
          + '<div class="spa-shell-main-content"></div>'
        + '</div>'
        + '<div class="spa-shell-foot"></div>'
        + '<div class="spa-shell-chat"></div>'
        + '<div class="spa-shell-modal"></div>'
    },
    // 1. Set from initModule...
    stateMap  = { $container : null },
    jqueryMap,
    setJqueryMap, 
    initModule;
  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = { $container : $container };
  };
  // Pass in element...
  initModule = function ( $container ) {
    // Access to the '#spa' element...
    stateMap.$container = $container;
    $container.html( configMap.mainTemplate );
    // setJqueryMap();
  };
  return { initModule : initModule };
}());