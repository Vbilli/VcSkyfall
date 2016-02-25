$(function () {
    var content = document.getElementById("ArticleContent").innerHTML;
    document.getElementById("ArticleContent").innerHTML="";
    try
    {
        content=htmlUnescape(content);
        trasfer(content);
    }
    catch (e)
    {
        document.getElementById("ArticleContent").innerHTML = content;
        //alert("Page error")
    }

    function trasfer(html) {
        var frame = document.createElement('iframe');
        frame.style.display = 'none';
        document.body.appendChild(frame);
        frame.contentDocument.open();
        frame.contentDocument.write(html);
        frame.contentDocument.close();
        //get all elements inside iframe in body
        var els = frame.contentWindow.document.getElementsByTagName("*");
        document.body.removeChild(frame);
        document.getElementById("ArticleContent").appendChild(els);
    }
    //decode the html code if need
    function htmlUnescape(value) {
        return String(value)
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&');
    }

})

//$(document).ready(function () {
//    var str2DOMElement = function (html) {
//        var frame = document.createElement('iframe');
//        frame.style.display = 'none';
//        document.getElementById("ArticleContent").appendChild(frame);
//        frame.contentDocument.open();
//        frame.contentDocument.write(html);
//        frame.contentDocument.close();
//        var el = frame.contentDocument.body.firstChild;
//        document.body.removeChild(frame);
//        return el;
//    }
//    //var markup = '<div><p>text here</p></div>';
//    //var el = str2DOMElement(markup);
//    //document.body.appendChild()
//});
