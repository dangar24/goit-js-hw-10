import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const i=document.querySelector(".form"),l=document.querySelector("input[name=delay]"),s=document.querySelector("input[value=fulfilled]"),u=document.querySelector("input[value=rejected]");document.querySelector("button[type=submit]");let t=null,r=null;const c=e=>{t=e.target.value};l.addEventListener("input",c);const m=e=>{r=!0};s.addEventListener("click",m);const d=e=>{r=!1};u.addEventListener("click",d);const a=e=>{new Promise((n,o)=>{r?n(`✅ Fulfilled promise in ${t}ms`):(o(`❌ Rejected promise in ${t}ms`),iziToast.error({message:`❌ Rejected promise in ${t}ms`}))}),e.currentTarget.reset(),e.preventDefault(),console.log(t)};i.addEventListener("submit",a);
//# sourceMappingURL=commonHelpers2.js.map