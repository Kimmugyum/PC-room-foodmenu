getData()

function getData()
{
    $.ajax({
        url: 'http://localhost:3000/menu',
        type : 'GET',
        success:function(data){
            for(var i = 0; i < data.length; i++)
            {
                menu(data[i])
            }
            $("#menu li").click(function(){
                var number = $(this).attr("id");
                gallery(number)
            })
        }
    })
}

function gallery(number)
{
    $.ajax({
        url: 'food/' + number,
        type : 'GET',
        success:function(data){
                menuPicture(data)     
            }
    })
}

function menu(data)
{   
    $("#menu").append(`<li id="${data.id}">${data.name}</li>`); // <ul>밑에 jquery로 <li>자식생성
}


function menuPicture(data)
{
        $("#picture").html('')
        for(var i = 0; i < data.length; i++){
        $("#picture").append(`<div><img src = "image/${data[i].filename}" width = "350px" height = "250px">
                                ${data[i].name}</div>`) 
    }
}