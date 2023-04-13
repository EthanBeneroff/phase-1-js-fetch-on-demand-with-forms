const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault()
        //console.log(event.target.children[1].value)
        //let searchValue = document.getElementById("searchById").value   //why doesnt this work?
        const searchValue = document.querySelector("input#searchByID").value;
        console.log(searchValue)


        fetch(`http://localhost:3000/movies/${searchValue}`)
        .then((response) => response.json())
        .then((data) => {
            const title = document.querySelector("section#movieDetails h4")
            const summary = document.querySelector("section#movieDetails p")
            title.innerText=data.title
            summary.innerText = data.summary
            //console.log(data)
        })
    })

}

document.addEventListener('DOMContentLoaded', init);