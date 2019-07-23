const faker = require("faker");
const fs = require("fs");

function generateModules() {
  const quantityOfModules = faker.random.number({ max: 10 });
  const myModuleArr = [];
  const keyArr = [
    "not_done",
    "in_progress",
    "suspended",
    "high_priority",
    "rejected",
    "done"
  ];
  const displayNameArr = [
    "Not done",
    "In progress",
    "Suspended",
    "High priority",
    "Rejected",
    "Done"
  ];
  for (let i = 0; i <= quantityOfModules; i++) {
    const keyValue = faker.random.number({ max: 5 });
    const moduleTitle = faker.random.word();
    const guid = faker.random.uuid();
    const moduleStatus = {
      key: keyArr[keyValue],
      displayName: displayNameArr[keyValue]
    };
    myModuleArr.push({
      guid: guid,
      moduleTitle: moduleTitle,
      moduleStatus: moduleStatus
    });
  }
  return myModuleArr;
}
function generateCards() {
  const cards = faker.random.number({ max: 15 });
  const cardsArr = [];
  for (let i = 0; i <= cards; i++) {
    const courseTitle = faker.random.words();
    const guid = faker.random.uuid();
    cardsArr.push({
      guid: guid,
      courseTitle: courseTitle,
      modules: generateModules()
    });
  }
  return cardsArr;
}

const dataObj = generateCards();
fs.writeFile("cards.json", JSON.stringify(dataObj, null, "\t"), error => {
  if (error) console.log(error);
  console.log("Check file cards.json");
});
