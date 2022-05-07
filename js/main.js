let modal = document.getElementById("modal");
//Get modal button
let modalBtn = document.getElementById("modalBtn");
//Get close button

let closeBtn = document.getElementById("closeBtn");

//Listen for a click
modalBtn.addEventListener("click", openModal);

function openModal() {
  modal.style.display = "block";
}

closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
}

//Outside click

window.addEventListener("click", clickOutSide);

function clickOutSide(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

//Select all fields and IDs
// let previousBtn = document.getElementById("previous");
// let currentQuestion = document.getElementById("question");
// let finishBtn = document.getElementById("finish");
// //Get next button
// let nextBtn = document.getElementById("next");
// nextBtn.addEventListener("click", nextQuestion);
// //Get question number
// let questionNumber = document.getElementById("questionNumber");
// //Array of questions
// questions = [
//   "What is your gender?",
//   "How old are you?",
//   "What is your ethnic background?",
//   "Do you have a father, mother, brother, sister or own child with type 1 or type 2 diabetes?",
//   "What is your waist size?",
//   "What is your BMI(body mass index) score?",
//   "Have you been given medicine for high blood pressure or told by a doctor that you have high blood pressure?",
// ];
// let qwt = 0;
// let previousQwt = 0;
// let questionNum = 1;
// function nextQuestion() {
//   qwt += 1;
//   questionNum++;
//   previousQwt = qwt;
//   currentQuestion.textContent = questions[qwt];
//   questionNumber.textContent = questionNum.toString();
//   previousBtn.style.display = "block";
//   if (qwt > 5) {
//     nextBtn.style.display = "none";
//     finishBtn.style.display = "block";
//   }
// }

// previousBtn.addEventListener("click", previousQuestion);

// function previousQuestion() {
//   previousQwt -= 1;
//   questionNum--;
//   currentQuestion.textContent = questions[previousQwt];
//   questionNumber.textContent = questionNum.toString();
// }

let checkBtn = document.getElementById("finish");
checkBtn.addEventListener("click", update);
let progressbar = document.getElementById("download");
let riskScore = document.getElementById("riskScore");

function updateProgressBar(value) {
  if (value >= 0 && value <= 100) {
    progressbar.style.width = value + "%";
  }
}

function update() {
  //Get all elements from html dom
  var gender = document.getElementById("gender");
  //Get selected value
  var selectedGender = gender.options[gender.selectedIndex].text;
  var age = document.getElementById("age");
  var selectedAge = age.options[age.selectedIndex].value;
  var ethnicGroup = document.getElementById("ethnicGroup");
  var selectedEthnicity = ethnicGroup.options[ethnicGroup.selectedIndex].value;
  var inherited = document.getElementById("inherited");
  var selectedInherited = inherited.options[inherited.selectedIndex].value;
  var waistSize = document.getElementById("waistSize");
  var waist = waistSize.options[waistSize.selectedIndex].value;
  var bmi = document.getElementById("bmi");
  var selectedBmi = bmi.options[bmi.selectedIndex].value;
  var medicine = document.getElementById("providedMedic");
  var medic = medicine.options[medicine.selectedIndex].value;
  let food = document.getElementById("food");
  let typeOfFood = food.options[food.selectedIndex].value;
  let exercise = document.getElementById("exercise");
  let doesExercise = exercise.options[exercise.selectedIndex].value;

  if (typeOfFood === "1" && doesExercise === "1") {
    if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "1" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "10%";
      updateProgressBar(10);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "1" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "20%";
      updateProgressBar(20);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "1" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "22%";
      updateProgressBar(22);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "70%";
      updateProgressBar(70);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "1" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "35%";
      updateProgressBar(35);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "28%";
      updateProgressBar(28);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "19%";
      updateProgressBar(19);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "19%";
      updateProgressBar(19);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "47%";
      updateProgressBar(47);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "1" &&
      medic === "2"
    ) {
      riskScore.textContent = "23%";
      updateProgressBar(23);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "42%";
      updateProgressBar(42);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "39%";
      updateProgressBar(39);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "34%";
      updateProgressBar(34);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "19%";
      updateProgressBar(19);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "29%";
      updateProgressBar(29);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "1" &&
      medic === "2"
    ) {
      riskScore.textContent = "24%";
      updateProgressBar(24);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "43%";
      updateProgressBar(43);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "21%";
      updateProgressBar(21);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "3" &&
      medic === "1"
    ) {
      riskScore.textContent = "62%";
      updateProgressBar(62);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "3" &&
      medic === "2"
    ) {
      riskScore.textContent = "35%";
      updateProgressBar(35);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "28%";
      updateProgressBar(28);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "51%";
      updateProgressBar(51);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "46%";
      updateProgressBar(46);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "36%";
      updateProgressBar(36);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "71%";
      updateProgressBar(71);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "1" &&
      medic === "2"
    ) {
      riskScore.textContent = "21%";
      updateProgressBar(21);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "39%";
      updateProgressBar(39);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "71%";
      updateProgressBar(71);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "3" &&
      medic === "1"
    ) {
      riskScore.textContent = "40%";
      updateProgressBar(40);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "3" &&
      medic === "2"
    ) {
      riskScore.textContent = "42%";
      updateProgressBar(42);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "46%";
      updateProgressBar(46);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "53.5%";
      updateProgressBar(53.5);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "15%";
      updateProgressBar(15);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "1" &&
      medic === "2"
    ) {
      riskScore.textContent = "28%";
      updateProgressBar(28);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "58%";
      updateProgressBar(58);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "50%";
      updateProgressBar(50);
    } else if (
      selectedGender === "Female" &&
      selectedBmi === "3" &&
      waist === "3" &&
      medic === "1"
    ) {
      riskScore.textContent = "42%";
      updateProgressBar(42);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "3" &&
      medic === "2"
    ) {
      riskScore.textContent = "29%";
      updateProgressBar(29);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "61%";
      updateProgressBar(61);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "21.5%";
      updateProgressBar(21.5);
    }
  } else if (typeOfFood === "1" && doesExercise === "2") {
    if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "1" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "12%";
      updateProgressBar(12);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "1" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "20%";
      updateProgressBar(22);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "1" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "24%";
      updateProgressBar(24);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "71%";
      updateProgressBar(71);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "1" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "35%";
      updateProgressBar(35);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "28%";
      updateProgressBar(28);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "19%";
      updateProgressBar(19);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "19%";
      updateProgressBar(19);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "47%";
      updateProgressBar(47);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "1" &&
      medic === "2"
    ) {
      riskScore.textContent = "23%";
      updateProgressBar(23);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "42%";
      updateProgressBar(42);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "39%";
      updateProgressBar(39);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "34%";
      updateProgressBar(34);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "19%";
      updateProgressBar(19);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "29%";
      updateProgressBar(29);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "1" &&
      medic === "2"
    ) {
      riskScore.textContent = "24%";
      updateProgressBar(24);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "43%";
      updateProgressBar(43);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "21%";
      updateProgressBar(21);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "3" &&
      medic === "1"
    ) {
      riskScore.textContent = "62%";
      updateProgressBar(62);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "3" &&
      medic === "2"
    ) {
      riskScore.textContent = "35%";
      updateProgressBar(35);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "28%";
      updateProgressBar(28);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "51%";
      updateProgressBar(51);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "46%";
      updateProgressBar(46);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "36%";
      updateProgressBar(36);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "71%";
      updateProgressBar(71);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "1" &&
      medic === "2"
    ) {
      riskScore.textContent = "21%";
      updateProgressBar(21);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "39%";
      updateProgressBar(39);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "71%";
      updateProgressBar(71);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "3" &&
      medic === "1"
    ) {
      riskScore.textContent = "40%";
      updateProgressBar(40);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "3" &&
      medic === "2"
    ) {
      riskScore.textContent = "42%";
      updateProgressBar(42);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "46%";
      updateProgressBar(46);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "53.5%";
      updateProgressBar(53.5);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "15%";
      updateProgressBar(15);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "1" &&
      medic === "2"
    ) {
      riskScore.textContent = "28%";
      updateProgressBar(28);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "58%";
      updateProgressBar(58);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "50%";
      updateProgressBar(50);
    } else if (
      selectedGender === "Female" &&
      selectedBmi === "3" &&
      waist === "3" &&
      medic === "1"
    ) {
      riskScore.textContent = "42%";
      updateProgressBar(42);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "3" &&
      medic === "2"
    ) {
      riskScore.textContent = "29%";
      updateProgressBar(29);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "61%";
      updateProgressBar(61);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "21.5%";
      updateProgressBar(21.5);
    }
  } else if (
    (typeOfFood === "2" || typeOfFood === "4") &&
    (doesExercise === "1" || doesExercise === "2")
  ) {
    if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "1" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "8%";
      updateProgressBar(8);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "1" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "12%";
      updateProgressBar(12);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "1" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "18%";
      updateProgressBar(18);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "65%";
      updateProgressBar(65);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "1" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "28%";
      updateProgressBar(28);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "24%";
      updateProgressBar(24);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "15%";
      updateProgressBar(15);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "11%";
      updateProgressBar(11);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "40%";
      updateProgressBar(40);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "1" &&
      medic === "2"
    ) {
      riskScore.textContent = "20%";
      updateProgressBar(20);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "33%";
      updateProgressBar(33);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "31%";
      updateProgressBar(31);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "34%";
      updateProgressBar(34);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "19%";
      updateProgressBar(19);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "25.6%";
      updateProgressBar(25.6);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "1" &&
      medic === "2"
    ) {
      riskScore.textContent = "23%";
      updateProgressBar(23);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "36.7%";
      updateProgressBar(36.7);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "18.5%";
      updateProgressBar(18.5);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "3" &&
      medic === "1"
    ) {
      riskScore.textContent = "54%";
      updateProgressBar(54);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "3" &&
      medic === "2"
    ) {
      riskScore.textContent = "31%";
      updateProgressBar(31);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "28%";
      updateProgressBar(28);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "51%";
      updateProgressBar(51);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "46%";
      updateProgressBar(46);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "36%";
      updateProgressBar(36);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "71%";
      updateProgressBar(71);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "1" &&
      medic === "2"
    ) {
      riskScore.textContent = "21%";
      updateProgressBar(21);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "39%";
      updateProgressBar(39);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "71%";
      updateProgressBar(71);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "3" &&
      medic === "1"
    ) {
      riskScore.textContent = "40%";
      updateProgressBar(40);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "3" &&
      medic === "2"
    ) {
      riskScore.textContent = "42%";
      updateProgressBar(42);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "46%";
      updateProgressBar(46);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "53.5%";
      updateProgressBar(53.5);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "15%";
      updateProgressBar(15);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "1" &&
      medic === "2"
    ) {
      riskScore.textContent = "28%";
      updateProgressBar(28);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "58%";
      updateProgressBar(58);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "50%";
      updateProgressBar(50);
    } else if (
      selectedGender === "Female" &&
      selectedBmi === "3" &&
      waist === "3" &&
      medic === "1"
    ) {
      riskScore.textContent = "42%";
      updateProgressBar(42);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "3" &&
      medic === "2"
    ) {
      riskScore.textContent = "29%";
      updateProgressBar(29);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "61%";
      updateProgressBar(61);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "21.5%";
      updateProgressBar(21.5);
    }
  } else if (
    typeOfFood === "3" &&
    (doesExercise === "1" || doesExercise === "2")
  ) {
    if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "1" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "8%";
      updateProgressBar(8);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "1" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "12%";
      updateProgressBar(12);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "1" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "18%";
      updateProgressBar(18);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "65%";
      updateProgressBar(65);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "1" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "28%";
      updateProgressBar(28);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "24%";
      updateProgressBar(24);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "15%";
      updateProgressBar(15);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "11%";
      updateProgressBar(11);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "40%";
      updateProgressBar(40);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "1" &&
      medic === "2"
    ) {
      riskScore.textContent = "20%";
      updateProgressBar(20);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "33%";
      updateProgressBar(33);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "31%";
      updateProgressBar(31);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "34%";
      updateProgressBar(34);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "19%";
      updateProgressBar(19);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "25.6%";
      updateProgressBar(25.6);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "1" &&
      medic === "2"
    ) {
      riskScore.textContent = "23%";
      updateProgressBar(23);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "36.7%";
      updateProgressBar(36.7);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "18.5%";
      updateProgressBar(18.5);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "3" &&
      medic === "1"
    ) {
      riskScore.textContent = "54%";
      updateProgressBar(54);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "3" &&
      medic === "2"
    ) {
      riskScore.textContent = "31%";
      updateProgressBar(31);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "28%";
      updateProgressBar(28);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "51%";
      updateProgressBar(51);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "46%";
      updateProgressBar(46);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "4" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "36%";
      updateProgressBar(36);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "71%";
      updateProgressBar(71);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "1" &&
      medic === "2"
    ) {
      riskScore.textContent = "21%";
      updateProgressBar(21);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "39%";
      updateProgressBar(39);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "71%";
      updateProgressBar(71);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "3" &&
      medic === "1"
    ) {
      riskScore.textContent = "40%";
      updateProgressBar(40);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "3" &&
      medic === "2"
    ) {
      riskScore.textContent = "42%";
      updateProgressBar(42);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "46%";
      updateProgressBar(46);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "2" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "53.5%";
      updateProgressBar(53.5);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "1" &&
      medic === "1"
    ) {
      riskScore.textContent = "15%";
      updateProgressBar(15);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "1" &&
      medic === "2"
    ) {
      riskScore.textContent = "28%";
      updateProgressBar(28);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "2" &&
      medic === "1"
    ) {
      riskScore.textContent = "58%";
      updateProgressBar(58);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "2" &&
      medic === "2"
    ) {
      riskScore.textContent = "50%";
      updateProgressBar(50);
    } else if (
      selectedGender === "Female" &&
      selectedBmi === "3" &&
      waist === "3" &&
      medic === "1"
    ) {
      riskScore.textContent = "42%";
      updateProgressBar(42);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "3" &&
      medic === "2"
    ) {
      riskScore.textContent = "29%";
      updateProgressBar(29);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "4" &&
      medic === "1"
    ) {
      riskScore.textContent = "61%";
      updateProgressBar(61);
    } else if (
      (selectedGender === "Female" || selectedGender === "Male") &&
      selectedBmi === "3" &&
      waist === "4" &&
      medic === "2"
    ) {
      riskScore.textContent = "21.5%";
      updateProgressBar(21.5);
    }
  }
}
// function checkDiabetesStatus() {
// }
