import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as o}from"./assets/vendor-BbbuE1sJ.js";document.querySelector(".form").addEventListener("submit",i=>{i.preventDefault();const t=i.target,s=parseInt(t.delay.value,10),r=t.state.value;new Promise((e,m)=>{setTimeout(()=>{r==="fulfilled"?e(s):m(s)},s)}).then(e=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{o.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topRight"})}),t.reset()});
//# sourceMappingURL=2-snackbar.js.map
