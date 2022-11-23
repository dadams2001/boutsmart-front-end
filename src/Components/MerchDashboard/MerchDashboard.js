import "./MerchDashboard.css";
import { useState, useEffect } from "react";
import { searchList } from "../../Common/Services/FilterServices";
import { filterList } from "../../Common/Services/FilterServices";
import Header from "../Header/Header";
import ItemCard from "../ItemCard/ItemCard";

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
    "accessories",
    "leggings",
    "shirts",
    "outerwear",
    "sports bras",
    "shorts",
    "sweatpants",
    "sweatshirt",
  ]);
  const [trueFilters, setTrueFilters] = useState([]);

  useEffect(() => {
    try {
      fetch(process.env.REACT_APP_API_URL + "return_all")
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
      console.error(err);
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
    var filterBoolListCopy = JSON.parse(JSON.stringify(filterBoolList));
    filterBoolListCopy[index] = !filterBoolListCopy[index];
    setTrueFilters(
      filterBoolListCopy.reduce(
        (out, bool, index) => (bool ? out.concat(filterNameList[index]) : out),
        []
      )
    );
    setFilterBoolList(filterBoolListCopy);
  };

  return (
    <div className="dash-container">
      <h1>Here's our merch bro</h1>
      <Header />
      <div className="sub-container">
        <div className="container-row">
          {filterNameList.map((name, index) => {
            return (
              <div key={index}>
                {filterBoolList[index] === true ? (
                  <button
                    key={index}
                    style={{ margin: "5px", backgroundColor: "aqua" }}
                    onClick={() => filterItemsFunc(index, merchList)}
                  >
                    {name}
                  </button>
                ) : (
                  <button
                    key={index}
                    style={{ margin: "5px" }}
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
              return <ItemCard merch={merch} index={index} key={index} />;
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
