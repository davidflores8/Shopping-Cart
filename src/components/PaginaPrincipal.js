import data from "../data";
import React, { Component } from "react";

class PaginaPrincipal extends Component {
  constructor() {
    super();
    this.state = {
      datos: data.products,
      cantidad: 0,
      total: 0,
    };
  }


  agregarCantidad(index) {
        const { datos: oldDatos } = this.state;
        const datos = oldDatos.map(p => {
          if (p.id === index && p.cantidad<10) {
            p.cantidad += 1;
            return p;
          }
          return p;
        });

        this.setState(datos);

        this.setState({
          total: Math.round((this.state.total + datos[index].price))
        })
  }

  quitarCantidad(index) {
        const { datos: oldDatos } = this.state;
        const datos = oldDatos.map(p => {
          if (p.id === index && p.cantidad>0) {
            p.cantidad -= 1;
            return p;
          }
          return p;
        });

        this.setState(datos);

        this.setState({
          total: Math.round((this.state.total - datos[index].price))
        })
  }



  render() {
    return (
      <div>
        <section>
          <div className="row">
            <div className="col-lg-8">
              <div className="card  mb-3">
                <div className="card-body">
                  <h5 className="mb-4">Carrito</h5>
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
                                  Camisa - azul
                                </p>
                                <p className="mb-3 text-muted text-uppercase small">
                                  Color: azul
                                </p>
                                <p className="mb-3 text-muted text-uppercase small">
                                  Tamaño: M
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
                                  Cantidad
                                </small>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <a
                                  href="#!"
                                  type="button"
                                  className="card-link-secondary small text-uppercase mr-3"
                                >
                                  <i className="fas fa-trash-alt mr-1"></i>{" "}
                                  Quitar item
                                </a>
                                <a
                                  href="#!"
                                  type="button"
                                  className="card-link-secondary small text-uppercase"
                                >
                                  <i className="fas fa-heart mr-1"></i> Añadir a
                                  favoritos{" "}
                                </a>
                              </div>
                              <p className="mb-0">
                                <span>
                                  <strong>{dato.price}</strong>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                       
                    );
                  })}
                </div>
              </div>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="mb-4">Tiempo de entrega</h5>
                     
                  <p className="mb-0"> Martes o Miércoles.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="mb-3">El total es</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Entrega
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>El total es</strong>
                        <strong>
                          <p className="mb-0">(incluyendo descuento)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>$ {this.state.total}</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-block waves-effect waves-light"
                  >
                    Ir a total
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
