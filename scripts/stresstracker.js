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

//Function to update html text based on decisions made. 
//keep decision text in localstorage so it can be updated whenever needed!
function updateJournalText(textKey) {

    console.log("updateFunc reached")

    //if the text has never been sent to local storage, send it
    //for future access.
    if (localStorage.getItem(textKey) === null) {
        localStorage.setItem("GD1", "made a priority listing of my worst topics, and I studied those first and took breaks between chapters. I'm still a little stressed, but definitely feel better knowing I prepared well.")
        localStorage.setItem("BD1", "crammed all day. Well, not all day because I ended up on Instagram during my breaks... (which took way too long). I feel worse than when I started honestly, which is especially bad since it's already late at night so I'm tired AND stressed...")
        localStorage.setItem("template", "smile!")

        console.log("updated unknown text(s)")

    }

    //return text to be updated to the page
    let resultText = localStorage.getItem(textKey)
    return resultText

}


document.addEventListener('DOMContentLoaded', () => {
    console.log("test")

    //TESTING 
    //if content loaded, update stress level if found
    /*
    console.log(localStorage.getItem("StressLvl"))
    let tempNum = localStorage.getItem("StressLvl")
    document.getElementById("stressLevel").innerHTML = parseInt(localStorage.getItem("StressLvl"))

    const btnSmallStress = document.getElementById('B1')

    btnSmallStress.addEventListener('click', () => {
        let result = smallStressEvent()
        console.log(result)
        console.log("clicked")
        
    })*/

    //Above was testing
    //Below buttons will be named Bad Good Or Neutral, with
    //A number designating where it appears in the story. 
    //(1) For first 2 choices, (2) for next choices, etc.

    //DECISION 1
    //Deciding between doomscrolling during study cramming. Bad Decision 1 (BD1)
    //spreading breaks evenly throughout study.  Good Decision 1 (GD1)

    //get decision button by it's ID, add event listener for click
    //when clicked, update the text for that page with the result of the decision.
    const dec1Good = document.getElementById("GD1")
    dec1Good.addEventListener('click', () => {

        //pass the button ID to updateJournalText
        //this will return the result text for "Good Decision 1"
        console.log("clicked GD1")
        let result = updateJournalText("GD1")
        console.log(result)

        //get the ID of the text to display the decision text / result
        //by updating the text content (decision 1's paragraph text accessed by ID)
        //upon testing this was temporary - would disappear when switched pages. 
        //add to localstorage for dynamic changing of decision result, and persistence
        //across page changes
        const textD1 = document.getElementById("textD1")
        textD1.textContent = result

        //add text result to localstorage so it will be updated based on
        //which decision is currently active. will allow persistence between page changes
        localStorage.setItem("D1Result", result)

    })

    const dec1Bad = document.getElementById("BD1")
    dec1Bad.addEventListener('click', () => {

        //pass the button ID to updateJournalText
        //this will return the result text for "Bad Decision 1"
        console.log("clicked BD1")
        let result = updateJournalText("BD1")
        console.log(result)

        //get the ID of the text to display the decision text / result
        //by updating the text content (decision 1's paragraph text accessed by ID)
        //add to localstorage for dynamic changing of decision result, and persistence
        //across page changes
        const textD1 = document.getElementById("textD1")
        textD1.textContent = result

        //add text result to localstorage so it will be updated based on
        //which decision is currently active. will allow persistence between page changes
        localStorage.setItem("D1Result", result)

    })

    //update the text of Decision 1 based on what decision is currently chosen
    document.getElementById("textD1").textContent = localStorage.getItem("D1Result")

})