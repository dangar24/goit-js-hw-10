const formEl = document.querySelector(".form");
const timeInp = document.querySelector("input[name=delay]");
const radioTrue = document.querySelector("input[value=fulfilled]");
const radioFalse = document.querySelector("input[value=rejected]");
const buttonSub = document.querySelector("button[type=submit]");
let delay = null;
let promiseValue = null;



const giveTime = (event) => {
    delay = event.target.value;
};
timeInp.addEventListener("input", giveTime);

const itTrue = (event) => {
    promiseValue = true;
};
radioTrue.addEventListener("click", itTrue);
const itFalse = (event) => {
    promiseValue = false;
}
radioFalse.addEventListener("click", itFalse)


const getPromise = (event) => {
    const promise = new Promise((fulfilled, rejected) => {
        if (promiseValue) {
            fulfilled(`✅ Fulfilled promise in ${delay}ms`);
        } else {
            rejected(`❌ Rejected promise in ${delay}ms`);
            iziToast.error({
                message: `❌ Rejected promise in ${delay}ms`,
            });
        };
    });
    
    event.currentTarget.reset();
    event.preventDefault();
    console.log(delay);
    
};

formEl.addEventListener("submit", getPromise);





