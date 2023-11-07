import throttle from 'lodash.throttle';

const formElem = document.querySelector('.feedback-form');

formElem.addEventListener('input', throttle(onFormElemInput, 5000));

function onFormElemInput(event) {
    const userForm = {};
    const formData = new FormData(formElem);
    
    formData.forEach((value, key) => {
        userForm[key] = value;
    });

  saveToLS("feedback-form-state", userForm);
}

function onLoad() {
  const data = loadFromLS("feedback-form-state") || {};
    for (const key of Object.keys(data)) {
    formElem.elements[key].value = data[key];
  }
}

function onFormElemSubmit(event) {
  event.preventDefault();

  const data = loadFromLS("feedback-form-state");
  localStorage.removeItem("feedback-form-state");
  event.target.reset();
  console.log(data);
}

formElem.addEventListener('submit', onFormElemSubmit);

onLoad();

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
    return data;
  }
}

