document.addEventListener('DOMContentLoaded', () => {
  const rulesBtn = document.getElementById('rulesBtn');
  const overlay = document.getElementById('overlay');
  const instructions = document.getElementById('instructions');

  function showInstructions() {
    overlay.classList.add('show');
    instructions.classList.add('show');
  }

  function hideInstructions() {
    overlay.classList.remove('show');
    instructions.classList.remove('show');
  }

  if (rulesBtn) rulesBtn.addEventListener('click', showInstructions);
  if (overlay) overlay.addEventListener('click', hideInstructions);

  const getStartedBtn = document.getElementById('getStartedBtn');
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
      window.location.href = 'GetStarted.html';
    });
  }

  const editAvatarBtn = document.getElementById('editAvatarBtn');
  if (editAvatarBtn) {
    editAvatarBtn.addEventListener('click', () => {
      window.location.href = 'EditAvatar.html';
    });
  }
});