const btn = document.querySelectorAll(`li`);
const mainItem = document.querySelector(`h2`);
const image = document.querySelector(`img`);
const content = document.querySelector(".content");
image.addEventListener(`click`, (e) => {
    content.classList.toggle("show");
})

btn.forEach((li) => {
    li.addEventListener('click', (e) => {
        const value = e.target.textContent;
        console.log(value);
        switch (value) {
            case "c":
                mainItem.textContent = " ";
                break;
            case "del":
                mainItem.textContent = mainItem.textContent.slice(0, -1);
                break;
            case "=":
                try {
                    mainItem.textContent = eval(mainItem.textContent)
                } catch (err) {
                    mainItem.textContent = "Error"
                }
                break
            default:
                mainItem.textContent += value;

        }

    })
})


