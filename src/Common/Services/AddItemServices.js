
export const AddItem = (newItem) => {
  fetch(process.env.REACT_APP_API_URL + "AddItem", {
    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
      category: newItem.category,
      price: newItem.price,
      sub_cat: newItem.sub_cat,
      color: newItem.color,
      gender: newItem.gender,
      XS_quantity: newItem.XS_quantity,
      S_quantity: newItem.S_quantity,
      M_quantity: newItem.M_quantity,
      L_quantity: newItem.L_quantity,
      XL_quantity: newItem.XL_quantity,
      XXL_quantity: newItem.XXL_quantity,
      XXXL_quantity: newItem.XXXL_quantity,
      OS_quantity: newItem.OS_quantity,
      box: newItem.box,
      shelf: newItem.shelf,
      location: newItem.location,
    }),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => console.log(json))

    // Tell user for success
    .then(() => alert(`You have successfully added an item!!`));
};
