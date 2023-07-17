//JS
// document.getElementById("show").onclick = function(){
//     const x = document.getElementById("password")
//     console.log(x.type)
//     if(x.type === "password")
//     {
//         document.getElementById("show").innerText = "hide"
//         password.type = "text"
//     }
//     else
//     {
//         document.getElementById("show").innerText = "show"
//         password.type = "password"
//     }
// }

//JQuery
$('#show').click(function()
{
    if($("#password").attr("type") === "password")
    {
        $('#show').text("hide")
        $('#password').attr("type","text")
    }
    else
    {
        $('#show').text("show")
        $('#password').attr("type","password")
    }
})

//JS
// let txt = document.getElementById("txt")
// let res = document.getElementById("res")
// txt.onkeyup = function(){
//     let count = txt.value.length

//     console.log(count)
//     if(count >=20)
//     {
//         txt.style.cssText = "border:1px solid red; outline:1px solid red"
//     }
//     else
//     {
//         txt.style.cssText = "border:1px solid black; outline:1px solid black"
//     }
//     res.innerText = count
// }

//JQuery

$('#txt').keyup(function()
    {
        let count = $('#txt').val().length
        if(count >=20)
        {
            $('#txt').css({"border":"1px solid red", "outline":"1px solid red"})
        }
        else
        {
            $('#txt').css({"border":"1px solid black", "outline":"1px solid black"})
        }
        $('#res').text(count)
    }
    
)

//Ajax
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").load("demo_test.txt");
    });
});



