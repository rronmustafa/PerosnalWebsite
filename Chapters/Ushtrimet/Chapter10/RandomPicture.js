// Fig.10.12: RandomPicture.js
// Random imgae selection using arrays
var iconImg;
var pictures = [ "CPE", "GPP", "GUI", "PERF", "PORT", "SEO" ];
var descriptions = [ "commong programming error", "error-prevention tip", "good programming prectice", 
"look=and=feel observation", "performance tip", "portability tip", "software engineering observation" ];

// pick a random image and corresponding description, then modify
// the img element in the document's body
function pickImage()
{
	var index = Math.floor( Math.random() * 7 );
	iconImg.setAttribute( "src", pictures[ index ] + ".png" );
	iconImg.setAttribute( "alt", descriptions[ index ] );
}// end function pickImage

// registers iconImg's click event handler
function start()
{
	iconImg = document.getElementById( "iconImg" );
	iconImg.addEventListener( "click", pickImage, false );
}// end function start

window.addEventListener( "load", start, false );