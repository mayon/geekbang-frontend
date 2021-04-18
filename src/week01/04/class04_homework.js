function find(str) {
    for(let i in str) {
        if (str[i] == 'a' && str[Number(i) + 1] == 'b') {
            return true;
        }
    }
    return false;
}

const findResult = find('this is ab');
console.info(findResult);