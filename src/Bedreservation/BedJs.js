const beds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let arr1 = [];

let str = ` `;
beds.forEach((bed)=>{
    str = str + `<div for='${bed}' id='${bed}' onClick={onClickHandler(${bed})}>${bed}</div>`;
})

document.getElementById('main').innerHTML=str;
console.log(str);
onClickHandler = (thisbed) => {
    if(arr1.indexOf(thisbed) === -1){
        arr1.push(thisbed);
        document.getElementById(`${thisbed}`).style.background = "#FF7878";
    }else{
        document.getElementById(`${thisbed}`).style.background = "#DAE5D0";
        arr1.splice(arr1.indexOf(thisbed),1);
    }

    console.log(thisbed);
}