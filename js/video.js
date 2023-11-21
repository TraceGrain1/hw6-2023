// Create a variable for the video element
const video = document.querySelector("#player1");

// Add an event listener on the page load
window.addEventListener("load", () => {
	console.log("Good job opening the window")

	video.autoplay = false;
	console.log("Auto play is set to false");

	video.loop = false;
	console.log("Loop is set to false");

	video.mute = false;
});


// Add an event listener on the play button
const play = document.querySelector("#play");

play.addEventListener("click", () => {
	video.play()
	console.log("Play Video");
});

play.addEventListener("click", () => {
	volume.innerHTML = video.volume * 100 + "%";
	console.log("Volume is " + video.volume * 100 + "%");
});


// Add an event listener on the pause button
const pause = document.querySelector("#pause");

pause.addEventListener("click", () => {
	video.pause()
	console.log("Pause Video");
});





// Add an event listener on the slower button
const slower = document.querySelector("#slower");

slower.addEventListener("click", () => {
	video.playbackRate *= 0.9;
	console.log("Slow down video");
	console.log("Speed is " + video.playbackRate);
});




// Add an event listener on the faster button
const faster = document.querySelector("#faster");

faster.addEventListener("click", () => {
	video.playbackRate /= 0.9;
	console.log("Speed up video");
	console.log("Speed is " + video.playbackRate);
});




// Add an event listener on the skip button
const skip = document.querySelector("#skip");

skip.addEventListener("click", () => {
	// advance the video by 10 seconds
	// if the video is at the end, go back to the beginning
	if (video.currentTime == video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current location " + video.currentTime);
});




// Add an event listener on the mute buttton
const mute = document.querySelector("#mute");

mute.addEventListener("click", () => {
	if (video.muted == false) {
		video.muted = true;
		console.log("Mute Video");
		mute.innerHTML = "Unmute";
	} else {
		video.muted = false;
		console.log("Unmute Video");
		mute.innerHTML = "Mute";
	}
});



// Add an event listener on the volume slider
const slider = document.querySelector("#slider");

slider.addEventListener("change", () => {
	video.volume = slider.value / 100;
	console.log("Volume is " + video.volume * 100 + "%");
	volume.innerHTML = video.volume * 100 + "%";
});

// Add an event listener on the old school button
const old = document.querySelector("#vintage");

old.addEventListener("click", () => {
	video.classList.add("oldSchool");
	console.log("Old School");
});

// Add an event listener on the original button
const original = document.querySelector("#orig");

original.addEventListener("click", () => {
	video.classList.remove("oldSchool");
	console.log("Original");
});
