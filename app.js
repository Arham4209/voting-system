

let myArray = ["PMLN🦁", "PPP🏹", "PTI🏏"];

const addFriendInput = document.getElementById("addFriend");
const addNewButton = document.getElementById("addNew");
const table = document.getElementById("output");


addNewButton.addEventListener("click", function () {
  addFriend();
})
function addFriend() {
  const newFriend = addFriendInput.value;
  myArray.push(newFriend);

  buildPageContent();

}

function buildPageContent() {
  table.innerHTML = "";

  myArray.forEach(function (name, index) {
    createTableRow(index + 1, name, 0)
  });


}
function createTableRow(index, name, votes) {
  const row = document.createElement("tr");
  const col1 = document.createElement("td");
  const col2 = document.createElement("td");
  const col3 = document.createElement("td");

  col1.textContent = index;
  col2.textContent = name;
  col3.textContent = votes;

  row.addEventListener("click", function () {
    increaseVoteCounter(row);
  });
  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);
  table.appendChild(row);
}
function increaseVoteCounter(row) {

  let currentVotes = parseInt(row.lastChild.textContent);

  currentVotes++;

  row.lastChild.textContent = currentVotes;

}
buildPageContent();