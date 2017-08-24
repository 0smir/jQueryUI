$(document).ready(function () {
    var simpleDateInput = $(".input-simple-date");
    var staticCalendar = $(".static-calendar");
    simpleDateInput.datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showAnim: "clip",
        showButtonPanel: true
    });
    staticCalendar.datepicker({
        showOtherMonths: true,
        selectOtherMonths: true
    });
});