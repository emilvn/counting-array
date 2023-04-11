"use strict";
window.addEventListener("load", main);

function main() {
    const arr = [];
    let count = 0;
    setInterval(() => {
        count++;
        arr.unshift(count);
        if(arr.length > 9) arr.length = 9;
        console.log(arr);
    }, 1000);
}