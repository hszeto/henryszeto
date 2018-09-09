;(function(global, $){

  // Create a new object
  var SS = function(){
    return new SS.init();
  }

  // Prototype holds methods
  SS.prototype = {
    start: function(speed){
      speed = speed || 1000;

      $('nav a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, speed );
            return false;
          }
        }
      });
    }
  };

  // The actual object creation
  SS.init = function(){}

  // Skip the 'new' keyword
  SS.init.prototype = SS.prototype;

  // Attach SS to the global object and provide a shorthand '$SS'
  global.SS = global.$SS = SS;

})(window, jQuery);
