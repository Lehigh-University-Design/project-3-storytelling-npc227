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

//Function to update html text based on decisions made. 
//keep decision text in localstorage so it can be updated whenever needed!
function updateJournalText(textKey) {

    console.log("updateFunc reached")

    //if the text has never been sent to local storage, send it
    //for future access.
    if (localStorage.getItem(textKey) === null) {
        localStorage.setItem("GD1", "made a priority listing of my worst topics, and I studied those first and took breaks between chapters. I'm still a little stressed, but definitely feel better knowing I prepared well.")
        localStorage.setItem("BD1", "crammed all day. Well, not all day because I ended up on Instagram during my breaks... (which took way too long). I feel worse than when I started honestly, which is especially bad since it's already late at night so I'm tired AND stressed...")
        localStorage.setItem("GD2", "I definitely could have done better if I had remembered about the quiz beforehand. But I was able to pay attention to the new material in class, so the next quiz will go better... that's good at least.")
        localStorage.setItem("BD2", "I couldn't focus on cramming since the professor was teaching new material. That quiz was literally the worst... I just want to go take a nap.")
        localStorage.setItem("GD3", "Ultimately I decided to go since I haven't seen these friends in a hot minute. It was nice to catch up with them, even if I didn't stay for long. Lila mentioned her birthday was coming up, so that's something to look forward to! I'm definitely feeling a lot better.")
        localStorage.setItem("BD3", "I didn't end up going and stayed in to study. It was genuinely such a lonely night, I don't have much to write about... but Lila's birthday is coming up at least... I need to finish this break and get back to studying. It's already so late and I'm so tired...")
        localStorage.setItem("GD4", "I ended up spending most of the day at a cafe with friends. We were studying and chatting, which was honestly nice. Being able to work with them helped me get my work done (so I feel a lot better), but we did goof off... quite a bit.")
        localStorage.setItem("BD4", "I ended up spending most of the day with friends, going to a movie, and then to my favorite restaurant. Admittedly I did push a lot of my work back and am now on a bit of a time crunch... but it was a good mental reset. Even if I'm a little stressed right now.")
        localStorage.setItem("GD5", "I ended up being busy... but in a good way. Knowing that I was able to get some work done makes me feel less guilty about having fun! (It also helps that I was actually sleeping consistently...)")
        localStorage.setItem("ND5", "The structure ended up working to keep me on track. I was a little stressed trying to stick to it exactly, but I feel like it was time well spent.")
        localStorage.setItem("BD5", "I studied a little bit. Mostly I walked around a bit... but I found myself in the pits of Instagram Reels more than once (for a few hours at a time... sorry...). I didn't get much sleep because of that... now I feel guilty AND tired.")
        localStorage.setItem("GD6", "They agreed to keep it down when I asked. I can still hear them a little bit from my room, but it's definitely better. I appreciate that they're trying...")
        localStorage.setItem("BD6", "I accidentally snapped at them. I feel so bad. I really didn't mean to. I... I feel so so so so bad. I can't even think about this right now... I'm going to bed. I hope they're not too mad at me.")
        localStorage.setItem("template", "smile!")

        console.log("updated unknown text(s)")

    }

    //return text to be updated to the page
    let resultText = localStorage.getItem(textKey)
    return resultText

}


document.addEventListener('DOMContentLoaded', () => {
    console.log("test")
    
    //start with all completions as false. when final page turn in a 
    //chapter is selected, set that chapter's completion as true

    //initialize chapter complete variables.
    //the last decision of every chapter will set the variable true. 
    if (localStorage.getItem("test") === null) {
        localStorage.setItem("test", "this is just to set up the chapter complete metrics in your local storage if the page is loaded and it doesn't exist yet")
        localStorage.setItem("chap1Complete", "false")
        localStorage.setItem("chap2Complete", "false")
        localStorage.setItem("chap3Complete", "false")
        localStorage.setItem("chap4Complete", "false")

    }

    //functions to check last page of chapters.
    //get the element by id of the last page flip in a chapter.
    //when clicked, set that chapter's completion as "true."
    const ch1Finished = document.getElementById("LASTPAGECH1")
    if (ch1Finished) {

        //only set chapter complete once you have exited the page.
        ch1Finished.addEventListener('click', () => {
            localStorage.setItem("chap1Complete", "true")

        })

    }

    const ch2Finished = document.getElementById("LASTPAGECH2")
    if (ch2Finished) {

        //only set chapter complete once you have exited the page.
        ch2Finished.addEventListener('click', () => {
            localStorage.setItem("chap2Complete", "true")

        })

    }

    //if a chapter has been completed, unlock the following one on the ch selection page.
    //this will be done by changing the styling of the links from "none" to "block" 
    //so they are visible on the page

    //Each one checks to see if the element is on the page and if the prereq chapter has been completed.
    //if both exist / are true, then allow the chapter link to appear.
    const activateCh2 = document.getElementById("isCh1Complete")
    if (activateCh2 && (localStorage.getItem("chap1Complete") === "true")) {
        activateCh2.style.display = "block"
    }

    const activateCh3 = document.getElementById("isCh2Complete")
    if (activateCh3 && (localStorage.getItem("chap2Complete") === "true")) {
        activateCh3.style.display = "block"
    }

    const activateCh4 = document.getElementById("isCh3Complete")
    if (activateCh4 && (localStorage.getItem("chap3Complete") === "true")) {
        activateCh4.style.display = "block"
    }

    const activateEnding = document.getElementById("isCh4Complete")
    if (activateEnding && (localStorage.getItem("chap4Complete") === "true")) {
        activateEnding.style.display = "block"
    }

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
    if (dec1Good !== null) {
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
    }

    const dec1Bad = document.getElementById("BD1")
    if (dec1Bad !== null) {
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
    }  

    //update the text of Decision 1 based on what decision is currently chosen
    const dec1Text = document.getElementById("textD1")
    if (dec1Text !== null) {
        dec1Text.textContent = localStorage.getItem("D1Result")

    }

    //DECISION 2
    //Deciding between studying during class. Bad Decision 2 (BD2)
    //studying before class.  Good Decision 2 (GD2)

    //get decision button by it's ID, add event listener for click
    //when clicked, update the text for that page with the result of the decision.
    const dec2Good = document.getElementById("GD2")
    if (dec2Good !== null) {
        dec2Good.addEventListener('click', () => {

            //pass the button ID to updateJournalText
            //this will return the result text for "Good Decision 2"
            console.log("clicked GD2")
            let result = updateJournalText("GD2")
            console.log(result)

            //get the ID of the text to display the decision text / result
            //by updating the text content (decision 2's paragraph text accessed by ID)
            //upon testing this was temporary - would disappear when switched pages. 
            //add to localstorage for dynamic changing of decision result, and persistence
            //across page changes
            const textD2 = document.getElementById("textD2")
            textD2.textContent = result

            //add text result to localstorage so it will be updated based on
            //which decision is currently active. will allow persistence between page changes
            localStorage.setItem("D2Result", result)

        })
    }

    const dec2Bad = document.getElementById("BD2")
    if (dec2Bad !== null) {
        dec2Bad.addEventListener('click', () => {

            //pass the button ID to updateJournalText
            //this will return the result text for "Bad Decision 2"
            console.log("clicked BD2")
            let result = updateJournalText("BD2")
            console.log(result)

            //get the ID of the text to display the decision text / result
            //by updating the text content (decision 2's paragraph text accessed by ID)
            //add to localstorage for dynamic changing of decision result, and persistence
            //across page changes
            const textD2 = document.getElementById("textD2")
            textD2.textContent = result

            //add text result to localstorage so it will be updated based on
            //which decision is currently active. will allow persistence between page changes
            localStorage.setItem("D2Result", result)

        })
    }

    //update the text of Decision 2 based on what decision is currently chosen
    const dec2Text = document.getElementById("textD2")
    if (dec2Text !== null) {
        dec2Text.textContent = localStorage.getItem("D2Result")

    }

    //DECISION 3
    //Deciding between studying during class. Bad Decision 3 (BD3)
    //studying before class.  Good Decision 3 (GD3)

    //get decision button by it's ID, add event listener for click
    //when clicked, update the text for that page with the result of the decision.
    const dec3Good = document.getElementById("GD3")
    if (dec3Good !== null) {
        dec3Good.addEventListener('click', () => {

            //pass the button ID to updateJournalText
            //this will return the result text for "Good Decision 3"
            console.log("clicked GD3")
            let result = updateJournalText("GD3")
            console.log(result)

            //get the ID of the text to display the decision text / result
            //by updating the text content (decision 3's paragraph text accessed by ID)
            //upon testing this was temporary - would disappear when switched pages. 
            //add to localstorage for dynamic changing of decision result, and persistence
            //across page changes
            const textD3 = document.getElementById("textD3")
            textD3.textContent = result

            //add text result to localstorage so it will be updated based on
            //which decision is currently active. will allow persistence between page changes
            localStorage.setItem("D2Result", result)

        })
    }

    const dec3Bad = document.getElementById("BD3")
    if (dec3Bad !== null) {
        dec3Bad.addEventListener('click', () => {

            //pass the button ID to updateJournalText
            //this will return the result text for "Bad Decision 3"
            console.log("clicked BD3")
            let result = updateJournalText("BD3")
            console.log(result)

            //get the ID of the text to display the decision text / result
            //by updating the text content (decision 3's paragraph text accessed by ID)
            //add to localstorage for dynamic changing of decision result, and persistence
            //across page changes
            const textD3 = document.getElementById("textD3")
            textD3.textContent = result

            //add text result to localstorage so it will be updated based on
            //which decision is currently active. will allow persistence between page changes
            localStorage.setItem("D3Result", result)

        })
    }

    //update the text of Decision 3 based on what decision is currently chosen
    const dec3Text = document.getElementById("textD3")
    if (dec3Text !== null) {
        dec3Text.textContent = localStorage.getItem("D3Result")

    }

    //DECISION 4
    //Deciding between doomscrolling during study cramming. Bad Decision 4 (BD4)
    //spreading breaks evenly throughout study.  Good Decision 4 (GD4)

    //get decision button by it's ID, add event listener for click
    //when clicked, update the text for that page with the result of the decision.
    
    const dec4Good = document.getElementById("GD4")
    if (dec4Good !== null) {
        dec4Good.addEventListener('click', () => {

            //pass the button ID to updateJournalText
            //this will return the result text for "Good Decision 4"
            console.log("clicked GD4")
            let result = updateJournalText("GD4")
            console.log(result)

            //get the ID of the text to display the decision text / result
            //by updating the text content (decision 4's paragraph text accessed by ID)
            //upon testing this was temporary - would disappear when switched pages. 
            //add to localstorage for dynamic changing of decision result, and persistence
            //across page changes
            const textD4 = document.getElementById("textD4")
            textD4.textContent = result

            //add text result to localstorage so it will be updated based on
            //which decision is currently active. will allow persistence between page changes
            localStorage.setItem("D4Result", result)

        })
    }

    const dec4Bad = document.getElementById("BD4")
    if (dec4Bad !== null) {
        dec4Bad.addEventListener('click', () => {

            //pass the button ID to updateJournalText
            //this will return the result text for "Bad Decision 4"
            console.log("clicked BD4")
            let result = updateJournalText("BD4")
            console.log(result)

            //get the ID of the text to display the decision text / result
            //by updating the text content (decision 4's paragraph text accessed by ID)
            //add to localstorage for dynamic changing of decision result, and persistence
            //across page changes
            const textD4 = document.getElementById("textD4")
            textD4.textContent = result

            //add text result to localstorage so it will be updated based on
            //which decision is currently active. will allow persistence between page changes
            localStorage.setItem("D4Result", result)

        })
    }  

    //update the text of Decision 4 based on what decision is currently chosen
    const dec4Text = document.getElementById("textD4")
    if (dec4Text !== null) {
        dec4Text.textContent = localStorage.getItem("D4Result")

    }

    //DECISION 5
    //Deciding between doomscrolling, walks, study a little. Bad Decision 5 (BD5)
    //do a little work every day. make sure to make a little progress on work every day. consistent bedtime! Good Decision 5 (GD5)
    //structured weekend.  Neutral Decision 5 (ND5)

    //get decision button by it's ID, add event listener for click
    //when clicked, update the text for that page with the result of the decision.
    
    const dec5Good = document.getElementById("GD5")
    if (dec5Good !== null) {
        dec5Good.addEventListener('click', () => {

            //pass the button ID to updateJournalText
            //this will return the result text for "Good Decision 5"
            console.log("clicked GD5")
            let result = updateJournalText("GD5")
            console.log(result)

            //get the ID of the text to display the decision text / result
            //by updating the text content (decision 5's paragraph text accessed by ID)
            //upon testing this was temporary - would disappear when switched pages. 
            //add to localstorage for dynamic changing of decision result, and persistence
            //across page changes
            const textD5 = document.getElementById("textD5")
            textD5.textContent = result

            //add text result to localstorage so it will be updated based on
            //which decision is currently active. will allow persistence between page changes
            localStorage.setItem("D5Result", result)

        })
    }

    const dec5Neutral = document.getElementById("ND5")
    if (dec5Neutral !== null) {
        dec5Neutral.addEventListener('click', () => {

            //pass the button ID to updateJournalText
            //this will return the result text for "Bad Decision 5"
            console.log("clicked ND5")
            let result = updateJournalText("ND5")
            console.log(result)

            //get the ID of the text to display the decision text / result
            //by updating the text content (decision 5's paragraph text accessed by ID)
            //add to localstorage for dynamic changing of decision result, and persistence
            //across page changes
            const textD5 = document.getElementById("textD5")
            textD5.textContent = result

            //add text result to localstorage so it will be updated based on
            //which decision is currently active. will allow persistence between page changes
            localStorage.setItem("D5Result", result)

        })
    }
    
    const dec5Bad = document.getElementById("BD5")
    if (dec5Bad !== null) {
        dec5Bad.addEventListener('click', () => {

            //pass the button ID to updateJournalText
            //this will return the result text for "Bad Decision 5"
            console.log("clicked BD5")
            let result = updateJournalText("BD5")
            console.log(result)

            //get the ID of the text to display the decision text / result
            //by updating the text content (decision 5's paragraph text accessed by ID)
            //add to localstorage for dynamic changing of decision result, and persistence
            //across page changes
            const textD5 = document.getElementById("textD5")
            textD5.textContent = result

            //add text result to localstorage so it will be updated based on
            //which decision is currently active. will allow persistence between page changes
            localStorage.setItem("D5Result", result)

        })
    }

    //update the text of Decision 5 based on what decision is currently chosen
    const dec5Text = document.getElementById("textD5")
    if (dec5Text !== null) {
        dec5Text.textContent = localStorage.getItem("D5Result")

    }

    //DECISION 6
    //get angry and yell at noisy roommates Bad Decision 6 (BD6)
    //genuinely ask them to be quiet. don't get mad. (or try...) Good Decision 6 (GD6)

    //get decision button by it's ID, add event listener for click
    //when clicked, update the text for that page with the result of the decision.
    
    const dec6Good = document.getElementById("GD6")
    if (dec6Good !== null) {
        dec6Good.addEventListener('click', () => {

            //pass the button ID to updateJournalText
            //this will return the result text for "Good Decision 6"
            console.log("clicked GD6")
            let result = updateJournalText("GD6")
            console.log(result)

            //get the ID of the text to display the decision text / result
            //by updating the text content (decision 6's paragraph text accessed by ID)
            //upon testing this was temporary - would disappear when switched pages. 
            //add to localstorage for dynamic changing of decision result, and persistence
            //across page changes
            const textD6 = document.getElementById("textD6")
            textD6.textContent = result

            //add text result to localstorage so it will be updated based on
            //which decision is currently active. will allow persistence between page changes
            localStorage.setItem("D6Result", result)

        })
    }

    const dec6Bad = document.getElementById("BD6")
    if (dec6Bad !== null) {
        dec6Bad.addEventListener('click', () => {

            //pass the button ID to updateJournalText
            //this will return the result text for "Bad Decision 6"
            console.log("clicked BD6")
            let result = updateJournalText("BD6")
            console.log(result)

            //get the ID of the text to display the decision text / result
            //by updating the text content (decision 6's paragraph text accessed by ID)
            //add to localstorage for dynamic changing of decision result, and persistence
            //across page changes
            const textD6 = document.getElementById("textD6")
            textD6.textContent = result

            //add text result to localstorage so it will be updated based on
            //which decision is currently active. will allow persistence between page changes
            localStorage.setItem("D6Result", result)

        })
    }  

    //update the text of Decision 6 based on what decision is currently chosen
    const dec6Text = document.getElementById("textD6")
    if (dec6Text !== null) {
        dec6Text.textContent = localStorage.getItem("D6Result")

    }

})