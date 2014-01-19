$(document).ready(function(){
	// HTML markup implementation, overlap mode
	$( '#menu' ).multilevelpushmenu({
		containersToPush: [$( '#pushobj' )],

		// Just for fun also changing the look of the menu
		wrapperClass: 'mlpm_w',
		menuInactiveClass: 'mlpm_inactive',
		onItemClick: function(e) {
             alert("Data: " + JSON.stringify($(e.target).data()));
        }
	});

	// Expand to Mobile Phones where we will add two
	// additional menu items with sub-menus
	$( '#menu' ).multilevelpushmenu( 'expand' , $( '#menu' ).multilevelpushmenu( 'findmenusbytitle' , 'Mobile Phones' ).first() );

	// Add iPhone
	$( '#additems' ).click(function(){
		var $addTo = $( '#menu' ).multilevelpushmenu( 'findmenusbytitle' , 'Mobile Phones' ).first();
		$( '#menu' ).multilevelpushmenu( 'additems' , addItems , $addTo , 0 );
	});

});

var addItems = [
	{
		name: 'iPhone',
		icon: 'fa fa-phone-square',
		link: '#',
		items: [
			{
				title: 'iPhones',
				icon: 'fa fa-phone-square',
				items: [
					{
						name: 'iPhone 4',
						icon: 'fa fa-phone-square',
						link: '#',
						data: {
							model : "iPhone 4"
						}
					},
					{
						name: 'iPhone 5',
						icon: 'fa fa-phone-square',
						link: '#',data: {
							model : "iPhone 5"
						}
					}
				]
			}
		]
	}
];