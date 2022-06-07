import { AmbientLight, AxesHelper, DirectionalLight, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { MapControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new Scene()
const renderer = new WebGLRenderer({ antialias: true })

const dom: HTMLElement = document.querySelector('#container')
dom.appendChild(renderer.domElement)

const ambientLight = new AmbientLight(0x333333)
const directionalLight = new DirectionalLight(0xffffff)
directionalLight.position.set(1, 2, 3)
directionalLight.target.position.set(0, 0, 0)

const width = dom.clientWidth
const height = dom.clientHeight
renderer.setSize(width, height)
renderer.setPixelRatio(window.devicePixelRatio)

const camera = new PerspectiveCamera(45, width / height, 1, 10000)
camera.position.set(5, 3, 5)
camera.lookAt(0, 0, 0)

const controls = new MapControls(camera, renderer.domElement)

const axes = new AxesHelper(100)

scene.add(ambientLight, directionalLight, axes)

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    controls.update()
  
}

requestAnimationFrame(animate)
export { scene, camera, controls, renderer, }

