function find(str) {
    let found = {};

    for(let c of str) {
        if (c == 'a') {
            found.a = true;
        } else if(found.a && c == 'b') {
            found.b = true;
        } else if(found.b && c == 'c') {
            found.c = true;
        } else if(found.c && c == 'd') {
            found.d = true;
        } else if(found.d && c == 'e') {
            return true;
        } else if(found.e && c == 'f') {
            return true;
        } else {
            found = {};
        }
    }
    return false;
}

const findResult = find("Im abcdefgroot");
console.info(findResult);