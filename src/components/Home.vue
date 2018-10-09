<template>
  <div id="home">

    <div class="hide">
      <img src="./../assets/arq.jpg" alt="">
      <img src="./../assets/boda.jpg" alt="">
      <img src="./../assets/halls.jpg" alt="">
      <img src="./../assets/lamp.jpg" alt="">
      <img src="./../assets/lampara.jpg" alt="">
      <img src="./../assets/studio.jpg" alt="">
      <img src="./../assets/weddings.jpg" alt="">
    </div>

    <div class="navbar-fixed">
    <nav class="black">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo"><img src="./../assets/iq_logo.png" height="100px" alt="iQ Sudio Logo"></a>        
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>        
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>    
    </div>
    <ul class="sidenav" id="mobile-demo">
      <li><a href="#home">Inicio</a></li>
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>

    <div class="parallax-container valign-wrapper" style="height:90vh">
      <div class="parallax-text">
        <h1 style="text-transform:uppercase" class="hide-on-med-and-down">Fotografía Profesional</h1>        
        <h3 style="text-transform:uppercase" class="show-on-small">Fotografía Profesional</h3>        
        <h3>Sesiones Fotográficas</h3>
      </div>        
      <div class="parallax">      
        <img src="./../assets/weddings.jpg" alt="fotografia de eventos">       
      </div>      
    </div>
    
    <div class="container-full brown darken-4" 
      style="background-image:url(img/lamp.91ef92a4.jpg); 
      background-position: left; background-color: #000;
      background-size: contain;
      ">
      <div class="row">
        <div class="col m6">
          <!-- <img class="responsive-img" src="https://www.fotografiaprofesional.mx/wp-content/uploads/2018/02/eventos-opt.jpg" alt=""> -->
        </div>
        
        <div class="col m6">
          <form id="contacto">
            <h5 class="center-align">SOLICITA TU COTIZACION</h5>
            <div class="row">
              <div class="input-field col s10 m12">
                <i class="material-icons prefix">account_circle</i>
                <input id="name" v-model="name" type="text" class="validate">
                <label for="name">Nombre y Apellido</label>
              </div>
              <div class="input-field col s10 m6">
                <i class="material-icons prefix">business</i>
                <input id="business"  v-model="business" type="text" class="validate">
                <label for="business" >Nombre Empresa</label>
              </div>
              <div class="input-field col s10 m6">
                <i class="material-icons prefix">location_on</i>
                <input id="city"  v-model="city" type="text" class="validate">
                <label for="city">Ciudad</label>
                <span data-error="Ingrese una dirección válida" data-success="" class="helper-text"></span>
              </div>
            </div>

            <div class="row">              
              <div class="input-field col s10 m6">
                <i class="material-icons prefix">email</i>
                <input id="email"  v-model="email" type="email" class="validate">
                <label for="email">Email</label>
                <span data-error="Ingrese una dirección válida" data-success="" class="helper-text"></span>
              </div>
              <div class="input-field col s10 m6">
                <i class="material-icons prefix">phone</i>
                <input id="telephone"  v-model="phone" type="tel" class="validate">
                <label for="telephone">Teléfono</label>
              </div>
            </div>

            <div class="row">  
              <div class="input-field col s10 m6">
                <!-- <input id="service" type="text" class="validate"> -->
                <i class="material-icons prefix">add_a_photo</i>
                <select name="" id=""  v-model="service">
                  <option value="" disabled selected>Eliga una opción</option>
                  <option value="Fotografía Eventos">Fotografía de Eventos</option>
                  <option value="Fotografía Aérea">Fotografía Aérea</option>
                  <option value="Retratos">Retratos</option>
                  <option value="Productos">Productos</option>
                  <option value="Arquitectura">Arquitectura</option>
                </select>
                <label>Servicio</label>                
              </div>
              <div class="input-field col s10 m6">
                <i class="material-icons prefix">date_range</i>
                <input id="date" type="date" class="validate" v-model="date">
                <label for="date">Fecha </label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">mode_edit</i>
                <textarea id="message"  v-model="message" rows="5" class="materialize-textarea"></textarea>
                <label for="message">Cuéntanos un poco más</label>
              </div>
            </div>

            <div class="center-align">
              <a href="#modal1" @click="senEmail()" class="waves-effect waves-light btn modal-trigger btn-large" style="margin:auto">
                <i class="material-icons right">send</i>Enviar
              </a>
            </div>  

            <div id="modal1" tabindex="0" class="modal">
            <div class="modal-content center-align">
              <h4>Gracias por contactarnos</h4>
              <p>En breve un asesor se comunicará con usted.</p>
            </div>
            <div class="modal-footer">
              <a href="#" class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
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
      style="background-image:url(img/boda.50393487.jpg); 
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

    <div class="container-full balck" >
      <div class="row">
        <div class="form1-rgba col m6" style="padding:30px">
          <h5 style="padding-bottom: 20px">Fotografías de Productos</h5>
          <h6>Fotografía para alimentos y bebidas</h6>
          <i class="parrafo">
            Invita a los comensales con fotografías que sean dignas de la calidad de tus alimentos.
            O crea tu catálogo de productos digital o impreso, para dar mayor presentación a tus productos.
          </i>

          <p class="parrafo">
            La fotografía de comida debe ser un festín para los ojos, en ella deben resaltar la textura y los colores del platillo, para así despertar el apetito en tus comensales o lectores.
          </p>

          <a href="#contacto" class="waves-effect waves-light btn" style="color">CONTACTANOS</a>
            
        </div>

        <div class="col m5">
          <img src="./../assets/halls.jpg" class="responsive-img" alt="Fotografia de Productos">
        </div>
      </div>
    </div>
  
    <div class="container-full teal white-text">
      <div class="container">      
      <div class="row">
        <div class="col m6 center-align">
          <h4>Llámanos al <br> 7791-3525</h4>
          <h6>¿Tienes una idea? <br> Nosotros te ayudamos a hacerla realidad.</h6>
        </div>
        <div class="col m6 center-align">
          <a href="tel:+50277913525" class="btn teal darken-3 waves-effect" style="margin: 10% auto;">
            <i class="material-icons left">phone</i>
            LLAMANOS
          </a>
        </div>
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
    $("select").formSelect();
    $(".modal").modal();
    $('.sidenav').sidenav();

    this.srollify();
  },
  data() {
    return {
      name: "",
      city: "",
      business: "",
      phone: "",
      date: "",
      message: "",
      email: "",
      service: ""
    };
  },
  methods: {
    srollify() {
      $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
          if (
            location.pathname.replace(/^\//, "") ==
              this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
          ) {
            var target = $(this.hash);
            target = target.length
              ? target
              : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
              event.preventDefault();
              $("html, body").animate(
                {
                  scrollTop: target.offset().top - 50
                },
                1000,
                function() {
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) {
                    return false;
                  } else {
                    $target.attr("tabindex", "-1");
                    $target.focus();
                  }
                }
              );
            }
          }
        });
    },

    senEmail() {
      let msg = "<h1>CONTACTO DESDE SITIO WEB</1> <br> <hr> ";
      msg = msg + "<b>NOMBRE: </b>" + this.name + "<br>";
      msg = msg + "<b>CIUDAD: </b>" + this.city + "<br>";
      msg = msg + "<b>EMPRESA: </b>" + this.business + "<br>";
      msg = msg + "<b>TELEFONO: </b>" + this.phone + "<br>";
      msg = msg + "<b>EMAIL: </b>" + this.email + "<br>";
      msg = msg + "<b>FECHA DE EVENTO: </b>" + this.date + "<br>";
      msg = msg + "<b>SERVICIO: </b>" + this.service + "<br>";
      msg = msg + "<b>DETALLES: </b>" + this.message;

      this.clearForm();

      Email.send(
        "photostudio@iqstudiogt.com",
        "info@iqstudiogt.com",
        "iQ Photo Studio",
        msg,
        {
          token: "f6c1b32a-f615-48bb-9e32-1b142383526e",
          callback: function done(message) {
            console.log("sent");            
          }
        }
      );
    },

    clearForm(){
      this.name = "";
      this.city = "";
      this.business = "";
      this.phone = "";
      this.date = "";
      this.message = "";
      this.email = "";
      this.service = "";
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

.row {
  margin-bottom: 0;
}

.parrafo {
  font-size: 15px;
}
</style>

