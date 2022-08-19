$(document).ready(function () {
  var stateSlide = true;

  $(".slide-btn").click(function () {
    if (stateSlide) {
      $(".slide").slideUp();
      $(".btnSlide").removeClass("fa-solid fa-eye").addClass("fa-solid fa-eye-slash")
    } else {
      $(".slide").slideDown();
      $(".btnSlide").removeClass("fa-solid fa-eye-slash").addClass("fa-solid fa-eye")
    }
    stateSlide = !stateSlide;
  })

  var stateFade = true;

  $(".fade-btn").click(function () {
    if (stateFade) {
      $(".fade").fadeOut("slow");
      $(".btnFade").removeClass("fa-solid fa-eye").addClass("fa-solid fa-eye-slash")
    } else {
      $(".fade").fadeIn("slow");
      $(".btnFade").removeClass("fa-solid fa-eye-slash").addClass("fa-solid fa-eye")
    }
    stateFade = !stateFade;
  })


  $("#txt").keypress(function (e) {
    console.log($("#txt").val());
    console.log("Pressionando a tecla: " + String.fromCharCode(e.which)); // Retorna unicode convertido em string

  })

  $("#txt").keyup(function () {
    console.log("Soltou a tecla!");
  })

  $("#data").keyup(function () {
    if ($.isNumeric(charOk)) {
      return true
    } else {
      return false
    }
  })

  $("#bolinhaColorida").hide();

  $("#cores").change(function () {
    $("select option:selected").each(function () {
      console.log("Alterou para a cor: " + $(this).text())
      $("#corSelecionada").text($(this).text())
      if ($(this).text() == "Vermelho") {
        $("#bolinhaColorida").attr("src", "img/vermelha.png").show();
      } else if ($(this).text() == "Verde") {
        $("#bolinhaColorida").attr("src", "img/verde.png").show();
      } else if ($(this).text() == "") {
        $("#bolinhaColorida").hide();
      }
    })
  })

  $(".emptyBtn").click(function () {
    $(".emptyTeste").empty();
  })

  $(".animateBtn1").click(function () {
    $(".animate").animate({
      backgroundColor: "red",
      left: "570px",
    })
  });

  $(".animateBtn2").click(function () {
    $(".animate").animate({
      backgroundColor: "coral",
      left: "50px",
    })
  });


  $("#idade").keypress(function (e) {
    var charOk = String.fromCharCode(e.which);
    if ($.isNumeric(charOk)) {
      return true
    } else {
      return false
    }
  }
  )

  $("#mouse").mousemove(function () {
    console.log("Passou o mouse!");
  })
})




