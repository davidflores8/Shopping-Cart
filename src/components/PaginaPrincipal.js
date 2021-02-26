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
                    <div class="mb-3">
                        <div class="pt-4 wish-list">
                        <h5 class="mb-4">Carrito de compras (<span>2</span> items)</h5>
                        <div class="row mb-4">
                            <div class="col-md-5 col-lg-3 col-xl-3">
                            <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                <img class="img-fluid w-100"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample"/>
                                <a href="#!">
                                <div class="mask">
                                    <img class="img-fluid w-100"
                                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"/>
                                    <div class="mask rgba-black-slight"></div>
                                </div>
                                </a>
                            </div>
                            </div>
                            <div class="col-md-7 col-lg-9 col-xl-9">
                            <div>
                                <div class="d-flex justify-content-between">
                                <div>
                                    <h5>Camisa azul</h5>
                                    <p class="mb-3 text-muted text-uppercase small">Camisa azul</p>
                                    <p class="mb-2 text-muted text-uppercase small">Color: azul</p>
                                    <p class="mb-3 text-muted text-uppercase small">Tamaño: M</p>
                                </div>
                                <div>
                                    <div class="def-number-input number-input safari_only mb-0 w-100">
                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                        class="minus decrease"></button>
                                    <input class="quantity" min="0" name="quantity" value="1" type="number"/>
                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                        class="plus increase"></button>
                                    </div>
                                    <small id="passwordHelpBlock" class="form-text text-muted text-center">
                                    Cantidad actual
                                    </small>
                                </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"><i
                                        class="fas fa-trash-alt mr-1"></i> Quitar item </a>
                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i
                                        class="fas fa-heart mr-1"></i> Añadir a favoritos </a>
                                </div>
                                <p class="mb-0"><span><strong id="summary">$17.99</strong></span></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <hr class="mb-4"/>
                        <div class="row mb-4">
                            <div class="col-md-5 col-lg-3 col-xl-3">
                            <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                <img class="img-fluid w-100"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg" alt="Sample"/>
                                <a href="#!">
                                <div class="mask">
                                    <img class="img-fluid w-100"
                                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"/>
                                    <div class="mask rgba-black-slight"></div>
                                </div>
                                </a>
                            </div>
                            </div>
                            <div class="col-md-7 col-lg-9 col-xl-9">
                            <div>
                                <div class="d-flex justify-content-between">
                                <div>
                                    <h5>Red hoodie</h5>
                                    <p class="mb-3 text-muted text-uppercase small">Camisa - roja</p>
                                    <p class="mb-2 text-muted text-uppercase small">Color: roja</p>
                                    <p class="mb-3 text-muted text-uppercase small">Tamaño: M</p>
                                </div>
                                <div>
                                    <div class="def-number-input number-input safari_only mb-0 w-100">
                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                        class="minus"></button>
                                    <input class="quantity" min="0" name="quantity" value="1" type="number"/>
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
                                        class="fas fa-heart mr-1"></i> Añadir a favoritos </a>
                                </div>
                                <p class="mb-0"><span><strong>$35.99</strong></span></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <p class="text-primary mb-0"><i class="fas fa-info-circle mr-1"></i> No te retrases, puedes pagar cuando quieras.</p>

                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="pt-4">

                        <h5 class="mb-4">Dia esperado para la entrega</h5>

                        <p class="mb-0"> Martes o Miércoles próximo.</p>
                        </div>
                    </div>
                   {/* <div class="mb-3">
                        <div class="pt-4">

                        <h5 class="mb-4">Aceptamos</h5>

                        <img class="mr-2" width="45px"
                            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                            alt="Visa"/>
                        <img class="mr-2" width="45px"
                            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                            alt="American Express"/>
                        <img class="mr-2" width="45px"
                            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                            alt="Mastercard"/>
                        <img class="mr-2" width="45px"
                            src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                            alt="PayPal acceptance mark"/>
                        </div>
                    </div>**/}
                   

                    </div>
                    

                   
                    <div class="col-lg-4">

                    
                    <div class="mb-3">
                        <div class="pt-4">

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
                                <p class="mb-0">(Incluyendo impuestos)</p>
                                </strong>
                            </div>
                            <span><strong>$53.98</strong></span>
                            </li>
                        </ul>

                        <button type="button" class="btn btn-primary btn-block">Ir a pagar</button>

                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="pt-4">

                        <a class="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample"
                            aria-expanded="false" aria-controls="collapseExample">
                            Agrega un código de descuento
                            <span><i class="fas fa-chevron-down pt-1"></i></span>
                        </a>

                        <div class="collapse" id="collapseExample">
                            <div class="mt-3">
                            <div class="md-form md-outline mb-0">
                                <input type="text" id="discount-code" class="form-control font-weight-light"
                                placeholder="Enter discount code"/>
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