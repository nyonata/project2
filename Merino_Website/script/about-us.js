
//var tl = new TimelineMax({onUpdate:updatePercentage});
//const controller = new ScrollMagic.Controller();
//var tl2 = new TimelineMax({onUpdate:updatePercentage});
//
//tl.from('#about-page1' , .5, {opacity: 0});
//tl.to('#about-page1', .5, {opacity: 1});
//
//tl2.from('#about-page1' , .5, {opacity: 1});
//tl2.to('#about-page1', .5, {opacity: 0});
//
//const scene = new ScrollMagic.Scene({
//  triggerElement: "#about-page2",
//            triggerHook: "onLeave",
//            duration: "100%"
//})
//  .setPin("#about-page2")
//  .setTween(tl)
//.addTo(controller);
//
//const scene2 = new ScrollMagic.Scene({
//  triggerElement: "#about-page1",
//            triggerHook: "onLeave",
//            duration: "100%"
//})
//  .setPin("#about-page1")
//  .setTween(tl2)
//.addTo(controller);
//
//function updatePercentage() {
//  //percent.innerHTML = (tl.progress() *100 ).toFixed();
//  tl.progress();
//	tl2.progress();
//  console.log(tl.progress());
//}
$(document).ready(function() {
	
	
	$('.fullpage').fullpage({
		//options here
		fadingEffect:'true',
		scrollingSpeed: '700',
	});

	methods
	$.fn.fullpage.setAllowScrolling(true);
});