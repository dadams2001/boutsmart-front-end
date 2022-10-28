import './ItemCard.css';
import ashley from './ashley.png';

const ItemCard = ({merch, index}) => {
    return(
        <li className="merchCard" key={index}>
            <img id="ashley" src={ashley} alt="idk"/> 
            <div className='merchCard-subcontainer'>
                <div className='subcontainer-row'><p>{merch[0]} {merch[4]} {merch[7]}</p></div>
                <div className='subcontainer-row'><p>{merch[1]} ${merch[3]} {merch[6]} ({merch[2]})</p></div>
                <div className='subcontainer-row'><p>Quantity: {merch[8]} Box: {merch[9]} Shelf: {merch[10]} Location: {merch[11]}</p></div>
                <div className='subcontainer-row'><button>Record Sale</button><button>Restock</button></div>
            </div>
        </li>
    );
}

export default ItemCard;