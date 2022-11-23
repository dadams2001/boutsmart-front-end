export const createSale = (prod_id, size, price, quantity) => {
  // console.log(`prod_id: ${prod_id}, size: ${size}, price: ${price}, quantity: ${quantity}`);

  // POST request using fetch()
  fetch(process.env.REACT_APP_API_URL + "insert_sale", {
    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
      prod_id: prod_id,
      size: size,
      price: price,
      quantity: quantity,
    }),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => console.log(json));
};
