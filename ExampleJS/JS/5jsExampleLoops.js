// -------------------For, Başlangıç Bitiş Arası Sayıların Toplamı-----------------------

// kullanıcıdan bir başlangıç sayısı bir de bitiş sayısı isteyin. Bir for döngüsü yaratarak başlangıç sayısından bitiş sayısına kadar bütün sayıları toplayın. toplamı ekrana yazdırın (başlangıç ve bitiş sayısı dahil)
/*
let baslangic = parseInt(prompt("Bir başlangıç sayısı girin."));
let bitis = parseInt(prompt("Bir bitiş sayısı girin."));
let toplam = 0;

if (!isNaN(baslangic) && !isNaN(bitis) && baslangic > 0 && bitis > baslangic) {
    for (let index = baslangic; index <= bitis; index++) {
        toplam  +=  index;
    }
    console.log(`Bu sayılar arasındaki sayıların toplamı: ` + toplam);
} else {
    console.error('Hatalı giriş yaptınız.');
}
 */
// -------------------For, Geçen Öğrenci Sayısı-----------------------

// Bir sınıfta 5 öğrenci olduğunu düşünelim. Öğrencilerin notlarını almak için prompt kullanarak her öğrenci için bir not girişi yapın. Ardından, bu notları kullanarak sınıf ortalamasını hesaplayın. Son olarak, sınıftaki öğrencilerin kaç tanesinin geçtiğini (geçer not 60) bulun ve konsola yazdırın.
/*
let notToplam = 0;
let ogrenciSayisi = 5;
let gecenOgrenci = 0;

for (let i = 1; i < 6; i++) {
  let not = parseInt(prompt(`${i}. öğrencinin notunu giriniz..`));
  notToplam += not;
  if (not > 60) {
    gecenOgrenci += 1;
  }
}
let notOrt = notToplam / ogrenciSayisi;
console.log(`gecen öğrenci sayısı = ${gecenOgrenci} , not ortalaması = ${notOrt}`);
*/
// -------------------While, Sayı Tahmin uygulaması-----------------------

// Random bir sayı tanımlayın ve kullanıcıdan 1-10 arası bir sayı girerek sayıyı tahmin etmesini isteyin. Toplam 3 hak tanımlayın. While döngüsü kullanarak, kullanıcının hakları bitene kadar denemesine izin verin. Her denemenin sonunda sayıyı arttırıp azaltması gerektiği bilgisini ekrana yazdırın.

var rastgeleSayi = Math.floor(Math.random() * 10) + 1;
var hak = 3;
while (hak > 0) {
  console.log(`Toplam hakkınız: ${hak}`);
  var tahmin = parseInt(prompt("1 ile 10 arasında bir tahminde bulunun."));
  if (!isNaN(tahmin) && tahmin > 1 && tahmin < 10) {
    if (tahmin != rastgeleSayi) {
      console.log("Yanlış tahmin! Hakkınız bir azaldı.");
      hak--;
      if (hak === 0) {
        console.log("Kaybettiniz");
        console.log("3 hak daha tanımlandı. Tekrar oynayabilirsiniz.");
        hak = 3;
        rastgeleSayi = Math.floor(Math.random() * 10) + 1;
      }
    } else {
      alert("Tebrikler! Doğru cevapladınız.");
      console.log("Baştan başlıyoruz hakkınız sıfırlandı.");
      hak = 3;
      rastgeleSayi = Math.floor(Math.random() * 10) + 1;
    }
  } else {
    console.log("Yanlış değer girdiniz. Hakkınız gitmedi bir daha deneyin!");
  }
}
console.log(rastgeleSayi);

// -------------------While, Alışveriş Sepeti Uygulaması-----------------------

// Kurallar:

// While döngüsü kullanılacak.

// Kullanıcı prompta herhangi bir ürün ismi veya "onayla" yazabilir.

// Ürün ismi yazarsa kullanıcıdan ürünün fiyat bilgisini isteyin ve toplam fiyata ekleyin.

// Kullanıcı "onayla" yazarsa, ekrana sepetin toplam tutar bilgisini yazdırın.
