const string = 'Alea jacta est.';

function cipher (x) {

    const arr = [];

    for (let i = 0; i < x.length; i++) {
        
        if (x.charCodeAt([i]) == 122) {
            let letter1 = 97;
            arr.push(letter1);
        } else if (x.charCodeAt([i]) == 32 || x.charCodeAt([i]) == 33 || x.charCodeAt([i]) == 44 || x.charCodeAt([i]) == 46 || x.charCodeAt([i]) == 58 || x.charCodeAt([i]) == 59 || x.charCodeAt([i]) == 63) {
            let letter = x.charCodeAt([i]);
            let letter1 = letter;
            arr.push(letter1);
        } else {
            let letter = x.charCodeAt([i]);
            let letter1 = letter + 1;
            arr.push(letter1);
        }
    }

    console.log(arr);

    let newString = '';
    
    for (let i = 0; i < x.length; i++) {
        newString += String.fromCharCode(arr[i])
    }
    
    console.log(newString);
    return newString;
}

cipher(string)

module.exports = cipher