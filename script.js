// const text = document.getElementById("text");
// const delay = document.getElementById("delay");
// const btn = document.getElementById("btn");
// const output = document.getElementById("output");

// //your code here
// async function showMessage() {
//   const message = text.value;
//   const delayVal = delay.value
//   output.innerText = "";
	  
//   await new Promise((resolve) => setTimeout(resolve, delayVal));
//   output.innerText = message;
// }

// btn.addEventListener("click", showMessage);


/*
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

async function showMessage() {
  const message = text.value;
  const delayVal = delay.value;
  await new Promise((resolve) => setTimeout(resolve, delayVal));
  output.innerText = message;
}

btn.addEventListener("click", showMessage);
*/





const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

 async function showMessage() {
    const message = text.value;
    const delayVal = delay.value;
    let promise=new Promise((resolve)=>{
       setTimeout(()=>{
        resolve(message);
       },delayVal)
    });
    return promise;
  
}




btn.addEventListener("click", ()=>{
    showMessage().then((message)=>{
        output.innerText = message;
          
      });
});


