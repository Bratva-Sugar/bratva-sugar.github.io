

function copyToClip(str) {
	function listener(e) {
		e.clipboardData.setData("text/html", str);
		e.clipboardData.setData("text/plain", str);
		e.preventDefault();
	}
	document.addEventListener("copy", listener);
	document.execCommand("copy");
	document.removeEventListener("copy", listener);
};


/*function toggle(str) {

var x = document.getElementById(str);

if (x.style.display === "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}
}*/

/*function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}*/


$(document).ready(function(){

	$("a").click(function(){

		$(this).parent().next().addClass("open").toggle(400);

		$(".newComment").toggle(400);

		$("span").not(".open").hide(400);

		$(".open").removeClass("open");

	});

});

/*$(document).ready(function(){

	$(".heading").click(function(){

		$(this).next().addClass("open").slideToggle(300);

		if ($(this).next().css("display","block")){

			$(".newComment").fadeToggle(300);
		}

		$(".heading").next().not(".open").slideUp(300);

		$(".open").removeClass("open");


	});



});*/


/*$(document).ready(function(){

	$(".heading").next().delay(1000).slideUp(300);


});*/




/*$(document).ready(function(){

$("i").mouseover(function(){

$(this).parent().next().toggleClass("tooltip",1000);


}); 

$("i").mouseout(function(){

$(this).removeClass("tooltip");

});

});*/

/*$(document).ready(function(){

	$(".add").click(function(){

		$(this).after($('#example').clone(true).addClass("clone"));

		$(".clone").show();

		$(".clone").removeClass(".clone");

	});

	$(".remove").click(function(){

		$(this).parents(".container").remove();

	});

});	*/

$(document).ready(function(){
	$("#welcomen").load("Status/1.txt");
});

/*-----------------------------------------------------Buttons---------------------------------------*/

$(document).ready(function(){

	$("#sButton").on("click",function(){

		$("#blank").css("display","block");

		$("#blank").css("color","rgb(242, 185, 13)").text("Status").css("text-shadow","0 0 15px rgba(242, 185, 13,0.5)")
		.css("border-top","1px solid rgb(242, 185, 13)").css("border-bottom","1px solid rgb(242, 185, 13)")
		.css("box-shadow","rgba(242, 185, 13, 0.5) 0px 0px 5px");

		$("#sButton").toggleClass("active");

		$(".heading").not("#sButton").removeClass("active");

		$("#sMessages").addClass("open").slideToggle(200);

		$(".messages").not(".open").fadeOut(10);

		$(".open").removeClass("open");
	})

});

$(document).ready(function(){

	$("#bButton").on("click",function(){

		$("#blank").css("display","block");

		$("#blank").css("color","rgb(242, 242, 13)").text("Bonuses").css("text-shadow","0 0 15px rgba(242, 242, 13,0.5)")
		.css("border-top","1px solid rgb(242, 242, 13)").css("border-bottom","1px solid rgb(242, 242, 13)")
		.css("box-shadow","rgba(242, 242, 13, 0.5) 0px 0px 5px");

		$("#bButton").toggleClass("active");

		$(".heading").not("#bButton").removeClass("active");

		$("#bMessages").addClass("open").slideToggle(200);

		$(".messages").not(".open").fadeOut(10);

		$(".open").removeClass("open");
	})

});

$(document).ready(function(){

	$("#tButton").on("click",function(){

		$("#blank").css("display","block");

		$("#blank").css("color","rgb(13, 242, 13)").text("Translate").css("text-shadow","0 0 15px rgba(13, 242, 13,0.5)")
		.css("border-top","1px solid rgb(13, 242, 13)").css("border-bottom","1px solid rgb(13, 242, 13)")
		.css("box-shadow","rgba(13, 242, 13, 0.5) 0px 0px 5px");

		$("#tButton").toggleClass("active");

		$(".heading").not("#tButton").removeClass("active");

		$("#tMessages").addClass("open").slideToggle(100);

		$(".messages").not(".open").fadeOut(10);

		$(".open").removeClass("open");
	})

});

$(document).ready(function(){

	$("#fButton").on("click",function(){

		$("#blank").css("display","block");

		$("#blank").css("color","rgb(230, 25, 25)").text("Financial").css("text-shadow","0 0 15px rgba(230, 25, 25,0.5)")
		.css("border-top","1px solid rgb(230, 25, 25)").css("border-bottom","1px solid rgb(230, 25, 25)")
		.css("box-shadow","rgba(230, 25, 25, 0.5) 0px 0px 5px");

		$("#fButton").toggleClass("active");

		$(".heading").not("#fButton").removeClass("active");

		$("#fMessages").addClass("open").slideToggle(100);

		$(".messages").not(".open").fadeOut(10);

		$(".open").removeClass("open");
	})

});

$(document).ready(function(){

	$("#eButton").on("click",function(){

		$("#blank").css("display","block");

		$("#blank").css("color","rgb(13, 128, 242)").text("Emails").css("text-shadow","0 0 15px rgba(13, 128, 242,0.5)")
		.css("border-top","1px solid rgb(13, 128, 242)").css("border-bottom","1px solid rgb(13, 128, 242)")
		.css("box-shadow","rgba(13, 128, 242, 0.5) 0px 0px 5px");

		$("#eButton").toggleClass("active");

		$(".heading").not("#eButton").removeClass("active");

		$("#eMessages").addClass("open").slideToggle(100);

		$(".messages").not(".open").fadeOut(10);

		$(".open").removeClass("open");

	});
});



$(document).ready(function(){

	$("h3").on("click",function(){

		$("#snackBar").text($(this).children("u").text() + " copied!").css("background-color", "white");

		$("#snackBar").fadeIn(150, function(){

			$(this).delay(300);

			$(this).fadeOut(300);

		});
	})

});

$(document).ready(function(){

	if ($("span").css() = "display","block") {

		$("h3").on("click",function(){

			$("span").css("display","none");
		})
	}
});

$(document).ready(function(){

	$("h3").on("click",function(){
		$(this).parent("div").next("span").text();
		document.execCommand("copy");
	})
});

/*$(document).ready(function(){

	$("#eButton").on("click",function(){

		$("#blank").css("display","block");

		$("#blank").css("color","rgb(13, 128, 242)").text("Ticket Copied").css("text-shadow","0 0 15px rgba(13, 128, 242,0.5)")
		.css("border-top","1px solid rgb(13, 128, 242)").css("border-bottom","1px solid rgb(13, 128, 242)")
		.css("box-shadow","rgba(13, 128, 242, 0.5) 0px 0px 5px");

		$("#snackBar").text($(this).text() + "New Ticket").css("background-color", "rgb(140, 166, 242)");

		$("#eButton").toggleClass("active");

		$(".heading").not("#eButton").removeClass("active");

		$(".messages").not(".open").fadeOut(10);

		$("#snackBar").fadeIn(300, function(){

			$(this).delay(300);

			$(this).fadeOut(300);

		});
	})

})*/

