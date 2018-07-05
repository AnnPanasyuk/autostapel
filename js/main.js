function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчнию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7
    });

    var myPlacemark = new ymaps.Placemark([55.431084, 37.275701], {
        // Хинт показывается при наведении мышкой на иконку метки.
        hintContent: 'xxx',
        // Балун откроется при клике по метке.
        balloonContent: 'Заводская улица, 19'
    });

// После того как метка была создана, ее
// можно добавить на карту.
    myMap.geoObjects.add(myPlacemark);
}

$(document).ready(function(){

    ymaps.ready(init);
})
