function showBrand(arr){
    let brandDiv = document.getElementById("brand-div");
    
    arr.map((e)=>{
        let div = document.createElement('div');
        div.setAttribute('class', "brand-div");
        let img = document.createElement('img');
        img.src = e.img;

        div.append(img);
        brandDiv.append(div);
    })
}
let brandArr = [
    {img: "https://banner2.cleanpng.com/20180324/ykw/kisspng-nike-air-max-shoe-air-jordan-swoosh-adidas-5ab6df59a88cb3.4913844315219341696904.jpg"},
    {img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"},
    {img: "https://img.etimg.com/thumb/msid-59738991,width-640,resizemode-4,imgsize-22784/adidas.jpg"},
    {img: "https://i.pinimg.com/originals/4e/bd/3f/4ebd3f0c61ec02a03ba23d7ee550abcc.png"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnpvKnEUI1ybwFFSht1Y0WF8-rG6SI8D9Q0o6NWzb2rdTmbMmqB9MbFUgqCkEomMaTlnU&usqp=CAU"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNoeqDceouSLdG2dgsWD6kiHdzFAFZdBffNg&usqp=CAU"}
]
 