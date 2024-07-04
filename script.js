
const imgbox=document.getElementById("img-box");
const qrimage=document.getElementById("qrimage");

const textorurl=document.getElementById("textorurl")



function generateqr(){

    if (textorurl.value.length>0){
        qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+textorurl.value;
     imgbox.classList.add("show-img")
    }
    else{
        textorurl.classList.add("error");
        setTimeout(() => {
            textorurl.classList.remove("error");
        }, 1000);
    }
}
    