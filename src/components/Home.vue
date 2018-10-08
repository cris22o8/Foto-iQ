<template>
  <div id="home">
    <div class="navbar-fixed">
    <nav class="black">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo"><img src="./../assets/iq_logo.png" height="100px" alt="iQ Sudio Logo"></a>        
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
    </div>

    <div class="parallax-container valign-wrapper" style="height:90vh">
      <div class="parallax-text">
        <h1>FOTÓGRAFOS PROFESIONALES</h1>        
        <h3>Sesiones Fotográficas</h3>
      </div>        
      <div class="parallax">      
        <img src="https://cdne.ojo.pe/thumbs/uploads/img/2018/01/17/resultado-de-una-sesion-fotografica-de-una-familia-251314-jpg_700x0.jpg">       
      </div>      
    </div>
    
    <div class="container-full brown darken-4" 
      style="background-image:url(https://www.fotografiaprofesional.mx/wp-content/uploads/2018/02/eventos-opt.jpg); 
      background-position: left; background-color: #000;
      background-size: cover;
      ">
      <div class="row">
        <div class="col m6">
          <!-- <img class="responsive-img" src="https://www.fotografiaprofesional.mx/wp-content/uploads/2018/02/eventos-opt.jpg" alt=""> -->
        </div>
        
        <div class="col m6">
          <form id="contacto">
            <h5 class="center-align">SOLICITA TU COTIZACION</h5>
            <div class="row">
              <div class="input-field col m12">
                <i class="material-icons prefix">account_circle</i>
                <input id="name" type="text" class="validate">
                <label for="name">Nombre y Apellido</label>
              </div>
              <div class="input-field col m6">
                <i class="material-icons prefix">business</i>
                <input id="business" type="tel" class="validate">
                <label for="business">Nombre Empresa</label>
              </div>
              <div class="input-field col m6">
                <i class="material-icons prefix">location_on</i>
                <input id="city" type="text" class="validate">
                <label for="city">Ciudad</label>
                <span data-error="Ingrese una dirección válida" data-success="" class="helper-text"></span>
              </div>
            </div>

            <div class="row">              
              <div class="input-field col m6">
                <i class="material-icons prefix">email</i>
                <input id="email" type="email" class="validate">
                <label for="email">Email</label>
                <span data-error="Ingrese una dirección válida" data-success="" class="helper-text"></span>
              </div>
              <div class="input-field col m6">
                <i class="material-icons prefix">phone</i>
                <input id="telephone" type="tel" class="validate">
                <label for="telephone">Teléfono</label>
              </div>
            </div>

            <div class="row">  

              <div class="input-field col m6">
                <!-- <input id="service" type="text" class="validate"> -->
                <i class="material-icons prefix">phone</i>
                <select name="" id="">
                  <option value="Fotografía Eventos">Fotografía de Eventos</option>
                  <option value="Fotografía Aérea">Fotografía Aérea</option>
                  <option value="Retratos">Retratos</option>
                  <option value="Productos">Productos</option>
                  <option value="Arquitectura">Arquitectura</option>
                </select>
                <label>Servicio</label>                
              </div>
              <div class="input-field col m6">
                <i class="material-icons prefix">date_range</i>
                <input id="date" type="date" class="validate">
                <label for="date">Fecha </label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col m12">
                <i class="material-icons prefix">mode_edit</i>
                <textarea id="message" rows="5" class="materialize-textarea"></textarea>
                <label for="message">Cuéntanos un poco más sobre tu proyecto</label>
              </div>
            </div>
              
            <a href="#modal1" class="waves-effect waves-light btn fondo2 modal-trigger btn-large">
              <i class="material-icons right">send</i>Enviar</a>
            <div id="modal1" tabindex="0" class="modal">
            <div class="modal-content">
              <h4>Gracias por contactarnos</h4>
              <p>En breve un asesor se comunicará con usted.</p>
            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div id="servicios" class="container-full brown darken-4" 
      style="background-image:url(img/arq.a98ffea4.jpg); 
      background-position: right; background-color: #000;
      background-size: cover;
      ">

      <div class="row">

        <div class="form1-rgba col m6">
          <h5 style="padding-bottom: 20px">Fotografías para arquitectura</h5>
          <i class="parrafo">Capturar el paisaje urbano es una de<br>
            las más antiguas expresiones del arte.<br>
            La <b class="parrafo">fotografía arquitectónica</b> profesional <br>
            hará brillar tus instalaciones.</i>

          <p class="parrafo">La <b>fotografía de arquitectura</b> debe resaltar las cualidades tanto interiores como <br>
              exteriores de tus instalaciones, es decir, hacer resaltar el espacio y proporciones interiores, <br>
              así como el paisaje que le rodea.
          </p>

          <a href="#contacto" class="waves-effect waves-light btn" style="color">CONTACTANOS</a>
        </div>

      </div>

    </div>

    <div class="container-full brown darken-4" 
      style="background-image:url(https://manosalaobracr.com/wp-content/uploads/2017/07/dia_02-1518266703.jpg); 
      background-position: left; background-color: #000;
      background-size: cover;
      ">

      <div class="row">
        <div class="form1-rgba col m6 offset-m6">
          <h5 style="padding-bottom: 20px">Fotografías para eventos</h5>
          <i class="parrafo">
            Preserva el recuerdo o crea testigos sobre <br>
            tu evento, ya sea social como <b class="parrafo">Bodas o <br>
            XV Años</b>; corporativos como <b class="parrafo">caterings, <br>
            aniversarios o conferencias </b> o de <br>
            egresados y <b class="parrafo">graduaciones.</b>
          </i>

          <p class="parrafo">
            La fotografía de eventos sociales o corporativos  es un tipo de fotoreportaje que <br> 
            debe transmitir el momento que se vive dentro del evento, para así lograr <br>
            despertar emociones dentro de quien las vea.
          </p>

          <a href="#contacto" class="waves-effect waves-light btn" style="color">CONTACTANOS</a>
            
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  mounted: function() {
    $(".parallax").parallax();
    $('select').formSelect();

    this.srollify();
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    srollify(){
      $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 200
            }, 1000, function() {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr('tabindex','-1');
                $target.focus(); 
              };
            });
          }
    }
  });

    }
  }
};
</script>
<style>
.parallax-text {
  text-align: center;
  color: white;
  margin: auto;
}

.container-full {
  margin: 0;
  padding: 0;
}

.container-full .col {
  padding: 0;
}

form {
  margin: 10px;
  background: #eeeeee;
  /* background: rgba(255,255,255,0.8); */
  padding: 20px;
  padding-right: 30px;
  border-radius: 10px;
}

nav {
  height: 100px;
  padding: 10px;
}

.form1-rgba {
  margin: 10px;
  background: #eeeeee;
  background: rgba(0, 0, 0, 0.8);
  padding-top: 80px !important;
  padding-bottom: 80px !important;
  padding-right: 30px;
  color: #fff !important;
  padding-left: 30px !important;
}

.row {margin-bottom: 0;}

.parrafo {
  font-size: 15px;
}
</style>

