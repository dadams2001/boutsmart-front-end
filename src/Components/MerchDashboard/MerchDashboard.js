import './MerchDashboard.css';
import { useState, useEffect } from 'react';
import { searchList } from '../../Common/Services/FilterServices';
import { filterList } from '../../Common/Services/FilterServices';
import ItemCard from '../ItemCard/ItemCard';

const MerchDashboard = () => {
    const [merchList, setMerchList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [filteredList, setFilteredList] = useState([]);
    const [filterBoolList, setFilterBoolList] = useState([false, false, false, false, false, false, false, false]);
    const [filterNameList] = useState(["accessories", "leggings", "shirts", "outerwear", "sports bras", "shorts", "sweatpants", "sweatshirt"]);
    const [trueFilters, setTrueFilters] = useState([]);

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
    };

    const updateSearchValue = (e) => {
        e.preventDefault();
        searchMerch(e.target.value);
    };

    const filterItemsFunc = (input, merchList) => {
        updateFilterBoolList(input)
            .then(()=>filterList(trueFilters, merchList))
            .then((list)=>setFilteredList(list))
            .then(()=>setLoaded(true));
    }

    const updateFilterBoolList = async (input) => {
        setFilterBoolList(filterBoolList.map((filter, index) => {
            // Locate correct filterBool
            if (index === input) {
                if (!filter) {
                    // Add to true filters
                    console.log(filterNameList[index]);
                    setTrueFilters([
                        ...trueFilters,filterNameList[index]
                    ])
                } else {
                    // Remove from true filters
                    setTrueFilters(trueFilters.filter(filter => filter !== filterNameList[input]));
                    
                }
                return !filter;
            } else {
              // No changes
              return filter;
            }
        }));
    };
    
    return(
        <div className="dash-container">
            <h1>Here's our merch bro</h1>
            <div className='sub-container'>
                 <div className='container-row'>
                    {filterNameList.map((name, index) =>{
                        return(
                            <div>
                            {(filterBoolList[index] === true)
                                ?   <button 
                                        key={index} 
                                        style={{"margin":"5px", "backgroundColor":"aqua"}}
                                        onClick={()=>filterItemsFunc(index, merchList)}
                                    >
                                        {name}
                                    </button>
                                :
                                    <button 
                                        key={index} 
                                        style={{"margin":"5px"}}
                                        onClick={()=>filterItemsFunc(index, merchList)}
                                    >
                                        {name}
                                    </button>
                            }
                            </div>
                        );

                    })}
                 </div>
                <input id="search-bar" placeholder='Search...' onChange={(e) => updateSearchValue(e)}></input>
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