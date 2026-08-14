function drawCard() {
  const card = getRandomCard(); 
  const display = document.getElementById('cardDisplay');
  display.innerHTML = `<img src="${card.image}" alt="${card.name}" style="width:100%; height:100%; border-radius:30px; object-fit:cover;">`;
  document.getElementById('cardMeaning').innerHTML = `<strong>${card.name}</strong> — ${card.meaning}`;
}