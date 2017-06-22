# Voog-GACommerce
[![Voog badge](https://img.shields.io/badge/Voog-voog.com-blue.svg)](https://voog.com)

Voog-GACommerce is a simple drop-in solution for tracking [Voog](https://voog.com) E-Commerce purchases in the [Google Analytics](https://analytics.google.com) Ecommerce section.

## Usage

You need to have GA set up on your site beforehand.

* Download the script and upload it to your scripts folder in the editor. In `Settings` -> `Site`, add this inside the already present GA script tag under External stats, after `ga('send', 'pageview');`

```
    var s = document.createElement( 'script' );
    s.setAttribute( 'src', '/javascripts/Voog-GACommerce.js' );
    document.body.appendChild( s );
``` 

This makes sure, that GACommerce loads after GA has been set up and exists to be used.

* Start buying, the script will now automatically detect checkouts and send data to GA.  Processing might take some time.

**Since Voog doesn't have categories in the Store feature itself, all items will be sent with category 'Product'.**

## Contributing

Feel free to Fork and PR this repo, aswell as submit any issues.