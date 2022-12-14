export const AddItem = (prod_id, category, price, sub_cat, color, gender, XS_quantity, S_quantity, M_quantity, L_quantity, XL_quantity, XXL_quantity, XXXL_quantity, OS_quantity, box, shelf, location) => {
    // console.log(`prod_id: ${prod_id}, size: ${size}, price: ${price}, quantity: ${quantity}`);
  
    // POST request using fetch()
    fetch(process.env.REACT_APP_API_URL + "/AddItem", {
      // Adding method type
      method: "POST",
  
      // Adding body or contents to send
      body: JSON.stringify({
        prod_id: prod_id,
        category: category,
        price: price,
        sub_cat: sub_cat,
        color: color,
        gender: gender,
        XS_quantity: XS_quantity,
        S_quantity: S_quantity,
        M_quantity: M_quantity,
        L_quantity: L_quantity,
        XL_quantity: XL_quantity,
        XXL_quantity: XXL_quantity,
        XXXL_quantity: XXXL_quantity,
        OS_quantity: OS_quantity,
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