import './ItemCard.css';
import ashley from './ashley.png';
import { useState } from 'react';
import Modal from "react-modal";
import { createSale } from '../../Common/Services/SaleServices';

const ItemCard = ({merch, index}) => {
    const [showSaleModal, setShowSaleModal] = useState(false);
    const [showRestockModal, setShowRestockModal] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const customStylesModal = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

      const sendSale = (prod_id, size, price, quantity, quantity_avail) => {
        if (quantity > quantity_avail) {
            alert(`We only have ${quantity_avail} in stock!`)
        } else {
            createSale(prod_id, size, price, quantity);
            setShowSaleModal(false);
        }
      };

    /* 
    merch[0]:  ITEM_ID, 
    merch[1]: SIZE, 
    merch[2]: CATEGORY, 
    merch[3]: PRICE, 
    merch[4]: SUB_CATEGORY, 
    merch[5]: DISCONTINUED, 
    merch[6]: COLOR, 
    merch[7]: GENDER, 
    merch[8]: QUANTITY, 
    merch[9]: BOX, 
    merch[10]: SHELF, 
    merch[11]: LOCATION */

    return(
        <li className="merchCard" key={index}>
            <Modal
                // Sales Modal
                isOpen={showSaleModal}
                contentLabel="Record Sale"
                style={customStylesModal}
                onClickOutside={()=>setShowSaleModal(false)}
            >
                <div className='modal-container'>
                    <h1>Add Sale</h1>
                        <p>{merch[0]} {merch[4]} {merch[7]} {merch[1]} ${merch[3]}</p>
                        <input type="test" placeholder="Quantity..." onChange={(e)=>setQuantity(e.target.value)}/>
                    <button onClick={()=>sendSale(merch[0], merch[1], merch[3], quantity, merch[8])}>Confirm Sale</button>
                    <button onClick={()=>setShowSaleModal(false)}>Cancel</button>
                </div>
            </Modal>
            <Modal
                // Restock Modal
                isOpen={showRestockModal}
                contentLabel="Record Restock"
                style={customStylesModal}
                onClickOutside={()=>setShowRestockModal(false)}
            >
                <div className='modal-container'>
                    <h1>Add Restock</h1>
                        <p>{merch[0]} {merch[4]} {merch[7]} {merch[1]}</p>
                        <input type="test" placeholder="Quantity..." onChange={(e)=>setQuantity(e.target.value)}/>
                    <button onClick={()=>setShowRestockModal(false)}>Confirm Restock</button>
                    <button onClick={()=>setShowRestockModal(false)}>Cancel</button>
                </div>
            </Modal>
            <img id="ashley" src={ashley} alt="idk"/> 
            <div className='merchCard-subcontainer'>
                <div className='subcontainer-row'><p>{merch[0]} {merch[4]} {merch[7]}</p></div>
                <div className='subcontainer-row'><p>{merch[1]} ${merch[3]} {merch[6]} ({merch[2]})</p></div>
                <div className='subcontainer-row'><p>Quantity: {merch[8]} Box: {merch[9]} Shelf: {merch[10]} Location: {merch[11]}</p></div>
                <div className='subcontainer-row'>
                    <button onClick={()=>setShowSaleModal(true)}>Record Sale</button>
                    <button onClick={()=>setShowRestockModal(true)}>Record Restock</button>
                </div>
            </div>
        </li>
    );
}

export default ItemCard;