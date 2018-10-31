$(function() {
		/*  генератор чисел */
var rand_numbers = [];
var rand_numbers1 = []; //

function randomInteger() {

        var result = Math.floor(1 + Math.random() * 36);
	        if (rand_numbers.indexOf(result) == -1) {
	            rand_numbers.push(result);
	            return result;
	        }
		}

		/*  эксперемент  */

		function randomInteger1() {

		        var result1 = Math.floor(1 + Math.random() * 36);
			        if (rand_numbers1.indexOf(result1) == -1) {
			            rand_numbers1.push(result1);
			            return result1;
			        }
				}
//
		$(".parameters__button").click(function() {

			rand_numbers.length = 0;
			var i =0;
			while(i < 12){
				randomInteger();
				i++;
				continue
			}

			rand_numbers.length = 6;

			$(".parameters__result__number").text(rand_numbers.join(" "));
			var zzz = $(".parameters__result__number").text();
			$("main ul").html("<li></li>");
			$("main ul li").text(zzz);


			var amount = $("#parameters__quantity__form1 input").val();
			while(amount > 1) {        //  эксперемент
				$("main ul").html("<li>_$1_</li>");
				//.attr("class","www");
				/*function doIt(){

					rand_numbers1.length = 0;
					var ii =0;
					while(ii < 12){
						randomInteger1();
						ii++;
						continue
					}

					rand_numbers1.length = 6;
					$("main ul li").after("<li></li>");
					$("main ul li:last").text(rand_numbers1.join(" "));

				}*/
				amount--; // разобраться, выше нельзя, виснет
			}
	});

	const STATE_SELECT = 1; //состояние выбора
	const STATE_CHECK = 2;  //состояние проверки
	var state = STATE_SELECT;
	/* ДОБАВЛЕНИЕ КЛАССА ПРИ НАВЕДЕНИИ */
	var grey = function() {
	  if(state === STATE_CHECK) return;
	  $(this).toggleClass("active");
	};
	/* ДОБАВЛЕНИЕ КЛАССА ПРИ CLICK */
	var green = function() {
	  if(state === STATE_CHECK) return;
	  $(this).toggleClass("selected");
	};
	/* СТАВКА */
	var yellow = function() {
	  $(".selected").toggleClass("parameters__field__rate-yellow");
	  $(".button").toggleClass("disabled");
		if ( $(".button").hasClass("asd") ) {
			$(".asd").toggleClass("asd");
		}
	  if(state === STATE_CHECK) {
	    state = STATE_SELECT;
	  } else {
	    state = STATE_CHECK;
	  }
	};

	$(".button").hover(grey);
	$(".button").click(green);
	$(".parameters__field__rate").click(yellow);

	    /* СБРОС ВЫБРАННЫХ ЧИСЕЛ НА ПОЛЕ */
	$(".parameters__field__clear").click(function() {
		$(".button").removeClass("selected parameters__field__rate-yellow disabled asd");
		state = STATE_SELECT; // была какая-то ошибка, сейчас не нахожу
	});

$(".test").click(function() {

	/* ПОИСК СОВПАДЕНИЙ */

	var array1 = [];
	array1 = rand_numbers;

  	var ln2 = $(".parameters__field__rate-yellow").length ;
  	for(var m = 0; ln2  > 0; m++) {
       var valueArray2 = $(".parameters__field__rate-yellow").eq(m).text();
       valueArray2 = parseInt(valueArray2);
			 if( array1.indexOf( valueArray2 ) !== -1 ) {
	     	$(".parameters__field__rate-yellow").eq(m).toggleClass("asd");
					if(state === STATE_SELECT) return;
	     }
       ln2--;
  	}

	});
/*	var amount = $("#parameters__quantity__form1 input").text();
	if( amount > 1 ) {

		while(amount > 0) {
				$(".parameters__button").click(function() {
					rand_numbers.length = 0;
					var i =0;
					while(i < 10){
						randomInteger();
						i++;
						continue
					}
					rand_numbers.length = 6;
					$("main li").append().text(rand_numbers.join(" "));
				});
				amount--
			}
	}*/



});
