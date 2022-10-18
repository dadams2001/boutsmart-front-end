import './ItemCard.css';
import ashley from './ashley.png';

const ItemCard = ({merch, index}) => {
    return(
        <li className="merchCard" key={index}>
            <img id="ashley" src={ashley} alt="idk"/> 
            <div className='merchCard-subcontainer'>
                <h3>{merch.item_name}</h3>
                <p>
                    {merch.size}
                    <br/>
                    {merch.price}
                </p>
            </div>
        </li>
    );
}

export default ItemCard;