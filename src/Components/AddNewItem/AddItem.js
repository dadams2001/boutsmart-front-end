import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { AddItem } from "../../Common/Services/AddItemServices"

const NewItemCard = () => {

    const navigate = useNavigate();

    const [showAddItemModal, setShowAddItemModal] = useState(true);
    const [prod_id, setProdID] = useState(0);
    const [size, setSize] = useState('Null');
    const [category, setCategory] = useState('Null');
    const [price, setPrice] = useState(0);
    const [sub_cat, setSubCat] = useState('Null');
    const [discontinued, setDisc] = useState(0);
    const [color, setColor] = useState('Null');
    const [gender, setGender] = useState('Null');
    const [quantity, setQuantity] = useState(0);
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

    const sendAddItem = (prod_id, size, category, price, sub_cat, discontinued, color, gender, quantity, box, shelf, location) => {
        AddItem(prod_id, size, category, price, sub_cat, discontinued, color, gender, quantity, box, shelf, location);
        setShowAddItemModal(false);
    };

    return (
        <li className="AddItemCard" >
                <div className="modal-container">
                    <h1>Add New Item</h1>
                    <input
                        type="test"
                        placeholder="Size..."
                        onChange={(e) => setSize(e.target.value)}
                    />
                    <input
                        type="test"
                        placeholder="Category..."
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <input
                        type="test"
                        placeholder="Price..."
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <input
                        type="test"
                        placeholder="Sub-Category..."
                        onChange={(e) => setSubCat(e.target.value)}
                    />
                    <input
                        type="test"
                        placeholder="Discontinued?"
                        onChange={(e) => setDisc(e.target.value)}
                    />
                    <input
                        type="test"
                        placeholder="Color..."
                        onChange={(e) => setColor(e.target.value)}
                    />
                    <input
                        type="test"
                        placeholder="Gender..."
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <input
                        type="test"
                        placeholder="Quantity..."
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <input
                        type="test"
                        placeholder="Box..."
                        onChange={(e) => setBox(e.target.value)}
                    />
                    <input
                        type="test"
                        placeholder="Shelf..."
                        onChange={(e) => setShelf(e.target.value)}
                    />
                    <input
                        type="test"
                        placeholder="Location..."
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            // sendAddItem(prod_id, size, category, price, sub_cat, discontinued, color, gender, quantity, box, shelf, location)
                            alert('item created successfully!');
                            navigate("/");
                        }}
                    >
                    Confirm New Item
                    </button>
                    <button onClick={() => {
                        navigate("/")
                    }}>Cancel</button> 
                </div>
        </li>
    );
};

export default NewItemCard;