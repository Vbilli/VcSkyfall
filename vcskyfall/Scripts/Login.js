
$(function () {

    //$('#loginForm').formValidation({
    //    framework: 'bootstrap',
    //    excluded: ':disabled',
    //    icon: {
    //        valid: 'glyphicon glyphicon-ok',
    //        invalid: 'glyphicon glyphicon-remove',
    //        validating: 'glyphicon glyphicon-refresh'
    //    },
    //    fields: {
    //        username: {
    //            validators: {
    //                notEmpty: {
    //                    message: 'The username is required'
    //                }
    //            }
    //        },
    //        password: {
    //            validators: {
    //                notEmpty: {
    //                    message: 'The password is required'
    //                }
    //            }
    //        }
    //    }
    //});
    //$('#testform').validator();
    var footer = document.getElementsByTagName("footer");
    footer[0].parentNode.removeChild(footer[0]);
    var login = document.getElementById("loginTab");
    var register = document.getElementById("registerTab");
    $("#loginTab").on("click", function () {
        $(this).removeClass("active");
        //$("#loginpanel").css("display", "block");
        $("#loginpanel").fadeIn();
        $("#registerpanel").css("display", "none")
        $(this).addClass("active");
        $("#registerTab").removeClass("active")
        var errorMessage = document.getElementsByClassName("validation-summary-errors text-danger");
    })
    $("#registerTab").on("click", function () {
        $(this).removeClass("active");
        $("#loginpanel").css("display", "none");
        //$("#registerpanel").css("display", "block")
        $("#registerpanel").fadeIn();
        $(this).addClass("active");
        $("#loginTab").removeClass("active")
    })
})
