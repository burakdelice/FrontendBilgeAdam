// 1- myArray isimli bir dizi tanımlayın. 10 elemandan oluşsun ad soyad yaş true sevdiğiniz meyveler, sevdiğiniz yemekler
console.log('1.SORU')
let myArray = ['Burak', 'Delice', 19, true, 'elma', 'mantı','a','b','c','d' ]
// 2- adınızı değiştirin => Cem => Mert. Diziyi konsola yazdırın.
console.log('2.SORU')
  myArray[0].replace = 'Mert'
  console.log(myArray)
// 3- dizinin uzunluğunu konsola yazdırın.
console.log('3.SORU')
console.log(myArray.length)
// 4- dizinin sonuna bir hayvan ismi ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
console.log('4.SORU')
let arrayLength = myArray.push('köpek')
console.log(arrayLength)
console.log(myArray)
// 5- dizinin başına bir hayvan ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
console.log('5.SORU')
arrayLength = myArray.unshift('kedi')
console.log(arrayLength)
console.log(myArray)
// 6- dizinin sonundaki elemanı silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
console.log('6.SORU')
let deleted = myArray.pop()
console.log(deleted)
console.log(myArray)
// 7- dizinin ilk elemanını silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
console.log('7.SORU')
let deleted2 = myArray.shift()
console.log(deleted2)
console.log(myArray)
// 8- silmiş olduğunuz elemanları ve uzunluk bilgilerini newArray isimli yeni bir dizide toplayın.(sakladığınız değişkenleri kullanın)
console.log('8.SORU')
let newArray = [];
newArray.push(deleted,deleted.length,deleted2,deleted2.length)
console.log(newArray)
// 9- myArray ve newArray dizilerini birleştirin ve yeni değişkenlere atayın. 2 yöntem.
console.log('9.SORU')
console.log('1.yöntem')
let myArrayConcat = myArray.concat(newArray)
console.log(myArrayConcat)
console.log('2.yöntem')
myArray = [...myArray,...newArray]
console.log(myArray)
// 10- myArray içerisinde eleman olarak "Veli" var mı ?
console.log('10.SORU')
console.log(myArray.includes('Veli'))
// 11- myArray içersinide 4.elemandan itibaren patates var mı?
console.log('11.SORU')
console.log(myArray.includes('Patates',3))
// 12- sevdiğiniz meyvelerden ilkinin indexi nedir?
console.log('12.SORU')
console.log(myArray.indexOf('elma'))
// 13- newArray dizisinin ilk 3 elemanını bir değişkene atayın, konsola yazdırın.
console.log('13.SORU')
let firstThreeElementsOfNewArray= newArray.splice(0,3);
console.log(firstThreeElementsOfNewArray)
// 14- son oluşturduğunuz 3 elemanlı dizinin 2. elemanını silip yerine 2 farklı eleman ekleyin.
console.log('14.SORU')
firstThreeElementsOfNewArray.splice(1,1,'ayı','inek')
console.log(firstThreeElementsOfNewArray)
// 15- son diziniz 4 elemanlı olmuş olmalı. tek metot ile 1 eleman silin 1 eleman değiştirin ve bir eleman ekleyin
console.log('15.SORU')
firstThreeElementsOfNewArray.splice(1,2,'tavşan','sincap')
console.log(firstThreeElementsOfNewArray)
// 16- son dizinizin elemanlarını aralarına "+" koyarak bir stringe çevirin ve konsola yazdırın.
console.log('16.SORU')
console.log(firstThreeElementsOfNewArray.join(' + '))