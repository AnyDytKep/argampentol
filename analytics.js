// Simpan klik tombol
function trackClick(itemName) {
  let data = JSON.parse(localStorage.getItem('clickData')) || {};
  data[itemName] = data[itemName] ? data[itemName]+1 : 1;
  localStorage.setItem('clickData', JSON.stringify(data));
}

// Tampilkan statistik
function showStats() {
  let data = JSON.parse(localStorage.getItem('clickData')) || {};
  console.log("Statistik klik:", data);
}

// Contoh penggunaan
document.querySelectorAll('.buyBtn').forEach(btn => {
  btn.addEventListener('click', () => trackClick(btn.dataset.name));
});
