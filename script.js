document.getElementById("button").addEventListener("click",function(){
        document.querySelector(".popup").style.display="flex";
    })
var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};
const FileEl =document.getElementById('file');
FileEl.addEventListener('change',()=>{
 const fr= new FileReader();
 fr.readAsDataURL(FileEl.files[0]);
 fr.addEventListener('load',()=>{
       const url=fr.result;
       localStorage.setItem('my-image',url);
    // const img = new Image();
    // img.src =url;
    // 
});
})
   function func(event){
    event.preventDefault();
let movname_s=document.getElementById("product").value;
let mov_price=document.getElementById("price").value;
const url=localStorage.getItem('my-image');
const img = new Image();
 img.src =url;
 document.body.appendChild(img);
 localStorage.setItem("Movie_name",movname_s);
localStorage.setItem("price_s",mov_price);
}
document.getElementById("vale1").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none";
})
