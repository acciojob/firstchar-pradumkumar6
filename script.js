function firstChar(text) {
  // Trim leading spaces and return the first character if exists
  const trimmed = text.trimStart();
  return trimmed.length > 0 ? trimmed[0] : '';
}

// Do not change the code below
// Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
