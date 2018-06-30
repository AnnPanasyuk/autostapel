$(".btn-ct button").on('click', function() {
    var formData = new FormData();
    formData.append('current', $(".card").length);
    fetch('./news.php', {
        method: 'POST',
        body: formData
    })

    .then(function (response) {
        return response.json();
    })
    .then(function(response) {
        var img = response.body.img;
        var title = response.body.title;
        var des = response.body.des;
        var card = '<div class="card">' +
            '<div class="img-ct">' +
            '<img src="' +
            img +
            '" alt="img">' +
            '</div>' +
            '<div class="text-ct">' +
            '<p class="caption">' +
            title +
            '</p>' +
            '<p class="desc">' +
            des +
            '</p>'+
            '</div>'+
        '</div>';
        $(".card:last").after(card);
        if($(".card").length == response.count_array) {
            $(".btn-ct button").remove();
        }
    })
    .catch(console.log);
});