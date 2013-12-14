$(document).ready(function(){
	// HTML markup implementation, overlap mode
	$( '#menu' ).multilevelpushmenu({
		containersToPush: [$( '#pushobj' )],
		direction: 'rtl',
		fullCollapse: true,

		// Just for fun also changing the look of the menu
		wrapperClass: 'mlpm_w',
		menuInactiveClass: 'mlpm_inactive'
	});

	// Full collapse
	$( '#fullcollapse' ).click(function(){
		$( '#menu' ).multilevelpushmenu( 'collapse' );
	});

	// Base expand
	$( '#baseexpand' ).click(function(){
		$( '#menu' ).multilevelpushmenu( 'expand' );
	});

	// Expand to Men's Clothing
	$( '#expandmensclothing' ).click(function(){
		// Use menu title for expanding just in case you know that there
		// is only one option with such title. If there is more then one
		// menu has with the same title, expand/collapse invoked with
		// title name as parameter won't work.
		$( '#menu' ).multilevelpushmenu( 'expand' , 'Men\'s Clothing' );
		
		// More safe way is to use methods like
		// $( '#menu' ).multilevelpushmenu( 'findmenusbytitle' , 'Mobile Phones' );
		// and then invoke expand method with desired menu level object
		// (e.g. if we have several menu objects with title 'Mobile Phones' but
		// we want to expand the first one)
		// var $phonemenu = $( '#menu' ).multilevelpushmenu( 'findmenusbytitle' , 'Mobile Phones' ).first();
		// and then
		// $( '#menu' ).multilevelpushmenu( 'expand' , $phonemenu );
	});

	// Expand to Mobile Phones
	$( '#expandmobilephones' ).click(function(){
		// Use menu title for expanding just in case you know that there
		// is only one option with such title. If there is more then one
		// menu has with the same title, expand/collapse invoked with
		// title name as parameter won't work.
		$( '#menu' ).multilevelpushmenu( 'expand' , 'Mobile Phones' );
		
		// More safe way is to use methods like
		// $( '#menu' ).multilevelpushmenu( 'findmenusbytitle' , 'Mobile Phones' );
		// and then invoke expand method with desired menu level object
		// (e.g. if we have several menu objects with title 'Mobile Phones' but
		// we want to expand the first one)
		// var $phonemenu = $( '#menu' ).multilevelpushmenu( 'findmenusbytitle' , 'Mobile Phones' ).first();
		// and then
		// $( '#menu' ).multilevelpushmenu( 'expand' , $phonemenu );
	});

	// Collapse to the level of 'Devices' menu
	$( '#collapsedevices' ).click(function(){
		// Have in mind that this will collapse to the level of 'Devices'
		// menu (level 1 in our case). So even when open path is not containing
		// 'Devices' menu it will collapse expanded menus to level 1; it's
		// basically the same as
		// $( '#menu' ).multilevelpushmenu( 'collapse' , 1 );
		$( '#menu' ).multilevelpushmenu( 'collapse' , 'Devices' );
	});
});
