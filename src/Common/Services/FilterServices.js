export const searchList = (input_list, input_string) => {
    const filtered_list = input_list.filter(item => item[4].toLowerCase().includes(input_string.toLowerCase()));
    return filtered_list;
}