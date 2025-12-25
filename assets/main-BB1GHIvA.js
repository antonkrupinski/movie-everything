// Example JS for modal and grid functionality

// Open detail modal
function openModal(contentHTML) {
  const modal = document.getElementById('detail-modal');
  const content = document.getElementById('detail-content');
  content.innerHTML = contentHTML;
  modal.classList.remove('hidden');
}

// Close detail modal
document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('detail-modal').classList.add('hidden');
});

// Open video player modal
function openPlayer(videoSrc) {
  const modal = document.getElementById('player-modal');
  const player = document.getElementById('video-player');
  player.innerHTML = `<video src="${videoSrc}" controls autoplay style="width:100%"></video>`;
  modal.classList.remove('hidden');
}

// Close player modal
document.getElementById('close-player').addEventListener('click', () => {
  const modal = document.getElementById('player-modal');
  modal.classList.add('hidden');
  document.getElementById('video-player').innerHTML = '';
});
