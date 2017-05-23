$(document).ready(function(){
    
    var galleria_images = [];
    var galleria_description = [];
    var galleria_count = 0;
    var galleria_ids = ["left_1", "left_2", "left_3", "left_4"];
    
    $("#galleria #left>div>div").css("height", $("#galleria #left>div").height());
    
    $("#galleria #left>div>div").each(function(){
        var src = $(this).attr("img_src");
        $(this).css("background-image", "url('" + src + "')");
        $(this).html("<div></div>");
        
        galleria_images.push(src);
        galleria_description.push($(this).attr("desc"));
    });
    
    $("#galleria #left>div>div>div").css("height", $("#galleria #left>div>div").height());
    
    
    //initializing galleria main
    $("#galleria #main>div").each(function(){
        $(this).css("background-image", "url('" + galleria_images[0] + "')");
        $(this).html("<div>" + galleria_description[0] + "</div>");
        $("#galleria #left>#left_1>div>div").css("background-color", "rgba(0,0,0,0)");
    });
    
    
    //timing functions
    function galleria_clear(){
        $("#galleria #left>div>div>div").css("background-color", "rgba(0,0,0,0.5)");
    }
    
    function galleria_timing(){
        console.log("test");
        galleria_clear();
        galleria_count = (galleria_count + 1) % 4;
        $("#galleria #main>div").css("background-image", "url('" + galleria_images[galleria_count] + "')");
        $("#galleria #main>div").html("<div>" + galleria_description[galleria_count] + "</div>");
        $("#galleria #left>#" + galleria_ids[galleria_count] + ">div>div").css("background-color", "rgba(0,0,0,0)");
    }
    
    var galleria_timeout = setInterval(galleria_timing, 3000);
    
    
    //clearing timeout on click
    $("#galleria #left>div>div").on('click', function(){
        clearInterval(galleria_timeout);
        galleria_count = galleria_ids.indexOf($(this).parent().attr("id"));
        
        galleria_clear();
        $("#galleria #main>div").css("background-image", "url('" + galleria_images[galleria_count] + "')");
        $("#galleria #main>div").html("<div>" + galleria_description[galleria_count] + "</div>");
        $("#galleria #left>#" + galleria_ids[galleria_count] + ">div>div").css("background-color", "rgba(0,0,0,0)");
    });
    
});