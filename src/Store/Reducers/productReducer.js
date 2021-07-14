import Image from "../../assets/store.png";
const initialState = {
  products: [
    { title: "Product A", price: "300", image: Image, id: "sku00001" },
    { title: "Product A", price: "300", image: Image, id: "sku00002" },
    { title: "Product A", price: "300", image: Image, id: "sku00003" },
    { title: "Product A", price: "300", image: Image, id: "sku00004" },
    { title: "Product A", price: "300", image: Image, id: "sku00005" },
    { title: "Product A", price: "300", image: Image, id: "sku00006" },
    { title: "Product A", price: "300", image: Image, id: "sku00007" },
    { title: "Product A", price: "300", image: Image, id: "sku00008" },
    { title: "Product A", price: "300", image: Image, id: "sku00009" },
    { title: "Product A", price: "300", image: Image, id: "sku00010" },
    { title: "Product A", price: "300", image: Image, id: "sku00011" },
    { title: "Product A", price: "300", image: Image, id: "sku00012" },
    { title: "Product A", price: "300", image: Image, id: "sku00013" },
    { title: "Product A", price: "300", image: Image, id: "sku00014" },
    { title: "Product A", price: "300", image: Image, id: "sku00015" },
    { title: "Product A", price: "300", image: Image, id: "sku00016" },
    { title: "Product A", price: "300", image: Image, id: "sku00017" },
    { title: "Product A", price: "300", image: Image, id: "sku00018" },
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
