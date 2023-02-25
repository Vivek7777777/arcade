/**
 * Pong code taken from http://codegolf.stackexchange.com/questions/10713/pong-in-the-shortest-code
 * to demonstrate responsive canvas
 */

/* Variable index:
a -> left player score
b -> right player score
c -> context
e -> event
i -> counter for dashed line
k -> keycode
m -> left paddle y
n -> right paddle y
p -> left paddle y velocity
q -> right paddle y velocity
s -> is start of game
u -> ball x velocity
v -> ball y velocity
w -> game is waiting (paused)
x -> ball x
y -> ball y
*/


c=document.getElementById('c').getContext('2d')
c.fillStyle="#FFF"
c.font="30px monospace"
w=s=1
p=q=a=b=0
//paddle postion y axis
m=n=250
//ball position
x=440;y=150;
//ball velocity 
u=-7;v=3
setInterval(function(){
    if(w&&!s)
        return;
    s=0;
    c.clearRect(0,0,900,600)
    // for(i=5;i<600;i+=20)
        c.fillRect(449.5,0,1,600)    
    m+=p;
    n+=q;

    //paddle y axis motion
    m=m<0?0:m;
    m=m>500?500:m;
    n=n<0?0:n;
    n=n>500?500:n;    
    
    //ball motion
    x+=u;
    y+=v;

    if(y<=0){
        y=0;
        v=-v;
    }
    if(y>=590){
        y=590;
        v=-v;
    }
    if(x<=10 && x>=0 && y<m+100 && y>m){
        u=-u+0.2;
        v+=(y-m-45)/20;
    }
    if(x<=890&&x>=880&&y<n+100&&y>n){
        u=-u-0.2;
        v+=(y-n-45)/20;
    }//width="640"900 height="480"600
    // if(x<=10 && x>=0 && y<m+110 && y>m+10){
    //     u=-u+0.2;
    //     v+=(y-m-45)/20;
    // }
    // if(x<=890&&x>=880&&y<n+110&&y>n+10){
    //     u=-u-0.2;
    //     v+=(y-n-45)/20;
    // }//width="640"900 height="480"600
    if(x<-10){
        b++;
        x=460;
        y=285;
        u=7;
        w=1;
    }
    if(x>900){
        a++;
        x=430;
        y=285;
        u=-7;
        w=1;
    }
    //score position
    c.fillText(a+" "+b,425,30)
    //left position
    c.fillRect(0,m,10,100)
    //right position
    c.fillRect(890,n,10,100)
    c.fillRect(x,y,10,10)
},30)
document.onkeydown=function(e){
    k=(e||window.event).keyCode;w=w?0:k=='27'?1:0;
    p=k=='65'?5:k=='81'?-5:p;
    q=k=='40'?5:k=='38'?-5:q;
}
document.onkeyup=function(e){
    k=(e||window.event).keyCode;
    p=k=='65'||k=='81'?0:p;
    q=k=='38'||k=='40'?0:q;
}
