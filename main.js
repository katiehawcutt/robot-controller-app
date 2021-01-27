const clearButton = document.querySelector("#clearButton");

const dataToSend = {
  sequence: [],
};

function addDirections(direction) {
  dataToSend.sequence.push(direction);
  userChoice(direction);
  console.log(dataToSend);
}

function userChoice(direction) {
  var image = document.createElement("img");
  if (direction == "forward") {
    image.src = "./Images/bluearrow-forward.png";
  } else if (direction == "left") {
    image.src = "./Images/bluearrow-left.png";
  } else if (direction == "right") {
    image.src = "./Images/bluearrow-right.png";
  } else {
    image.src = "./Images/bluearrow-backward.png";
  }
  document.querySelector(".directions-container").appendChild(image);
}

function runShoebot() {
  fetch("http://192.168.1.111:5000/sequence", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });

  console.log(runShoebot);

  clearArray();
  clearUserChoice();
}

function clearArray() {
  dataToSend.sequence = [];
}
function clearUserChoice() {
  document.querySelector(".directions-container").innerHTML = "";
}

clearButton.addEventListener("click", () => {
  clearArray();
  clearUserChoice();
  console.log("directions cleared");
});
