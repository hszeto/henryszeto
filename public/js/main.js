function responsiveNavbar() {
  var nb = document.getElementById("mainNavbar");
  if (nb.className === "navbar") {
    nb.className += " responsive";
  } else {
    nb.className = "navbar";
  }
};

function activeNavbar() {
  $("#mainNavbar a").click(function(){
    var clickedTab = $(this);

    $("#mainNavbar a").each(function(){
      $(this).removeClass('active');
    })

    clickedTab.addClass('active');
  });
}

function stickyNav() {
  var navbar = document.getElementById("mainNavbar");
  var sticky = navbar.offsetTop;

  window.onscroll = function() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  };
};

function projectDesc() {
  $('.project-container')
    .on('mouseenter','.project',function(){
      $(this).find('.projectDesc').fadeIn();
    })
    .on('mouseleave','.project',function(){
      $(this).find('.projectDesc').fadeOut();
    });
}

function initScrollAnimations() {
  $('#content-wrapper').css('display','block');
  var controller = $.superscrollorama();

  // title tweens
  $('.title-line span').each(function() {
    controller.addTween(10, TweenMax.to(this, .5, {css:{top: Math.random()*-200-600, left: (Math.random()*1000)-500, rotation:Math.random()*720-360, 'font-size': Math.random()*300+150}, ease:Quad.easeOut}),200);
  });
  controller.addTween(10, TweenMax.to($('#title-line1'), .75, {css:{top: 600}, ease:Quad.easeOut}),200);
  controller.addTween(10, TweenMax.to($('#title-line2'), .75, {css:{top: 200}, ease:Quad.easeOut}),200);
  controller.addTween(10, TweenMax.to($('#title-line3'), .75, {css:{top: -100}, ease:Quad.easeOut},200));
}

$(document).ready(function() {
  $('body').css('visibility','visible');

  $('#title-line1').lettering();
  $('#title-line2').lettering();
  $('#title-line3').lettering();

  (new TimelineLite({onComplete:initScrollAnimations}))
    .from( $('#title-line1 span'), .4, {delay: 1, css:{right:'1000px'}, ease:Back.easeOut})
    .from( $('#title-line2'), .4, {css:{top:'1000px',opacity:'0'}, ease:Expo.easeOut})
    .append([
      TweenMax.from( $('#title-line3 .char1'), .25+Math.random(), {css:{top: '-200px', right:'1000px'}, ease:Elastic.easeOut}),
      TweenMax.from( $('#title-line3 .char2'), .25+Math.random(), {css:{top: '300px', right:'1000px'}, ease:Elastic.easeOut}),
      TweenMax.from( $('#title-line3 .char3'), .25+Math.random(), {css:{top: '-400px', right:'1000px'}, ease:Elastic.easeOut}),
      TweenMax.from( $('#title-line3 .char4'), .25+Math.random(), {css:{top: '-200px', left:'1000px'}, ease:Elastic.easeOut}),
      TweenMax.from( $('#title-line3 .char5'), .25+Math.random(), {css:{top: '200px', left:'1000px'}, ease:Elastic.easeOut})
    ])
    .from("#newversion", .4, {scale: 5, autoAlpha: 0, ease: Elastic.easeOut})
    .to( $('#title-info'), .5, {css:{opacity:.99, 'margin-top':0}, delay:-1, ease:Quad.easeOut})
    .to( $('#download'), .25, {autoAlpha:1});

  // init Smooth Scroller
  $SS().start(2000);

  stickyNav();
  projectDesc();
  activeNavbar();
});
