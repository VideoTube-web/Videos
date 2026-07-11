// Force playback speed to 4x (or any number you choose)
function setCustomSpeed(speedMultiplier) {
    const video = document.querySelector('video');
    if (video) {
        video.playbackRate = speedMultiplier;
        console.log(`Playback speed set to ${speedMultiplier}x.`);
    } else {
        console.error("No video element found on this page.");
    }
}

// Set speed to 4x
setCustomSpeed(4.0); 
