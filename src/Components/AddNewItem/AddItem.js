import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { AddItem } from "../../Common/Services/AddItemServices"
import axios from "axios";
import React,{Component} from "react"; 
import Main from "../UploadImages/AddImage"

const NewItemCard = () => {

    const navigate = useNavigate();

    const [showAddItemModal, setShowAddItemModal] = useState(true);
    const [prod_id, setProdID] = useState(0);
    const [category, setCategory] = useState('Null');
    const [price, setPrice] = useState(0);
    const [sub_cat, setSubCategory] = useState('Null');
    const [color, setColor] = useState('Null');
    const [gender, setGender] = useState('Null');
    const [XS_quantity, setXSQuantity] = useState(0);
    const [S_quantity, setSQuantity] = useState(0);
    const [M_quantity, setMQuantity] = useState(0);
    const [L_quantity, setLQuantity] = useState(0);
    const [XL_quantity, setXLQuantity] = useState(0);
    const [XXL_quantity, setXXLQuantity] = useState(0);
    const [XXXL_quantity, setXXXLQuantity] = useState(0);
    const [OS_quantity, setOSQuantity] = useState(0);
    const [box, setBox] = useState(0);
    const [shelf, setShelf] = useState('Null');
    const [location, setLocation] = useState('Null');

    const customStylesModal = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    }; 

    const sendAddItem = (prod_id, category, price, sub_cat, color, gender, XS_quantity, S_quantity, M_quantity, L_quantity, XL_quantity, XXL_quantity, XXXL_quantity, OS_quantity, box, shelf, location) => {
        AddItem(prod_id, category, price, sub_cat, color, gender, XS_quantity, S_quantity, M_quantity, L_quantity, XL_quantity, XXL_quantity, XXXL_quantity, OS_quantity, box, shelf, location);
    };

    /* const state = {
        // no file selected initially
        selectedFile: null
    };

    const onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };
    
    const onFileUpload = () => {
        const formData = new FormData();
    
        formData.append(
            "newFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );
            
        console.log(this.state.selectedFile);

        axios.post("api/uploadfile", formData);
    
    }; */

    return (
        <li className="AddItemCard" >
                <div className="modal-container">

                    <h1>Add New Item</h1>

                    <label> Enter the quantity for XS: </label>
                    <input
                        type="test"
                        placeholder="XS Quantity..."
                        onChange={(e) => setSQuantity(e.target.value)}
                    />

                    <label> Enter the quantity for S: </label>
                    <input
                        type="test"
                        placeholder="S Quantity..."
                        onChange={(e) => setXSQuantity(e.target.value)}
                    />

                    <label> Enter the quantity for M: </label>
                    <input
                        type="test"
                        placeholder="M Quantity..."
                        onChange={(e) => setMQuantity(e.target.value)}
                    />

                    <label> Enter the quantity for L: </label>
                    <input
                        type="test"
                        placeholder="L Quantity..."
                        onChange={(e) => setLQuantity(e.target.value)}
                    />

                    <label> Enter the quantity for XL: </label>
                    <input
                        type="test"
                        placeholder="XL Quantity..."
                        onChange={(e) => setXLQuantity(e.target.value)}
                    />

                    <label> Enter the quantity for XXL: </label>
                    <input
                        type="test"
                        placeholder="XXL Quantity..."
                        onChange={(e) => setXXLQuantity(e.target.value)}
                    />

                    <label> Enter the quantity for XXXL: </label>
                    <input
                        type="test"
                        placeholder="XXXL Quantity..."
                        onChange={(e) => setXXXLQuantity(e.target.value)}
                    />

                    <label> Enter the quantity for OS: </label>
                    <input
                        type="test"
                        placeholder="OS Quantity..."
                        onChange={(e) => setOSQuantity(e.target.value)}
                    />

                    <label> Enter the price of the item: </label>
                    <input
                        type="test"
                        placeholder="Price..."
                        onChange={(e) => setPrice(e.target.value)}
                    /> <br/>

                    <label for="cat-options"> Select a Category: </label>
                    <select name="cat-options" id="cat-options">
                        <option
                        value="SPORTS BRAS">SPORTS BRAS</option>
                        onChange={(e) => setCategory(e.target.value)} 
                        <option
                        value="SHIRTS">SHIRTS </option>
                        onChange={(e) => setCategory(e.target.value)} 
                        <option
                        value="SWEATSHIRT">SWEATSHIRT </option>
                        onChange={(e) => setCategory(e.target.value)} 
                        <option
                        value="OUTERWEAR">OUTERWEAR </option>
                        onChange={(e) => setCategory(e.target.value)} 
                        <option
                        value="SWEATPANTS">SWEATPANTS </option>
                        onChange={(e) => setCategory(e.target.value)} 
                        <option
                        value="LEGGINGS">LEGGINGS </option>
                        onChange={(e) => setCategory(e.target.value)} 
                        <option
                        value="SHORTS">SHORTS</option>
                        onChange={(e) => setCategory(e.target.value)} 
                        <option
                        value="ACCESSORIES">ACCESSORIES</option>
                        onChange={(e) => setCategory(e.target.value)} 
                    </select> <br/>

                    <label for="sub-cat-options"> Select a Sub-Category: </label>
                    <select name="sub-cat-options" id="sub-cat-options">
                        <option
                        value="SPORTS BRAS">SPORTS BRAS</option>
                        onChange={(e) => setSubCategory(e.target.value)} 
                        <option
                        value="TANK TOPS">TANK TOPS </option>
                        onChange={(e) => setSubCategory(e.target.value)} 
                        <option
                        value="SHORT SLEEVE">SHORT SLEEVE  </option>
                        onChange={(e) => setSubCategory(e.target.value)} 
                        <option
                        value="LONG SLEEVE">LONG SLEEVE </option>
                        onChange={(e) => setSubCategory(e.target.value)} 
                        <option
                        value="CREWNECK">CREWNECK </option>
                        onChange={(e) => setSubCategory(e.target.value)} 
                        <option
                        value="HOODIE">HOODIE </option>
                        onChange={(e) => setSubCategory(e.target.value)} 
                        <option
                        value=" SHORT SLEEVE HOODIE"> SHORT SLEEVE HOODIE</option>
                        onChange={(e) => setSubCategory(e.target.value)} 
                        <option
                        value="QUARTER ZIP">QUARTER ZIP</option>
                        onChange={(e) => setSubCategory(e.target.value)} 
                        <option
                        value="VEST">VEST</option>
                        onChange={(e) => setSubCategory(e.target.value)} 
                        <option
                        value="FULL ZIP">FULL ZIP</option>
                        onChange={(e) => setSubCategory(e.target.value)} 
                        <option
                        value="POLO">POLO</option>
                        onChange={(e) => setSubCategory(e.target.value)} 
                        <option
                        value="SWEATPANTS">SWEATPANTS</option>
                        onChange={(e) => setSubCategory(e.target.value)} 
                        <option
                        value="JOGGERS">JOGGERS</option>
                        onChange={(e) => setSubCategory(e.target.value)} 
                        <option
                        value="FITTED">FITTED</option>
                        onChange={(e) => setSubCategory(e.target.value)} 
                        <option
                        value="CROPPED">CROPPED</option>
                        onChange={(e) => setSubCategory(e.target.value)} 
                        <option
                        value="HAT">HAT</option>
                        onChange={(e) => setSubCategory(e.target.value)} 

                    </select> <br/>

                    <label for="color">Select the item's color: </label>
                    <select name="color" id="color">
                        <option
                        value="BLACK">BLACK</option>
                        onChange={(e) => setColor(e.target.value)}
                        <option
                        value="WHITE">WHITE</option>
                        onChange={(e) => setColor(e.target.value)}
                        <option
                        value="NAVY">NAVY</option>
                        onChange={(e) => setColor(e.target.value)}
                        <option
                        value="GREY">GREY</option>
                        onChange={(e) => setColor(e.target.value)}
                        <option
                        value="GREEN">GREEN</option>
                        onChange={(e) => setColor(e.target.value)}
                        <option
                        value="N/A">N/A</option>
                        onChange={(e) => setColor(e.target.value)}
                    </select> <br/>

                    <label for="gender">Select the gender: </label>
                    <select name="gender" id="gender">
                        <option
                        value="MENS">MENS</option>
                        onChange={(e) => setGender(e.target.value)}
                        <option
                        value="WOMENS">WOMENS</option>
                        onChange={(e) => setGender(e.target.value)}
                        <option
                        value="YOUTH">YOUTH</option>
                        onChange={(e) => setGender(e.target.value)}
                        <option
                        value="UNISEX">UNISEX</option>
                        onChange={(e) => setGender(e.target.value)}
                    </select> <br/>

                    <label>Enter the box number:</label>
                    <input
                        type="test"
                        placeholder="Box..."
                        onChange={(e) => setBox(e.target.value)}
                    />

                    <label for="shelf">Select the shelf: </label>
                    <select name="shelf" id="shelf">
                        <option
                        value="LEFT">LEFT</option>
                        onChange={(e) => setShelf(e.target.value)}
                        <option
                        value="RIGHT">RIGHT</option>
                        onChange={(e) => setShelf(e.target.value)}
                        <option
                        value="TOP">TOP</option>
                        onChange={(e) => setShelf(e.target.value)}
                        <option
                        value="MIDDLE">MIDDLE</option>
                        onChange={(e) => setShelf(e.target.value)}
                        <option
                        value="N/A">N/A</option>
                        onChange={(e) => setShelf(e.target.value)}
                    </select> <br/>

                    <label for="location"> Select the location: </label>
                    <select name="location" id="location">
                        <option
                        value="PIT">PIT</option>
                        onChange={(e) => setLocation(e.target.value)}
                        <option
                        value="PIT - BY DESK">PIT - BY DESK</option>
                        onChange={(e) => setLocation(e.target.value)}
                        <option
                        value="RIGHT CLOSET">RIGHT CLOSET</option>
                        onChange={(e) => setLocation(e.target.value)}
                    </select> <br/>

                    <Main />

                    <button
                        onClick={() => {
                            // sendAddItem(prod_id, size, category, price, sub_cat, discontinued, color, gender, quantity, box, shelf, location)
                            sendAddItem(prod_id, category, price, sub_cat, color, gender, XS_quantity, S_quantity, M_quantity, L_quantity, XL_quantity, XXL_quantity, XXXL_quantity, OS_quantity, box, shelf, location)
                            alert('item created successfully!');
                            navigate("/");
                        }}
                    >
                    Confirm New Item
                    </button>
                    <button onClick={() => {
                        navigate("/")
                    }}>Cancel</button> 
                    <br/>

                </div>
        </li>
    );


};

export default NewItemCard;