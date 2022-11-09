import './MerchDashboard.css';
import { useState, useEffect } from 'react';
import { searchList } from '../../Common/Services/FilterServices';
import { filterList } from '../../Common/Services/FilterServices';
import ItemCard from '../ItemCard/ItemCard';

const MerchDashboard = () => {
  const [merchList, setMerchList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [filterBoolList, setFilterBoolList] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [filterNameList] = useState([
    'accessories',
    'leggings',
    'shirts',
    'outerwear',
    'sports bras',
    'shorts',
    'sweatpants',
    'sweatshirt',
  ]);
  const [trueFilters, setTrueFilters] = useState([]);

  // TODO: Delete this comment
  /*
   * Generally, the try catch is good for possible errors on the immediete block
   * contained within the brackets. Issue with `fetch` is that it is an async call
   * and will fail silently outside of the try/catch blocks. You may want to keep
   * the try/catch since there is a chance of failure with setting the data
   * (i.e., fetch succeeds, but the response is in an unexpected or changed format)
   */
  useEffect(() => {
    try {
      fetch(process.env.REACT_APP_API_URL + 'return_all')
        .then((response) => response.json())
        .then((data) => {
          setMerchList(data.data);
          setFilteredList(data.data);
        })
        .then(() => setLoaded(true))
        .catch((error) => {
          console.error(error);
        });
    } catch (err) {
      console.log(err); // Change to console.error and notify user of failure (remove loading text)
    }
  }, []);

  useEffect(() => {
    const list = filterList(trueFilters, merchList);
    setFilteredList(list);
    setLoaded(true);
  }, [filterBoolList]);

  const searchMerch = (input) => {
    setFilteredList(searchList(merchList, input));
  };

  const updateSearchValue = (e) => {
    e.preventDefault();
    searchMerch(e.target.value);
  };

  const filterItemsFunc = (input, merchList) => {
    updateFilterBoolList(input);
  };

  const updateFilterBoolList = async (index) => {
    var filterBoolListCopy = JSON.parse(
      JSON.stringify(filterBoolList)
    );
    filterBoolListCopy[index] = !filterBoolListCopy[index];
    setTrueFilters(
      filterBoolListCopy.reduce(
        (out, bool, index) =>
          bool ? out.concat(filterNameList[index]) : out,
        []
      )
    );
    setFilterBoolList(filterBoolListCopy);

    // ! Below is a moument to your failures <3
    /*setFilterBoolList(
      filterBoolList.map((filter, index) => {
        // Locate correct filterBool
        if (index === input) {
          if (!filter) {
            // Add to true filters
            console.log(filterNameList[index]);
            setTrueFilters([...trueFilters, filterNameList[index]]);
          } else {
            // Remove from true filters
            setTrueFilters(
              trueFilters.filter(
                (filter) => filter !== filterNameList[input]
              )
            );
          }
          return !filter;
        } else {
          // No changes
          return filter;
        }
      })
    );*/
  };

  return (
    <div className="dash-container">
      <h1>Here's our merch bro</h1>
      <div className="sub-container">
        <div className="container-row">
          {filterNameList.map((name, index) => {
            return (
              <div key={index}>
                {filterBoolList[index] === true ? (
                  <button
                    key={index}
                    style={{ margin: '5px', backgroundColor: 'aqua' }}
                    onClick={() => filterItemsFunc(index, merchList)}
                  >
                    {name}
                  </button>
                ) : (
                  <button
                    key={index}
                    style={{ margin: '5px' }}
                    onClick={() => filterItemsFunc(index, merchList)}
                  >
                    {name}
                  </button>
                )}
              </div>
            );
          })}
        </div>
        <input
          id="search-bar"
          placeholder="Search..."
          onChange={(e) => updateSearchValue(e)}
        ></input>
        {loaded ? (
          <ul>
            {/* merch[0]:  ITEM_ID, merch[1]: SIZE, merch[2]: CATEGORY, merch[3]: PRICE, merch[4]: SUB_CATEGORY, merch[5]: DISCONTINUED, 
                        merch[6]: COLOR, merch[7]: GENDER, merch[8]: QUANTITY, merch[9]: BOX, merch[10]: SHELF, merch[11]: LOCATION */}
            {filteredList.map((merch, index) => {
              return (
                <ItemCard merch={merch} index={index} key={index} />
              );
            })}
          </ul>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default MerchDashboard;
