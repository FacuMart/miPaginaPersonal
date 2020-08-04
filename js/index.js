var database = firebase.database();
var infopersonal = database.ref('infopersonal/');
infopersonal.once('value', function(snapshot) {
    var info = snapshot.val()
        console.log(info)

    $('#nombre').text("Nombre: "+info.nombre) 
    $('#apellido').text("Apellido: "+info.apellido)   

});

var proyectos = database.ref('proyectos/');
proyectos.once('value', function(snapshot) {
    var proye = Object.values(snapshot.val())
      cadena=""
      proye.map((item)=>{
          var proyect=item
          cadena+=`<li>`
          cadena+=`Nombre: ${proyect.nombrep}`
          cadena+=`</li>`
      })

  $('#proyectos').html(cadena)
});