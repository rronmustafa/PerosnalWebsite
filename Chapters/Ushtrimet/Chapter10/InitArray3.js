// Fig. 10.21: InitArray3.html 
// Initializing multidimensional arrays.
function start()
{
	var array1 = [  [ 1, 2, 3 ], // row 0 
					[ 4, 5, 6 ] ]; // row 1
	var array2 = [  [ 1, 2 ], // row 0 
					[ 3 ], // row 1 
					[ 4, 5, 6 ] ]; //row 2

	outputArray( "values in array1 by row", array1,
		document.getElementById( "output1" ) );
	outputArray( "values in array2 by row", array2,
		document.getElementById( "output2" ) );
}// end function start

// display array contents
function outputArray( heading, theArray, output )
{
	var results = "";

	// iterates through the set of one-dimensional arrays
	for ( var row in theArray )
	{
		results += "<ol>"; // start ordered list

		// iterates through the lements of each one-dimensional array
		for ( var column in theArray[ row ] )
		{
			results += "<li>" + theArray[ row ][ column ] + "</li>";
		}// end inner for 

		results += "</ol>";// end ordered list
	}// end outer for 

	output.innerHTML = results;
}// end function outputArray

window.addEventListener( "load", start, false );