import Footer from 'components/Footer/Footer'
import NavBar from 'components/NavBar/NavBar'
import VideoListContainer from 'containers/VideoListContainer'
import './App.scss'

const App = () => {
  return (
    <div>
      <NavBar />

      <VideoListContainer />

      <Footer />
    </div>
  )
}

export default App

//Prerequisito

// npm i sass react-ticker react-intersection-observer

// Componentes
// ProfileWidget                                        CartWidget
// Icon
// NavBar, Footer                                       NavBar
// VideoListContainer -> Fetch                          ItemListContainer
// VideoList -> map de los datos fetch                  ItemList
// Video (VideoFooter, VideoSideBar) -> Video           Item

// Relaciones

// App
// ✔️     NavBar
// ✔️    VideoListContainer
// ✔️         VideoList
// ✔️             Video
// ✔️                 ProfileWidget
// ✔️                 Icon
// ✔️     Footer
// ✔️         Icon

//////////////////
// CLONE TIKTOK //
//////////////////

// ✔️ integrar todos los conocimientos adquiridos al momento

////////////
// Repaso //
////////////

// ✔️ organización de contenedores y componentes
// ✔️ props de datos
// ✔️ props de eventos (abstracción)
// ✔️ useState, useEffect, useEffect con dependencias
// ✔️ fetch a api externa (o promise)
// ✔️ map

///////////
// Extra //
///////////

// ✔️ customHook useFetch

///////////////
// TimeStamp //
///////////////

// 00:00:00 🕑 Nada interesante
// 00:03:00 ✔️ Consulta respecto al desafío
// 00:11:00 ✔️ Explicando ejercicio a realizar (app integrador)
// 00:12:00 ✔️ Pensando componentes de la app (componentes)
// 00:18:00 ✔️ Relación entre componentes
// 00:21:00 ✔️ Creación de esqueleto de componentes (estructura de carpetas)
// 00:26:00 ✔️ Prerequisitos (npm install)
// 00:29:00 ✔️ Implementación NavBar
// 00:30:00 ✔️ Implementación Icon (componente con Callback)
// 00:33:00 ✔️ Implementación Footer (utilización componente con callback)
// 00:38:00 💀 Donde dije ItemDetailContainer quise decir ItemDetail
// 00:40:00 ✔️ Implementación VideoListContainer (useState, useEffect, fetch, props)
// 00:49:00 ✔️ Implementación VideoList (map, props)
// 00:52:00 💩 Típico error si no inicializan el state con un valor default
// 00:54:00 ✔️ Video (debería separarse en Video, VideoFooter y VideoSideBar)
// 00:59:00 ✔️ ProfileWidget (props)
// 01:03:00 ✔️ Fix SnapScrollbar
// 01:06:00 ✔️ Consulta respecto al flick por renderizar componentes antes de recibir datos del fetch
// 01:10:00 👀 Consulta respecto al desafío
// 01:18:00 ✔️ Intersection observer pattern
// 01:23:00 😖 Quise decir al montar y al cambiar estado del inView, no al montar y desmontar
// 01:23:00 ✔️ Extra Class (useRef)
// 01:29:00 ✔️ Cambiar estado a state de objeto y mostrarlo en pantalla (set useState {})
// 01:35:00 🍺 Nada interesante
