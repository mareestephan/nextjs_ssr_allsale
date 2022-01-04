      jQuery.getJSON('/cart.js', function(cart) {
            // now have access to Shopify cart object
            document.getElementById("test-cart-credit-form").innerHTML = 'cart.total_price'
            document.getElementsByClassName("test-cart-credit-form").innerHTML = 'cart.total_price22'
                //  alert('There are now ' + cart.item_count + ' items in the cart.'  + 'The total is ' + cart.total_price + cart  )
              } );
              