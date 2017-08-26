$(document).ready(function () {
    var simpleDateInput = $(".input-simple-date");
    var staticCalendar = $(".static-calendar");

    $.datepicker.regional.ru = {
        monthNames: ['Январь','Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв','Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек'],
        dayNames: [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ],
        dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ]

    };
    $.datepicker.setDefaults($.datepicker.regional.ru );



    simpleDateInput.datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showAnim: "clip",
        duration: "slow",
        showButtonPanel: true,
        dateFormat: "dd-mm-yy"

    });
    simpleDateInput.datepicker("setDate",  new Date());
    staticCalendar.datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy",
        showMonthAfterYear: false,
        numberOfMonths: 3
    });

    staticCalendar.find(".ui-datepicker-inline").css({"display":"flex",
        "flex-direction":"column",
        "width":"220px"});



});