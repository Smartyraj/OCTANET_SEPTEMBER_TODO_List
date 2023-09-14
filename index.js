let inpBox = document.querySelector("#inpBox");
let list = document.querySelector("#list");

inpBox.addEventListener("keyup", function (e) {
    if (e.key == "Enter"){
        addItem(this.value);
        this.value = "";
    }
})

let addItem = (inpBox) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inpBox} <i class="fas fa-trash-alt"></i>`;

    listItem.addEventListener("click", function () {
        this.classList.toggle('done');
    })

    listItem.querySelector("i").addEventListener("click", function (e) {
        e.stopPropagation();
        this.parentElement.remove();
    })

    list.appendChild(listItem);
}