$(document).ready(function() {

	$(this).ready(function(event) {
		var query = $("#query").val();
		getSearch(query);
		//event.preventDefault();
	});

	$("#playNow").on("click", function(e) {
		$("#gameShadow").css("display", "block");
		$("#gameboard").css("display", "block");
		e.preventDefault();
		startGame();
	});

	$(".closeGame").on("click", function(e) {
		$("#gameShadow").css("display", "none");
		$("#gameboard").css("display", "none");
		clearGameInfo();
		e.preventDefault();
	});

	$(".modal").on("change", function() {
		if ($(this).is(":checked")) {
			$("body").addClass("modal-open");
		} else {
			$("body").removeClass("modal-open");
		}
	});

	$(".modal-fade-screen, .modal-close").on("click", function() {
		$(".modal-state:checked").prop("checked", false).change();
	});

	$(".modal-inner").on("click", function(e) {
		e.stopPropagation();
	});

	// Main Quiz Section

	var questionCount = 0;
	var numCorrect = 0;

	function clearGameInfo() {
		questionCount = 0;
		numCorrect = 0;
		clearGameboard();
	}

	function startGame() {
		// clearQuiz();
		loadQuestion();
	}

	function clearGameboard() {
		//$('.quizForm').trigger("reset");
		$(".questionHeading").html('');
		$(".quizForm").html('');
		$(".runningTotal").html('');
		$(".message").html('');
	}

	function loadQuestion() {
			currentQuestion = questions[questionCount];
			displayCount = questionCount+1;
			$(".questionHeading").append("Question " + displayCount + " out of " + questions.length + ": <br />" + currentQuestion.text);

			for (x = 0; x < questions.length; x++) {
				$(".quizForm")
				.append("<div><label><input type=radio name=hockeyQuiz value=" + x + ">" + currentQuestion.answers[x] + "</input></label></div>");
			}
			//console.log("current answer: " + currentQuestion.correct);
	}

	function scoreQuestion() {
		var quizAnswer = $("input:radio[name ='hockeyQuiz']:checked").val();
		var msg = '';
		if (currentQuestion.correct == quizAnswer) {
			numCorrect += 1;
			msg = "YEP!";
		} else {
			numCorrect = numCorrect;
			msg = "Nope.";
		}
		return msg;
		//console.log("current numCorrect" +numCorrect);
	}

	function setTotal() {
		$(".runningTotal").html("Total correct: " + numCorrect);
	}

	function showResults() {
		$(".questionHeading").html(questionCount + " questions answered!");
		setTotal();
	}

	function setMessage(msg) {
		$(".message").html(msg);
	}

	$(".nextQuestion").on("click", function(e) {
		if ( $("input:radio[name ='hockeyQuiz']:checked").val() ) {
			msg = scoreQuestion();
			questionCount += 1;
			clearGameboard();
			if (questionCount < 5) {
				loadQuestion();
				setMessage(msg);
				setTotal();
			} else {
				$(".nextQuestion").css("display", "none");
				showResults();
				setMessage(msg);
			}

			e.preventDefault();
		} else {
			$(".message").html("Please answer the question.");
		}
	});


});