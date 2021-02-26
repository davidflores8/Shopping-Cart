import { render } from '@testing-library/react';
import React, {Component} from 'react'

class PaginaPrincipal extends Component{
    
    constructor(){
        super()
        this.state={

        }
    }

    render(){

        return (
            <div>
                <section>
                <div class="row">
                    <div class="col-lg-8">
                    <div class="card wish-list mb-3">
                        <div class="card-body">
                        <h5 class="mb-4">Carrito</h5>
                        <div class="row mb-4">
                            <div class="col-md-5 col-lg-3 col-xl-3">
                            <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                <img class="img-fluid w-100"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample" />
                            </div>
                            </div>
                            <div class="col-md-7 col-lg-9 col-xl-9">
                            <div>
                                <div class="d-flex justify-content-between">
                                <div>
                                    <h5>Camisa azul formal</h5>
                                    <p class="mb-3 text-muted text-uppercase small">Camisa - azul</p>
                                    <p class="mb-2 text-muted text-uppercase small">Color: azul</p>
                                    <p class="mb-3 text-muted text-uppercase small">Tamaño: M</p>
                                </div>
                                <div>
                                    <div class="def-number-input number-input safari_only mb-0 w-100">
                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                        class="minus"></button>
                                    <input class="quantity" min="0" name="quantity" value="1" type="number" />
                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                        class="plus"></button>
                                    </div>
                                    <small id="passwordHelpBlock" class="form-text text-muted text-center">
                                    Cantidad
                                    </small>
                                </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"><i
                                        class="fas fa-trash-alt mr-1"></i> Quitar item</a>
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i
                                        class="fas fa-heart mr-1"></i> Añadir a favoritos </a>
                                </div>
                                <p class="mb-0"><span><strong>$17.99</strong></span></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <hr class="mb-4" />
                        <div class="row mb-4">
                            <div class="col-md-5 col-lg-3 col-xl-3">
                            <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                <img class="img-fluid w-100"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg" alt="Sample" />
                                <a href="#!">
                                
                                </a>
                            </div>
                            </div>
                            <div class="col-md-7 col-lg-9 col-xl-9">
                            <div>
                                <div class="d-flex justify-content-between">
                                <div>
                                    <h5>Sudadera roja</h5>
                                    <p class="mb-3 text-muted text-uppercase small">Camisa - roja</p>
                                    <p class="mb-2 text-muted text-uppercase small">Color: rojo</p>
                                    <p class="mb-3 text-muted text-uppercase small">Tamaño: M</p>
                                </div>
                                <div>
                                    <div class="def-number-input number-input safari_only mb-0 w-100">
                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                        class="minus"></button>
                                    <input class="quantity" min="0" name="quantity" value="1" type="number" />
                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                        class="plus"></button>
                                    </div>
                                </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"><i
                                        class="fas fa-trash-alt mr-1"></i> Quitar item </a>
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i
                                        class="fas fa-heart mr-1"></i>Añadir a favoritos </a>
                                </div>
                                <p class="mb-0"><span><strong>$35.99</strong></span></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    <div class="card mb-3">
                        <div class="card-body">

                        <h5 class="mb-4">Tiempo de entrega</h5>

                        <p class="mb-0"> Martes o Miércoles.</p>
                        </div>
                    </div>
                    </div>                       
                    <div class="col-lg-4">
                    <div class="card mb-3">
                        <div class="card-body">
                        <h5 class="mb-3">El total es</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Sub-total
                            <span>$25.98</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                            Entrega
                            <span>Gratis</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                            <div>
                                <strong>El total es</strong>
                                <strong>
                                <p class="mb-0">(incluyendo descuento)</p>
                                </strong>
                            </div>
                            <span><strong>$53.98</strong></span>
                            </li>
                        </ul>

                        <button type="button" class="btn btn-primary btn-block waves-effect waves-light">Ir a total</button>

                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="card-body">

                        <div class="collapse" id="collapseExample1">
                            <div class="mt-3">
                            <div class="md-form md-outline mb-0">
                                <input type="text" id="discount-code1" class="form-control font-weight-light"
                                placeholder="Enter discount code" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div> 
                    </div>
                </div>
                </section>

            </div>
            
        )
    }

}



export default PaginaPrincipal;