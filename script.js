clicar()

function clicar() {
        var data =
            document.getElementById("date").value;
            
            $.ajax({url:`https://api.nasa.gov/planetary/apod?api_key=K3GFM4cqezl5aRhMDxfJhbZM8uF2KBkJzCgerIn0&date=${data}`,
            success: function (resposta) {
            
                $(`#titulo`).text(resposta.title)
                $(`#txt`).text(resposta.explanation)
                $(`#autor`).text(resposta.copyright)

if (resposta.media_type == "image") {
    $(`#img`).attr("src",resposta.url)
    $("#img").css("display","block")
    $("#video").css("display","none")
}
else{
    $(`#video`).attr("src",resposta.url)
    $("#video").css("display","block")
    $("#img").css("display","none")
}   

}})    }
   

