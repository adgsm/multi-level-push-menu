$(document).ready(function(){
	// HTML markup implementation, overlap mode
	$( '#menu' ).multilevelpushmenu({
		containersToPush: [$( '#pushobj' )],

		// Just for fun also changing the look of the menu
		wrapperClass: 'mlpm_w',
		menuInactiveClass: 'mlpm_inactive'
	});

	// Expand to Mobile Phones where we will add two
	// additional menu items with sub-menus
	$( '#menu' ).multilevelpushmenu( 'expand' , $( '#menu' ).multilevelpushmenu( 'findmenusbytitle' , 'Mobile Phones' ).first() );

	// Add iPhone and Samsung items
	$( '#additems' ).click(function(){
		var $addTo = $('#menu').multilevelpushmenu('activemenu').first();
		$( '#menu' ).multilevelpushmenu( 'additems' , addItems , $addTo , 0 );
	});

	// Remove Samsung items
	$( '#removeitems' ).click(function(){
		var item = $( '#menu' ).multilevelpushmenu( 'finditemsbyname' , 'Samsung' );
		$( '#menu' ).multilevelpushmenu( 'removeitems' , item );
	});

	// Add counter items
	$( '#counteritems' ).click(function(){
		var $addTo = $('#menu').multilevelpushmenu('activemenu').first(),
			index = ( $addTo ) ? $addTo.children( 'ul' ).children( 'li' ).length : 0;
			item = [
				{
					name: 'Item ' + index,
					link: '#',
					items: [
					{
						title: 'Item ' + index,
						icon: 'fa fa-bookmark',
						items: [
						{
							name: 'Item Info',
							icon: 'fa fa-info-circle',
							link: '#'
						},
						{
							name: 'Delete Item',
							id: 'deleteItem',
							icon: 'fa fa-trash-o',
							link: '#'
						}
					  ]
					}]
				}
			];
		$('#menu').multilevelpushmenu('additems', item, $addTo , index );
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
						link: '#'
					},
					{
						name: 'iPhone 5',
						icon: 'fa fa-phone-square',
						link: '#'
					}
				]
			}
		]
	},
	{
		name: 'Samsung',
		icon: 'fa fa-phone-square',
		link: '#',
		items: [
			{
				title: 'Samsung',
				icon: 'fa fa-phone-square',
				items: [
					{
						name: 'Samsung Galaxy S II',
						icon: 'fa fa-phone-square',
						link: '#'
					},
					{
						name: 'Samsung Galaxy S III',
						icon: 'fa fa-phone-square',
						link: '#'
					},
					{
						name: 'Samsung Galaxy S IV',
						icon: 'fa fa-phone-square',
						link: '#'
					}
				]
			}
		]
	}
];