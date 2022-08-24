export const firstToUpperCase = (string = '') => {
    return string.charAt(0).toUpperCase() + string.slice(1, string.length);
};

export const divideByChar = (string, char) => {
    const upperCase = firstToUpperCase(string);
    const divided = upperCase.split(char);

    if(divided.length === 1){
        return divided[0];
    }else if(divided.length === 2){
        return `${divided[0]} ${divided[1]}`
    }
};
