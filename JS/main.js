$(document).ready(function () {

    //  ? Mouse
    var M1 = $("#Mouse1");
    var M2 = $("#Mosue2");
    $(document).mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        M1.css('left', e.clientX );
        M1.css('top', e.clientY );
        
        M2.css('right', e.clientX);
        M2.css('bottom', e.clientY);
    }); 

    // Efectos hover
    // Hover:Acerca
    var TxtAcerca = $(".Acerca");
    TxtAcerca.hover(function () {
            // over
            TxtAcerca.css('color',"#f76262");
        }, function () {
            // out
            $("#Acerca1").css('color', "#fff1c1");
            $("#Acerca2").css('color', "#293462");
        }
    );

    //Hover:Habilidades
    var TxtHabilidades = $(".Habilidades");
    TxtHabilidades.hover(function () {
            // over
            TxtHabilidades.css('color',"#f76262");
        }, function () {
            // out
            $("#Habilidades1").css('color', "#fff1c1");
            $("#Habilidades2").css('color', "#293462");
        }
    );

    //Hover:Contacto
    var TxtContacto = $(".Contacto");
    TxtContacto.hover(function () {
            // over
            TxtContacto.css('color',"#f76262");
        }, function () {
            // out
            $("#Contacto1").css('color', "#fff1c1");
            $("#Contacto2").css('color', "#293462");
        }
    );

    //Hover: Proyectos
    var TxtProyectos = $(".Proyectos");
    TxtProyectos.hover(function () {
            // over
            TxtProyectos.css('color',"#f76262");

        }, function () {
            // out
            $("#Proyectos1").css('color', "#fff1c1");
            $("#Proyectos2").css('color', "#293462");
        }
    );

    // ?Ventanas
    // * Arriba
    $(".Acerca").click(function (e) { 
        //Mostrar el panel principal
        $("#Up").animate({
            top:'0vh'
        });
        ByeMouse();
    });
    // * Abajo
    $(".Proyectos").click(function (e) { 
        //Mostrar el panel principal
        $("#Down").animate({
            bottom:'0vh'
        });
        ByeMouse();
    });
    // * Derecha
    $(".Contacto").click(function (e) {
        $("#Right").animate({
            right:'0vw'
        });
        ByeMouse();
    });
    // * Izquierda
    $(".Habilidades").click(function (e) { 
        $("#Left").animate({
            left:'0vw'
        });
        ByeMouse();
    });

    // ? Boton Cerrar Ventana
    $(".Button_Close").hover(function (e) {
        // over
        $(this).animate({
            backgroundColor: "#e03131"
        });
        
    },function(e){
        // out
        $(this).animate({
            backgroundColor: "#fa5252"
        });

    });

    $(".Button_Close").click(function (e) {
        //Cerrar ventana
        $("#Up").animate({
            top:'-100vh'
        });
        $("#Down").animate({
            bottom:'-100vh'
        });
        $("#Right").animate({
            right:'100vw'
        });
        $("#Left").animate({
            left:'100vw'
        });
        HiMouse();
    });
});


function ByeMouse()
{
    $("#Mosue2").fadeOut(); //Desaparecer mouse 2
}
function HiMouse()
{
    $("#Mosue2").fadeIn(); //Aparecer mouse 2
}

function MouseHover(){
    $("#Mosue1").animate({
        background_color:'#e64980',
        opacity: '0.5'
    });
}
