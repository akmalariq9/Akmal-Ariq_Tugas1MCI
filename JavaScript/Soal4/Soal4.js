const prompt = require("prompt-sync")();

const category = {
    Akademis: ["IP Semester 4 dan 5 diatas 3.5", "Menjadi salah satu Admin di LAB MCI", "Bisa survive di Praktikum Sistem Operasi"],
    Manajerial: ["Berhasil membuat Schematics ITS 2023 menjadi lebih baik dari tahun sebelumnya", "Menjadi Mentor di Gerigi ITS 2023", "Berperan aktif di Hublu HMTC"],
    GayaHidup: ["Lebih sering berolahraga", "Lebih banyak minum air putih dan mengurangi gula", "Memperbaiki jam tidur"],
    Finansial: ["Lebih hemat dan mengurangi impulsive buying", "Mendapatkan income dari hasil kerja sendiri", "Belajar investasi demi masa depan"],
    AsmaraWKWK: ["Tetap setia meskipun LDR", "Memberi kepercayaan penuh kepada pasangan", "Mengurangi hal-hal toxic dalam relationship"]
};

console.log("Hi Mas, Mbak! Disini aku mau spill harapan dan target hidupku di tahun 2023 :D")
console.log("Ketik 1 untuk Mode Async, 2 untuk Mode Callback, dan 3 untuk Mode Promise!")
var ask = prompt("Tentukan Pilihanmu : ")

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