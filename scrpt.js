let string = "";
//let row = document.querySelectorAll('.row')
let buttons= document.querySelectorAll('.btn')
// let buttons=row.getElementsByTagname("button");
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    // console.log(e.target)
    if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'C'){
        string = ""
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'X'){
      string = string + '*';
      document.querySelector('input').value = string;
      }
      else{ 
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
        }
  })})