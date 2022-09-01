let menu = document.getElementsByClassName("btn-group-vertical")[0]
let buttonsMenu = Array.prototype.slice.call(menu.getElementsByTagName("button"), 0)
let header = document.getElementsByClassName("jumbotron")[0]
let hr = header.getElementsByTagName("hr")[0]
let secondP = header.querySelector("p:nth-child(4)")
let button = header.getElementsByTagName("a")[0]
let cards = document.querySelector("body > div > div:nth-child(6)")
let list = document.getElementsByClassName("list-group")[0]

modMenu(menu, buttonsMenu)
modHeader(header, hr, secondP, button)
modCards(cards)
modList(list)

function modMenu(menu, buttonsMenu) {
    menu.style.flexDirection = "row"
    menu.style.gap = "0.25rem"

    buttonsMenu.map((btn) => {
        btn.style.borderRadius = "5px"
        btn.style.whiteSpace = "nowrap"
    })
}

function modHeader(header, hr, secondP, button) {
    header.style.backgroundColor = "#6b757e"
    header.style.color = "#ffffff"
    header.style.display = "flex"
    header.style.flexDirection = "column"
    header.style.alignItems = "flex-end"

    hr.style.width = "100%"

    secondP.style.textAlign = "end"
    secondP.style.fontWeight = "500"

    button.style.backgroundColor = "#27a844"
    button.style.borderColor = "#27a844"
}

function modCards(cards) {
    const frag = document.createDocumentFragment();
    const lista = cards
    const itensArray = [...lista.querySelectorAll(":scope > div")]
    const newItensArray = []

    itensArray[1].querySelector("a").style.backgroundColor = "#2ba947"
    itensArray[1].querySelector("a").style.borderColor = "#2ba947"

    newItensArray.push(itensArray[0])
    newItensArray.push(itensArray[4])
    newItensArray.push(itensArray[1])
    newItensArray.push(itensArray[3])
    newItensArray.push(itensArray[2])

    newItensArray.map(card => frag.appendChild(card))

    lista.appendChild(frag)
}

function modList(list) {
    const firstItem = list.getElementsByTagName("li")[0];
    const fourthItem = document.createElement("li");
    const fifthItem = document.createElement("li");
    const fourthItemText = document.createTextNode("Quarto item");
    const fifthItemText = document.createTextNode("Quinto item");

    fourthItem.appendChild(fourthItemText)
    fifthItem.appendChild(fifthItemText)

    fourthItem.classList.add("list-group-item", "active");
    fifthItem.classList.add("list-group-item");

    firstItem.classList.remove("active");

    list.appendChild(fourthItem)
    list.appendChild(fifthItem)
}