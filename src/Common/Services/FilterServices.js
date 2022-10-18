export const searchList = (input_list, input_string) => {
    const filtered_list = input_list.filter(item => item.item_name.includes(input_string));
    return filtered_list;
}