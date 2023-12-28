const messageblocks = {
  Star: ["Bright", "Leo", "Sun", "Moon", "Dark"],
  Time: ["Good", "Bad", "Better", "Worst"],
  Expect: ["Live", "Die", "Grow", "Shine", "Enjoy", "Thrive"],
};

// generates a random index
function getrandomindex(num) {
  return (uniqueidx = Math.floor(Math.random() * num));
}

// this array is for storing the blocks that will make the final message
let message = [];

//loop through the available data to randomly access the text and create a message
for (block in messageblocks) {
  let randomindex = getrandomindex(messageblocks[block].length);

  switch (block) {
    case "Star":
      message.push(`You are a ${messageblocks[block][randomindex]}`);
      break;

    case "Time":
      message.push(`Your time is ${messageblocks[block][randomindex]}`);
      break;

    case "Expect":
      message.push(`You can expect to ${messageblocks[block][randomindex]}`);
      break;
    default:
      message.push("Not enough data");
  }
}

function generatemessage() {
  const finalmessage = message.join(". ");
  console.log(finalmessage + ".");
}

generatemessage(message);

// Hi there I am just testing how branches work and this is for Branch 1"
