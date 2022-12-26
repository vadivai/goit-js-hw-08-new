import throttle from 'lodash.throttle';

const onForm = document.querySelector('.feedback-form');
const onInput = document.querySelector('.feedback-form input');
const onTextarea = document.querySelector('.feedback-form textarea');

onForm.addEventListener('submit', onSubmitForm);
onForm.addEventListener('input', throttle(onInputForm, 500));

const inputObj = {};
const STORAGE_KEY = "feedback-form-state";

checkDataForm();

function onInputForm(event) {
    inputObj[event.target.name] = event.target.value;
    console.log(inputObj);
    // const email = event.target.value; //
    // const message = event.target.value;
    // const email = event.currenttarget.elements.email.value,
    // console.log(event.target.value);
    
    // можно оптимизировать, чтобы 2 раза не писать одно и то же?
    // localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputObj));
    // console.log(localStorage.getItem(STORAGE_KEY));

    //если пойти по пути email = onForm.elements.email.value,  ????
    //то event можно не передавать параметром в эту функцию?
}

function onSubmitForm(event) {
    event.preventDefault();
    // console.log(event.target.value);// button,  event.currenttarget.elements.name.value почему underfine? а в функции Input работало?
    const submitObj = {
        email: onForm.elements.email.value,
        message: onForm.elements.message.value
    };
    console.log(submitObj); //как можно было по-другому назвать? Разные объекты или один и тот же?
    // можно ли то же самое имя, как в функции Input? inputObj
    
    // console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    // так можно или это сохраненные в хранилище данные и может быть погрешность изза троттл?
    //надо ли дополнительно записывать данные в localeStorage при сабмите?
    
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function checkDataForm() {
    const savedJsonInput = localStorage.getItem(STORAGE_KEY);
    const savedInput = JSON.parse(savedJsonInput);
    if (savedInput) {
        onInput.value = savedInput.email;
        onTextarea.value = savedInput.message;
        //можно так? onInput.value или inputObj.email? можно из объекта вставить в форму?
        // да, это идентичные записи
    }
}