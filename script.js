// program Hitung Mundur

// setting waktu
const tanggalTujuan = new Date("Jan 2,2023 15:18:00").getTime();

// hitung mundur waktu
const hitungMundur = setInterval(function () {
  // waktu sekarang
  const sekarang = new Date().getTime();
  //   selisih waktu
  const selisih = tanggalTujuan - sekarang;

  //   mencari waktu
  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  //   tampilan di html
  const teks = document.getElementById("text");
  teks.innerHTML =
    "waktu anda tinggal :  " +
    hari +
    " hari " +
    jam +
    " jam " +
    menit +
    " menit " +
    detik +
    " detik lagi !!!";

  // kondisi untuk menghentikan waktu
  if (selisih <= 0) {
    clearInterval(hitungMundur);
    teks.innerHTML = "waktu habis";
  }
}, 1000);
