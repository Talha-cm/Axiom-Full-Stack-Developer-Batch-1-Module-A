// Get DOM elements
const container = document.getElementById('container');
const previousBtn = document.getElementById('previous');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');
const title = document.getElementById('song-title');
const albumArt = document.getElementById('album-art');

// Track Array
const tracks = ['Ertugrul', 'National Anthem'];

// Index of Currently Playing Song
let trackIndex = 1;

// Load the initial track
loadTrack(tracks[trackIndex]);

// Function to load the selected track
function loadTrack(track) {
    // Update the text for the title of track
    title.innerText = track;
    // Update the src in the audio element with the audio file of the selected track
    audio.src = `music/${track}.mp3`;
    // Update the src in the img element with the image file of the selected track
    albumArt.src = `images/${track}.jpeg`;
};