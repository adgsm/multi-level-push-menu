$(document).ready(function(){
	// HTML markup implementation, cover mode
	$( '#menu' ).multilevelpushmenu({
		containersToPush: [$( '#pushobj' )],
		mode: 'cover'
	});
});