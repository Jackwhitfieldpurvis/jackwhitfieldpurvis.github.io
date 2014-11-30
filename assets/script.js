// JavaScript Document

$(document).ready(function(){
	
	//  SHOWS MODAL WHEN CLICK ON DRAKE
$("#welcome-Drake").click(function() {
	$("#modal-container").show();
});

	// SHOWS MODAL WHEN CLICK ON WORST
$("#worst").click(function() {
	$("#modal-container").show();
});	

	// HIDE MODAL WHEN CLICK ON MODAL OVERLAY
$("#modal-overlay").click(function() {
	$("#modal-container").hide();
});

	// MAKE DRAKE BIGGER WHEN HOVERING OVER DRAKE
$("#welcome-Drake").hover(function() {
	$("#welcome-Drake").css("width", "400px")
});

	// MAKE DRAKE SMALLER WHEN HOVERING OVER BACKGROUND
$("#background").hover(function() {
	$("#welcome-Drake").css("width", "350px")
});
	
	
	// DISPLAY OPTIONS CONTAINER + HIDE WELCOME CONTAINER WHEN MODAL BOX IS CLEARED
$("#submit").click(function() {
	$("#options-container").show();
	$("#welcome-container").hide();
});

	// ESSENTIAL FUNCTIONS BEYOND MY SKILL SET
		// MOST RECENTLY CLICKED OPTION == WORST!
		// MOST RECENTLY UN-CLICKED OPTION UPDATE TO NEW PHOTO
		// PLAY SOUND WHEN CLICK ON NEW WORST! OPTION




});