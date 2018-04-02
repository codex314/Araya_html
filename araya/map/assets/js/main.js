  $(document).ready(function(){
    $("#btn-landuse").click(function(){
        $("#cl-landuse").toggle();
        });
    });
      
$(document).ready(function(){
    $("#btn-layer").click(function(){
        $("#cl-layer").toggle();
        });
    });

// POP-UP ON Search
$(document).ready(function(){
    $("#btnSearch").click(function(){
        $("#control-searchbox").css("display", "block");
        });
    });

$(document).ready(function(e){
    $('#searchBox').click(function(e){
        e.stopPropagation();
    });
    $("#control-searchbox").click(function(){
        $("#control-searchbox").hide();
    });    
});

// change state Kind
$(document).ready(function(){
    $('#featId').click(function(){
        $('#featId').addClass('selected');
      
        $('#featId-search').css('display','block'); $('#species-search').css('display','none'); $("#speciesId").addClass('selected').removeClass('selected');
    });
    $('#speciesId').click(function(){
        $('#speciesId').addClass('selected');
        $("#featId").addClass('selected').removeClass('selected');
        $('#species-search').css('display','block');
        $('#featId-search').css('display','none');
    });
});








      