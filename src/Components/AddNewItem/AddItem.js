import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddItem } from "../../Common/Services/AddItemServices";
import Header from "../Header/Header";

const NewItemCard = () => {
  const navigate = useNavigate();

  const [newItem, setNewItem] = useState({
    category: "",
    price: 0,
    sub_cat: "",
    color: "",
    gender: "",
    XS_quantity: 0,
    S_quantity: 0,
    M_quantity: 0,
    L_quantity: 0,
    XL_quantity: 0,
    XXL_quantity: 0,
    XXXL_quantity: 0,
    OS_quantity: 0,
    box: 0,
    shelf: "",
    location: "",
  });

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(`e.target: ${e.target}`);
    const { name, value: newValue } = e.target;
    console.log(`newValue: ${newValue}`);

    setNewItem({
      ...newItem,
      [name]: newValue,
    });
  };

  const onSubmitHandler = () => {
    console.log(newItem);
  };

  return (
    <div className="dash-container">
      <h1>Add New Item</h1>
      <Header />
      <div className="sub-container">
        <label> Enter the quantity for XS: </label>
        <input
          type="test"
          placeholder="XS Quantity..."
          onChange={onChangeHandler}
          name="XS_quantity"
        />
        <label> Enter the quantity for S: </label>
        <input
          type="test"
          placeholder="S Quantity..."
          onChange={onChangeHandler}
          name="S_quantity"
        />
        <label> Enter the quantity for M: </label>
        <input
          type="test"
          placeholder="M Quantity..."
          onChange={onChangeHandler}
          name="M_quantity"
        />
        <label> Enter the quantity for L: </label>
        <input
          type="test"
          placeholder="L Quantity..."
          onChange={onChangeHandler}
          name="L_quantity"
        />
        <label> Enter the quantity for XL: </label>
        <input
          type="test"
          placeholder="XL Quantity..."
          onChange={onChangeHandler}
          name="XL_quantity"
        />
        <label> Enter the quantity for XXL: </label>
        <input
          type="test"
          placeholder="XXL Quantity..."
          onChange={onChangeHandler}
          name="XXL_quantity"
        />
        <label> Enter the quantity for XXXL: </label>
        <input
          type="test"
          placeholder="XXXL Quantity..."
          onChange={onChangeHandler}
          name="XXXL_quantity"
        />
        <label> Enter the quantity for OS: </label>
        <input
          type="test"
          placeholder="OS Quantity..."
          onChange={onChangeHandler}
          name="OS_quantity"
        />
        <label> Enter the price of the item: </label>
        <input
          type="test"
          placeholder="Price..."
          onChange={onChangeHandler}
          name="price"
        />{" "}
        <br />
        <label for="cat-options"> Select a Category: </label>
        <select name="category" id="cat-options" onChange={onChangeHandler}>
          <option value="SPORTS BRAS">SPORTS BRAS</option>
          <option value="SHIRTS">SHIRTS </option>
          <option value="SWEATSHIRT">SWEATSHIRT </option>
          <option value="OUTERWEAR">OUTERWEAR </option>
          <option value="SWEATPANTS">SWEATPANTS </option>
          <option value="LEGGINGS">LEGGINGS </option>
          <option value="SHORTS">SHORTS</option>
          <option value="ACCESSORIES">ACCESSORIES</option>
        </select>{" "}
        <br />
        <label for="sub-cat-options"> Select a Sub-Category: </label>
        <select name="sub_cat" id="sub-cat-options" onChange={onChangeHandler}>
          <option value="SPORTS BRAS">SPORTS BRAS</option>
          <option value="TANK TOPS">TANK TOPS </option>
          <option value="SHORT SLEEVE">SHORT SLEEVE </option>
          <option value="LONG SLEEVE">LONG SLEEVE </option>
          <option value="CREWNECK">CREWNECK </option>
          <option value="HOODIE">HOODIE </option>
          <option value=" SHORT SLEEVE HOODIE"> SHORT SLEEVE HOODIE</option>
          <option value="QUARTER ZIP">QUARTER ZIP</option>
          <option value="VEST">VEST</option>
          <option value="FULL ZIP">FULL ZIP</option>
          <option value="POLO">POLO</option>
          <option value="SWEATPANTS">SWEATPANTS</option>
          <option value="JOGGERS">JOGGERS</option>
          <option value="FITTED">FITTED</option>
          <option value="CROPPED">CROPPED</option>
          <option value="HAT">HAT</option>
        </select>{" "}
        <br />
        <label for="color">Select the item's color: </label>
        <select name="color" id="color" onChange={onChangeHandler}>
          <option value="BLACK">BLACK</option>
          <option value="WHITE">WHITE</option>
          <option value="NAVY">NAVY</option>
          <option value="GREY">GREY</option>
          <option value="GREEN">GREEN</option>
          <option value="N/A">N/A</option>
        </select>{" "}
        <br />
        <label for="gender">Select the gender: </label>
        <select name="gender" id="gender">
          <option value="MENS">MENS</option>
          <option value="WOMENS">WOMENS</option>
          <option value="YOUTH">YOUTH</option>
          <option value="UNISEX">UNISEX</option>
        </select>{" "}
        <br />
        <label>Enter the box number:</label>
        <input
          type="test"
          placeholder="Box..."
          onChange={onChangeHandler}
          name="box"
        />
        <label for="shelf">Select the shelf: </label>
        <select name="shelf" id="shelf">
          <option value="LEFT">LEFT</option>
          <option value="RIGHT">RIGHT</option>
          <option value="TOP">TOP</option>
          <option value="MIDDLE">MIDDLE</option>
          <option value="N/A">N/A</option>
        </select>{" "}
        <br />
        <label for="location"> Select the location: </label>
        <select name="location" id="location" onChange={onChangeHandler}>
          <option value="PIT">PIT</option>
          <option value="PIT - BY DESK">PIT - BY DESK</option>
          <option value="RIGHT CLOSET">RIGHT CLOSET</option>
        </select>{" "}
        <br />
        <button
          onClick={() => {
            onSubmitHandler();
          }}
        >
          Confirm New Item
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Cancel
        </button>
        <br />
      </div>
    </div>
  );
};

export default NewItemCard;
