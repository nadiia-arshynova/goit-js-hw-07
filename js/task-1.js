const list = document.querySelector("#categories");

const items = list.querySelectorAll(".item");

const count = items.length;

console.log("Number of categories:", count);

const categories = document.querySelectorAll("#categories .item");

categories.forEach(category => {
    const title = category.querySelector("h2").textContent;
    const elementCount = category.querySelectorAll("ul li").length;

    console.log("Category:", title);
    console.log("Elements:", elementCount);
})






