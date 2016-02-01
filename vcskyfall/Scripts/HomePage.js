$(function () {
    $(window).scroll(function () {
        //$(document).scrollTop() 获取垂直滚动的距离
        //$(document).scrollLeft() 这是获取水平滚动条的距离
        if ($(document).scrollTop() <= 0) {
            //alert("滚动条已经到达顶部为0");
        }


        if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
            var Post = document.getElementsByClassName("post-preview");
            var PostCount = Post.length;
            GetMoreArticle(PostCount);
            //alert("滚动条已经到达底部为" + $(document).scrollTop());
        }
    });
})

function GetMoreArticle(AlreadyLoadedNum) {
    $.ajax({
        url: '/Home/AjaxMoreArcticle',
        type: 'post',
        data: {"number": AlreadyLoadedNum },
        success: function (ReturnedJson) {
            var count = ReturnedJson.length;
            if (count != 0) {
                var CurrentArcticle = document.getElementsByClassName("post-preview");
                var last = document.getElementsByClassName("pager")[0];
                for (var i = 0; i < count ; i++) {
                    var date = new Date();
                    date.setDate(ReturnedJson[i].TimeStamp);
                    var HtmlString = "<div class='post-preview'><a href='/Home/SamplePost/"
                            + ReturnedJson[i].id
                            + "'>" + "<h2 class='post-title'>"
                            + ReturnedJson[i].Tittle
                            + "</h2><h3 class='post-subtitle'>"
                            + ReturnedJson[i].Subject
                            + "</h3></a><p class='post-meta'>由 <a href='#'>"
                            + ReturnedJson[i].Creater
                            + "</a> 发布，于 "
                            + date
                            + "</p></div>"; // HTML string
                    var div = document.createElement('div');
                    div.innerHTML = HtmlString;
                    var elements = div.childNodes;
                    last.parentNode.insertBefore(div, last);
                    //<div class='post-preview'>
                    //    <a href='/Home/SamplePost/14'>
                    //        <h2 class='post-title'>
                    //            在这个 “一个 90 后可以决定让另一个 90 后手握 1 亿现金'的时代，80 后的我为什么不焦虑？

                    //        </h2>
                    //        <h3 class='post-subtitle'>
                    //            36氪

                    //        </h3>
                    //    </a>
                    //    <p class='post-meta'>由 <a href='#'>刘惠彬</a> 发布，于 1/25/2016 12:00:00 PM</p>
                    //</div>
                }
            }
        }
        });


}