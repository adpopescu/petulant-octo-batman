/**
 * Created by dapopesc on 18/08/14.
 */
var main = function () {
    "use strict";

    $(".comment-input button").on("click", function (event) {
        $(".comments").append("<p>this is a new comment</p>");
    });
};

$(document).ready(main);