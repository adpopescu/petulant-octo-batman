/**
 * Created by dapopesc on 18/08/14.
 */
var main = function () {
    "use strict";

    $(".comment-input button").on("click", function (event) {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $(".comments").append($new_comment);
        }
    });
};

$(document).ready(main);