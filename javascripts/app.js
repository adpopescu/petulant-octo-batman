/**
 * Created by dapopesc on 18/08/14.
 */
var main = function () {
    "use strict";

    var addCommentFromINputBox = function () {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    }

    $(".comment-input button").on("click", function (event) {
        addCommentFromINputBox()
    });

    $(".comment-input input").on("keypress", function(event) {
        if (event.keyCode === 13) {
            addCommentFromINputBox()
        }
    });
};

$(document).ready(main);