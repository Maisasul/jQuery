$("#click").click(()=>{
    // $(".box").hide(1000)
    // $(".box").show(1000)
    // $(".box").slideUp(1000)
    // $(".box").slideDown(1000)
    // $(".box").slideToggle(1000)
    $(".top").animate({width:"100%",height:"toggle",},2000)
})
$("#stop").click(()=>
{
    $(".top").stop()
})
// $("#click1").click(()=>{
//     $(".box1").hide(1000)
// })

// $.get({
//     url:"https://jsonplaceholder.typicode.com/users",
//     success:function(res){
//         // console.log(res)
//         // $("#list").html(res)
//         for(let i = 0; i < res.length; i++)
//         {
//             $("#list").append( "<li>"+res[i].name+"</li>")
//         }
//     },
//     error:function(res){
//         console.log(res)
//     }
// })

$.get({
    url:"https://jsonplaceholder.typicode.com/users",
    success:function(res){
        let text = res.map((user)=>`<li>${user.name}</li>`)
        $("#list").html(text)
    },
    error:function(res){
        console.log(res)
    }
})

// $("#data").click(()=>{
//     let username = $(".userInput").val()
//     let urlAPI = 'http://api.github.com/users/' + username
//     $.get({
//         url:urlAPI,
//         success:function(res)
//         {
//             $("#img").attr("src",res.avatar_url)
//         }
//     })
// })

$("#data").click(()=>{
    let username = $(".userInput").val()
    let urlAPI = 'http://api.github.com/users/' + username
    $.get({
        url:urlAPI,
        success:function(res)
        {
            window.open(res.html_url)
            // $("#img").attr("src",res.avatar_url)
        }
    })
})
