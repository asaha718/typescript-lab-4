const button = document.querySelector("button") as HTMLButtonElement;
const input1 = document.getElementById("spaces") as HTMLInputElement;
const input2 = document.getElementById("word") as HTMLInputElement;

button!.addEventListener("click", function () {
  console.log(prepend([input1.value, input2.value]));
});

function prepend<T>(array : T[]) {
    let spaces: string= ""; 
    
    for(let i=0; i< +array[0]; i++){ 
      spaces += " "
    }
    
    return spaces + +array[1]
}