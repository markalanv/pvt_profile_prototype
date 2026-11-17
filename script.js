// DOM Elements
const lockIcon = document.querySelector('.lock-icon');
const followBtn = document.querySelector('.follow-btn');
const unlockBtn = document.querySelector('.unlock-btn');
const privateNotes = document.querySelector('.private-notes');

// Initial State: Locked (Private Notes hidden)
let isLocked = true;

// Toggle Unlock State
function toggleUnlock() {
if (isLocked) {
// Unlock
isLocked = false;
lockIcon.textContent = '🔓'; // Optional: change lock to unlocked icon
privateNotes.style.display = 'block'; // Show private notes
followBtn.textContent = 'Follow'; // Change button text
unlockBtn.style.display = 'none'; // Hide unlock button
} else {
// Lock
isLocked = true;
lockIcon.textContent = '🔒'; // Optional: change back to lock icon
privateNotes.style.display = 'none'; // Hide private notes
followBtn.textContent = 'Unfollow'; // Change button text
unlockBtn.style.display = 'inline-block'; // Show unlock button
}
}

// Event Listeners
followBtn.addEventListener('click', function() {
if (isLocked){
	// Unlock
isLocked = false;
lockIcon.textContent = '🔓'; // Optional: change lock to unlocked icon
privateNotes.style.display = 'block'; // Show private notes
followBtn.textContent = 'Follow'; // Change button text
unlockBtn.style.display = 'none'; // Hide unlock button
} else {
// Lock
isLocked = true;
lockIcon.textContent = '🔒'; // Optional: change back to lock icon
privateNotes.style.display = 'none'; // Hide private notes
followBtn.textContent = 'Unfollow'; // Change button text
unlockBtn.style.display = 'inline-block'; // Show unlock button
}
}

// Event Listeners
followBtn.addEventListener('click', function() {
toggleUnlock();

// Add a slight animation when toggling
privateNotes.style.transition = 'opacity 0.3s ease';
privateNotes.style.opacity = isLocked ? '0' : '1';

// Optional: Add a small "ripple" effect or highlight
unlockBtn.style.transform = 'scale(0.95)';
unlockBtn.style.transition = 'transform 0.2s ease';

setTimeout(() => {
  unlockBtn.style.transform = 'scale(1)';
}, 200);