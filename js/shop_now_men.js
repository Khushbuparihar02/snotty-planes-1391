let url = "https://gifted-blue-binturong.cyclic.app/mens"
async function getData(url) {
    try {
        let resp = await fetch(url);
        let data = await resp.json();
        console.log(data)
        showCard(data)
    } catch (error) {
        console.error(error);
    }

}
getData(url);
let menu = document.getElementById('menu');

function showCard(arr) {
    arr.map((e) => {
        let card = document.createElement('div');
        card.setAttribute("class", "card");
        card.setAttribute("id", "card" + e.id)

        let img = document.createElement('img');
        img.src = e.productImage;

        let colorTxt = document.createElement('span');
        colorTxt.innerHTML = e.sc_ckEbSK;

        let title = document.createElement('span');
        title.innerHTML = e.product_card.name;

        let price = document.createElement('span');
        price.innerHTML = Math.abs(+e.fullPrice);
    

        let startDiv = createStars();

        let specialSalesText = document.createElement('span');
        specialSalesText.innerHTML = e.specialSalesText;
        card.append(img, colorTxt, title, price, startDiv, specialSalesText);
        menu.append(card);

    });
}

function createStars(val) {
    let star1 = document.createElement('span');
    star1.className = "fa fa-star";

    let star2 = document.createElement('span');
    star2.className = "fa fa-star";

    let star3 = document.createElement('span');
    star3.className = "fa fa-star";

    let star4 = document.createElement('span');
    star4.className = "fa fa-star";

    let star5 = document.createElement('span');
    star5.className = "fa fa-star";
    if(val <= 1){
        star1.className("class", "checked");
    }

    let div = document.createElement('div');
    div.append(star1, star2, star3, star4, star5);
    return div;
}

function showBrands(arr) {
    let brandDiv = document.getElementById('brand');
    arr.map((e) => {

        let img = document.createElement('img');
        img.src = e.img;

        brandDiv.append(img);
    });

}
let brandsArr = [
    {
        img: "https://i.pinimg.com/736x/1b/e7/4b/1be74b1feb2335ef6bdbc88ac29aba8a.jpg"
    },
    {
        img: "https://i.pinimg.com/originals/d1/3f/c5/d13fc592b435d7a594998d04e1cd0801.jpg"
    },
    {
        img: "https://static.vecteezy.com/system/resources/previews/010/994/248/original/puma-logo-white-symbol-clothes-design-icon-abstract-football-illustration-with-black-background-free-vector.jpg"
    },
    {
        img: "https://logodix.com/logo/411011.gif"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdjr4Rmm3IVmaipkqzJpvIRfP5i7KsqJKrKc6PE4-ZjeQF0Sw_px32zt0wkkePm0xVcc&usqp=CAU"
    },
    {
        img: "https://th.bing.com/th/id/OIP.DvP-LdJhwkppilBqZn5c3QHaHa?pid=ImgDet&rs=1"
    },
    {
        img: "https://i.pinimg.com/originals/f3/59/14/f35914599927dca060d2038aa174e504.png"
    },
    {
        img: "https://i1.sndcdn.com/artworks-000123540159-jnxs7u-t500x500.jpg"
    },
    {
        img: "https://logos-download.com/wp-content/uploads/2016/10/The_North_Face_logo_black.png"
    },
    {
        img: "https://cdn2.stormgrounds.com/stormgrounds-cdn/media/Under-Armor-Logo.jpg"
    }


]
showBrands(brandsArr);