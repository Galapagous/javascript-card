// -----------My data ------------
let ourData = [
    {
        name: 'Jimmy',
        email: 'jimmy@gmail.com',
        image: 'assets/jimmy.jpg',
        occupation: 'photography'
    },
    {
        name: 'Patricia',
        email: 'patricia@gmail.com',
        image: 'assets/kate.jpg',
        occupation: 'bakery'
    },
    {
        name: 'musa',
        email: 'Musa@gmail.com',
        image: 'assets/musa.png',
        occupation: 'Freelance'
    },
    {
        name: 'Kate',
        email: 'Kate@gmail.com',
        image: 'assets/white.jpg',
        occupation: 'Banking'
    }
]
// -----------Our variables and function------------
const userData = document.querySelector('.content')

const loadPage = (peopleArray)=>{
    userData.innerHTML = ''
    peopleArray.forEach((eachData)=>{
        userData.innerHTML += `<div class="card">
        <img src="./${eachData.image}" alt="jimmy">
        <div class="info">
            <div class="each_info">
                <span>Name:</span>
                <span>${eachData.name}</span>
            </div>
            <div class="each_info">
                <span>Email:</span>
                <span>${eachData.email}</span>
            </div>
            <div class="each_info">
                <span>Occupation:</span>
                <span>${eachData.occupation}</span>
            </div>
        </div>
    </div>`
    })
}

loadPage(ourData)

const handlePop = ()=>{
    ourData.length ? ourData.pop() : (alert('Array is empty'))
    loadPage(ourData)
}

const handleRef = ()=>{
    window.location.reload()
}

const handleShift = ()=>{
    ourData.length ? ourData.shift() : (alert('Array is empty'))
    loadPage(ourData)
}