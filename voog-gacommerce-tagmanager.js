window.dataLayer = window.dataLayer || []

let transactionData = {
    "event": "voog-gacommerce-send"
}

document.addEventListener('voog:shoppingcart:show', (event) => {
    if(event.detail.view === "review") {
        const shoppingCart = Voog.ShoppingCart.getContents();
        transactionData.transactionId = shoppingCart.uuid;
        transactionData.transactionAffiliation = VoogEcommerce.storeInfo.company_name;
        transactionData.transactionTotal = Number(shoppingCart.total_amount);
        transactionData.transactionTax = Number(shoppingCart.items_tax_amount);
        transactionData.transactionShipping = Number(shoppingCart.shipping_total_amount);
        transactionData.transactionProducts = [];

        shoppingCart.items.forEach(item => {
            let product = {};
            product.sku = item.product.sku;
            product.name = item.product_name;
            product.category = "Store product";
            product.price = item.amount;
            product.quantity = item.quantity;
            transactionData.transactionProducts.push(product);
        });
    }
});

document.addEventListener('voog:shoppingcart:choosepaymentmethod', (event) => {
    dataLayer.push(transactionData);
});
