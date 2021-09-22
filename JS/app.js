const mainArticles = Array.from(document.querySelectorAll(".Main__articles--article-content-info h6 span"));
const qte = Array.from(document.querySelectorAll(".Main__articles--sub-op h5"));
const totalArticle = Array.from(document.querySelectorAll(".Main__articles--sub h6 span"));

const totalArticles = document.querySelector(".Main__ckeck--box h5 span");
const totalQte = Array.from(document.querySelectorAll(".Main__ckeck--box-info-arts"));

const btnPlus = Array.from(document.querySelectorAll(".Main__articles--sub-op a:first-child"));
const btnMinus = Array.from(document.querySelectorAll(".Main__articles--sub-op a:last-child"));
const btnSupp = Array.from(document.querySelectorAll(".Main__articles--article-X"));

const btnHeart = Array.from(document.querySelectorAll(".Main__articles svg path"));

const oneArticle = Array.from(document.querySelectorAll(".Main__articles--article"));

// console.log(btnPlus);
// console.log(btnMinus);
// console.log(totalArticle);
// console.log(btnHeart);

function sumArticles() {
    totalArticles.textContent = 0;
    for (let i = 0; i < totalArticle.length; i++) {
        totalArticles.textContent = Number(totalArticles.textContent) + Number(totalArticle[i].textContent);

    }
}
console.log(sumArticles())

function sumArticle() {
    for (let i = 0; i < mainArticles.length; i++) {
        totalArticle[i].textContent = Number(mainArticles[i].textContent) * Number(qte[i].textContent);
    }
}

function addOne(n) {
    n.nextElementSibling.innerHTML++;
    sumArticle();
    sumArticles();
}

function subOne(n) {
    if (Number(n.previousElementSibling.innerHTML) > 0) {
        n.previousElementSibling.innerHTML--;
        sumArticle();
        sumArticles();
    }
}

function deleat(el) {
    oneArticle[el].remove();
}

for (let btn of btnPlus) {
    btn.addEventListener("click", function() {
        addOne(btn);
        sumArticle();
    })
}

for (let btn2 of btnMinus) {
    btn2.addEventListener("click", function() {
        subOne(btn2);
        sumArticle();
    })
}


for (let heart of btnHeart) {
    heart.addEventListener("click", function() {
        heart.classList.toggle("red");
    })

}

for (let i = 0; i < btnSupp.length; i++) {
    btnSupp[i].addEventListener("click", function() {
        deleat(i);
    })
}

sumArticle()
sumArticles()