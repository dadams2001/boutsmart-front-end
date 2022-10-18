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
          fetch('dummy-data.json')
            .then((response) => response.json())
            .then((data) => {
                setMerchList(data);
                setFilteredList(data);
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
                <input placeholder='Search...' onChange={(e) => updateSearchValue(e)}></input>
                {(loaded) ?
                    <ul>
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