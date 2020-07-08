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
    image.src = "./bluearrow-forward.png";
  } else if (direction == "left") {
    image.src = "./bluearrow-left.png";
  } else if (direction == "right") {
    image.src = "./bluearrow-right.png";
  } else {
    image.src = "./bluearrow-backward.png";
  }
  document.querySelector(".directions-container").appendChild(image);
  console.log("user log called");
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
