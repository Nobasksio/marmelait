<template >
    <div >
        <div class="container-fluid px-0 py-5  border-white border-bottom d-none d-md-block" >
            <div class="container_min mx-auto text-secondary" >
                <div class="row text14 " >
                    <div class="col-3 align-content-center flex-wrap text-black bold " >
                        <div class="text-uppercase">
                            +{{ phone }}<br >
                            <span v-html="address"></span>
                        </div >
                        <!--<div class="text10 pt-3" >-->
                            <!--<router-link to="/plainpage/right" class="text-addres" > Правила пребывания в МираМикс</router-link >-->
                        <!--</div >-->
                    </div >
                    <div class="col-3" >
                        <div ><a href="/" class="text-secondary" >О проекте</a ></div >
                        <div >
                            <router-link to="/news" class="text-secondary" >Новости и акции</router-link >
                        </div >
                        <div >
                            <router-link to="/department" class="text-secondary" >Отделы ТЦ</router-link >
                        </div >
                    </div >
                    <div class="col-3" >
                        <div >
                            <router-link to="/contacts" class="text-secondary" >Контакты</router-link >
                        </div >
                        <div >
                            <router-link to="/plainpage/for_renter" class="text-secondary" >Арендаторам</router-link >
                        </div >
                        <div >
                            <router-link to="/plainpage/ad" class="text-secondary" >Размещение рекламы в ТЦ</router-link >
                        </div >
                    </div >
                    <div class="col-3" >
                        <div class="row social_media_blk py-4" >
                            <div class="col" >
                                <div class="smm_item  mx-auto" >
                                    <div class="smm_in" ><a href="https://instagram.com/tc_miramiks" class="block" ></a >
                                    </div >
                                </div >
                            </div >
                            <div class="col" >
                                <div class="smm_item  mx-auto" >
                                    <div class="smm_vk" ><a href="https://vk.com/miramiks.tomsk" class="block" ></a ></div >
                                </div >
                            </div >
                            <div class="col" >
                                <div class="smm_item  mx-auto" >
                                    <div class="smm_fb" ><a href="https://vk.com/miramiks.tomsk" class="block" ></a ></div >
                                </div >
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        </div >
        <div class="container-fluid d-md-none d-block" >
            <div class="row" >
                <div class="col-12 text-center pt-3 text-uppercase" >
                    +{{ phone }}<br >
                    <span v-html="address"></span>

                </div >
                <div class="col-6" >
                    <div class="text-center py-2" >
                        <router-link to="/news" class="text-grey" >Новости и акции</router-link >
                    </div >
                    <div class="text-center py-2" >
                        <router-link to="/contacts" class="text-grey" >Контакты</router-link >
                    </div >
                    <div class="text-center py-2" >
                        <router-link to="/plainpage/for_renter" class="text-grey" >Арендатору</router-link >
                    </div >
                </div >
                <div class="col-6" >
                    <div class="text-center py-2" >
                        <router-link to="/plainpage/ad" class="text-grey" >Реклама в ТЦ</router-link >
                    </div >
                    <div class="text-center py-2" >
                        <router-link to="/department" class="text-grey" >Отделы ТЦ</router-link >
                    </div >
                    <div class="text-center py-2" >
                        <router-link to="/our_map" class="text-grey" >Карта этажей</router-link >
                    </div >
                </div >
                <div class="col-12 d-flex py-4">
                    <div class="col" >
                        <div class="smm_item  mx-auto" >
                            <div class="smm_in" ><a href="https://instagram.com/tc_miramiks" class="block" ></a >
                            </div >
                        </div >
                    </div >
                    <div class="col" >
                        <div class="smm_item  mx-auto" >
                            <div class="smm_vk" ><a href="https://vk.com/miramiks.tomsk" class="block" ></a ></div >
                        </div >
                    </div >
                    <div class="col" >
                        <div class="smm_item  mx-auto" >
                            <div class="smm_fb" ><a href="https://vk.com/miramiks.tomsk" class="block" ></a ></div >
                        </div >
                    </div >
                </div>
            </div >
        </div >
    </div >
</template >

<script >
    export default {
        name: "footer-my",
        props:['phone','address']
    }
</script >

<style scoped >

</style >