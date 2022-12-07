export const AddItem = (prod_id, size, category, price, sub_cat, disc, color, gender, quantity, box, shelf, location) => {
    // console.log(`prod_id: ${prod_id}, size: ${size}, price: ${price}, quantity: ${quantity}`);
  
    // POST request using fetch()
    fetch(process.env.REACT_APP_API_URL + "add_item", {
      // Adding method type
      method: "POST",
  
      // Adding body or contents to send
      body: JSON.stringify({
        prod_id: prod_id,
        size: size,
        category: category,
        price: price,
        sub_cat: sub_cat,
        disc: disc,
        color: color,
        gender: gender,
        quantity: quantity,
        box: box,
        shelf: shelf,
        location: location
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