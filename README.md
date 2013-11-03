# Multi-level-push-menu

## jQuery Plugin inspired by [Codrops](http://tympanus.net/codrops/2013/08/13/multi-level-push-menu/) MultiLevelPushMenu implementation
If you do not need support for older browsers (i.e. IE 8) I do recommend you to use their implementation since it's based on CSS 3D Transforms and therefore much more performant.

###Demo / More Examples [multi-level-push-menu.make.rs](http://multi-level-push-menu.make.rs)

### Features
* Multi-level menu support
* Endless nesting of navigation elements
* Push/Slide DOM elements of choice
* Flexible, simple markup
* JS Array input, if markup is not present
* Cross-browser compatibility

### Usage

####Include the CSS
multilevelpushmenu.css can be modified to fit website design

FontAvesome

    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.1/css/font-awesome.min.css">
Font I like

    <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700&subset=latin,cyrillic-ext,latin-ext,cyrillic' rel='stylesheet' type='text/css'>
Multi-Level-Push-Menu

    <link rel="stylesheet" href="multilevelpushmenu.css" />

####Include the JS

jQuery

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
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
        icon: 'fa fa-reorder',
        items: [
          {
            name: 'Devices',
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

    container : $( '#menu' ),                                   // Holding container.
    containersToPush : [ $( '#content1' ), $( '#content2' ) ],  // Array of objects to push/slide together with menu.
    menuID: "multilevelpushmenu",                               // ID of <nav> element.
    wrapperClass: 'multilevelpushmenu_wrapper',                 // Wrapper CSS class.
    menuInactiveClass: 'multilevelpushmenu_inactive',           // CSS class for inactive wrappers.
    menu: menu,                                                 // JS array of menu items (if markup not provided).
    menuWidth: 0,                                               // Wrapper width (integer, '%', 'px', 'em').
    menuHeight: 0,                                              // Menu height (integer, '%', 'px', 'em').
    backText: 'Back',                                           // Text for 'Back' menu item.
    backItemClass: 'backItemClass',                             // CSS class for back menu item.
    backItemIcon: 'fa fa-angle-right',                          // FontAvesome icon used for back menu item.
    groupIcon: 'fa fa-angle-left',                              // FontAvesome icon used for menu items contaning sub-items.
    mode: 'overlap',                                            // Menu sliding mode: overlap/cover.
    overlapWidth: 40                                            // Width in px of menu wrappers overlap

### Browser Support / tested
* Chrome
* Firefox
* Safari
* IE8+
* Android Browser 4.1.2
* iOS Safari 7.0.1