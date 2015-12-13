$(document).ready(function(){
	// HTML markup implementation, overlap mode, initilaize collapsed
	$( '#menu' ).multilevelpushmenu({
		containersToPush: [$( '#pushobj' )],
		collapsed: true,

		// Just for fun also changing the look of the menu
		wrapperClass: 'mlpm_w',
		menuInactiveClass: 'mlpm_inactive'
	});
});