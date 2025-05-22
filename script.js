//your code here
document.addEventListener('DOMContentLoaded', ()=>{
	const images = [
		"https://picsum.photos/id/237/200/300",
		"https://picsum.photos/seed/picsum/200/300",
		"https://picsum.photos/200/300?grayscale",
        "https://picsum.photos/200/300/",
        "https://picsum.photos/200/300.jpg",
        "https://picsum.photos/id/237/200/300"
	];
	function shuffle(array){
		for(let i=0;i<array.length-1;i++){
			const j=Math.floor(Math.random()*(i+1));
			[array[i],array[j]] = [array[j],array[i]];
		}
	}
	shuffle(images);

	const main=document.querySelector('main');
	let selectedImages=[];
	const resetButton = document.createElement('button');
	resetButton.textContent="Reset";
	resetButton.id="reset";
	resetButton.style.display = 'none';
	main.appendChild(resetButton);

	const verifyButton = document.createElement('button');
	verifyButton.textContent="Verify";
	verifyButton.id="verify";
	verifyButton.style.display="none";
	main.appendChild(verifyButton);
	
	images.forEach(src => {
		const img=document.createElement('img');
		img.src=src;
		img.alt="Image";
		img.classList.add('image');
		main.appendChild(img);

		img.addEventListener('click',() => {
			if(selectedImages.length<2){
				img.classList.toggle('selected');
				selectedImages.push(src);
				resetButton.style.display="block";

				 if (selectedImages.length === 2) {
                    verifyButton.style.display = "block"; // Show verify button
                }
			}
			
		});
	});

	resetButton.addEventListener('click',() => {
		selectedImages.length=0;
		document.querySelectorAll('.selected').forEach(image => {
			image.classList.remove('selected');
		});
		resetButton.style.display="none";
		verifyButton.style.display="none";
		document.getElementById('h').textContent="Please click on the identical tiles to verify that you are not a robot."
	});

	verifyButton.addEventListener('click',() => {
		if( selectedImages[0] === selectedImages[1]) {
			document.getElementById('h').textContent = "You are a human. Congratulations!";
		} else {
			document.getElementById('h').textContent = "We can't verify you as a human. You selected the non-identical tiles.";
		}
		verifyButton.style.display="none"
	});

});