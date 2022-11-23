export const searchList = (input_list, input_string) => {
  const filtered_list = input_list.filter(
    (item) =>
      item[2].toLowerCase().includes(input_string.toLowerCase()) ||
      item[4].toLowerCase().includes(input_string.toLowerCase()) ||
      item[6].toLowerCase().includes(input_string.toLowerCase()) ||
      item[7].toLowerCase().includes(input_string.toLowerCase())
  );
  return filtered_list;
};

export const filterList = (filterList, ogList) => {
  var return_list;
  if (filterList.length === 0) {
    return_list = ogList;
  } else {
    return_list = ogList.filter((item) => {
      var isSelected = false;
      filterList.forEach((category) => {
        isSelected = isSelected || category.toUpperCase() === item[2];
      });
      return isSelected;
    });
  }

  // console.log(`return list = [`);
  // return_list.forEach(rets => console.log(rets));
  // console.log(`]`);

  return return_list;
};
