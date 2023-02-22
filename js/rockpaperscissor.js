// alert("hi")

let win1 = 0, win2 =0;
let lose1 = 0, lose2 = 0;

let x = $("#rock");
let y = $("#paper");
let z = $("#scissor");

let x2 = $("#crock");
let y2 = $("#cpaper");
let z2 = $("#cscissor");

let w1 = $("#win1");
let w2 = $("#win2");
let l1 = $("#lose1");
let l2 = $("#lose2");

// let a = $("#icon1");
// let b = $("#icon2");
// let c = $("#icon3");

function rand() {
    let num = Math.floor(Math.random() * 3) +1;
    console.log(num);
    if(num == 1){
        y2.addClass("hideicononclick");
        z2.addClass("hideicononclick");
        x2.addClass("icononclick");
    }
    else if(num == 2){
        x2.addClass("hideicononclick");
        z2.addClass("hideicononclick");
        y2.addClass("icononclick");
    }
    else{
        x2.addClass("hideicononclick");
        y2.addClass("hideicononclick");
        z2.addClass("icononclick");
    }
    return num;
}

function rock(){
    let value = rand();
    y.addClass("hideicononclick");
    z.addClass("hideicononclick");
    x.addClass("icononclick");
    //draw
    if(value == 1){
        setTimeout(reset, 2000);
        return;
    }
    else if(value == 2){ 
        //loss
        lose1++;
        win2++
    }
    else{
        //win
        win1++;
        lose2++;
    }
    setTimeout(reset, 2000);
}

function paper(){
    let value = rand();
    x.addClass("hideicononclick");
    z.addClass("hideicononclick");
    y.addClass("icononclick");
    //win
    if(value == 1){
        win1++;
        lose2++;
        
    }
    else if(value == 2){ 
        //draw
        setTimeout(reset, 2000);
        return;
    }
    else{
        //loss
        lose1++;
        win2++
    }
    setTimeout(reset, 2000);
}

function scissor(){
    let value = rand();
    x.addClass("hideicononclick");
    y.addClass("hideicononclick");
    z.addClass("icononclick");
    //loss
    if(value == 1){
        lose1++;
        win2++
    }
    else if(value == 2){ 
        //win
        win1++;
        lose2++;
    }
    else{
        //draw
        setTimeout(reset, 2000);
        return;
    }
    setTimeout(reset, 2000);
}

function updateScore(){
    w1.text(win1);
    w2.text(win2);
    l1.text(lose1);
    l2.text(lose2);
}

function reset(){
    x.removeClass("hideicononclick icononclick");
    y.removeClass("hideicononclick icononclick");
    z.removeClass("hideicononclick icononclick");
    x2.removeClass("hideicononclick icononclick");
    y2.removeClass("hideicononclick icononclick");
    z2.removeClass("hideicononclick icononclick");
    updateScore();

}