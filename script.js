$(document).ready(function () {
  $(".slideOut-btn").click(function () {
    $(".slide").slideUp();
  })

  $(".slideIn-btn").click(function () {
    $(".slide").slideDown();
  })

  $(".fadeIn-btn").click(function () {
    $(".fade").fadeIn("slow");
  })

  $(".fadeOut-btn").click(function () {
    $(".fade").fadeOut("slow");
  })

  $("#txt").keypress(function (e) {
    console.log($("#txt").val());
    console.log("Pressionando a tecla: " + e.which); // Retorna UniCode da tecla

  })

  $("#txt").keyup(function () {
    console.log("Soltou a tecla!");
  })

  $("#data").keyup(function () {
    if ($("#data").val().length == 2) {
      $("#data").val($("#data").val() + "/")
    } else if ($("#data").val().length == 5) {
      $("#data").val($("#data").val() + "/")
    }
  })

  $("#bolinhaColorida").hide();

  $("#cores").change(function () {
    $("select option:selected").each(function () {
      console.log("Alterou para a cor: " + $(this).text())
      $("#corSelecionada").text($(this).text())
      if ($(this).text() == "Vermelho") {
        $("#bolinhaColorida").attr("src", "vermelha.png").show();
      } else if ($(this).text() == "Verde") {
        $("#bolinhaColorida").attr("src", "verde.png").show();
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
      left: "570px",
    })
  });

  $(".animateBtn2").click(function () {
    $(".animate").animate({
      left: "50px",

    })
  });


});

