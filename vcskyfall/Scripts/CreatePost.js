$(function () {
    $('.jqte').jqte();
    //var editor = document.getElementsByClassName("jqte_editor")[0];
    //editor.addEventListener("change", function (event) {
    //    event.preventDefault();
    //    $('#copyText').html() = $('.jqte_editor').html();
    //})
    $(document).ready(function () {
        var $editor = $('.jqte_editor')[0];
        $editor.onchange = function () {
            document.getElementById("Content").value =$('.jqte_editor').html();
        }
    });


    //function CopyText(event) {

    //    $('#copyText').html()=$('.jqte_editor').html()
    //}
})

//var myVar = setInterval(myTimer, 1000);

//function myTimer() {
//    var d = new Date();
//    //document.getElementById("copyText").innerHTML = d.toLocaleTimeString();
//    document.getElementById("Content").innerHTML = $('.jqte_editor').html();
//}

//function htmlEscape(str) {
//    return String(str)
//            .replace(/&/g, '&amp;')
//            .replace(/"/g, '&quot;')
//            .replace(/'/g, '&#39;')
//            .replace(/</g, '&lt;')
//            .replace(/>/g, '&gt;');
//}
//function htmlUnescape(value) {
//    return String(value)
//        .replace(/&quot;/g, '"')
//        .replace(/&#39;/g, "'")
//        .replace(/&lt;/g, '<')
//        .replace(/&gt;/g, '>')
//        .replace(/&amp;/g, '&');
//}
