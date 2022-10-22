var yosh = +prompt('yoshingizni kiriting')
if (0 < yosh && yosh <= 18 ) {
    alert('O`qishingiz kerak')
} else if(18 < yosh && yosh <= 50 ){
    alert('ishlashingiz kerak')
}else if(50 < yosh && yosh <= 59 ){
    alert('yaqinda pensiyaga chiqasiz')
}else if(59 < yosh && yosh <= 150  ){
    alert('pensionerga oxshaysiz, hali tirik bolsangiz')
}else{
    alert('nimadur notogri kiritilgan')
}