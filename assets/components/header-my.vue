<template >
    <div class="container-fluid center px-0 mx-0" >
        <div class="container" >
            <div class=" justify-content-between align-items-center d-md-flex d-none" >
                <div class="col-lg-4  col-md-3 ml-0 pl-0" >
                    <router-link to="/">
                    <img src="/img/logo.png" alt="" class="img-fluid py-3 pr-lg-2 pr-md-0" >
                    </router-link>
                </div >
                <div class="col-lg-auto d-md-flex d-none" >
                    <div class="col-auto px-4" >
                        <b-button pill class="butt_1" size="sm" to="/contacts">
                            <div class="row align-items-center" >
                                <div class="col-auto p-0" >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.43 20.43"
                                         class="my-icon d-md-none" >
                                        <g id="Слой_2" data-name="Слой 2" >
                                            <g id="Слой_1-2" data-name="Слой 1" >
                                                <circle class="cls-1" cx="10.22" cy="10.22" r="9.97" />
                                                <path class="cls-2"
                                                      d="M10.22,16.36a.26.26,0,0,1-.21-.11L6.3,10.76a4.35,4.35,0,0,1-.66-2.29,4.49,4.49,0,0,1,4.58-4.4,4.49,4.49,0,0,1,4.57,4.4,4.29,4.29,0,0,1-.66,2.28l-3.7,5.5A.26.26,0,0,1,10.22,16.36Zm0-11.79a4,4,0,0,0-4.08,3.9,3.76,3.76,0,0,0,.58,2l3.5,5.19,3.5-5.2a3.78,3.78,0,0,0,.57-2A4,4,0,0,0,10.22,4.57Z" />
                                                <path class="cls-2"
                                                      d="M10.22,10.47a2,2,0,1,1,2.09-2A2.06,2.06,0,0,1,10.22,10.47Zm0-3.53a1.56,1.56,0,0,0-1.6,1.52,1.6,1.6,0,0,0,3.19,0A1.56,1.56,0,0,0,10.22,6.94Z" />
                                            </g >
                                        </g >
                                    </svg >
                                </div >
                                <div class="col-auto " >Как добраться</div >
                            </div >
                        </b-button >
                    </div >
                    <div class="col-auto border-left px-4" >
                        <b-button pill class="butt_1" size="sm" to="/our_map">
                            <div class="row align-items-center" >
                                <div class="col-auto p-0" >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.43 20.43"
                                         class="my-icon d-md-none" >
                                        <g id="Слой_2" data-name="Слой 2" >
                                            <g id="Слой_1-2" data-name="Слой 1" >
                                                <circle class="cls-1" cx="10.22" cy="10.22" r="9.97" />
                                                <path class="cls-2"
                                                      d="M4.32,15.58a.25.25,0,0,1-.16-.06.23.23,0,0,1-.09-.19V6.06a.26.26,0,0,1,.19-.24l3.93-1a.23.23,0,0,1,.21,0,.23.23,0,0,1,.1.2v9.26a.25.25,0,0,1-.19.24l-3.93,1Zm.25-9.32V15L8,14.17V5.42Zm3.68,8.11h0Z" />
                                                <path class="cls-2"
                                                      d="M12.18,15.58h-.06l-3.93-1A.25.25,0,0,1,8,14.37V5.11a.26.26,0,0,1,.1-.2.22.22,0,0,1,.21,0l3.93,1a.26.26,0,0,1,.19.24v9.27a.23.23,0,0,1-.09.19A.25.25,0,0,1,12.18,15.58ZM8.5,14.17l3.43.84V6.26L8.5,5.42Z" />
                                                <path class="cls-2"
                                                      d="M12.18,15.58a.22.22,0,0,1-.15-.06.24.24,0,0,1-.1-.19V6.06a.26.26,0,0,1,.19-.24l3.93-1a.25.25,0,0,1,.22,0,.25.25,0,0,1,.09.2v9.26a.25.25,0,0,1-.19.24l-3.93,1Zm.25-9.32V15l3.43-.84V5.42Zm3.68,8.11h0Z" />
                                            </g >
                                        </g >
                                    </svg >
                                </div >
                                <div class="col-auto " >Карта этажей</div >
                            </div >
                        </b-button >


                    </div >
                </div >
                <div class="col-auto d-md-flex d-none" >
                    <div class="row align-items-center " >
                        <div class="col-auto p-0" ><img src="img/icon/clock.svg" alt=""
                                                        class="my-icon d-lg-inline d-md-none" ></div >
                        <div class="col-auto text-left" >Сегодня открыт до 22:00
                            <div >Время работы</div >
                        </div >
                    </div >

                </div >
            </div >
            <nav class="navbar navbar-expand-lg navbar-light px-2 py-3 d-md-none d-flex" >
                <div class="d-flex d-md-none" >
                    <div class="d-flex justify-content-center p-0 align-items-center" >
                        <router-link to="/">
                        <img src="/img/logo.png" alt="" class="img-fluid px-2 pr-3" >
                        </router-link>
                    </div >
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation" >
                        <span class="navbar-toggler-icon" ></span >
                    </button >
                </div >
                <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul class="navbar-nav d-flex justify-content-between mx-auto" >
                        <li class="nav-item " >
                            <router-link class="nav-link link_menu" to="/news" >Новости и акции</router-link >
                        </li >
                        <li class="nav-item " >
                            <router-link class="nav-link link_menu" to="/department" >Отделы ТЦ</router-link >
                        </li >
                        <li class="nav-item " >
                            <router-link class="nav-link link_menu" to="/contacts" >Контакты</router-link >
                        </li >
                        <li class="nav-item " >
                            <router-link class="nav-link link_menu" to="/plainpage/for_renter" >Арендаторам
                            </router-link >
                        </li >
                        <li class="nav-item" >
                            <router-link class="nav-link link_menu" to="/plainpage/ad" >Размещение рекламы в ТЦ
                            </router-link >
                        </li >
                        <li class="nav-item d-inline d-md-none" >
                            <router-link class="nav-link link_menu" to="/our_map" >Карта этажей</router-link >
                        </li >
                        <li class="nav-item d-inline d-md-none" >
                            <router-link class="nav-link link_menu" to="/contacts" >Как добраться</router-link >
                        </li >
                    </ul >
                </div >
            </nav >
        </div>
            <div class="container-fluid delimetr d-none d-md-block" >
                <div class="container" >
                    <div class="d-flex justify-content-between py-4" >
                        <router-link class="text-secondary" to="/news" >
                        <span class="d-block" >
                        Новости и акции
                        </span >
                        </router-link >
                        <span >•</span >
                        <router-link class="text-secondary" to="/department" >
                    <span class="d-block" >
                    Отделы ТЦ
                </span >
                        </router-link >
                        <span >•</span >
                        <router-link class="text-secondary" to="/contacts" >
                    <span class="d-block" >
                    Контакты
                </span >
                        </router-link >
                        <span >•</span >
                        <router-link class="text-secondary" to="/plainpage/for_renter" >
                    <span class="d-block" >
                    Арендаторам
                </span >
                        </router-link >
                        <span >•</span >
                        <router-link class="text-secondary" to="/plainpage/ad" >
                    <span class="d-block" >
                    Размещение рекламы в ТЦ
                </span >
                        </router-link >
                    </div >
                </div >
            </div >
        </div >

</template >

<script >
    export default {
        name: "header-my",
        props: ['app_state']
    }
</script >

<style scoped >
    .my-icon {
        width: 25px;
        margin: 1px 3px 1px 12px;
    }

    .butt_1 {
        background: #f2e7e9;
        color: #803556;
        border: none;
        fill: none;

    }

    .butt_1:hover {
        background: #803556;
        color: #f2e7e9;
        border: none;
        fill: #f2e7e9;
    }

    .delimetr {
        border-top: 2px solid #e0dfdf;
    }

    .cls-1 {
        stroke: #803556;
        stroke-miterlimit: 10;
        stroke-width: 0.5px;
    }

    .butt_1:hover > .cls-1 {
        fill: none;
        stroke: #803556;
        stroke-miterlimit: 10;
        stroke-width: 0.5px;
    }

    .cls-2 {
        fill: #803556;
    }
</style >