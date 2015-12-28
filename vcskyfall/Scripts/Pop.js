

$(document).ready(function () {
    document.addEventListener("click", function (event) {
        if (event.target.className == "Pop") {
            $(".Popupform").attr("display", "block");
        }

    });
    //swal({
    //    title: 'Ajax request example',
    //    text: 'Submit to run ajax request',
    //    type: 'info',
    //    showCancelButton: true,
    //    closeOnConfirm: false,
    //    showLoaderOnConfirm: true,
    //}, function () {
    //    setTimeout(function () {
    //        swal('Ajax request finished!');
    //    }, 2000);
    //});
})
