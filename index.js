


 
let increment = document.getElementById('increment');
let  decrement = document.getElementById('decrement');
let content = document.getElementById('disp');
let ans = parseInt(content.innerText);
console.log(ans);
console.log(ans);
increment.addEventListener('click' , function(){
        ans = ans +1;
        content.textContent = ans;
        console.log("i click incremnt");
});
decrement.addEventListener('click' , function(){
    ans = ans -1;
    content.textContent = ans;
    console.log("i click decremnt");
});


