"use strict";
window.addEventListener("load", main);

function main() {
    const arr = [];
    let count = 0;
    setInterval(() => {
        count++;
        arr.unshift(count);
        arr.length = 10;
        console.log(arr);
    }, 1000);
}