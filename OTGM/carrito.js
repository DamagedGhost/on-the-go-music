// /OTGM/carrito.js
const CART_KEY = "otgm_cart";

const fmtCLP = n =>
  new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(n);

const getCart = () => JSON.parse(localStorage.getItem(CART_KEY) || "[]");
const saveCart = cart => localStorage.setItem(CART_KEY, JSON.stringify(cart));

function updateNavCount() {
  const link = document.getElementById("cart-link");
  if (!link) return;
  const totalItems = getCart().reduce((acc, p) => acc + p.quantity, 0);
  link.innerHTML = `<i class="bi bi-cart"></i> Carrito (${totalItems})`;
}

function addToCart({ name, price, image, qty = 1 }) {
  let cart = getCart();
  const i = cart.findIndex(p => p.name === name);
  if (i >= 0) cart[i].quantity += qty;
  else cart.push({ name, price: Number(price), image, quantity: qty });
  saveCart(cart);
  updateNavCount();
}

function changeQty(index, delta) {
  let cart = getCart();
  if (!cart[index]) return;
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  saveCart(cart);
  renderCart();
  updateNavCount();
}

function removeAt(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
  updateNavCount();
}

function clearCart() {
  saveCart([]);
  renderCart();
  updateNavCount();
}

function renderCart() {
  const list = document.getElementById("cart-items-list");
  const totalEl = document.getElementById("cart-total");
  if (!list || !totalEl) return;

  const cart = getCart();
  let total = 0;
  list.innerHTML = cart.map((item, i) => {
    total += item.price * item.quantity;
    return `
      <div class="d-flex align-items-center justify-content-between border rounded p-2 mb-2">
        <div class="d-flex align-items-center">
          <img src="${item.image}" alt="${item.name}" width="70" height="70" class="object-fit-cover me-3">
          <div>
            <div class="fw-semibold">${item.name}</div>
            <div class="text-muted small">${fmtCLP(item.price)} c/u</div>
          </div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-sm btn-outline-secondary qty-minus" data-index="${i}">-</button>
          <span class="px-2">${item.quantity}</span>
          <button class="btn btn-sm btn-outline-secondary qty-plus" data-index="${i}">+</button>
          <span class="ms-3 fw-semibold">${fmtCLP(item.price * item.quantity)}</span>
          <button class="btn btn-sm btn-outline-danger ms-2 remove-item" data-index="${i}">X</button>
        </div>
      </div>`;
  }).join("");

  totalEl.textContent = fmtCLP(total);
}

document.addEventListener("DOMContentLoaded", () => {
  updateNavCount();

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-to-cart");
    if (btn) {
      const { name, price, image, quantityId } = btn.dataset;

      // Leer cantidad si el botón tiene data-quantity-id
      let qty = 1;
      if (quantityId) {
        const select = document.getElementById(quantityId);
        if (select) qty = parseInt(select.value, 10);
      }

      addToCart({ name, price, image, qty });
    }

    const plus = e.target.closest(".qty-plus");
    const minus = e.target.closest(".qty-minus");
    const remove = e.target.closest(".remove-item");
    if (plus) changeQty(Number(plus.dataset.index), +1);
    if (minus) changeQty(Number(minus.dataset.index), -1);
    if (remove) removeAt(Number(remove.dataset.index));
  });

  renderCart();
});

window.clearCart = clearCart;

// -------------------------- script usuario -------------------------