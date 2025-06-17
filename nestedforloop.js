
const student = {
  name: "Meghana",
  age: 21,
  marks: {
    math: 90,
    english: 85
  }
};

for (let key in student) {
  debugger;
  console.log(key, ":", student[key]);

  if (typeof student[key] === "object") {
    for (let subKey in student[key]) {
      console.log("  ", subKey, ":", student[key][subKey]);
    }
  }
}