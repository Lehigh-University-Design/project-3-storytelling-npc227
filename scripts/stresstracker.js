//function to add to stress factor
//use local storage to persist across tabs/on same device
function smallStressEvent() {

    //if stress has never been added, set level to 0 for clean slate
    if (localStorage.getItem("StressLvl") === null) {
        localStorage.setItem("StressLvl", 0)
    }

    //get the stress level from storage, add to it. clear storage,
    //then put the stress level back in using the same key
    //nts:: you probably don't want to clear localstorage every time
    //nts:: especially if you plan to use it to track story progress...
    let lvl = parseInt(localStorage.getItem("StressLvl"))
    lvl = lvl + 1
    console.log(lvl)
    
    //the idea is that this will replace the previous iteration...
    localStorage.setItem("StressLvl", lvl)
    return lvl
}

//function to implement in future: keep track of which chapters have
//been completed, open access to others based on completion.
//and only allow ending access if all chapters have been accessed.

function updateCompletion () {

    //start with all completions as false. when final page turn in a 
    //chapter is selected, set that chapter's completion as true

    //if the completion variables don't exist yet, add them
    if (localStorage.getItem("ch1Complete") === null) {
        localStorage.setItem("chap1Complete", "false")
        localStorage.setItem("chap2Complete", "false")
        localStorage.setItem("chap3Complete", "false")
        localStorage.setItem("chap4Complete", "false")

    }

}

document.addEventListener('DOMContentLoaded', () => {

    //if content loaded, update stress level if found
    console.log(localStorage.getItem("StressLvl"))
    let tempNum = localStorage.getItem("StressLvl")
    document.getElementById("stressLevel").innerHTML = parseInt(localStorage.getItem("StressLvl"))

    const btnSmallStress = document.getElementById('B1')

    btnSmallStress.addEventListener('click', () => {
        let result = smallStressEvent()
        console.log(result)
        console.log("clicked")
        
    })

})