$(document).ready(function(){
	// HTML markup implementation, overlap mode
	$( '#menu' ).multilevelpushmenu({
		containersToPush: [$( '#pushobj' )],
		menuWidth: 450, // '450px', '30em', '25%' will also work
		menuHeight: 500
	});
});