window.onload = init;

function init(){

	var slideIndex = 1;

	var gallery = document.getElementById("gallery");

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://picsum.photos/list", true);

	xhr.send(null);

	showSlides(slideIndex);

	xhr.onload = function showSlides(n) {

		if(xhr.status == 200) {

			var picsum = JSON.parse(xhr.responseText);
			console.log(picsum);

			var imageString = "";
			for(var x = 0; x < 10; x++){
				imageString += "<div class='slides fade'>" + "<img src='https://picsum.photos/200/300?random= " + picsum[x].id + "' class='images'>" + "<p>"  + picsum[x].author +  "</p>" + "</div>";
			}
			  document.getElementById("gallery").innerHTML = imageString;
		} else {

			var i;
			var slides = document.getElementsByClassName("slides");

			function plusSlides(n) {
				showSlides(slideIndex += n);
			}


			function currentSlide(n) {
				showSlides(slideIndex = n);
			}

			 if (n > slides.length) {slideIndex = 1} 
				  if (n < 1) {slideIndex = slides.length}
				  for (i = 0; i < slides.length; i++) {
				      slides[i].style.display = "none"; 

				  slides[slideIndex-1].style.display = "block"; 
				}
			}
		}
}


