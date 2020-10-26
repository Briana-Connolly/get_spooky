jQuery(document).ready(function () {

    $('.btn-secondary').on("click", function (event) {
        event.preventDefault();

        var num = Math.floor(Math.random(0) * Math.floor(49))

        setTimeout(function () {
         

            var apiBase = 'https://api.giphy.com/v1/gifs/search?api_key=UqhOUu1v5V9upVShgQJqnopVv0GTWzII&q=spooky&limit=50&offset=0';


            axios.get(apiBase).then(function (response) {
                
                var imageHTML = '<img src="' + response.data.data[num].images.original.url + '">';


                $('#result1').html(imageHTML);



            });
        }, 250); //add loading element
    });
});