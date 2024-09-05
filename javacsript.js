let text ="Coder Adam";
let encode_text = btoa(text) ;

let decode_text = atob(encode_text);

let textarea = document.getElementById("text");
let textarea_result = document.getElementById("Result");
let select = document.getElementById("select");

// alert(decode_text);

textarea.addEventListener("input", ()=>{
    make_result();


});
select.addEventListener("change", ()=>{
    make_result();


});


function make_result(){
if(select.value == "decode"){
Result.value =window.atob(textarea.value);


}else{
    Result.value =window.btoa(textarea.value);


}

}








