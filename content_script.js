function header() {
alert("hiii")
}

// function createModal() {
//   // Create the modal container
//   const modalContainer = document.createElement("div");
//   modalContainer.id = "my-modal";
//   modalContainer.style.display = "none";
//   modalContainer.style.position = "fixed";
//   modalContainer.style.zIndex = "9999";
//   modalContainer.style.left = "0";
//   modalContainer.style.top = "0";
//   modalContainer.style.width = "100%";
//   modalContainer.style.height = "100%";
//   modalContainer.style.overflow = "auto";
//   modalContainer.style.backgroundColor = "rgba(0,0,0,0.4)";

//   // Create the modal content
//   const modalContent = document.createElement("div");
//   modalContent.style.backgroundColor = "#fefefe";
//   modalContent.style.margin = "15% auto";
//   modalContent.style.padding = "20px";
//   modalContent.style.border = "1px solid #888";
//   modalContent.style.width = "80%";

//   // Create the close button
//   const closeButton = document.createElement("span");
//   closeButton.innerHTML = "&times;";
//   closeButton.style.color = "#aaa";
//   closeButton.style.float = "right";
//   closeButton.style.fontSize = "28px";
//   closeButton.style.fontWeight = "bold";
//   closeButton.style.cursor = "pointer";
//   closeButton.addEventListener("click", function () {
//     modalContainer.style.display = "none";
//   });

//   // Append the modal content and close button to the modal container
//   modalContent.appendChild(closeButton);
//   modalContainer.appendChild(modalContent);

//   // Insert the modal container into the document
//   document.body.insertBefore(modalContainer, document.body.firstChild);

//   // Show the modal
//   modalContainer.style.display = "block";
// }

// createModal();

// function createModal() {
//   // Create the modal container
//   const modalContainer = document.createElement("div");
//   modalContainer.id = "my-modal";
//   modalContainer.style.display = "none";
//   modalContainer.style.position = "fixed";
//   modalContainer.style.zIndex = "9999";
//   modalContainer.style.right = "50px";
//   modalContainer.style.top = "5px";
//   modalContainer.style.width = "300px";
//   modalContainer.style.height = "200px";
//   modalContainer.style.overflow = "auto";
//   modalContainer.style.backgroundColor = "rgba(0,0,0,0.4)";
//   modalContainer.style.borderRadius = "20px";

//   // Create the modal content
//   const modalContent = document.createElement("div");
//   modalContent.innerHTML = "This is the modal content.";

//   modalContent.style.backgroundColor = "#fefefe";
//   modalContent.style.color = "black";

//   modalContent.style.padding = "20px";
//   modalContent.style.width = "100%";
//   modalContent.style.height = "100%";

//   // Create the close button
//   const closeButton = document.createElement("span");
//   closeButton.innerHTML = "&times;";
//   closeButton.style.color = "#aaa";
//   closeButton.style.float = "right";
//   closeButton.style.fontSize = "28px";
//   closeButton.style.fontWeight = "bold";
//   closeButton.style.cursor = "pointer";
//   closeButton.addEventListener("click", function () {
//     modalContainer.style.display = "none";
//   });

//   // Append the modal content and close button to the modal container
//   modalContent.appendChild(closeButton);
//   modalContainer.appendChild(modalContent);

//   // Insert the modal container into the document
//   document.body.insertBefore(modalContainer, document.body.firstChild);

//   // Show the modal
//   modalContainer.style.display = "block";
// }

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   if (message.action === "openModal") {
//     createModal();
//   }
// });

// Create the modal container
// const modalContainer = document.createElement("div");
// modalContainer.id = "my-modal";
// modalContainer.style.display = "none";
// modalContainer.style.position = "fixed";
// modalContainer.style.zIndex = "9999";
// modalContainer.style.top = "10px";
// modalContainer.style.right = "10px";
// modalContainer.style.borderRadius = "20px";
// modalContainer.style.width = "300px";
// modalContainer.style.height = "200px";
// modalContainer.style.overflow = "auto";
// modalContainer.style.backgroundColor = "white";

// // Create the modal content
// const modalContent = document.createElement("div");
// modalContent.style.padding = "20px";
// modalContent.innerHTML = "This is a modal!";

// // Create the close button
// const closeButton = document.createElement("span");
// closeButton.innerHTML = "&times;";
// closeButton.style.color = "#aaa";
// closeButton.style.float = "right";
// closeButton.style.fontSize = "28px";
// closeButton.style.fontWeight = "bold";
// closeButton.style.cursor = "pointer";
// closeButton.addEventListener("click", function () {
//   modalContainer.style.display = "none";
// });

// // Append the modal content and close button to the modal container
// modalContent.appendChild(closeButton);
// modalContainer.appendChild(modalContent);

// // Insert the modal container into the document
// document.body.insertBefore(modalContainer, document.body.firstChild);

// // Show the modal
// modalContainer.style.display = "block";

// // Listen for the extension icon click event
// chrome.browserAction.onClicked.addListener(function (tab) {
//   modalContainer.style.display = "block";
// });

function createModal() {
  alert("hhiii");
}

chrome.browserAction.onClicked.addListener(function (tab) {
  alert("hiii");
});

// chrome.browserAction.onClicked.addListener(function (tab) {
//   createModal();
// });
