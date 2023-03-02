let check = document.querySelector('.chk')

let msg = document.querySelector('.msg')
let num = Math.floor(Math.random() * 20)
console.log(num)

let score = document.querySelector('.score')
let hscore = document.querySelector('.hscore')
let restart = document.querySelector('.btn-again')
let fluke = 20
function res(){
    score.innerHTML = 0
    msg.innerHTML = '🧠 Start guessing...'
    let inputt = document.querySelector('.type-box');
    inputt.value = null

}
restart.addEventListener('click',res)
let atm = 999
function ent(){
    let inputt = document.querySelector('.type-box').value;
    if( inputt == num){
        msg.innerHTML = "✅ Correct Guess!!"
        score.innerHTML = parseInt(score.innerHTML) + 1
        if(parseInt(score.innerHTML) < atm ){
            hscore.innerHTML = score.innerHTML
             atm = parseInt(hscore.innerHTML)
        }
        
    }
    else if(inputt > num){
        msg.innerHTML = "📈 Too high "
        score.innerHTML = parseInt(score.innerHTML) + 1
    }
    else if(inputt < num){
        msg.innerHTML = "📉 Too low"
        score.innerHTML = parseInt(score.innerHTML) + 1
    }
    else{
        console.log('Clicked')
        msg.innerHTML = "Elseeeee"
    }
    
}

check.addEventListener('click',ent)
document.addEventListener('keypress',e=>{
    ent()
})


