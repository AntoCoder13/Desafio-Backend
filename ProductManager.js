const fs = require('node:fs')

class ProductManager {

    #precioBaseDeGanacia = 0.15
    #id = 1

    constructor(productos = [], path) {
        this.productos = productos,
        this.path = path
    }

    obtenerProductos() {
        //return this.productos
        /*
        //  AGREGAR CONTENIDO
        fs.writeFileSync('archivoProductos.txt', '{}')
        if (fs.existsSync('archivoProductos.txt')) {
            let contenido = fs.readFileSync('archivoProductos.txt', 'utf-8')

            console.log(contenido)

        //  AGREGAR CONTENIDO
            fs.appendFileSync('archivoProductos.txt', '')

            contenido = fs.readFileSync('archivoProductos.txt', 'utf-8')
            console.log(contenido)

            fs.unlinkSync('archivoProductos.txt')
        }*/
    
    
    }

    agregarProducto(id, nombre, descripcion, precio, thumbnail, codigo, stock) {
        const productosExiste = this.productos.find(producto => producto.codigo === codigo)
        if (productosExiste) return `El producto con código: ${codigo} ya existe.`

        const obtenerProductosPorId = this.productos.find(producto => producto.id === id)
        if (!obtenerProductosPorId) return `El producto con ID: ${id} no se encontró.`

        const nuevoProducto = {
            id: this.#id++,
            nombre,
            thumbnail, //ruta de imagen
            precio: Math.round(precio * (1 + this.#precioBaseDeGanacia)),
            descripcion,
            stock,
        }
        this.productos.push(nuevoProducto);
    }

    //actualizarProducto()
    //borrarProducto()

getProductById(productos, id){
    const productoId = productos.find(producto => producto.id === id)
    if (!productoId) {
        console.log('ID NOT FOUND.')
        return null
    }
    else return productoId;

}
}
const productManager = new ProductManager()
productManager.obtenerProductos()
productManager.agregarProducto('Manzana Red Apple', 'La manzana más roja y dulce de todo el condado', 1500, 250)
productManager.agregarProducto('Papel Higiénico El Suavecito', 'Se agradece la suavidad de este producto', 2500, 100)
productManager.agregarProducto('Tequila RedField', 'Para una excelente noche con tus amigos, el mejor tequila al mejor precio', 1200, 130)
productManager.obtenerProductos()