function openNav(){$("#sidenav").addClass("open"),$("#top").css("marginLeft","250px"),$("#main").css("marginLeft","250px"),$("#bottom").css("marginLeft","250px")}function closeNav(){$("#sidenav").removeClass("open"),$("#top").css("marginLeft","0"),$("#main").css("marginLeft","0"),$("#bottom").css("marginLeft","0")}$(document).ready(function(){$("#nav-icon").click(function(){$(this).toggleClass("open"),$(this).hasClass("open")?openNav():closeNav()}),$("#hexagon").click(function(){var e=$(".button span"),n=document.getElementById("player");e.hasClass("play")?n.play():n.pause(),e.toggleClass("play pause")}),$("#joke").click(function(){$.get("https://raw.githubusercontent.com/fiztehradio/daily-jokes/master/joke.txt",function(e){$("#joke").css("font-weight",400),$("#joke").css("cursor","default"),$("#joke").html(e)})});var e=document.getElementById("volume-control");noUiSlider.create(e,{start:[80],connect:[!0,!1],range:{min:0,max:100}}),e.noUiSlider.on("update",function(){player.volume=e.noUiSlider.get()/100})}),$(function(){});