let menArr = ["Shoes", "Clothing", "Accessories"];
let womenArr = ["Shoes", "Clothing", "Accessories"];
let kidsArr = ["Big Kids (Sizes 3.5-7)", "Little Kids (Sizes 10.5-3)", "Toddler (Sizes 2-12)", "Clothing", "Accessories"];
let hotDealsArr = ["New Markdowns", "Buy One Get One 50% Off Tees", "2 for $30 Boys' Tees", "Nike up to 50% Off", "Jordan up to 50% Off", "adidas up to 40% Off"]

function createSideDiv(headingText, arr) {
    let categoriesDiv = document.querySelector('.categories');
    let heading = document.createElement('h4');
    heading.innerHTML = headingText;
    categoriesDiv.append(heading);
    arr.map((e) => {
        let div = document.createElement('div');
        div.setAttribute("class", "category-div");

        let text = document.createElement('span');
        text.innerHTML = e;

        div.append(text);

        categoriesDiv.append(div);

    });


}
createSideDiv("Men", menArr);
createSideDiv("Women", womenArr);
createSideDiv("Kids", kidsArr);
createSideDiv("Hot Deals", hotDealsArr);

let saleArr = ["MEN'S SALE", "WOMEN'S SALE", "BOYS' SALE", "GIRLS' SALE"];

function createSalesBox(arr){
    let salesDiv = document.querySelector('.content-sales-div');
    arr.map((e) =>{
        let div = document.createElement('div');
        div.setAttribute("class", "sales-div")

        let heading = document.createElement('h2');
        heading.innerHTML = e;

        div.append(heading);
        salesDiv.append(div);
    });
}
createSalesBox(saleArr);