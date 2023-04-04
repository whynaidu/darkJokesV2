function addModal() {
  const modalContainer = document.querySelector("#my-modal");
  if (modalContainer) {
    // Modal already exists, so don't add it again
    return;
  }
  const newModalContainer = document.createElement("div");
  newModalContainer.id = "my-modal";
  newModalContainer.style.display = "none";
  newModalContainer.style.position = "fixed";
  newModalContainer.style.zIndex = "9999";
  newModalContainer.style.top = "10px";
  newModalContainer.style.right = "10px";
  newModalContainer.style.borderRadius = "20px";
  newModalContainer.style.width = "350px";
  newModalContainer.style.height = "290px";
  newModalContainer.style.overflow = "auto";
  newModalContainer.style.backgroundColor = "#272727";
  newModalContainer.style.display = "flex";
  newModalContainer.style.justifyContent = "center";
  newModalContainer.style.alignItems = "center";


  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times;";
  closeButton.style.color = "white";
  closeButton.style.position = "absolute";
  closeButton.style.top = "0";
  closeButton.style.right = "20px";
  closeButton.style.fontSize = "28px";
  closeButton.style.fontWeight = "bold";
  closeButton.style.cursor = "pointer";
  closeButton.addEventListener("click", function () {
    newModalContainer.style.display = "none";
    newModalContainer.remove();
  });

  // Create the modal content
  const modalContent = document.createElement("div");

  modalContent.style.backgroundColor = "transparent";
  modalContent.style.margin = "0";
  modalContent.style.padding = "20px";
  modalContent.style.width = "300px";

  const button = document.createElement("button");
  button.innerHTML = "New Joke!";
  button.style.backgroundColor = "#96DED1";
  button.style.border = "none";
    button.style.width = "92%";

  button.style.position = "absolute";
  button.style.bottom = "15px";
  button.style.left = "15px";
  button.style.color = "black";
  button.style.padding = "10px";
  button.style.fontWeight = "bold"
  button.style.cursor = "pointer";

  button.style.borderRadius = "10px";

  button.addEventListener("click", function () {
    // Call the function from another file
    getJokes();
  });

  // Add event listener to close modal if clicked outside of it
 document.addEventListener("click", function (event) {
   if (!newModalContainer.contains(event.target)) {
     newModalContainer.style.display = "none";
     newModalContainer.remove();
   }
 });

  // Create the loading text
  const jokeElement = document.createElement("p");
  jokeElement.style.marginTop = "5px";
  jokeElement.style.width = "95%";

  jokeElement.innerHTML = "Loading...";

  // Append the modal content and close button to the modal container
  modalContent.appendChild(closeButton);
  newModalContainer.appendChild(modalContent);

  modalContent.appendChild(jokeElement);
  modalContent.appendChild(button);

  // Insert the modal container into the document
  document.body.insertBefore(newModalContainer, document.body.firstChild);

  // Show the modal
  newModalContainer.style.display = "flex";

  function getJokes() {
    const jokeElement = document.querySelector("#my-modal > div > p");
    jokeElement.style.color = "white";

    jokeElement.style.overflowY = "auto";
    jokeElement.style.minHeight = "200px";
    jokeElement.style.maxHeight = "200px";
    jokeElement.style.fontSize = "17px";
    // jokeElement.style.paddingRight = "8px"; // Add padding for scrollbar width
    // jokeElement.style.webkitOverflowScrolling = "touch"; // Enable momentum scrolling on iOS
//     jokeElement.style.scrollbarWidth = "thin"; // Set scrollbar width on Firefox
//     jokeElement.style.scrollbarColor = "#888 #f1f1f1"; // Set custom scrollbar colors
//     jokeElement.style.cssText += `
//   ::-webkit-scrollbar {
//     width: 8px;
//   }
//   ::-webkit-scrollbar-track {
//     background-color: #f1f1f1;
//   }
//   ::-webkit-scrollbar-thumb {
//     background-color: #888;
//   }
//   ::-webkit-scrollbar-thumb:hover {
//     background-color: #555;
//   }
// `;

    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((data) => data.json())
      .then((jokeData) => {
        const joketext = jokeData.joke;
        jokeElement.innerHTML = joketext;
      })
      .catch(() => {
        jokeElement.innerHTML = "Failed to fetch joke.";
      });
  }
  getJokes();
}

function addHeader() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `(${addModal.toString()})()`,
    });
  });
}

chrome.browserAction.onClicked.addListener(function (tab) {
  addHeader();
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    addHeader(tabId);
  }
});
chrome.tabs.onCreated.addListener(function (tab) {
  addHeader();
});