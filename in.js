              <script type="text/javascript" >
              jQuery.getJSON('/cart.js', function(cart) {
            // now have access to Shopify cart object
                 alert('There are now ' + cart.item_count + ' items in the cart.'  + 'The total is ' + cart.total_price + cart  )
              } );
              </script>