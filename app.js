let angle = 0
 let fun=()=>{
     $('#cir').css("transform",`rotate(${angle+90}deg)`)
     angle += 90
};
 let fun2=()=>{
     $('#cir').css("transform",`rotate(${angle-90}deg)`)
     angle -= 90
};
