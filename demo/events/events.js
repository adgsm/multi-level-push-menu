$(document).ready(function(){
	// HTML markup implementation, overlap mode
	$( '#menu' ).multilevelpushmenu({
		containersToPush: [$( '#pushobj' )],
		onCollapseMenuStart: function() {
			$( '#eventpanel' ).append( '<br />Started collapsing...' );
			//console.log(arguments);
		},
		onCollapseMenuEnd: function() {
			$( '#eventpanel' ).append( '<br />Collapsing ended!' );
			//console.log(arguments);
		},
		onExpandMenuStart: function() {
			$( '#eventpanel' ).append( '<br />Started expanding...' );
			//console.log(arguments);
		},
		onExpandMenuEnd: function() {
			$( '#eventpanel' ).append( '<br />Expanding ended!' );
			//console.log(arguments);
		},
		onTitleItemClick: function() {
			var event = arguments[0],
				$menuLevelHolder = arguments[1],
				options = arguments[2],
				title = $menuLevelHolder.find( 'h2:first' ).text();

			$( '#eventpanel' ).append( '<br />Title item <i>' + title + '</i> clicked!' );
			//console.log(arguments);
		},
		onBackItemClick: function() {
			var event = arguments[0],
				$menuLevelHolder = arguments[1],
				options = arguments[2],
				title = $menuLevelHolder.find( 'h2:first' ).text();

			$( '#eventpanel' ).append( '<br />Back item on <i>' + title + '</i> menu level clicked!' );
			//console.log(arguments);
		},
		onGroupItemClick: function() {
			var event = arguments[0],
				$menuLevelHolder = arguments[1],
				$item = arguments[2],
				options = arguments[3],
				title = $menuLevelHolder.find( 'h2:first' ).text(),
				itemName = $item.find( 'a:first' ).text();

			$( '#eventpanel' ).append( '<br />Group Item <i>' + itemName + '</i>' + ' on <i>' + title + '</i> menu level clicked!' );
			//console.log(arguments);
		},
		onItemClick: function() {
			var event = arguments[0],
				$menuLevelHolder = arguments[1],
				$item = arguments[2],
				options = arguments[3],
				title = $menuLevelHolder.find( 'h2:first' ).text(),
				itemName = $item.find( 'a:first' ).text();

			$( '#eventpanel' ).append( '<br />Item <i>' + itemName + '</i>' + ' on <i>' + title + '</i> menu level clicked!' );
			//console.log(arguments);
		},

		// Just for fun also changing the look of the menu
		wrapperClass: 'mlpm_w',
		menuInactiveClass: 'mlpm_inactive'
	});
});
