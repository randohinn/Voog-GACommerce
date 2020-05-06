# Voog-GACommerce
[![Voog badge](https://img.shields.io/badge/Voog-voog.com-blue.svg)](https://voog.com)

Voog-GACommerce is a third-party drop-in javascript tool that allows to send and track Voog E-commerce purchases in Google Analytics. Currently supports stanalone GA and Google Tag Manager. Work efforts are underway to support enhanced ecommere tracking.

## Setup

1. Set up Google Analytics on your site.
2. Enable E-commerce in your Google Analytics settings. The code does currently not support the enhanced version
3. Include the appropriate JS file.

    ## Stand-alone Google Analytics

    1. Download [`gacommerce.js`](Regular%20Ecommerce/gacommerce.js) and upload it to your scripts folder in the Voog code editor.
    2. In `Settings` -> `Site`, add the following snippet inside the already present Google Analytics script tag under External stats, after `ga('send', 'pageview');`. This makes sure the snippet loads **after** Google Analytics is ready.

        ```js
        var s = document.createElement( 'script' );
        s.setAttribute( 'src', '/javascripts/voog-gacommerce-standalone.js' );
        document.body.appendChild(s);
        ```
    ## Google Tag Manager

    1. Create a Universal Analytics tag and set the Track Type to Transaction.
    2. Configure your tag with the required fields.
    3. Set your trigger as a `Custom Event` with the name of `voog-gacommerce-send`. This is critical.
    4. Publish the tag.
    5. Download [`voog-gacommerce-tagmanager.js`](Google%20Tag%20Manager/gacommerce-tgm.js) and upload it to your scripts folder in the Voog code editor.
    6. Include this file in `Settings` -> `Site`, in the part that inserts content before the `</body>` tag.
        ```js
        <script src="/javascripts/voog-gacommerce-tagmanager.js"></script>
        ```
**Note: All categories show up as "Store product", since Voog does not have categories.**
