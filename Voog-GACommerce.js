ga('require', 'ecommerce'); // We need Google Analytics to actually know what we want to do. Thus, give us Ecommerce!

(function () {
    document.addEventListener('voog:shoppingcart:show', (event) => {
        if(event.detail.view === "review") {
            let shoppingcart = Voog.ShoppingCart.getShoppingCartData();
            ga('ecommerce:clear'); // Existing unsent data from before? Make it dissapear
            ga('ecommerce:addTransaction', {
                'id': shoppingcart.uuid,                                      // Transaction ID.
                'affiliation': VoogEcommerce.storeInfo.company_name,          // Affiliation or store name.
                'revenue': shoppingcart.total_amount.toString(),              // Grand Total.
                'shipping': shoppingcart.shipping_subtotal_amount.toString(), // Shipping.
                'tax': shoppingcart.items_tax_amount.toString()               // Tax.
            });
            shoppingcart.items.forEach(function(item) {
                ga('ecommerce:addItem', {
                    'id': shoppingcart.uuid,
                    'name': item.name,
                    'sku': item.product.name, // Yes, this is not a SKU, but the review view doesn't seem to have 'em...
                    'category': 'Product',
                    'price': item.product.price.toString(),
                    'quantity': item.quantity.toString(),
                    'currency': VoogEcommerce.storeInfo.currency
                });
            }, this);
        }
    });

    document.addEventListener('voog:shoppingcart:choosepaymentmethod', () => {
        ga('ecommerce:send');
    });
})();
