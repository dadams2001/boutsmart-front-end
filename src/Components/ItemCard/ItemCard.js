import './ItemCard.css';
import ashley from './ashley.png';
import { useState } from 'react';
import Modal from "react-modal";

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
                        <p>{merch[0]} {merch[4]} {merch[7]} {merch[1]}</p>
                        <input type="test" placeholder="Quantity..." onChange={(e)=>setQuantity(e.target.value)}/>
                    <button onClick={()=>setShowSaleModal(false)}>Confirm Sale</button>
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