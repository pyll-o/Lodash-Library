const _ = {
    clamp(number, lower, upper) {
        if (number <= Math.min(lower, upper)) {
            return Math.min(lower,upper);
        } else if (number >= Math.max(lower, upper)) {
            return Math.max(lower, upper);
        } else {
            return number
        };  
    },
    inRange(number, start, end) {
        let lowerEnd;
        let upperEnd;
        if (end === undefined) {
            upperEnd = start;
            lowerEnd = 0;
        } else if (end < start) {
            upperEnd = start;
            lowerEnd = end;
        } else {
            upperEnd = end;
            lowerEnd = start;
        };
        console.log(lowerEnd, upperEnd);
        if (number >= lowerEnd && number < upperEnd) {
            return true;
        } else {
            return false;
        }
    },
    words(string) {
        return string.split(' ');
    },
    pad(word, length) {
        let padding = length - word.length;
        let wordArr = [word];
        if (padding === 1) {
            wordArr.push(' ');
        } else if (padding % 2 === 0 && padding > 1) {
            while (wordArr.length < padding + 1) {
                wordArr.unshift(' ');
                wordArr.push(' ');
            };
        } else if (padding > 1) {
            wordArr.push(' ');
            while(wordArr.length < padding + 1) {
                wordArr.unshift(' ');
                wordArr.push(' ');
            };
        };
        return wordArr.join('');
    },
    has(obj, key) {
        if (obj[key] !== undefined) {
            return true;
        } else {
            return false;
        }
    },
    invert(obj) {
        let invObj = {};
        for (let key in obj) {
            let invKey = obj[key];
            invObj[invKey] = key;
        };
        return invObj;
    },
    findKey(obj, func) {
        for (let key in obj) {
            let action = func(obj[key]);
            if (action === true) {
                return key;
            }
        }
    },
    drop(arr, n) {
        if (n === undefined) {
            return arr.slice(1);
        } else {
            return arr.slice(n);
        }
    },
    dropWhile(arr, func) {
        let newArr = arr.slice();
        for (let i = 0; func(arr[i], i, arr) === true; i++) {
            newArr.shift();
        };
        return newArr;
    },
    chunk(arr, n) {
        if (n === undefined) {
            return arr;
        } else {
            let newArr = [];
            for (let i = 0; i < arr.length; i = i + n) {
                let chunkArr = [];
                for (let j = 0; j < n && i + j < arr.length; j++) {
                    chunkArr.push(arr[i+j]);
                };
                newArr.push(chunkArr);
            };
            return newArr;
        }
    }
};

// Do not write or modify code below this line.
module.exports = _;