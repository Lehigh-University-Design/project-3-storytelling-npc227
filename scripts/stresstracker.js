function smallStressEvent() {
    if (localStorage.getItem("StressLvl") === null) {
        localStorage.setItem("StressLvl", 0)
    }
    let lvl = parseInt(localStorage.getItem("StressLvl"))
    lvl = lvl + 1
    console.log(lvl)
    localStorage.clear()
    localStorage.setItem("StressLvl", lvl)
    return lvl
}

document.addEventListener('DOMContentLoaded', () => {

    const btnSmallStress = document.getElementById('B1')

    btnSmallStress.addEventListener('click', () => {
        let result = smallStressEvent()
        console.log(result)
        console.log("clicked")
    })

})