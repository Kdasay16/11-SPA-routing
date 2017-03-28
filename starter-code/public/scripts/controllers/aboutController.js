'use strict';

(function(module) {
  const aboutController = {};

  // Done: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.init = function() {
    $('#articles').hide();
    $('#about').show();
  }

  module.aboutController = aboutController;
})(window);
