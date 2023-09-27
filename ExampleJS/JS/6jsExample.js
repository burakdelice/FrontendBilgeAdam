/*
// Yazacağınız fonksiyonlar içerisinde console.log ifadesi yer almayacak.

// 1- Verilen iki sayının çarpımını döndüren bir fonksiyon yazın. (Arrow Function ile)

const carpim = (sayi1, sayi2) => sayi1 * sayi2;

// 2- Verilen bir cümlenin kelime sayısını döndüren bir arrow fonksiyon yazın.

const kelimeSayisi = (cumle) => {
  const kelimeler = cumle.split(" ");
  return kelimeler.length;
};

// 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile)

function faktoriyel(sayi) {
  if (sayi === 0 || sayi === 1) {
    return 1;
  } else {
    return sayi * faktoriyel(sayi - 1);
  }
}

// 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile)

const asalMi = function (sayi) {
  if (sayi <= 1) {
    return false;
  }
  for (let i = 2; i < sayi; i++) {
    if (sayi % i === 0) {
      return false;
    }
  }
  return true;
};

// 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.

function enBuyukSayi(dizi) {
  return Math.max(...dizi);
}

// 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.

function diziToplami(dizi) {
  return dizi.reduce((toplam, sayi) => toplam + sayi, 0);
}

// 7-Yukarıdaki son iki fonksiyonu arrow function olarak yeniden yazın.

const diziToplami = (dizi) => dizi.reduce((toplam, sayi) => toplam + sayi, 0);
const enBuyukSayi = (dizi) => Math.max(...dizi);

// Buradan itibaren yalnızca arrow function kullanıyoruz.
// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.

const tersCevir = (str) => str.split('').reverse().join('');
*/
// 9- Verilen bir dizinin elemanlarını rastgele karıştıran bir fonksiyon yazın. (Kopya çekmek yok. Mantık kurmaya çalışın)
// [ 1, 2, 3, 4, 5] [3, 2, 5, 1, 4]
/*
const rastegeleKaristir = (dizi) => {
  for (let i = 0; i < dizi.length; ++i) {
    let j = Math.floor(Math.random() * dizi.length);
    sayi = j;
    [dizi[j], dizi[i]] = [dizi[i], dizi[j]];
  }
  return dizi;
};
let dizi1 = [1, 2, 3, 4, 5];
console.log(rastegeleKaristir(dizi1));
*/
// 10- Verilen bir sayının pozitif bölenlerini bulan bir fonksiyon yazın.(örn. 12'nin pozitif bölenleri 1,2,3,4,6,12)
/*
const pozitifBolenleri = (sayi) => {
  let dizi = [];
  if (sayi < 1) {
    return "Hatalı değer";
  }
  for (let i = 1; i <= sayi / 2; i++) {
    if (sayi % i === 0) {
      dizi.push(i);
    }
  }
  return `${dizi},${sayi}`;
};
console.log(pozitifBolenleri(12));
*/
// 11- Verilen bir stringin içinde belirli bir karakterin kaç kez tekrarlandığını hesaplayan bir fonksiyon yazın.

// BONUS - içerisine kaç adet sayı yazılırsa yazılsın, sayıların toplamını döndüren bir fonksiyon yazınız.

var array = ["Ahmet", "Mehmet", "Caner"];
const totalArray = array.reduce((total, name) => {
  return `${total}, ${name}`;
});
console.log(totalArray);
