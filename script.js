// Вибираємо форму та інпути
const form = document.getElementById("form");

const nameInput = document.querySelector(".fname");
const groupInput = document.querySelector(".fgroup");
const phoneInput = document.querySelector(".fphone");
const addressInput = document.querySelector(".faddress");
const emailInput = document.querySelector(".femail");

// Регулярні вирази
const nameRegExp =
  /^([А-ЩЬЮЯҐЄІЇ][а-щьюяґєії]+)\s([А-ЩЬЮЯҐЄІЇ])\.([А-ЩЬЮЯҐЄІЇ])\.$/;
const groupRegExp = /^[А-ЩЬЮЯҐЄІЇа-щьюяґєії]{2}-\d{2}$/;
const phoneRegExp = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
const addressRegExp = /^м\.\s[А-ЩЬЮЯҐЄІЇа-щьюяґєії]+$/;

// Перевірка на валідність

// Додаємо обробник події на подачу форми
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Перевірка на валідність
  const isNameValid = nameRegExp.test(nameInput.value);
  const isGroupValid = groupRegExp.test(groupInput.value);
  const isPhoneValid = phoneRegExp.test(phoneInput.value);
  const isAddressValid = addressRegExp.test(addressInput.value);
  const isEmailValid = emailRegExp.test(emailInput.value);

  const isFormValid =
    isNameValid &&
    isGroupValid &&
    isPhoneValid &&
    isAddressValid &&
    isEmailValid;

  if (isFormValid) {
    console.log("correct");

    const dataDiv = document.querySelector(".data");

    // Виводимо введені дані у елемент <div>
    dataDiv.innerHTML = `
      <p>ПІБ: ${nameInput.value}</p>
      <p>Група: ${groupInput.value}</p>
      <p>Телефон: ${phoneInput.value}</p>
      <p>Адреса: ${addressInput.value}</p>
      <p>Пошта: ${emailInput.value}</p>
    `;

    nameInput.value = "";
    groupInput.value = "";
    phoneInput.value = "";
    addressInput.value = "";
    emailInput.value = "";
  } else {
    console.log("error");
    // Якщо є помилки, виділимо відповідні інпути
    if (!isNameValid) nameInput.classList.add("error");
    else nameInput.classList.remove("error");

    if (!isGroupValid) groupInput.classList.add("error");
    else groupInput.classList.remove("error");

    if (!isPhoneValid) phoneInput.classList.add("error");
    else phoneInput.classList.remove("error");

    if (!isAddressValid) addressInput.classList.add("error");
    else addressInput.classList.remove("error");

    if (!isEmailValid) emailInput.classList.add("error");
    else emailInput.classList.remove("error");
  }
});

const table = document.getElementById('myTable');
const tbody = table.querySelector('tbody');
const colorPicker = document.getElementById('colorPicker');
const variant = 10;
const numRows = 6;
const numCols = 6;

// Створюємо таблицю та заповнюємо її номерами
for (let i = 0; i < numRows; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < numCols; j++) {
        const cell = document.createElement('td');
        cell.textContent = i * numCols + j + 1;
        row.appendChild(cell);
    }
    tbody.appendChild(row);
}

const targetCell = tbody.querySelectorAll('td')[variant-1];

targetCell.addEventListener('mouseover', () => {
  const randomColor = getRandomColor(); // Отримуємо випадковий колір
  targetCell.style.backgroundColor = randomColor; // Встановлюємо колір фону клітинки
});

// Функція для отримання випадкового кольору
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

targetCell.addEventListener('click', () => {
  const selectedColor = colorPicker.value; // Отримуємо вибраний колір з colorPicker
  targetCell.style.backgroundColor = selectedColor; // Встановлюємо колір фону клітинки
});


targetCell.addEventListener('dblclick', () => {
  const selectedColor = colorPicker.value; // Отримуємо вибраний колір з colorPicker
  const cellsInRow = targetCell.parentElement.querySelectorAll('td'); // Отримуємо всі клітинки в рядку
  const startIndex = Array.from(cellsInRow).indexOf(targetCell);

  for (let i = startIndex; i < cellsInRow.length; i += 2) {
      cellsInRow[i].style.backgroundColor = selectedColor; // Встановлюємо колір фону клітинки
  }
});

