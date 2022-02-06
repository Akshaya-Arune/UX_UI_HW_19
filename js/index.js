console.log("Test Script file loaded...");

$(document).ready(function(){
    $(".item1").hide();
    $(".item3").hide();
	$(".workGrid").hide();
	$(".flexContainer").hide();
});

$('#btnResume').on("click",function(){
	console.log("Clicked on Button Resum");
	alert("Resume will be downloaded")
});

$('#btnproject1').hover(function(){
	console.log("Hovered on Button Project 1");
	$( this ).append( $( "<span> ***</span>" ) );
}, function() {
    $( this ).find( "span" ).last().remove();
  }
);


$('#btnproject1').on("click",function(){
	console.log("Clicked on Button Project 1");
	$(".item1").show();
	}
);

$('#btnproject2').on("click",function(){
	console.log("Clicked on Button Project 2");
	$(".item3").show();
	}
);

$('#btnproject2').hover(function(){
	console.log("Hovered on Button Project 2");
	$( this ).append( $( "<span> ***</span>" ) );
}, function() {
    $( this ).find( "span" ).last().remove();
  }
);

$('.item5').on("click",function(){
	$(".item1").show();
	$(".item3").show();
	$(".workGrid").show();
});

$(".heroImg").mouseenter(function(){
	$(".workGrid").show();
});


$(".myWork h1").on("click",function(){
	$(".workGrid").toggle();
});

$(".mySkills h1").on("click",function(){
	console.log("Clicked on mySkills");
	$(".flexContainer").toggle();
});

$("p").on("click",function(){
	console.log("Clicked on P space");
});

