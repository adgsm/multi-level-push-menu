$(document).ready(function(){
  $('.scroller').click(function(){
    var $anchor = $(this);
    // 'html,body' invokes double event call but needed for correct functionality in Chrome and Firefox
    animatePageScroll($anchor, $("html,body"), "top", "easeInOutExpo", 70, 1000);
    if(event.preventDefault) {
      event.preventDefault();
    }
    else {
      event.cancelBubble = true;
      event.returnValue = false;
    }
  });
  mVideo = videojs('multilevelpushmenu').ready(function() {
    this.width( $( '#home' ).width() );
  });
});

var mVideo;

$( window ).resize(function(){
  mVideo.width( $( '#home' ).width() );
});

// Page scroll animation logic
function animatePageScroll(objAnchor, objDOM, strDirection, strEffect, intMargin, intLasting) {
  if(strDirection == "left") {
  	// Horizontal
    objDOM.stop().animate({
        scrollLeft: $(objAnchor.attr('href')).offset().left - intMargin
    }, intLasting, strEffect, function(){
  		// Set focus on text input element
      if($("#" + $(objAnchor.attr('href')).prop("id") + " input:focus").length == 0)
        $("#" + $(objAnchor.attr('href')).prop("id") + " input[type='text']").focus();
    });
  }
  else {
  	// Vertical
    objDOM.stop().animate({
        scrollTop: $(objAnchor.attr('href')).offset().top - intMargin
    }, intLasting, strEffect, function(){
  		// Set focus on text input element
      if($("#" + $(objAnchor.attr('href')).prop("id") + " input:focus").length == 0)
        $("#" + $(objAnchor.attr('href')).prop("id") + " input[type='text']").focus();
    });
  }
}

// Twitter button
!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
if(!d.getElementById(id)){
  js=d.createElement(s);
  js.id=id;
  js.src=p+'://platform.twitter.com/widgets.js';
  fjs.parentNode.insertBefore(js,fjs);
}}(document, 'script', 'twitter-wjs');