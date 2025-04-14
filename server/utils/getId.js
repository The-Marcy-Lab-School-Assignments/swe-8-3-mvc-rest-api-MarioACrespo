let currentId = 1;

function getId() {
  return currentId++;
}

module.exports = getId;
