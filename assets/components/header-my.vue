<template >
    <div class="container-fluid center px-0 mx-0" >
        <div class="container" >
            <div class="d-flex justify-content-between align-items-center" >
                <div class="col-auto ml-0 pl-0" >
                    <img src="/img/logo.png" alt="" class="logo py-3 pr-5" >
                </div >
                <div class="col-auto d-flex" >
                    <div class="col-auto" >
                        <b-button pill class="butt_1" >
                            <div class="row align-items-center" >
                                <div class="col-auto p-0" ><img src="img/icon/baloon.svg" alt="" class="my-icon" >
                                </div >
                                <div class="col-auto " >Как добраться</div >
                            </div >
                        </b-button >
                    </div >
                    <div class="col-auto" >
                        <b-button pill class="butt_1" >
                            <div class="row align-items-center" >
                                <div class="col-auto p-0" ><img src="img/icon/map.svg" alt="" class="my-icon" ></div >
                                <div class="col-auto " >Карта этажей</div >
                            </div >
                        </b-button >


                    </div >
                </div >
                <div class="col-auto" >
                    <div class="row align-items-center " >
                        <div class="col-auto p-0" ><img src="img/icon/clock.svg" alt="" class="my-icon" ></div >
                        <div class="col-auto text-left" >Сегодня открыт до 22:00
                            <div >Время работы</div >
                        </div >
                    </div >

                </div >
            </div >
            <div class="d-none" >
                <ul class="navbar-nav width_min_blk d-flex justify-content-between mx-auto" >
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
                        <router-link class="nav-link link_menu" to="/plainpage/for_renter" >Арендаторам</router-link >
                    </li >
                    <li class="nav-item" >
                        <router-link class="nav-link link_menu" to="/plainpage/ad" >Размещение рекламы в ТЦ
                        </router-link >
                    </li >
                    <li class="nav-item d-inline d-md-none" >
                        <router-link class="nav-link link_menu" to="/our_map" >Карта этажей</router-link >
                    </li >
                    <li class="nav-item d-inline d-md-none" >
                        <router-link class="nav-link link_menu" to="/path" >Как добраться</router-link >
                    </li >
                </ul >
            </div >
        </div >
        <div class="container-fluid delimetr" >
            <div class="container" >
                <div class="d-flex justify-content-between py-4" >
                    <router-link class="text-secondary" to="/news" >
                        <span class="d-block" >
                        Новости и акции
                        </span >
                    </router-link >
                    <span >•</span >
                    <router-link class="text-secondary" to="/news" >
                    <span class="d-block" >
                    Отделы ТЦ
                </span >
                    </router-link >
                    <span >•</span >
                    <router-link class="text-secondary" to="/news" >
                    <span class="d-block" >
                    Контакты
                </span >
                    </router-link >
                    <span >•</span >
                    <router-link class="text-secondary" to="/news" >
                    <span class="d-block" >
                    Арендаторам
                </span >
                    </router-link >
                    <span >•</span >
                    <router-link class="text-secondary" to="/news" >
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
        width: 30px;
        margin: 0 3px 0 10px;
    }

    .butt_1 {
        background: #f2e7e9;
        color: #803556;
        border: none;
    }

    .delimetr {
        border-top: 2px solid #e0dfdf;
    }
</style >