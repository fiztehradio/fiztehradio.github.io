function openNav(){document.getElementById("sidenav").style.width="250px",document.getElementById("top").style.marginLeft="250px",document.getElementById("main").style.marginLeft="250px",document.getElementById("bottom").style.marginLeft="250px"}function closeNav(){document.getElementById("sidenav").style.width="0",document.getElementById("top").style.marginLeft="0",document.getElementById("main").style.marginLeft="0",document.getElementById("bottom").style.marginLeft="0"}$(document).ready(function(){$("#nav-icon").click(function(){$(this).toggleClass("open"),$(this).hasClass("open")?openNav():closeNav()}),$("#hexagon").click(function(){$(".button span").toggleClass("pause play")})});