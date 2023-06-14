var selectedPiece = null;

function movePiece(element) {
  if (selectedPiece) {
    if (element.classList.contains("selected")) {
      // Deselect the already selected piece
      element.classList.remove("selected");
      selectedPiece = null;
    } else {
      // Move the selected piece to the clicked square
      element.innerHTML = selectedPiece.innerHTML; // Update the square's HTML with the king piece's HTML content
      selectedPiece.innerHTML = ""; // Remove the king piece from its previous square
      selectedPiece.classList.remove("selected");
      selectedPiece = element;
      selectedPiece.classList.add("selected");
      activateLinkIfAvailable(selectedPiece.id);
    }
  } else {
    if (element.innerHTML) {
      selectedPiece = element;
      selectedPiece.classList.add("selected");
    }
  }
}

function activateLinkIfAvailable(squareId) {
  var programmingLanguages = {
    squareA: {
      language: "Java",
      link: "https://github.com/Closdlgdo/CSD420/tree/main/JavaCSD420",
    },
    squareB: { language: "JS", link: "https://github.com/Closdlgdo/Projects" },
    squareC: {
      language: "C++",
      link: "https://github.com/Closdlgdo/Employee-Management-System",
    },
    squareD: {
      language: "PHP",
      link: "https://github.com/Closdlgdo/RandomNumberAddition",
    },
    squareE: {
      language: "HTML",
      link: "https://github.com/Closdlgdo/odin-recipes",
    },
    squareF: {
      language: "CSS",
      link: "https://github.com/Closdlgdo/3D-effect",
    },
    squareG: {
      language: "MySQL",
      link: "https://github.com/Closdlgdo/CSD430/tree/main/ebookshop",
    },
    squareH: { language: "Mongo", link: "" },
    squareI: { language: "Git", link: "" },
    // Add more programming languages and links here
  };

  if (programmingLanguages.hasOwnProperty(squareId)) {
    var language = programmingLanguages[squareId].language;
    var link = programmingLanguages[squareId].link;
    if (link !== "") {
      window.open(link, "_blank");
      console.log("You have activated the " + language + " link.");
    } else {
      console.log("No link available for " + language + ".");
    }
  }
}

function allowDrop(event) {
  event.preventDefault();
}

function dragStart(event) {
  event.dataTransfer.setData("text/plain", "king");
}

function dragEnd(event) {}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);
  const targetElement = event.target;

  // Check if the target element is a square on the chessboard
  if (targetElement.classList.contains("square")) {
    // Remove the king from its previous parent (chessboard)
    draggedElement.parentNode.removeChild(draggedElement);

    // Append the king to the target square
    targetElement.appendChild(draggedElement);
  }
}
