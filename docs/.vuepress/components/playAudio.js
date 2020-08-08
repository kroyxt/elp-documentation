export function playAudio(fileName)  {
	let Letter = new Audio(`/audio/${fileName}.mp3`);
	Letter.play();
}
