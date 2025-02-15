import { ProductCard } from "./product-card/ProductCard.js";

const generateCardsOfProducts = (products) => {
  const productsObj = products.map((product) => {
    const newProduct = new ProductCard(
      product.id,
      product.nombre,
      product.categoria,
      product.precio,
      product.descripcion,
      product.imagen,

    );

    return newProduct.generateHTML();
  });

  return productsObj.join("");
};

export { generateCardsOfProducts };
