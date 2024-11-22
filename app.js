//fetching user data into info cards
const cardRow = document.querySelector(".cardsRow")

fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
.then((data)=>{
    data.forEach((data) =>{
        let cards = 
        `   <div class="col-lg-3 col-md-6 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5> ${data.name} </h5>
                        <p>Email: ${data.email}</p>
                        <p>Phone: ${data.phone} </p>
                        <p class="fw-bold">Address:</p>
                        <p class="add">${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}</p>
                    </div>
                </div>
            </div>`
            cardRow.insertAdjacentHTML("beforeend",cards)
        })
    })
.catch((err)=>{
    console.log("Data Fetched Failed");    
})
