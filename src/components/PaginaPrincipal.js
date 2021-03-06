import data from "../data";
import React, { Component } from "react";


function clickMe() {
  alert("You are about to be redirected to the Checkout");
}

class PaginaPrincipal extends Component {
  constructor() {
    super();
    this.state = {
      datos: data.products,
      favoritos: [],
      cantidad: 0,
      total: 0,
      impuestos: 5
    };
  }

  guardarFavoritos(index) {
    const {favoritos: oldFavoritos } = this.state;
    console.log("Old favoritos ",oldFavoritos)
    oldFavoritos.push(this.state.datos[index])
    this.setState(oldFavoritos)
    this.quitarLibro(index)
  }

  quitarLibro(index) {
    const { datos: oldDatos } = this.state;
    const datos = oldDatos.splice(index, 1);
    this.setState(datos);
    console.log("Libros despues del estado ", this.state.datos);
  }

  agregarCantidad(index) {
    const { datos: oldDatos } = this.state;
    const datos = oldDatos.map((p) => {
      if (p.id === index && p.cantidad < 10) {
        p.cantidad += 1;
        return p;
      }
      return p;
    });

    this.setState(datos);

    this.setState({
      total: Math.round(this.state.total + datos[index].price),
    });
    
  }

  quitarCantidad(index) {
    const { datos: oldDatos } = this.state;
    const datos = oldDatos.map((p) => {
      if (p.id === index && p.cantidad > 0) {
        p.cantidad -= 1;
        return p;
      }
      return p;
    });

    if(this.state.datos[index].cantidad==0){
      this.setState({
          total: 0
        });
    }
    else{
      this.setState({
        total: Math.round(this.state.total - datos[index].price),
      });
    }


    
  }

  render() {
    return (
      <div>
        <section>
          <div className="row">
            <div className="col-lg-8">
              <div className="card wish-list mb-3">
                <div className="card-body">
                  <h5 className="text-center mb-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="mx-3 bi bi-basket"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    My Shopping Cart{" "}
                  </h5>

                  {this.state.datos.map((dato, index) => {
                    return (
                      <div key={dato.id} className="row mb-4">
                        <div className="col-md-5 col-lg-3 col-xl-3">
                          <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                            <img
                              className="img-fluid w-100"
                              src={dato.image}
                              alt="Sample"
                            />
                          </div>
                        </div>
                        <div className="col-md-7 col-lg-9 col-xl-9">
                          <div>
                            <div className="d-flex justify-content-between">
                              <div>
                                <h5 className="mb-5">{dato.name}</h5>
                                <p className="mb-3 text-muted text-uppercase small">
                                  Format - Hardcover
                                </p>
                                <p className="mb-3 text-muted text-uppercase small">
                                  Language: English
                                </p>
                                <p className="fst-italic">
                                  Choose Expedited Shipping at checkout for
                                  guaranteed delivery by Wednesday, March 10
                                </p>
                              </div>
                              <div>
                                <div
                                  className="btn-group"
                                  role="group"
                                  aria-label="Basic example"
                                >
                                  <button
                                    onClick={() => this.agregarCantidad(index)}
                                    type="button"
                                    className="btn btn-secondary"
                                  >
                                    +
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-secondary "
                                  >
                                    {dato.cantidad}
                                  </button>
                                  <button
                                    onClick={() => this.quitarCantidad(index)}
                                    type="button"
                                    className="btn btn-secondary"
                                  >
                                    -
                                  </button>
                                </div>
                                <small
                                  id="passwordHelpBlock"
                                  className="form-text text-muted text-center"
                                >
                                  Quantity
                                </small>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <a
                                  href="#!"
                                  type="button"
                                  className="card-link-secondary small text-uppercase mr-3"
                                  onClick={() => this.quitarLibro(index)}
                                >
                                  Remove item
                                </a>
                                <a
                                  href="#!"
                                  type="button"
                                  className="card-link-secondary small text-uppercase"
                                  onClick={()=>this.guardarFavoritos(index)}
                                >
                                  Add to Saved for later
                                </a>
                              </div>
                              <p className="mb-0">
                                <span>
                                  <strong>${dato.price}</strong>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="mb-4">SAVED FOR LATER Items</h5>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                  {/*incio de mapeo del arreglo de favoritos */}
                  {this.state.favoritos.map((dato, index) => {
                    return (
                      <div key={dato.id} className="row mb-4">
                        <div className="col-md-5 col-lg-3 col-xl-3">
                          <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                            <img
                              className="img-fluid w-100"
                              src={dato.image}
                              alt="Sample"
                            />
                          </div>
                        </div>
                        <div className="col-md-7 col-lg-9 col-xl-9">
                          <div>
                            <div className="d-flex justify-content-between">
                              <div>
                                <h5 className="mb-5">{dato.name}</h5>
                                <p className="mb-3 text-muted text-uppercase small">
                                  Format - Hardcover
                                </p>
                                <p className="mb-3 text-muted text-uppercase small">
                                  Language: English
                                </p>
                                <p className="fst-italic">
                                  Choose Expedited Shipping at checkout for
                                  guaranteed delivery by Wednesday, March 10
                                </p>
                              </div>
                              <div>
                                <div
                                  className="btn-group"
                                  role="group"
                                  aria-label="Basic example"
                                >
                                  <button
                                    onClick={() => this.agregarCantidad(index)}
                                    type="button"
                                    className="btn btn-secondary"
                                  >
                                    +
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-secondary "
                                  >
                                    {dato.cantidad}
                                  </button>
                                  <button
                                    onClick={() => this.quitarCantidad(index)}
                                    type="button"
                                    className="btn btn-secondary"
                                  >
                                    -
                                  </button>
                                </div>
                                <small
                                  id="passwordHelpBlock"
                                  className="form-text text-muted text-center"
                                >
                                  Quantity
                                </small>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <a
                                  href="#!"
                                  type="button"
                                  className="card-link-secondary small text-uppercase mr-3"
                                  onClick={() => this.quitarLibro(index)}
                                >
                                  Remove item
                                </a>
                                <a
                                  href="#!"
                                  type="button"
                                  className="card-link-secondary small text-uppercase"
                                  onClick={()=>this.guardarFavoritos(index)}
                                >
                                  Add to Saved for later
                                </a>
                              </div>
                              <p className="mb-0">
                                <span>
                                  <strong>${dato.price}</strong>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="text-center"> Order Summary</h5>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    Order sub-total :
                    <span>$ {this.state.total}</span>
                  </li>

                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Estimated Shipping:
                      <span>${this.state.impuestos}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Order Total:</strong>
                        <strong>
                          <p className="mb-0"></p>
                        </strong>
                      </div>
                      <span>
                        <strong>$ {this.state.total>0 ? this.state.total + this.state.impuestos : 0}.00</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-block waves-effect waves-light"
                    onClick={clickMe}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cash-stack"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                      <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" />
                    </svg>
                    CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PaginaPrincipal;
