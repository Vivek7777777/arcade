// alert("hi")
// let r = Math.floor(Math.random())
// let num = document.getElementById("")
let p = document.getElementById("print")
// print = "this"
function getrandomnum(){
    let c = Math.floor(Math.random()*100) + 1
    return c;        
}
let r = -1 ,cnt 

function startgame(){
    r = getrandomnum()
    cnt = 0
    p.textContent =  "ENTER ANY NUMBER BETWEEN 1 TO 100"
    console.log(r)
    console.log(typeof r);
}

function checknum() {
    if(r === -1){
        p.textContent = "PRESS START TO PLAY"
        return
    }
    let num = document.getElementById("num").value
    console.log(typeof Number(num));
    if(cnt >= 5){
        p.textContent = "Try next time "
        return 
    }
    cnt++
    if(Number(num) == r){
        console.log("win")
        p.textContent = "Congratulations you win in " + cnt + " moves"
        // p.textContent = "Try less than " + num
    }
    else if(num > r){
        p.textContent = "Try less than " + num
    }
    else{
        p.textContent = "Try greater than " + num
    }
    num.textContent = 0 
    // console.log(r)
}