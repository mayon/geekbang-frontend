function find(str) {
    for(let c of str) {
        if (c == 'a') {
            return true;
        }
    }
    return false;
}

const findResult = find('hello, mayon');
console.info(findResult);