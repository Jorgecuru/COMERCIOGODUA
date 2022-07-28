



let nombre;
let dni;






const pedirCantadidad = () => {
    let cantidad = parseInt(prompt('Ingrese la cantidad deseada'));

    return cantidad;
}

//pedirCantadidad()

const calcularTotal = (precioProducto, cantidadProducto) => {
    total += precioProducto * cantidadProducto;

}

function init() {
    calcularTotal(pedirProducto(), pedirCantadidad());
    console.log(total);
}






//ARRAYS y MAPEO

const items = [{
        cerveza: 'IPA',
        precio: 300
    },

    {
        cerveza: 'APA',
        precio: 320
    },

    {
        cerveza: 'BLONDE',
        precio: 350
    },

    {
        cerveza: 'AMBER ALE',
        precio: 370
    },

    {
        cerveza: 'BARLEY WINE',
        precio: 380
    },
]

const bebida = items.map((el) => el.cerveza)





const quitarBirra = (estilo) => {
    let ubicacion = birras.indexOf(estilo)

    if (ubicacion != -1) {
        birras.splice(ubicacion, 1)
    }
}






//FUNCIONES CONSTRUCTORAS y CLASES

class Birras {
    constructor(nombre, alcohol, amargor, color, precio) {
        this.nombre = nombre
        this.alcohol = alcohol
        this.amargor = amargor
        this.color = color
        this.precio = precio
    }
}

class Compra {
    constructor() {
        this.lista = []
    }

    sumarBirra(cerveza) {
        this.lista.push(cerveza)
    }



    logLista() {
        console.log(this.lista);
    }



}




const CERVEZA = new Compra

const ipa = new Birras('ipa', '5%', '35 IBUS', 'DORADA', 330)
const apa = new Birras('apa', '6$', '25 IBUS', 'DORADA', 320)
const blonde = new Birras('blonde', '4%', '15 IBUS', 'DORADA', 300)
const amber = new Birras('amber', '20%', '20 IBUS', 'ROJA', 310)
const barneywine = new Birras('barneywine', '55%', '40 IBUS', 'RUBI', 340)

CERVEZA.sumarBirra(ipa)
CERVEZA.sumarBirra(apa)
CERVEZA.sumarBirra(blonde)
CERVEZA.sumarBirra(amber)
CERVEZA.sumarBirra(barneywine)

CERVEZA.logLista()


const agregarAlCarrito = document.querySelectorAll(".sumar");
agregarAlCarrito.forEach((botonAgregarCarrito) => {
    botonAgregarCarrito.addEventListener('click', agregarCarritoClick)
    

});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);


const contenedorItems = document.querySelector(
    '.shoppingCartItemsContainer'
);

function agregarCarritoClick(event) {
    const button = event.target;
    const item = button.closest('.card');
    
    const titulo = item.querySelector('.card-title').textContent;
    const tituloPrecio = item.querySelector('.card-text').textContent
    const tituloImagen = item.querySelector('.card-img-top').src;
    

    agregarItemCarrito(titulo, tituloPrecio, tituloImagen)

    


}

function agregarItemCarrito(titulo, tituloPrecio, tituloImagen) {

    const elementosRepetidos = contenedorItems.getElementsByClassName('shoppingCartItemTitle');
    for (let i = 0; i < elementosRepetidos.length; i++) {
        if (elementosRepetidos[i].innerText === titulo) {
            let cantidadElementosRepetidos = elementosRepetidos[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
            cantidadElementosRepetidos.value++;
            actualizarTotal()

            return;
        }
    }

    const carritoFila = document.createElement('div');
    const carritoContenido = `
    <div class="row shoppingCartItem">
          <div class="col-6">
              <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <img src=${tituloImagen} class="shopping-cart-image">
                  <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${titulo}</h6>
              </div>
          </div>
          <div class="col-2">
              <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <p class="item-price mb-0 shoppingCartItemPrice">${tituloPrecio}</p>
              </div>
          </div>
          <div class="col-4">
              <div
                  class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                  <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                      value="1">
                  <button class="btn btn-danger buttonDelete" type="button">X</button>
              </div>
          </div>
      </div>`;
    carritoFila.innerHTML = carritoContenido
    contenedorItems.append(carritoFila);

    carritoFila.querySelector('.buttonDelete').addEventListener('click', removerItemCarrito);

    carritoFila.querySelector('.shoppingCartItemQuantity').addEventListener('change', cambiarCantidad);




    actualizarTotal()





}

function actualizarTotal() {
    let total = 0
    const totalCompra = document.querySelector('.shoppingCartTotal');
    const itemsCarrito = document.querySelectorAll('.shoppingCartItem');

    itemsCarrito.forEach((itemCarrito) => {

        const elmentoItemsCarritoPrecio = itemCarrito.querySelector('.shoppingCartItemPrice');
        const precioItemCarrito = Number(elmentoItemsCarritoPrecio.textContent.replace('$', ''));
        


        const elementoItemsCarritoCantidad = itemCarrito.querySelector('.shoppingCartItemQuantity');

        const itemsCarritoCantidad = Number(elementoItemsCarritoCantidad.value);
        

        total = total + precioItemCarrito * itemsCarritoCantidad;
        
    });

    totalCompra.innerHTML = `${total}$`
}

function removerItemCarrito(event) {
    const botonBorrar = event.target
    botonBorrar.closest('.shoppingCartItem').remove()
    actualizarTotal();
}

function cambiarCantidad(event) {
    const input = event.target;
    if (input.value <= 0) {
        input.value = 1;

    }
    actualizarTotal()
}

const guardarLocal = (clave ,valor) => { localStorage.setItem(clave,valor)};
for (const producto of items){
    guardarLocal(producto.id, JSON.stringify(producto));
}






//INCORPORACION DE EVENTO

let header = document.getElementById("header")
header.innerText = "Comercio Godua"
header.className = "centrarHeader container-fluid header2"


let botonGracias =  document.querySelector('.comprarButton');
botonGracias.onclick = () => {
    Swal.fire({
        title: 'Esta seguro de su compra?',
        text: "Procederemos al area de pago",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy seguro!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Gracias!!',
            'Su pedido esta en proceso',
            'success'
          )
        }
      })
}



const fetchLocalData = () => {
    fetch('/JAVASCRIPT/items.json').then((response)=> response.json())
    .then((result)=>{
        
    }).catch((err)=>{
        
    })
}
fetchLocalData();  

function comprarButtonClicked(){
    contenedorItems.innerHTML = '';
    actualizarTotal()

}

