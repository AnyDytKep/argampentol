// Ambil elemen tombol dan modal
const modal = document.getElementById('myModal');
const btns = document.querySelectorAll('.buyBtn');
const span = document.getElementsByClassName('close')[0];

// Fungsi buka modal
btns.forEach(btn => {
  btn.onclick = function() {
    const itemName = this.dataset.name;
    const itemPrice = this.dataset.price;
    modal.querySelector('.modal-content p').innerText = 
      `Kamu memilih: ${itemName}\nHarga: Rp${itemPrice}`;
    modal.style.display = "block";
  }
});

// Fungsi tutup modal
span.onclick = function() {
  modal.style.display = "none";
}

// Tutup modal kalau klik di luar
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  }
