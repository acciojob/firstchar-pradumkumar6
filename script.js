function firstChar(text) {
  // your code here
	// Trim leading spaces and return the first character if exists
  const trimmed = str.trimStart();
  return trimmed.length > 0 ? trimmed[0] : '';
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
