let negativeNumber = -7;
let absoluteValue = Math.abs(negativeNumber);
console.log("1-) Mutlak Değer: " + absoluteValue);

let decimalNumber = 3.14;
let roundedUp = Math.ceil(decimalNumber);
console.log("2-) Yukarıya Yuvarlama: " + roundedUp);

let roundedDown = Math.floor(decimalNumber);
console.log("3-) Aşağıya Yuvarlama: " + roundedDown);

let maxNumber = Math.max(6, 15, -7, 0, 80, -35);
console.log("4-) En Büyük Sayı: " + maxNumber);

let minNumber = Math.min(6, 15, -7, 0, 80, -35);
console.log("5-) En Küçük Sayı: " + minNumber);

let originalNumber = 12.3456789;
console.log("6-) Yuvarlama (3 ondalık): " + originalNumber.toFixed(3));

let numberToSquareRoot = 25;
console.log("7-) Karekök: " + Math.sqrt(numberToSquareRoot));

console.log("8-) Üstel Fonksiyon: " + Math.pow(2, 3));

console.log("9-) Formatlı Sayı: " + 123.456789.toPrecision(6));

console.log("10-) Tam Sayı: " + Math.trunc(123.456789));

console.log("11-) Doğru yuvarla: " + Math.round(123.556789));