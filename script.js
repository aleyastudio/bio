$(function() {
    $(".containers").sortable({
        axis: "x", 
        containment: "parent", 
        tolerance: "pointer", 
        scroll: false 
    });
});