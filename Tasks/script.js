//task1
$("#image img").click(function(){
    let mainImageSrc = $("#main img").attr("src")
    let clickedImageSrc = $(this).attr("src")
    $("#main img").attr("src", clickedImageSrc)
    $(this).attr("src", mainImageSrc)
})

//task2
let imagesDisplay = [
    "/img/brandon-hoogenboom-SGvCVx-zwA0-unsplash.jpg",
    "/img/markus-spiske-m6aZ2oJG76I-unsplash.jpg",
    "/img/annie-spratt-GRSTZUxyGwY-unsplash.jpg"
]
let currImageIndexD = 0
function changeImg(){
    $("#imgShow").attr("src",imagesDisplay[currImageIndexD])
}
$("#next").click(()=>{
    currImageIndexD = (currImageIndexD + 1) % imagesDisplay.length
    changeImg()
})
$("#pre").click(()=>{
    currImageIndexD = (currImageIndexD - 1 + imagesDisplay.length) % imagesDisplay.length
    changeImg()
})
// $("#next").click(()=>{
//     $("#imgShow").attr("src","/img/brandon-hoogenboom-SGvCVx-zwA0-unsplash.jpg",()=>{
//         $("#imgShow").attr("src","/img/markus-spiske-m6aZ2oJG76I-unsplash.jpg",()=>{
//             $("#imgShow").attr("src","/img/annie-spratt-GRSTZUxyGwY-unsplash.jpg")
//         })
//     })
// })
// $("#pre").click(()=>{
//     $("#imgShow").attr("src","/img/memories-on-35mm-d-OpK4yApEk-unsplash.jpg",()=>{
//         $("#imgShow").attr("src","/img/brandon-hoogenboom-SGvCVx-zwA0-unsplash.jpg",()=>{
//             $("#imgShow").attr("src","/img/markus-spiske-m6aZ2oJG76I-unsplash.jpg")
//         })
//     })
// })


//task3
let imagesList = [
    "/img/memories-on-35mm-d-OpK4yApEk-unsplash.jpg",
    "/img/markus-spiske-m6aZ2oJG76I-unsplash.jpg",
    "/img/annie-spratt-GRSTZUxyGwY-unsplash.jpg"
]

let currImageIndex = 0
function updateImage(){
    $("#change").attr("src", imagesList[currImageIndex])
    currImageIndex = (currImageIndex + 1) % imagesList.length
}
setInterval(updateImage,1000)




