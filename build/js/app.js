!function e(n,o,t){function i(r,u){if(!o[r]){if(!n[r]){var c="function"==typeof require&&require;if(!u&&c)return c(r,!0);if(a)return a(r,!0);var s=new Error("Cannot find module '"+r+"'");throw s.code="MODULE_NOT_FOUND",s}var l=o[r]={exports:{}};n[r][0].call(l.exports,function(e){var o=n[r][1][e];return i(o?o:e)},l,l.exports,e,n,o,t)}return o[r].exports}for(var a="function"==typeof require&&require,r=0;r<t.length;r++)i(t[r]);return i}({1:[function(e,n,o){$(document).ready(function(){function e(){u=0,c=0,n()}function n(){$(".questionHeading").html(""),$(".quizForm").html(""),$(".runningTotal").html(""),$(".message").html("")}function o(){for(currentQuestion=questions[u],displayCount=u+1,$(".questionHeading").append("Question "+displayCount+" out of "+questions.length+": <br />"+currentQuestion.text),x=0;x<questions.length;x++)$(".quizForm").append("<div><label><input type=radio name=hockeyQuiz value="+x+">"+currentQuestion.answers[x]+"</input></label></div>")}function t(){var e=$("input:radio[name ='hockeyQuiz']:checked").val(),n="";return currentQuestion.correct==e?(c+=1,n="YEP!"):(c=c,n="Nope."),n}function i(){$(".runningTotal").html("Total correct: "+c)}function a(){$(".questionHeading").html(u+" questions answered!"),i()}function r(e){$(".message").html(e)}$("#playNow").on("click",function(e){$("#gameShadow").css("display","block"),$("#gameboard").css("display","block"),e.preventDefault(),o()}),$(".closeGame").on("click",function(n){$("#gameShadow").css("display","none"),$("#gameboard").css("display","none"),e(),n.preventDefault()}),$(".modal").on("change",function(){$(this).is(":checked")?$("body").addClass("modal-open"):$("body").removeClass("modal-open")}),$(".modal-fade-screen, .modal-close").on("click",function(){$(".modal-state:checked").prop("checked",!1).change()}),$(".modal-inner").on("click",function(e){e.stopPropagation()});var u=0,c=0;$(".nextQuestion").on("click",function(e){$("input:radio[name ='hockeyQuiz']:checked").val()?(msg=t(),u+=1,n(),5>u?(o(),r(msg),i()):($(".nextQuestion").css("display","none"),a(),r(msg)),e.preventDefault()):$(".message").html("Please answer the question.")})})},{}]},{},[1]);