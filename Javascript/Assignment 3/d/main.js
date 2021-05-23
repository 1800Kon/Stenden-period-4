// Adds the item to the organized list
$(document).ready(function () {
    $("button").click(function () {
        var content =  $("input[id='text']").val();
        $("ol").append("<li class='cursor-pointer'>" + content + "</li>");
    })
});

$(document).on("click", "li", function () {
    $(this).remove();
});
