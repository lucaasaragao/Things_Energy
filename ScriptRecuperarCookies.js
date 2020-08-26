//Código que identifica os cookies

function getCookie(name) {
    function escape(s) { return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1'); };
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
  }

  var codEmpresa = parseInt(getCookie('CodEmpresa'));

  var url = "";
  var blipChave="";
  var empresa = "";

  switch(codEmpresa){
  case 1:
  //url = "https://gisa.page.link/V4SP";
  url = "https://api.whatsapp.com/send?phone=5532984261352";
  blipChave="ZW5lcmdpc2FtaW5hc2dlcmFpc2VtZ3ByZDozODk0NTZkMC01OTIwLTRiZjAtOWJmYy05OTU5ZDcwMjE5YjM=";
  empresa = "Energisa Minas Gerais"
  break;
  case 2:
  //url = "https://gisa.page.link/tX7V";
  url = "https://api.whatsapp.com/send?phone=5522992924081";
  blipChave="ZW5lcmdpc2Fub3ZhZnJpYnVyZ28xOmJjMWRjNjliLWRiNGQtNDc4OC05YzFiLTUwNTk0ZDc4ZjkxYw==";
  empresa = "Energisa Nova Friburgo"
  break;
  case 3:
  //url = "https://gisa.page.link/GtL6";
  url = "https://api.whatsapp.com/send?phone=557981010715";
  blipChave="ZW5lcmdpc2FzZXJnaXBlZXNlcHJkOmM4MTQxYmQyLWQ0YzMtNGFiNi1hNjBkLTdiZWUyODAyMmZkNQ==";
  empresa = "Energisa Sergipe"
  break;
  case 4:
  //url = "https://gisa.page.link/Kc7E";
  url = "https://api.whatsapp.com/send?phone=558391355540";
  blipChave="ZW5lcmdpc2FwYXJhaWJhZXBiOmMxOTI3ZjBlLTU4NTktNDEwMy1hMjQ0LWEwMTQ1ZTE0ZjU2Mg==";
  empresa = "Energisa Borborema"
  break;
    case 5:
  //url = "https://gisa.page.link/Kc7E";
  url = "https://api.whatsapp.com/send?phone=558391355540";
  blipChave="ZW5lcmdpc2FwYXJhaWJhZXBiOmMxOTI3ZjBlLTU4NTktNDEwMy1hMjQ0LWEwMTQ1ZTE0ZjU2Mg==";
  empresa = "Energisa Paraíba"
  break;

  case 6:
  //url = "https://gisa.page.link/7i64";
  url = "https://api.whatsapp.com/send?phone=556599997974";
  blipChave="ZW5lcmdpc2FtYXRvZ3Jvc3NvZW10cHJkOmE4ZDVjZmU2LTc1ZjYtNGVmZS04MWJhLWQ1YTg1Y2ZkYzEzYg==";
  empresa = "Energisa Mato Grosso"
  break;

  case 8:
  //url = "https://gisa.page.link/u2cP";
  url =  "https://api.whatsapp.com/send?phone=556392226664";
  blipChave="ZW5lcmdpc2F0b2NhbnRpbnNldG86YmI0MDczMjktMzBmNC00ZjQ5LTgwOWQtN2ZkNmYyMjhmNGQ1";
  empresa = "Energisa Tocantins"
  break;

  case 9:
  //url = "https://gisa.page.link/FPRi";
  url = "https://api.whatsapp.com/send?phone=5518991203365";
  blipChave="ZW5lcmdpc2FzdWxzdWRlc3RlZXNzOmFiMDM3YzU1LTUzM2QtNDEwYy1hZmViLWYyNjY1YWJlZWNiYQ==";
  empresa = "Energisa Sul Sudeste"
  break;

  case 10:
  //url = "https://gisa.page.link/Tawr";
  url="https://api.whatsapp.com/send?phone=556799800698";
  blipChave="ZW5lcmdpc2FtYXRvZ3Jvc3NvZG9zdWw6NWYyZWE5NjMtZmIyYi00ZDU1LTg0NDAtM2JkODFlYTJjMTBl";
  empresa = "Energisa Mato Grosso do Sul"
  break;

  case 11:
    //url = "https://gisa.page.link/Tawr";
    url="https://api.whatsapp.com/send?phone=556993589673";
    blipChave="ZW5lcmdpc2Fyb25kb25pYTE6UjhMb0ppRVBjODdHaEk2dEtCRGY=";
    empresa = "Energisa Rondonia"
    break;

  case 12:
    //url = "https://gisa.page.link/Tawr";
    url="https://api.whatsapp.com/send?phone=556892330341";
    blipChave="ZW5lcmdpc2FhY3JlOmVIR3BUbDlYMzMwTUdxSkVWOVVV";
    empresa = "Energisa Acre"
    break;


  default:
  blipChave="cHJpbmNpcGFsODphZmZjODdmNS04ZGI1LTRiYmEtYWU3Ny1jNjQ3ZjU1Nzc5MjI=";
  codEmpresa = null;
  empresa = "Energisa"
  }

  var link_completo = window.location.href;
  var link = new URL(link_completo);
  var parametro = link.searchParams.get("comando");

  if (parametro!=""){
      url+= "&text=Oi Gisa";
  }else
  {
      url+= "&text=Oi";
  }

  window.blipClient  = new BlipChat()
    .withAppKey(blipChave)
    .withCustomCommonUrl('https://energisa.chat.blip.ai/')
  window.onload = function() {

    if (codEmpresa !=null){
      $('.abre-chat').click(function () {
        window.blipClient.build();
        window.blipClient.toogleChat();
      });

      $('.link-whatsapp').click(function () {
        var win = window.open(url, '_blank');
        win.focus();
      });
      $("#btns-modal").css({display: inline-block});
    }
    else{
         document.getElementById("btns-modal").innerHTML = '<h2><span>A Gisa ainda não está disponível na sua região.</span></h2>';
         $("#btns-modal").css({display: "block"});
    }

  };


AOS.init(
  {
    useClassNames: false,
    debounceDelay: 50,
    throttleDelay: 99,
    once: true
  }
);

$( document ).ready(function() {
  document.getElementById("empresa").innerHTML = empresa;
});