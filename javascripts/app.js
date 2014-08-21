/**
 * Created by dapopesc on 18/08/14.
 */
var main = function () {
    "use strict";
    var $newUL = $("<ul>");
    var $newParagraphElement = $("<p>");
    var $listItemOne = $("<li>").text("this is the firts list item");
    var $listItemTwo = $("<li>").text("second");
    var $listItemThree = $("<li>").text("last");

    $newUL.append($listItemOne);
    $newUL.append($listItemTwo);
    $newUL.append($listItemThree);

    $newParagraphElement.text("this is a paragraph");

    var addCommentFromINputBox = function () {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    };

    $(".comment-input button").on("click", function (event) {
        addCommentFromINputBox();
        $("footer").append($newParagraphElement);
    });

    $(".comment-input input").on("keypress", function(event) {
        if (event.keyCode === 13) {
            addCommentFromINputBox();
            $("main").append($newUL);
        }
    });
};

$(document).ready(main);