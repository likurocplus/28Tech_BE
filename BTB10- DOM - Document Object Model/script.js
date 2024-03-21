const allTagH2 = document.querySelectorAll("h2")
allTagH2[0].setAttribute("id","h2-1");
allTagH2[1].setAttribute("class","title")
allTagH2[2].setAttribute("style", "color: red")
allTagH2[0].classList.add('title')
allTagH2[1].classList.remove('title')
allTagH2[0].textContent = "Yêu Trà"
allTagH2[2].innerHTML = "<h1>Yêu Trà<h1>"
console.log(allTagH2)