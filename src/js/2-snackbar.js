import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

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
            setTimeout(() => {
                fulfilled(`✅ Fulfilled promise in ${delay}ms`);
                iziToast.show({
                    message: `✅ Fulfilled promise in ${delay}ms`,
                    position: "topRight",
                    backgroundColor: "#17ff00",
                    progressBar: false,
                    transitionIn: "fadeIn",
                    close: false,});
            }, delay);
            
        } else {
            setTimeout(() => {
                rejected(`❌ Rejected promise in ${delay}ms`);
                iziToast.show({
                    message: `❌ Rejected promise in ${delay}ms`,
                    position: "topRight",
                    backgroundColor: "#fa0000",
                    progressBar: false,
                    transitionIn: "fadeIn",
                    close: false,});
            }, delay);
        };
    });
    
    event.currentTarget.reset();
    event.preventDefault();    
};

formEl.addEventListener("submit", getPromise);





