// list of reviews
reviews = [
    {
        revname:"Cally Calista",
        revjobtitle:"Laundry Expert",
        revtext:"BLAQ has been the plug for my graphics needs, I recommend this company for all graphics works, tested and trusted.",
        revimage:"cally1.jpg"
    },

    {
        revname:"Ortiz Jay",
        revjobtitle:"Rapper/Co-founder, Guyman Republic",
        revtext:"BLAQ keeps it simple and interesting with enough details that brings out the beauty of his designs",
        revimage:"cj2.jpg"
    },

    {
        revname:"Floxy Onyekwem",
        revjobtitle:"Chief Secretary, Marshall Services",
        revtext:"Have been seeing so many designs but your is unique. I must confess, the boy is good. Kudos!",
        revimage:"florence.jpg"
    },

    {
        revname:"Will Smith",
        revjobtitle:"Hollywood Actor",
        revtext:"Honestly, Ama come clean, I dont know sh*t about this guy, he has just been all around, Will, can you give me review? Mehn! I just had to give him that review if I wanted some peace...",
        revimage:"smith.jpg"
    },

    {
        revname:"Donald Trump",
        revjobtitle:"Former President Of the United States",
        revtext:"I wish to skip this review, I mean I dont know this guy, he said its for a project, I guess I will review the option of giving him a review",
        revimage:"trump.jpg"
    },
    {
        revname:"Lina Splendid",
        revjobtitle:"CEO Splendid Farm",
        revtext:"Dozie is a guy with a big heart. He sets a goal and strives to make it come true. He hardly gives up.",
        revimage:"lina.jpg"
    }
]

const image = document.querySelector(".p-image")
const aname = document.querySelector(".p-name")
const jobtitle = document.querySelector(".p-jobtitle")
const reviewtext = document.querySelector(".review-text")

const prevBut = document.querySelector(".prev-but")
const nextBut = document.querySelector(".next-but")
const randomBut = document.querySelector(".random-but")

currentpos = 0

function nextreview(){
    const item = reviews[currentpos];
    image.src = item.revimage
    aname.textContent = item.revname
    jobtitle.textContent = item.revjobtitle
    reviewtext.textContent = item.revtext 
}

function nextbutton(){
    if(currentpos < reviews.length - 1){
        currentpos++
        nextreview()
    }
    else{
        currentpos = 0
        nextreview()
    }
    
}

function prevbutton(){
    if(currentpos > 0){
        currentpos--
        nextreview()
    }
    else{
        currentpos = reviews.length - 1
        nextreview()
    }
    
}

function randombutton(){
    currentpos = Math.floor(Math.random()*reviews.length)
    console.log(currentpos)
    nextreview()
    
}


window.addEventListener("DOMContentLoaded", nextreview)
nextBut.addEventListener("click", nextbutton)
prevBut.addEventListener("click", prevbutton)
randomBut.addEventListener("click", randombutton)