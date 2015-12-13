$(document).ready(function(){
	// HTML markup implementation, overlap mode
	$( '#menu' ).multilevelpushmenu({
		containersToPush: [$( '#pushobj' )],

		// Just for fun also changing the look of the menu
		wrapperClass: 'mlpm_w',
		menuInactiveClass: 'mlpm_inactive'
	});

	// Get value for mode option
	$( '#getMode' ).click(function(){
		$( this ).find( 'span' ).text( $( '#menu' ).multilevelpushmenu( 'option', 'mode' ) );
	});

	// Set value for mode option
	$( '#setMode' ).click(function(){
		// Collapse menu first to ensure good functionality after mode change
		$( '#menu' ).multilevelpushmenu( 'collapse', 0 );
		// Toggle mode
		$( '#menu' ).multilevelpushmenu( 'option', 'mode') == 'overlap' ? 
			$( this ).find( 'span' ).text( $( '#menu' ).multilevelpushmenu( 'option', 'mode', 'cover' ) ) : $( this ).find( 'span' ).text( $( '#menu' ).multilevelpushmenu( 'option', 'mode', 'overlap' ) );
		// Update getMode button info
		$( '#getMode' ).find( 'span' ).text( $( '#menu' ).multilevelpushmenu( 'option', 'mode' ) );
	});
});
