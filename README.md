# Multi-level-push-menu

This jQuery plugin is inspired by [Codrops](http://tympanus.net/codrops/2013/08/13/multi-level-push-menu/) MultiLevelPushMenu but unlike it not relaying on CSS 3D Transforms and therefore functional in older browsers too (i.e. IE 8).

###Documentation, examples and code samples [http://multi-level-push-menu.make.rs](http://multi-level-push-menu.make.rs)
![](http://multi-level-push-menu.make.rs/img/menu.png)

### Features
* Multi-level menu support
* Endless nesting of navigation elements
* Expand/Collapse navigation with a left/right swipe gesture
* Push/Slide DOM elements of choice
* Left-to-right and Right-to-left sliding directions
* Flexible, simple markup
* JS Array input, if markup is not present
* A number of exposed Options, Methods and Events
* Cross-browser compatibility (IE8+, Chrome, Midori, Firefox, Safari, Opera, Android Browser, iOS Safari)

### Usage

####Include the CSS
multilevelpushmenu.css can be modified to fit website design

FontAvesome (icons)

    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.1/css/font-awesome.min.css">
Font I like (use any other you like)

    <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700&subset=latin,cyrillic-ext,latin-ext,cyrillic' rel='stylesheet' type='text/css'>
Multi-Level-Push-Menu

    <link rel="stylesheet" href="multilevelpushmenu.css" />

####Include the JS

jQuery

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
Modernizr (needed for IE8)

    <script type="text/javascript" src="//oss.maxcdn.com/libs/modernizr/2.6.2/modernizr.min.js"></script>
Multi-Level-Push-Menu

    <script src="jquery.multilevelpushmenu.min.js"></script>

####Menu Markup

    <div id="menu">
      <nav>
        <h2><i class="fa fa-reorder"></i>All Categories</h2>
        <ul>
            <li>
                <a href="#"><i class="fa fa-laptop"></i>Devices</a>
                <h2><i class="fa fa-laptop"></i>Devices</h2>
                <ul>
                    <li>
                        <a href="#"><i class="fa fa-phone"></i>Mobile Phones</a>
                        <h2><i class="fa fa-phone"></i>Mobile Phones</h2>
                        <ul>
                            <li>
                                <a href="#">Super Smart Phone</a>
                            </li>
                            <li>
                                <a href="#">Thin Magic Mobile</a>
                            </li>
                            <li>
                                <a href="#">Performance Crusher</a>
                            </li>
                            <li>
                                <a href="#">Futuristic Experience</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-desktop"></i>Televisions</a>
                        <h2><i class="fa fa-desktop"></i>Televisions</h2>
                        <ul>
                            <li>
                                <a href="#">Flat Super Screen</a>
                            </li>
                            <li>
                                <a href="#">Gigantic LED</a>
                            </li>
                            <li>
                                <a href="#">Power Eater</a>
                            </li>
                            <li>
                                <a href="#">3D Experience</a>
                            </li>
                            <li>
                                <a href="#">Classic Comfort</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-camera-retro"></i>Cameras</a>
                        <h2><i class="fa fa-camera-retro"></i>Cameras</h2>
                        <ul>
                            <li>
                                <a href="#">Smart Shot</a>
                            </li>
                            <li>
                                <a href="#">Power Shooter</a>
                            </li>
                            <li>
                                <a href="#">Easy Photo Maker</a>
                            </li>
                            <li>
                                <a href="#">Super Pixel</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#"><i class="fa fa-book"></i>Magazines</a>
                <h2><i class="fa fa-book"></i>Magazines</h2>
                <ul>
                    <li>
                        <a href="#">National Geographics</a>
                    </li>
                    <li>
                        <a href="#">The Spectator</a>
                    </li>
                    <li>
                        <a href="#">Rambler</a>
                    </li>
                    <li>
                        <a href="#">Physics World</a>
                    </li>
                    <li>
                        <a href="#">The New Scientist</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#"><i class="fa fa-shopping-cart"></i>Store</a>
                <h2><i class="fa fa-shopping-cart"></i>Store</h2>
                <ul>
                    <li>
                        <a href="#"><i class="fa fa-tags"></i>Clothes</a>
                        <h2><i class="fa fa-tags"></i>Clothes</h2>
                        <ul>
                            <li>
                                <a href="#"><i class="fa fa-female"></i>Women's Clothing</a>
                                <h2><i class="fa fa-female"></i>Women's Clothing</h2>
                                <ul>
                                    <li>
                                        <a href="#">Tops</a>
                                    </li>
                                    <li>
                                        <a href="#">Dresses</a>
                                    </li>
                                    <li>
                                        <a href="#">Trousers</a>
                                    </li>
                                    <li>
                                        <a href="#">Shoes</a>
                                    </li>
                                    <li>
                                        <a href="#">Sale</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-male"></i>Men's Clothing</a>
                                <h2><i class="fa fa-male"></i>Men's Clothing</h2>
                                <ul>
                                    <li>
                                        <a href="#">Shirts</a>
                                    </li>
                                    <li>
                                        <a href="#">Trousers</a>
                                    </li>
                                    <li>
                                        <a href="#">Shoes</a>
                                    </li>
                                    <li>
                                        <a href="#">Sale</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Jewelry</a>
                    </li>
                    <li>
                        <a href="#">Music</a>
                    </li>
                    <li>
                        <a href="#">Grocery</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">Collections</a>
            </li>
            <li>
                <a href="#">Credits</a>
            </li>
        </ul>
      </nav>
    </div>

####Menu JS Array
You can supply JS Array instead of above HTML markup.

    <script>
    var arrMenu = [
      {
        title: 'All Categories',
        id: 'menuID',
        icon: 'fa fa-reorder',
        items: [
          {
            name: 'Devices',
            id: 'itemID',
            icon: 'fa fa-laptop',
            link: '#',
            items: [
              {
                title: 'Devices',
                icon: 'fa fa-laptop',
                items: [
                  {
                    name: 'Mobile Phones',
                    icon: 'fa fa-phone',
                    link: '#',
                    items: [
                      {
                        title: 'Mobile Phones',
                        icon: 'fa fa-phone',
                        link: '#',
                        items: [
                          {
                            name: 'Super Smart Phone',
                            link: '#'
                          },
                          {
                            name: 'Thin Magic Mobile',
                            link: '#'
                          },
                          {
                            name: 'Performance Crusher',
                            link: '#'
                          },
                          {
                            name: 'Futuristic Experience',
                            link: '#'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    name: 'Televisions',
                    icon: 'fa fa-desktop',
                    link: '#',
                    items: [
                      {
                        title: 'Televisions',
                        icon: 'fa fa-desktop',
                        link: '#',
                        items: [
                          {
                            name: 'Flat Super Screen',
                            link: '#'
                          },
                          {
                            name: 'Gigantic LED',
                            link: '#'
                          },
                          {
                            name: 'Power Eater',
                            link: '#'
                          },
                          {
                            name: '3D Experience',
                            link: '#'
                          },
                          {
                            name: 'Classic Comfort',
                            link: '#'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    name: 'Cameras',
                    icon: 'fa fa-camera-retro',
                    link: '#',
                    items: [
                      {
                        title: 'Cameras',
                        icon: 'fa fa-camera-retro',
                        link: '#',
                        items: [
                          {
                            name: 'Smart Shot',
                            link: '#'
                          },
                          {
                            name: 'Power Shooter',
                            link: '#'
                          },
                          {
                            name: 'Easy Photo Maker',
                            link: '#'
                          },
                          {
                            name: 'Super Pixel',
                            link: '#'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: 'Magazines',
            icon: 'fa fa-book',
            link: '#',
            items: [
              {
                title: 'Magazines',
                icon: 'fa fa-book',
                items: [
                  {
                    name: 'National Geographics',
                    link: '#'
                  },
                  {
                    name: 'Scientific American',
                    link: '#'
                  },
                  {
                    name: 'The Spectator',
                    link: '#'
                  },
                  {
                    name: 'Rambler',
                    link: '#'
                  },
                  {
                    name: 'Physics World',
                    link: '#'
                  },
                  {
                    name: 'The New Scientist',
                    link: '#'
                  }
                ]
              }
            ]
          },
          {
            name: 'Store',
            icon: 'fa fa-shopping-cart',
            link: '#',
            items: [
              {
                title: 'Store',
                icon: 'fa fa-shopping-cart',
                items: [
                  {
                    name: 'Clothes',
                    icon: 'fa fa-tags',
                    link: '#',
                    items: [
                      {
                        title: 'Clothes',
                        icon: 'fa fa-tags',
                        items: [
                          {
                            name: 'Women\'s Clothing',
                            icon: 'fa fa-female',
                            link: '#',
                            items: [
                              {
                                title: 'Women\'s Clothing',
                                icon: 'fa fa-female',
                                items: [
                                  {
                                    name: 'Tops',
                                    link: '#'
                                  },
                                  {
                                    name: 'Dresses',
                                    link: '#'
                                  },
                                  {
                                    name: 'Trousers',
                                    link: '#'
                                  },
                                  {
                                    name: 'Shoes',
                                    link: '#'
                                  },
                                  {
                                    name: 'Sale',
                                    link: '#'
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            name: 'Men\'s Clothing',
                            icon: 'fa fa-male',
                            link: '#',
                            items: [
                              {
                                title: 'Men\'s Clothing',
                                icon: 'fa fa-male',
                                items: [
                                  {
                                    name: 'Shirts',
                                    link: '#'
                                  },
                                  {
                                    name: 'Trousers',
                                    link: '#'
                                  },
                                  {
                                    name: 'Shoes',
                                    link: '#'
                                  },
                                  {
                                    name: 'Sale',
                                    link: '#'
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    name: 'Jewelry',
                    link: '#'
                  },
                  {
                    name: 'Music',
                    link: '#'
                  },
                  {
                    name: 'Grocery',
                    link: '#'
                  }
                ]
              }
            ]
          },
          {
            name: 'Collections',
            link: '#'
          },
          {
            name: 'Credits',
            link: '#'
          }
        ]
      }
    ];
    </script>

####Initialize
When HTML markup is present.

    	<script>
        $(document).ready(function(){
    			$('#menu').multilevelpushmenu();
    		});
    	</script>	

When menu items are provided as JS Array.

      <script>
        $(document).ready(function(){
          $('#menu').multilevelpushmenu({
            menu: arrMenu
          });
        });
      </script>  

Full list of options is provided below.

### Options

    container: $( '#menu' ),                                   // Holding container.
    containersToPush: [ $( '#content1' ), $( '#content2' ) ],  // Array of objects to push/slide together with menu.
    collapsed: false,                                          // Initialize menu in collapsed/expanded mode
    menuID: 'multilevelpushmenu',                              // ID of <nav> element.
    wrapperClass: 'multilevelpushmenu_wrapper',                // Wrapper CSS class.
    menuInactiveClass: 'multilevelpushmenu_inactive',          // CSS class for inactive wrappers.
    menu: arrMenu,                                             // JS array of menu items (if markup not provided).
    menuWidth: 0,                                              // Wrapper width (integer, '%', 'px', 'em').
    menuHeight: 0,                                             // Menu height (integer, '%', 'px', 'em').
    backText: 'Back',                                          // Text for 'Back' menu item.
    backItemClass: 'backItemClass',                            // CSS class for back menu item.
    backItemIcon: 'fa fa-angle-right',                         // FontAvesome icon used for back menu item.
    groupIcon: 'fa fa-angle-left',                             // FontAvesome icon used for menu items contaning sub-items.
    mode: 'overlap',                                           // Menu sliding mode: overlap/cover.
    overlapWidth: 40,                                          // Width in px of menu wrappers overlap
    preventItemClick: true,                                    // set to false if you do not need event callback functionality per item click
    preventGroupItemClick: true,                               // set to false if you do not need event callback functionality per group item click
    direction: 'ltr',                                          // set to 'rtl' for reverse sliding direction
    fullCollapse: false,                                       // set to true to fully hide base level holder when collapsed
    swipe: 'both'                                              // or 'touchscreen', or 'desktop'


#### Using swipe on desktops

If you will use swiping menus on desktops, mousedown bubble will be canceled and therefore any DOM object placed within menu item won't get focus when clicked.
To overcome this you can use originally triggered event returned as onItemClick's first argument. Below is an example showing how to set focus on input element, [http://jsfiddle.net/5rjg9/1/](http://jsfiddle.net/5rjg9/1/)

    $(document).ready(function () {
        $('#menu').multilevelpushmenu({
            onItemClick: function () {
                var e = arguments[0];
                if ($(e.target).prop('tagName').toLowerCase() == 'input') {
                    $(e.target).focus();
                    $(e.target).val('focused');
                    $(e.target).unbind('blur');
                    $(e.target).blur(function(){
                        $(e.target).val('blured');
                    });
                }
            }
        });
    });

or,

[http://jsfiddle.net/c5EA4/6/](http://jsfiddle.net/c5EA4/6/)

    $(document).ready(function () {
        $('#menu').multilevelpushmenu({
            onMenuSwipe: function () {
                var e = arguments[0];
                if ($(e.target).prop('tagName').toLowerCase() == 'input') return false;
            }
        });
    });

Alternatively, you can set swipe option to 'touchscreen' and allow swiping menus only on touch-screen enabled devices.

Full list of exposed metdods is provided below.

### Methods

    /**
     * Initialize menu
     */
    $('#menu').multilevelpushmenu();
    // or
    $('#menu').multilevelpushmenu('init');

    /**
     * Collapse menu
     */
    // Full collapse
    $('#menu').multilevelpushmenu('collapse');

    // Collapse menu down to level 1 (0 level represent root level expanded)
    $('#menu').multilevelpushmenu('collapse', 1);

    // Collapse menu down to the level of $menuLevelObject
    $('#menu').multilevelpushmenu('collapse', $menuLevelObject);

    // Collapse menu down to the level of menu level object with title 'Devices' (not really recommended since there could be many menu level objects with the same title; in such cases collasing will be unsuccessful)
    $('#menu').multilevelpushmenu('collapse', 'Devices');

    /**
     * Expand menu
     */
    // Menu expand from fully collapsed mode to level 0
    $('#menu').multilevelpushmenu('expand');

    // Expand menu up to the $menuLevelObject
    $('#menu').multilevelpushmenu('expand', $menuLevelObject);

    // Expand menu up to the menu level object with title 'Devices' (not recommended since there could be many menu level objects with the same title; in such cases expanding will be unsuccessful)
    $('#menu').multilevelpushmenu('expand', 'Devices');

    /**
     * Menu Expanded?
     * Check if menu level object is already expanded (returns true/false)
     */
    $('#menu').multilevelpushmenu('menuexpanded', $menuLevelObject);

    /**
     * Active (last expanded) menu level
     * Returns active menu level object, or false if menu is fully collapsed
     */
    $('#menu').multilevelpushmenu('activemenu');

    /**
     * Find menu level(s) by title
     * Provides collection of menu level objects matching provided menu title, or false if there is no match
     */
    $('#menu').multilevelpushmenu('findmenusbytitle', 'Devices');

    /**
     * Find menu item(s) by name
     * Provides collection of menu item objects matching provided name, or false if there is no match
     */
    $( '#menu' ).multilevelpushmenu( 'finditemsbyname' , 'Devices' );

    /**
     * Find path to root of selected menu level object
     * Provides chain collection of menu level objects (root menu level object to given menu level object), or false in case of error
     */
    $('#menu').multilevelpushmenu('pathtoroot', $menuLevelObject);

    /**
     * Find shared path or path differences of two given menu level objects
     * Provides collection of shared menu level objects of two menu level objects if bool parameter is set to true, or collection of menu level objects representing differences if bool is false; or false if there is no match
     */
    $('#menu').multilevelpushmenu('comparepaths', $menuLevelObject1, $menuLevelObject2, bool);

    // Shared path collection
    $('#menu').multilevelpushmenu('comparepaths', $menuLevelObject1, $menuLevelObject2, true);

    // Differences collection
    $('#menu').multilevelpushmenu('comparepaths', $menuLevelObject1, $menuLevelObject2, false);

    /**
     * Get or Set plug-in options
     * Get (if third parameter is not set) or Set selected plug-in option
     */
    // Get
    $('#menu').multilevelpushmenu('option', 'mode');

    // Set
    $('#menu').multilevelpushmenu('option', 'mode', 'cover');

    /**
     * Add/Remove menu item(s) with sub-menus
     * 
     */
    // Add
    $('#menu').multilevelpushmenu( 'additems' , itemsArray , $addToMenu , position );

    // Remove
    $('#menu').multilevelpushmenu( 'removeitems' , items );

    /**
     * Redraw menus
     * 
     */
    $('#menu').multilevelpushmenu( 'redraw' );

    /**
     * Visible menus
     * 
     */
    $('#menu').multilevelpushmenu( 'visiblemenus' );

    /**
     * Hidden menus
     * 
     */
    $('#menu').multilevelpushmenu( 'hiddenmenus' );

    /**
     * Propagate event to underneath layer
     * 
     */
     $( '#menu' ).multilevelpushmenu( 'propagateevent' , $( '#menu' ) , 'mousedown' );

#### Responsive menu example

    $( '#menu' ).multilevelpushmenu({
        menuWidth: '20%',
        menuHeight: '100%'
    });
    $( window ).resize(function() {
        $( '#menu' ).multilevelpushmenu( 'redraw' );
    });

Full list of events/callbacks is provided below.

### Events/Callbacks

    onCollapseMenuStart               // Menu collapse started
    onCollapseMenuEnd                 // Menu collapse ended
    onExpandMenuStart                 // Menu expand started
    onExpandMenuEnd                   // Menu expand ended
    onGroupItemClick                  // Click/touchstart menu item containing sub-items
    onItemClick                       // Click/touchstart menu item which doesn't contain sub-items
    onTitleItemClick                  // Title icon click/touchstart
    onBackItemClick                   // Back item click/touchstart
    onMenuReady                       // Menu created and ready for use
    onMenuSwipe                       // Menu swipe initiated

Provided argument for onMenuReady, onCollapseMenuStart, onCollapseMenuEnd, onExpandMenuStart and onExpandMenuEnd callbacks is current options object.

For onMenuSwipe, onTitleItemClick and onBackItemClick callbacks provided arguments are respecively event object, menu level holder object and plug-in options object.

For onGroupItemClick and onItemClick callbacks provided arguments are respecively event object, menu level object, clicked item object and plug-in options object.

#### An event callback example

Each event triggers a callback; An example using onItemClick event callback functionality.

    $( '#menu' ).multilevelpushmenu({
        onItemClick: function() {
            // First argument is original event object
            var event = arguments[0],
                // Second argument is menu level object containing clicked item (<div> element)
                $menuLevelHolder = arguments[1],
                // Third argument is clicked item (<li> element)
                $item = arguments[2],
                // Fourth argument is instance settings/options object
                options = arguments[3];

            // You can do some cool stuff here before
            // redirecting to href location
            // like logging the event or even
            // adding some parameters to href, etc...

            // Anchor href
            var itemHref = $item.find( 'a:first' ).attr( 'href' );
            // Redirecting the page
            location.href = itemHref;
        }
    });

### Browser Support / tested
* Chrome
* Midori
* Firefox
* Safari
* IE8+
* Opera 12.16
* Android Browser 4.1.2
* iOS Safari 7.0.1

### License
Licensed under the MIT license.
http://www.opensource.org/licenses/mit-license.php