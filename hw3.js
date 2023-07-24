// 1. Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
const arr = [5, 3, 4, 5, 6, 7, 3];

const compact = (initialArr) => {
    const emptyObj = {};
    initialArr.forEach(n => emptyObj[n] = null);
    return Object.keys(emptyObj).map(n => Number(n));
}

const arr2 = compact(arr);
console.log(arr2);
// -----------------------------

/* 
2. Написати функцію createArray(start, end), яка приймає на вхід 2 параметри: 
    - початкове значення 
    - кінцеве значення
а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
*/
const createArray = (start, end) => {
    const res = [];
    for (let i = start; i <= end; i++) {
        res.push(i);
    }
    return res;
}

const arr = createArray(2, 9);
console.log(arr);

//----------------------------

/* 3. Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.
*/
const arrayFunc = (start, end) => {
    for (let i = start; i <= end; i++) {
        const times = i - start + 1;
        const res = new Array(times).fill(i);
        console.log(...res);
    }
}
arrayFunc(2, 4);
//----------------------------

/* 4. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
*/

const randArray = (start, end) => {
    const k = [];
    for (let i = start; i <= end; i++) {
        k.push(Math.round(Math.random() * 500));
    }
    return k;
}

const res = randArray(0, 4);
console.log(res);

//----------------------------