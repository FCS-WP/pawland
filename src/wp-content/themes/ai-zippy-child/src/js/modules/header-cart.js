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
}
