// Selecting the necessary elements from the DOM
let itemInput = document.querySelector("#itemInput"); // Input field for new list items
let addBtn = document.querySelector("#addBtn"); // Button to add items
let itemList = document.querySelector("#itemList"); // The <ul> where list items will be added

// Event listener for the 'Add' button
addBtn.onclick = function () {
  // Get the value the user typed into the input field
  let value = itemInput.value;

  // Create a new <li> element for the list
  let createdElement = document.createElement("li");

  // Append the new <li> to the <ul> (itemList)
  itemList.appendChild(createdElement);

  // Set the text of the new <li> to the user's input value
  createdElement.textContent = value;

  // Clear the input field after adding the item to the list
  itemInput.value = "";

  // Add an event listener to remove the <li> when clicked
  createdElement.onclick = function () {
    createdElement.remove(); // Removes the clicked <li> from the DOM
  };
};
