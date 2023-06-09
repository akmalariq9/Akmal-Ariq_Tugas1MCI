# **Akmal-Ariq_Tugas1MCI**
Repository untuk Pengerjaan Tugas 1 Calon Admin Lab MCI (Manajemen Cerdas Informasi).

## **Identitas**
| Nama                     | NRP        |
| -------------------------| -----------| 
| Akmal Ariq Romadhon      | 5025211188 |

# **SQL**
## **Soal Nomor 1**
Tampilkan daftar nama dan ukt berdasarkan nominal ukt yang paling mahal!

## **Penyelesaian Soal Nomor 1**
Dalam soal tersebut, terdapat dua kemungkinan _output_ yang diharapkan. Yang pertama ialah daftar nama dan UKT dari mahasiswa yang memiliki UKT paling mahal. Berikut adalah _code_ yang digunakan untuk menyelesaikan soal nomor 1 untuk menampilkan nama dan nominal UKT dari Mahasiswa yang UKTnya paling mahal:

```SQL
SELECT Nama, UKT
FROM Mahasiswa
WHERE UKT = (SELECT MAX(UKT) FROM Mahasiswa);
```

Dalam _code_ tersebut, digunakan perintah `SELECT` Nama dan UKT sesuai perintah pada soal. Kedua kolom tersebut diambil dari tabel Mahasiswa yang telah diinput sebelumnya. Karena dalam soal diminta untuk hanya menampilkan UKT paling tinggi, maka digunakan _syntax_ `WHERE` dengan kondisi didalamnya adalah mencari `MAX(UKT)` dari tabel Mahasiswa. Dengan begitu, output yang dihasilkan ialah sebagai berikut:

![Soal 1](https://media.discordapp.net/attachments/1083730715113426985/1086583263348400178/image.png?width=351&height=701)

Kemungkinan _output_ yang kedua ialah menampilkan seluruh nama mahasiswa dan UKTnya, namun UKT yang ditampilkan diurutkan secara _Descending._ Berikut adalah code yang digunakan untuk menyelesaikan soal tersebut:

```SQL
SELECT Nama, UKT
FROM Mahasiswa
ORDER BY UKT DESC
```

Dalam _code_ tersebut, _syntax_ yang digunakan hampir sama dengan kemungkinan sebelumnya. Hanya saja bagian _where_ yang memuat argumen khusus diganti dengan `ORDER BY DESC` yang berfungsi untuk mengurutkan nominal UKT secara Descending. Berikut adalah _output_ yang dihasilkan dari _code_ tersebut:

![Soal 1A](https://cdn.discordapp.com/attachments/1083730715113426985/1086608128738611211/image.png)

![Soal 1B](https://cdn.discordapp.com/attachments/1083730715113426985/1086608248074936402/image.png
)

## **Soal Nomor 2**
Tampilkan daftar nama dan ukt berdasarkan nominal ukt yang paling mahal, jika ada ukt yang sama, urutkan berdasarkan nama mahasiswa secara alfabetikal.

## **Penyelesaian Soal Nomor 2**
Sama seperti soal sebelumnya, dalam soal nomor 2 juga terdapat dua kemungkinan _output._ Yang pertama ialah hanya menampilkan daftar nama mahasiswa dengan UKT paling mahal, serta kolom nama akan diurutkan secara Ascending. Berikut adalah code yang digunakan untuk menyelesaikan kemungkinan tersebut:

```SQL
SELECT Nama, UKT 
FROM Mahasiswa
WHERE UKT = (SELECT MAX(UKT) FROM Mahasiswa)
ORDER BY Nama ASC
```
Dalam code tersebut, digunakan _syntax_ `SELECT` untuk mengambil kolom Nama dan UKT dari tabel Mahasiswa. Kemudian digunakan _syntax_ `WHERE` dengan kondisi didalamnya adalah mencari `MAX(UKT)` dari tabel Mahasiswa. Setelah itu ditambahkan _syntax_ `ORDER BY ASC` untuk sorting kolom Nama secara Ascending. Berikut adalah _output_ yang dihasilkan dari _code_ diatas:

![Soal2](https://cdn.discordapp.com/attachments/1083730715113426985/1086612636608774184/image.png)

Kemungkinan kedua ialah _output_ yang dihasilkan merupakan daftar nama dari seluruh mahasiswa yang diurutkan berdasarkan nominal UKT secara Descending, kemudian di tiap nominal UKT yang sama, akan dilakukan sorting berdasarkan nama secara Ascending. Berikut adalah _code_ untuk menyelesaikan kemungkinan tersebut.

```SQL
SELECT Nama, UKT 
FROM Mahasiswa
ORDER BY UKT DESC, Nama ASC
```

Dalam _code_ tersebut, masih digunakan _syntax_ `SELECT` dan `FROM` seperti soal sebelumnya. Kemudian ditambahkan _syntax_ `ORDER BY DESC` untuk mengurutkan UKT secara Descending, dan `ORDER BY ASC` untuk mengurutkan Nama secara Ascending. Berikut adalah _output_ yang dihasilkan dari _code_ tersebut:

![Soal2A](https://cdn.discordapp.com/attachments/1083730715113426985/1086613282942627891/image.png)

![Soal2AA](https://media.discordapp.net/attachments/1083730715113426985/1086614076974698516/image.png?width=376&height=701)

## **Soal Nomor 3**
Hitunglah jumlah mahasiswa yang memiliki ipk >= 3.5 dan berada di semester 8

## **Penyelesaian Soal Nomor 3**
Dalam soal tersebut, output yang diharapkan ialah jumlah mahasiswa yang memiliki IP lebih dari sama dengan 3.5 dan berada pada semester 8. Berikut adalah _code_ yang digunakan untuk menyelesaikan soal tersebut:
```SQL
SELECT COUNT(Nama) AS Jumlah_Mahasiswa
From Mahasiswa
WHERE IPK >= 3.5 AND Semester = 8
```
Dalam _code_ tersebut, digunakan _syntax_ `SELECT` dan `COUNT` secara bersamaan, dengan parameter Nama didalamnya. Bagian tersebut akan menghitung jumlah _rows_ dari Nama yang diambil dari tabel Mahasiswa menggunakan _syntax_ `FROM` kemudian diletakkan kedalam kolom Jumlah_Mahasiswa. Setelah itu terdapat _syntax_ `WHERE` dengan kondisi IPK >= 3.5 dan Semester = 8 sesuai perintah pada soal. Berikut adalah _output_ yang dihasilkan dari _code_ tersebut:

![Soal 3](https://cdn.discordapp.com/attachments/1083730715113426985/1086615966420574298/image.png)

## **Soal Tantangan (Nomor 4)**
Tampilkan nama, ukt, dan golongan. Jika ukt mahasiswa kurang dari sama dengan 1 juta, maka masuk golongan "A". Jika ukt mahasiswa diatas 1 juta sampai denga 2 juta, maka masuk golongan "B" Jika ukt mahasiswa diatas 2 juta, maka masuk golongan "C".

## **Penyelesaian Soal Nomor 4**
Dalam soal tersebut, _output_ yang diharapkan ialah menampilkan nama mahasiswa, UKT, dan golongan UKT sesuai kondisi yang ada. Golongan 'A' merupakan kondisi untuk UKT kurang dari 1 Juta, Golongan 'B' untuk UKT 1-2 Juta, dan Golongan 'C' untuk UKT diatas 2 Juta. Berikut adalah _code_ yang digunakan untuk menyelesaikan soal tersebut 

```SQL
SELECT Nama, UKT,
  CASE
    WHEN UKT <= 1000000 THEN 'A'
    WHEN UKT > 1000000 AND UKT <= 2000000 THEN 'B'
    WHEN UKT > 2000000 THEN 'C'
  END AS Golongan
FROM Mahasiswa
```

Dalam _code_ tersebut, digunakan _syntax_` SELECT` dan `FROM` untuk mengambil kolom nama dan UKT dari tabel Mahasiswa. Kemudian terdapat _syntax_ `CASE` dan `WHEN` yang berfungsi mendeskripsikan atau membuat kondisi sesuai dengan perintah pada soal. Misalnya pada bagian `WHEN UKT <= 1000000 THEN 'A'`, maka secara otomatis apabila nominal UKT dibawah 1 Juta akan masuk kedalam Golongan 'A'. Kolom 'Golongan' akan dibuat dengan _syntax_ `END AS`. Berikut adalah _output_ dari code tersebut:

![Soal 4](https://cdn.discordapp.com/attachments/1083730715113426985/1086619765398847539/image.png)

![Soal 4A](https://cdn.discordapp.com/attachments/1083730715113426985/1086619836882354277/image.png)

## **Soal Tantangan (Nomor 5)**
Tampilkan daftar nama, semester dan ipk berdasarkan ipk tertinggi tiap semester. Diurutkan berdasarkan semesternya. Jika ada yang nilainya sama, maka diurutkan berdasarkan alfabet.

## **Penyelesaian Soal Nomor 5**
Secara sederhana, output yang dihasilkan adalah IPK tertinggi dari tiap mahasiswa di semester yang berbeda dan diurutkans secara Ascending. kemudian apabila terdapat IPK yang sama, maka akan diurutkan berdasarkan nama secara Ascending juga. Berikut adalah code yang digunakan untuk menyelesaikan soal tersebut:

```SQL
SELECT Nama, Semester, IPK
FROM Mahasiswa CS1
WHERE IPK = (
  SELECT MAX(IPK)
  FROM Mahasiswa CS2
  WHERE CS1.semester = CS2.semester
)
ORDER BY Semester ASC, Nama ASC;
```

Dalam _code_ tersebut, digunakan _syntax_ `SELECT` dan `FROM` untuk mengambil data kolom Nama, Semester, dan IPK dari tabel Mahasiswa yang didefinisikan sebagai 'CS1'. Kemudian terdapat _syntax_ `WHERE` yang berisi beberapa argumen didalammnya. Argumen pertama ialah `SELECT MAX(IPK)` untuk mencari nilai IPK tertinggi di setiap semester, data tersebut diambil dari Tabel Mahasiswa yang didefinisikan sebagai 'CS2' menggunakan _syntax_ `FROM`. Kemudian terdapat argumen `WHERE CS1.semester = CS2.semester` yang berfungsi untuk membandingkan semester pada tabel utama Mahasiswa CS1 dengan semester pada Mahasiswa CS2. Dengan _syntax_ tersebut, subquery hanya akan mencari nilai maksimum IPK dari mahasiswa-mahasiswa yang memiliki semester yang sama dengan mahasiswa pada tabel utama. Terakhir, digunakan _syntax_ `ORDER BY ASC` untuk Nama dan Semester untuk mengurutkan kedua kolom tersebut secara Ascending. Berikut adalah _output_ yang dihasilkan dari _code_ tersebut:

![Soal 5](https://cdn.discordapp.com/attachments/1083730715113426985/1086620948674904134/image.png)

# **JavaScript**
## **Soal Nomor 1**
Buatkan program menggunakan Function Expression dengan JavaScript dengan tujuan menampilkan kalimat (“Saya Calon Admin MCI”) dengan delay 3000 ms lalu tampilkan nama anda.

## **Penyelesaian Soal Nomor 1**
Dalam soal nomor 1, _output_ yang diharapkan adalah string "Saya Calon Admin MCI" kemudian 3000ms kemudian dilanjutkan dengan "Nama". Berikut adalah _code_ yang digunakan untuk menyelesaikan soal tersebut:

```JS
var print = function(){
  console.log("Saya Calon Admin MCI");
  setTimeout(() => console.log("Akmal Ariq"), 3000);
};

print();
```

Dalam soal tersebut, dilakukan deklarasi variabel `print` yang berisi `function`. Dalam `function` tersebut, ditampilkan string "Saya calon Admin MCI" menggunakan _syntax_ `console.log`. Kemudian untuk menambahkan delay 3000ms, digunakan _syntax_ `setTimeout(() => console.log("Akmal Ariq"), 3000);`. _Syntax_ tersebut secara otomatis akan menampilkan string "Akmal Ariq" setelah 3000 milisecond. Terakhir, fungsi tersebut dijalankan dengan _syntax_ `print()`. Berikut adalah hasil dari _code_ tersebut:

![soal1](https://media.discordapp.net/attachments/915560012842147851/1087451587364003892/image.png?width=1038&height=482)

## **Soal Nomor 2**
Buatlah 2 file dengan tujuan sebagai berikut:

- File pertama berisikan fungsi aritmatika sederhana seperti penjumlahan, pengurangan, perkalian, pembagian
- File kedua tampilkan hasil perhitungan berikut menggunakan modul dari file pertama : 4000 / 2 + 25 - 2
## **Penyelesaian Soal Nomor 2**
Dalam soal nomor 2, _output_ yang diharapkan adalah hasil perhitungan dari `4000 / 2 + 25 - 2` yang dihitung menggunakan fungsi pada file 1. Berikut adalah _code_ untuk menyelesaikan soal tersebut:<br><br>
**File 1:**
```JS
function add(a,b){
  return (a + b)
}

function substract (a,b){
  return (a-b)
}

function divide (a,b){
  return (a/b)
}

export { add, substract, divide };
```

Dalam file pertama, terdapat 3 fungsi yang dideklaraskan, yaitu `add`, `substract`, dan `divide`. Ketiga fungsi tersebut masing-masing memiliki 2 parameter, yaitu a dan b. Setiap fungsi juga mengembalikan _value_ sesuai dengan nama dan tugasnya, misalnya add yang mengembalikan `a+b` atau penjumlahan, substract yang mengembalikan `a-b` atau pengurangan, dan divide yang mengembalikan `a/b` atau pembagian. Kemudian, ketiga fungsi tersebut akan _di-export_ agar dapat digunakan pada file yang lain. _Syntax_ untuk _export_ menyesuaikan format dari versi Javascript, yang dalam kasus ini menggunakan format ES6.
<br><br>**File 2:**
```JS
import { add, substract, divide } from './Operation.js'

const result = substract(add(divide(4000, 2),25),2)
console.log(result)
```
File kedua ialah file utama yang akan dijalankan untuk mendapatkan _output_ sesuai yang diminta. Dalam file kedua, dilakukan _import_ fungsi _add, substract_ dan _divide_ dari file pertama atau dari file `operation.js` menggunakan syntax `import { add, substract, divide } from './Operation.js'`. Setelah itu, terdapat deklarasi variabel `result` yang didalamnya berisi `substract(add(divide(4000, 2),25),2)`. Operasi tersebut akan dijelaskan dari `divide(4000,2)` yang menghasilkan nilai 2000. kemudian dilanjutkan oleh operasi selanjutnya yaitu `add(2000,25)` yang menghasilkan nilai 2025. Terakhir dilakukan operasi `substract(2025,2)` yang menghasilkan nilai 2023. Setelah itu, dilakukan print dari hasil operasi dengan _syntax_ `console.log(result)`. Berikut adalah output dari code tersebut:

![soal2](https://media.discordapp.net/attachments/915560012842147851/1087451387782238239/image.png?width=1142&height=452)

## **Soal Nomor 3**
np.argwhere merupakan sebuah fungsi yang tersedia pada library numpy di bahasa pemrograman python. Fungsi tersebut akan mengembalikan sebuah array 2 dimensi yang berisikan index - index value pada array n-d yang tidak bernilai 0, lakukan pencarian secara mandiri untuk mengetahui lebih lanjut mengenai fungsi np.argwhere. Implementasikan fungsi tersebut pada bahasa pemrograman Javascript untuk input array 3 dimensi.

## **Penyelesaian Soal Nomor 3**
Dalam soal tersebut, output yang diharapkan adalah _index_ dari elemen _array_ yang tidak bernilai 0. Berikut adalah code yang digunakan dalam menyelesaikan soal tersebut:
```js
const arr = 
[
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
]

function dim(arr) {
  if (arr instanceof Array) {
    return [arr.length].concat(dim(arr[0]));
  } else {
    return [];
  }
}

function argwhere(arr) {
  const res = [];
  const shape = dim(arr);

  for (let i = 0; i < shape[0]; i++) {
    for (let j = 0; j < shape[1]; j++) {
      for (let k = 0; k < shape[2]; k++) {
        if (arr[i][j][k] !== 0) {
          res.push([i, j, k]);
        }
      }
    }
  }
  return res
}

console.log(argwhere(arr));
```

Code tersebut terdiri dari 3 bagian inti, yaitu `arr`, `dim`, dan `argwhere`. Bagian `arr` berfungsi sebaagi variabel untuk _input array_, yang pada soal diminta untuk _input array_ tiga dimensi. Kemudian bagian `dim` dengan `parameter arr` berfungsi untuk mendapatkan dimensi dari array `arr`. Jika `arr` merupakan _array_, maka fungsi akan mengembalikan _array_ berisi panjang array tersebut serta panjang dimensi-dimensi selanjutnya yang berada di dalam _array_. Jika `arr` bukan _array_, maka fungsi akan mengembalikan _array_ kosong. Terakhir, terdapat inti dari program ini, yaitu fungsi `argwhere` dengan parameter `arr`. Fungsi `argwhere(arr)` digunakan untuk mengembalikan _array_ dua dimensi yang berisikan _index value_ pada _array_ tiga dimensi yang tidak bernilai 0. Pertama, fungsi ini memanggil fungsi `dim(arr)` untuk mendapatkan dimensi dari _array_ `arr`. Selanjutnya, fungsi akan melakukan _looping_ pada setiap elemen dari _array_ menggunakan tiga variabel perulangan. Jika nilai elemen pada indeks [i][j][k] != 0, maka indeks [i][j][k] akan disimpan pada `variabel res`. Terakhir, fungsi akan _return_ `variabel res` yang berisi _index_ dari value yang bernilai != 0 pada _array_ tiga dimensi `arr`. Setelah itu, dilakukan print hasil menggunakan _syntax_ `console.log(argwhere(arr));`
Berikut adalah output dari code tersebut:

![Soal3](https://cdn.discordapp.com/attachments/1083730715113426985/1088733034259419226/image.png)

## **Soal Nomor 4**
Implementasi Asynchronous dengan membuat minimal 5 target hidup yang ingin kalian raih di tahun 2023, bisa menggunakan salah satu dari ketiga macam Asynchronous , (Menggunakan ketiganya akan lebih baik).

## **Penyelesaian Soal Nomor 4**
Untuk soal nomor 4, output yang diharapkan adalah 5 harapan yang muncul melalui _Asynchronous_. Berikut adalah code yang digunakan untuk menyelesaikan soal nomor 4:
<br><br>
**Import Module dan List Target**
```JS
const prompt = require("prompt-sync")();

const category = {
    Akademis: ["IP Semester 4 dan 5 diatas 3.5", "Menjadi salah satu Admin di LAB MCI", "Bisa survive di Praktikum Sistem Operasi"],
    Manajerial: ["Berhasil membuat Schematics ITS 2023 menjadi lebih baik dari tahun sebelumnya", "Menjadi Mentor di Gerigi ITS 2023", "Berperan aktif di Hublu HMTC"],
    GayaHidup: ["Lebih sering berolahraga", "Lebih banyak minum air putih dan mengurangi gula", "Memperbaiki jam tidur"],
    Finansial: ["Lebih hemat dan mengurangi impulsive buying", "Mendapatkan income dari hasil kerja sendiri", "Belajar investasi demi masa depan"],
    AsmaraWKWK: ["Tetap setia meskipun LDR", "Memberi kepercayaan penuh kepada pasangan", "Mengurangi hal-hal toxic dalam relationship"]
};
```
**Awalan**
```Js
console.log("Hi Mas, Mbak! Disini aku mau spill harapan dan target hidupku di tahun 2023 :D")
console.log("Ketik 1 untuk Mode Async, 2 untuk Mode Callback, dan 3 untuk Mode Promise!")
var ask = prompt("Tentukan Pilihanmu : ")
```
**Function _Async_**
```JS
//Async
is_shop_open = true;
function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Yaudahh Bubayy ><"));
    }
  });
}

async function forAsync() {
  try {
    await time(3000);
    console.log("Target Hidup di Tahun 2023! (Async Mode)");

    await time(2000);
    console.log(`${category.Akademis[0]}`);

    await time(2000);
    console.log(`${category.Manajerial[0]}`);

    await time(2000);
    console.log(`${category.GayaHidup[0]}`);

    await time(2000);
    console.log(`${category.Finansial[0]}`);

    await time(3000);
    console.log(`${category.AsmaraWKWK[0]}`);
  } catch (error) {
    console.log("Okeey bubay ><");
  }
}
```
**Function _Callback_**
```JS
//Callback
let callback = () => {
    setTimeout(() => {
      console.log("Target Hidup di Tahun 2023! (Callback Mode)");
      setTimeout(() => {
        console.log(`${category.Akademis[1]}`);
        setTimeout(() => {
          console.log(`${category.Manajerial[1]}`);
            setTimeout(() => {
              console.log(`${category.GayaHidup[1]}`);
              setTimeout(() => {
                console.log(`${category.Finansial[1]} seperti melalui project atau menjadi asdos`);
                setTimeout(() => {
                console.log(`Dapat ${category.AsmaraWKWK[1]} saat dia KKN :(`);
                }, 3000);
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
    }, 3000);
}
```
**Validasi untuk menentukan Output sekaligus Fungsi _Promise_**
```JS
//Validation
if(ask == 1){
    forAsync()
}
else if(ask == 2){
    callback()
}
else if(ask ==3){
    //Promise
    let promise_valid = true;
    
    let order = (time, work) => {
        return new Promise((resolve, reject) => {
            if (promise_valid) {
                setTimeout(() => {
                    resolve(work());
                }, time);
            } 
            else{
                reject(console.log("Yaudaah Bubayy ><"));
            }
        });
    };
    
    order(3000, () => console.log("Target Hidup di Tahun 2023! (Promise Mode)"))
    .then(() => {
        return order(2000, () => console.log(`${category.Akademis[2]}`));
    })
    .then(() => {
        return order(2000, () => console.log(`${category.Manajerial[2]}`));
    })
    .then(() => {
        return order(2000, () => console.log(`${category.GayaHidup[2]}`));
    })
    .then(() => {
        return order(2000, () => console.log(`${category.Finansial[2]}`));
    })
    .then(() => {
        return order(3000, () => console.log(`${category.AsmaraWKWK[2]}`));
    })
    .catch(() => {
        console.log("Okaay");
    })
}
else{
    console.log("Input salah :(")
}
```
Dalam code tersebut, bagian  _import_ module dan list harapan digunakan unuk penggunaan _Prompt_ sekaligus inisialisasi variabel `Category` yang akan digunakan di seluruh fungsi. Kemudian, bagian awalan berfungsi untuk memperkenalkan program kepada _user_ sekaligus menentukan _mode_ yang dipilih user. Setelah itu terdapat fungsi _Callback_ dan _Async_ untuk menampilkan output sesuai jenis dari _mode_ yang dipilih. Terakhir terdapat bagian Validasi yang berfungsi untuk menjalankan fungsi sebelumnya sesuai input yang dimasukkan oleh _user_. Berikut adalah salah satu code saat kita memilih mode _Callback_ dari _code_ diatas:

![Soal4](https://cdn.discordapp.com/attachments/1083730715113426985/1088867995549446265/image.png)

# **End Of The Line**
```c
#include <stdio.h>

int main(){
  printf("Thank you!");
}
```