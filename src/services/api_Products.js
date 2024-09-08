const URL = "https://fakestoreapi.in/api";

export async function getAllProducts() {
  const res = await fetch(`${URL}/products?limit=150`);
  const data = await res.json();
  return data;
}

export async function getProductById(id) {
  const res = await fetch(`${URL}/products/${id}`);
  const data = await res.json();
  data.product = { ...data.product, quantity: 1 };
  return data;
}

export async function getCategories() {
  const res = await fetch(`${URL}/products/category`);
  const data = await res.json();
  return data;
}

export async function getProductsByCategory(type) {
  const res = await fetch(`${URL}/products/category?type=${type}`);
  const data = await res.json();
  return data;
}
