// metodos de propiedad
const reproductor = {
  reproducir: function(id) {
    console.log(`reproduciendo cancion con el id ${id}`)
  },
  pausar: function() {
    console.log('pausando...')
  },
  crearPlaylist: function(nombre) {
    console.log(`creando la playlist de ${nombre}`)
  },
  reproducirPlaylist: function(nombre) {
    console.log(`escuchar cancion playlist ${nombre}`)
  }
}
reproductor.reproducir(30)
reproductor.reproducir(10)
reproductor.pausar()
reproductor.crearPlaylist('Vallenatos')
reproductor.reproducirPlaylist('Mañanitas de invierno - Pocho Zuleta')

// agregar propiedades por fuera del objeto
reproductor.borrar = function(id) {
  console.log(`borrando cancion... ${id}`)
}
reproductor.borrar(30)