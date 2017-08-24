$(document).ready(function () {
    var simpleDateInput = $(".input-simple-date");
    var staticCalendar = $(".static-calendar");
    simpleDateInput.datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showAnim: "clip",
        duration: "slow",
        showButtonPanel: true
    });
    staticCalendar.datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 3
    });

    staticCalendar.find(".ui-datepicker-inline").css({"display":"flex",
                                                    "flex-direction":"column",
                                                    "width":"220px"});
});