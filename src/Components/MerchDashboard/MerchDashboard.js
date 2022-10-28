import './MerchDashboard.css';
import { useState, useEffect } from 'react';
import { searchList } from '../../Common/Services/FilterServices';
import ItemCard from '../ItemCard/ItemCard';

const MerchDashboard = () => {
    const [merchList, setMerchList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(()=>{
        try {
            fetch(process.env.REACT_APP_API_URL+"return_all")
            .then((response)=> response.json())
            .then((data)=>{
                setMerchList(data.data)
                setFilteredList(data.data)
            })
            .then(()=>setLoaded(true));
        } catch (err) {
            console.log(err);
        }
    },[]);

    const searchMerch = (input) => {
        setFilteredList(searchList(merchList, input));
    }

    const updateSearchValue = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        searchMerch(e.target.value);
    }
    
    return(
        <div className="dash-container">
            <h1>Here's our merch bro</h1>
            <div className='sub-container'>
                {/* <div className='container-row'>Filters: <button>Men's</button><button>Women's</button></div> */}
                <input placeholder='Search...' onChange={(e) => updateSearchValue(e)}></input>
                {(loaded) ?
                    <ul>
                        {/* merch[0]:  ITEM_ID, merch[1]: SIZE, merch[2]: CATEGORY, merch[3]: PRICE, merch[4]: SUB_CATEGORY, merch[5]: DISCONTINUED, 
                        merch[6]: COLOR, merch[7]: GENDER, merch[8]: QUANTITY, merch[9]: BOX, merch[10]: SHELF, merch[11]: LOCATION */}
                        {filteredList.map((merch, index) => {
                            return (
                                <ItemCard merch={merch} index={index} />
                            );
                        })}
                    </ul>
                    :
                    <div>
                        Loading...
                    </div>
                }
                </div>
        </div>
    );
}

export default MerchDashboard;