// Bir kelimeyi tersine çevirerek farklı bir değişkene atayın. Orijinal kelimenin palindrom (tersine de aynı olan) olup olmadığını kontrol eden bir if else yapısı oluşturun. Örneğin, "kayak" kelimesi palindromdur, ancak "merhaba" palindrom değildir.
//var palindromWord = prompt("Bir palindrom kontrolü için değer giriniz.");

// var palindromWordReverse = palindromWord.split('').reverse().join('');

// if (palindromWord == palindromWordReverse) {
//     console.log("Bu bir palindromdur.");
// } else {
//     console.log("Palindrom değildir.");
// }
/////////////////////////////////////////////////////////////
// let palindromLength = palindromWord.length;
// let isPalindrom = true;

// for (let i = 0; i < palindromLength / 2; i++) {
//     if (palindromWord[i] !== palindromWord[palindromLength - 1 - i]) {
//         isPalindrom = false;
//         break;
//     }
// }

// if (isPalindrom) {
//     console.log("Bu bir palindromdur.");
// } else {
//     console.log("Palindrom değildir.");
// }
/////////////////////////////////////////////////////////////
// Kullanıcıdan temsili bir oy verme ve aday olma durumlarını sorgulamak için yaş ve uyruk bilgisi alın. Aşağıdaki koşulları uygulayan bir if sorgusu yazın.
// a- Türk vatandaşı ve 30 yaşından büyük ise aday olabilir.
// b- Türk vatandaşı ve 18 yaşından büyük ise oy kullanabilir.
// c- Türk vatandaşı değilse ancak 18 yaşından büyük ise aday olamaz ama oy verebilir.
/*
let age=parseInt(prompt("Yaş giriniz."));
let nationality= prompt("Uyruğunuzu giriniz.").trim().toUpperCase()

if (age < 18) {
    console.log("Aday olamaz ve oy kullanamazsınız.");
} else if (nationality === "TC" && age > 30) {
    console.log("Aday olabilirsiniz.");
} else if (nationality === "TC" && age >= 18 && age <= 30) {
    console.log("Oy kullanabilirsiniz.");
} else if (nationality !== "TC" && age > 18) {
    console.log("Oy kullanabilirsiniz.");
} else {
    console.log("Hatalı giriş yaptınız.");
}
*/
/////////////////////////////////////////////////////////////
// switch
// Kullanıcıdan bir ay ismi alın ve girilen ayın kaç gün olduğunu konsola yazdırın. (Switch Case)
/*
let month= prompt("Yaş giriniz.");
switch (month) {
    case 'Ocak':
        console.log(`Ay ${month} 31 gündür`);
        break;
    case 'Şubat':
        console.log(`Ay ${month} 28 gündür`);
        break;
    case 'Mart':
        console.log(`Ay ${month} 31 gündür`);
        break;
    case 'Nisan':
        console.log(`Ay ${month} 30 gündür`);
        break;
    case 'Mayıs':
        console.log(`Ay ${month} 31 gündür`);
        break;
    case 'Haziran':
        console.log(`Ay ${month} 30 gündür`);
        break;
    case 'Temmuz':
        console.log(`Ay ${month} 31 gündür`);
        break;
    case 'Ağustos':
        console.log(`Ay ${month} 31 gündür`);
        break;
    case 'Eylül':
        console.log(`Ay ${month} 30 gündür`);
        break;
    case 'Ekim':
        console.log(`Ay ${month} 31 gündür`);
        break;
    case 'Kasım':
        console.log(`Ay ${month} 30 gündür`);
        break;
    case 'Aralık':
        console.log(`Ay ${month} 31 gündür`);
        break;
    default:
        console.log('Geçersiz ay');
}
*/

// BMW, Mercedes ve Audi Markaları için farklı renk çeşitlerine göre stok durumunu kontrol eden iç içe bir switch yapısı oluşturun. yaratacağınız stokDurumu değişkenini stokta "Var" veya "Yok" olarak güncellesin.
let marka = prompt('Marka girin / (BMW, Mercedes, Audi)')
let renk = prompt('Renk girin / (kırmızı, yeşil, mavi)')

let stokDurumu = 'yok';
switch(marka.toLowerCase()){

    case 'bmw':
            switch(renk.toLowerCase()){
                case 'kırmızı':
                    stokDurumu = 'var';
                break;
                case 'yeşil':
                    stokDurumu = 'var';
                break;
                case 'mavi':
                    stokDurumu = 'yok';
                break;
            }
            break;
    case 'mercedes':
        switch(renk.toLowerCase()){
            case 'kırmızı':
                stokDurumu = 'var';
            break;
            case 'yeşil':
                stokDurumu = 'var';
            break;
            case 'mavi':
                stokDurumu = 'yok';
            break;
        }
        break;
    case 'audi':
        switch(renk.toLowerCase()){
            case 'kırmızı':
                stokDurumu = 'var';
            break;
            case 'yeşil':
                stokDurumu = 'var';
            break;
            case 'mavi':
                stokDurumu = 'yok';
            break;
        }
        break;

}
console.log(stokDurumu);
