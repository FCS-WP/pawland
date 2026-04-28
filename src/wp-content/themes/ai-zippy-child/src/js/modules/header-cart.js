/**
 * Logic to open the mini cart when the custom cart icon is clicked.
 */
export function initHeaderCart() {
  document.addEventListener("click", (e) => {
    const cartLink = e.target.closest(".pc-icon-cart");
    if (!cartLink) return;

    // Try to find the WooCommerce Mini Cart block button
    const miniCartBtn = document.querySelector(".wc-block-mini-cart__button");

    if (miniCartBtn) {
      e.preventDefault();
      miniCartBtn.click();
    }
  });

  // Update custom cart count when cart fragments change
  if (typeof jQuery !== "undefined") {
    jQuery(document.body).on("added_to_cart removed_from_cart updated_cart_totals", (e, fragments, cart_hash) => {
      updateCustomCartCount();
    });
  }

  // Initial update
  updateCustomCartCount();
}

function updateCustomCartCount() {
  const countEl = document.querySelector(".pc-cart-count");
  if (!countEl) return;

  // Use WC blocks store if available
  if (typeof wp !== "undefined" && wp.data) {
    try {
      const cart = wp.data.select("wc/store/cart").getCartData();
      if (cart && typeof cart.itemsCount !== "undefined") {
        countEl.innerText = cart.itemsCount;
        countEl.style.display = cart.itemsCount > 0 ? "flex" : "none";
        return;
      }
    } catch (e) {}
  }

  // Fallback to classic cookie or AJAX if needed
  // For now, most additions will go through our add-to-cart.js which updates wc/store/cart
}
