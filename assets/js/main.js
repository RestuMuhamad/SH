// Buat fungsi ketika halaman diload
const imgHeader = document.querySelectorAll(".container header #imgHeader");
const h1TagLine = document.querySelector(".container .tagLine h1");
window.addEventListener("load", () => {
  for (let i = 0; i < imgHeader.length; i++) {
    setTimeout(() => {
      imgHeader[i].classList.remove("active");
      h1TagLine.classList.remove("active");
    }, 500 * i);
  }
});

// Fungsi active sidebar
// ambil komponen
const nav = document.querySelector(".container nav");
const sidebar = nav.querySelector(".container .sidebar");
const boxLink = sidebar.querySelectorAll(".boxLinkSide .boxLink");

const activedSide = () => {
  sidebar.classList.toggle("active")
  for (let i = 0; i < boxLink.length; i++) {
    setTimeout(() => {
      boxLink[i].classList.toggle("active");
    }, 300 * i);
  }
};

// Ketika tombol close di tekan
const btnCloseSide = sidebar.querySelector(".close");

btnCloseSide.addEventListener("click", () => {
  activedSide();
});

// Ketika tombol sidebar ditekan
const btnSide = nav.querySelector(".bars");
btnSide.addEventListener("click", () => {
  activedSide();
});

// Action ketika img product diklick
const imgProduct = document.querySelectorAll(".container .product .mainProduct .boxProduct");

imgProduct.forEach(imgPro => {
  imgPro.addEventListener("click", () => {
    Swal.fire(
      'OOPS...',
      'This website is still develop. Check my sosial media for more information.',
      'info'
    )
  });
});

// Action btn next review
const btnNextReview = document.querySelector(".container .review .boxBtn button:nth-child(2)");

btnNextReview.addEventListener("click", () => {
  Swal.fire(
    'OOPS...',
    'This website is still develop. Check my sosial media for more information.',
    'info'
  );
});

// Action ubah tagLine
const main = document.querySelector(".container .main");
const boxImg = main.querySelector(".mainContent .part1 .boxImg");
const imgMain = boxImg.getElementsByTagName("img")[0];
const label = boxImg.getElementsByClassName("namePerson")[0];
const highlight = main.querySelector(".mainContent .part2 .highlight");
const boxBtn = main.querySelector(".mainContent .part1 .boxBtn");

// Buat kalimat yang ingin diubah
const kalimat = [
  "You are to fat",
  "You are to thin",
  "You have curly hair",
  "You have brown skin"
];

// Buat nama yang ingin diubah
const valLabel = [
  "Sarah Vio",
  "Dwi Santika",
  "Hanazuki Tomoe",
  "Prince Pots"
];

// Ubah gambar di main section
const changeImgMain = (i, valLabel) => {
  boxImg.classList.add("change");
  imgMain.setAttribute("src", "assets/img/main"+ i +".jpg");
  label.innerHTML = valLabel;
  setTimeout(() => {
    boxImg.classList.remove("change"); // biar animasi berjalan
  }, 500);
};

// Ubah text di main section
const changeHighlight = (kalimat) => {
  highlight.classList.add("change");
  highlight.innerHTML = kalimat;
  setTimeout(() => {
    highlight.classList.remove("change"); // biar animasi berjalan
  }, 500);
}

// Eksekusi kedua fungsi secara bersamaan
// const intervalChange = setInterval(changeMainContent(), 5000 * kalimat.length);

const changeMainContent = () => {
  for (let i = 1; i <= kalimat.length; i++) {
    setTimeout(() => {
      changeImgMain(i, valLabel[i - 1]);
      changeHighlight(kalimat[i - 1]);
    }, 5000 * (i - 1));
  }
}

changeMainContent();
setInterval(() => {
  changeMainContent();
}, 5000 * kalimat.length);

// Buat action ketika tombol next main dipencet
// boxBtn.addEventListener("click", (e) => {
//   changeMainContent(true);
//   // clearTimeout(intervalChange);
//   console.log(localStorage.getItem("valMain"));
// });