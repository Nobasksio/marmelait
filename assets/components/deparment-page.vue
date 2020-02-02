<template >
    <div class="container" >
        <h3 class="bold pt-2 pb-4" >{{our_renter.name}}</h3 >
        <div class="row" >
            <div class="col-md-3 d-none text-center d-md-flex align-items-center justify-content-center px-md-3" >
                <img :src="'/uploads/file/'+our_renter.logo" alt="" >
            </div >
            <div class="col-md-9 col-12 text-center px-md-0" >
                <img :src="'/uploads/file/'+our_renter.image" alt="" class="img-fluid" >
            </div >
        </div >
        <div class="row py-4" >
            <div class="d-md-none col-6" >
                <div class="col-md-3 col-12 text-center d-flex align-items-center justify-content-center px-0" >
                    <img :src="'/uploads/file/'+our_renter.logo" alt="" >
                </div >
            </div >
            <div class="col-md-3 col-6 text-md-center d-flex flex-column  justify-content-center px-0" >

                <div class="" >
                    {{our_renter.floor}} этаж
                </div >
                <div class="" >
                    <b-button
                            :to="'/our_map/'+our_renter.floor+'/'+our_renter.map_place"
                            pill class="text-light py-1 button_news uppercase"
                            variant="info"
                            @click="show_more = !show_more"
                            size="sm" >
                        Показать на карте
                    </b-button >
                </div >
                <div class="" >
                    <a :href="`http://${our_renter.link}`" class="link_brand" >
                    {{our_renter.link}}
                    </a>
                </div >
            </div >
            <div class="col-8 border-left " >
                <div class="py-md-0 py-3" v-html="our_renter.description" >

                </div >
                <div class="pt-4 text-secondary text-uppercase" >
                    FOLLOW US
                </div >
                <div class="d-flex py-4 justify-content-between" >
                    <div class="row" >
                        <div class="col" v-if="our_renter.instagram != null && our_renter.instagram != ''" >
                            <div class="smm_item " >
                                <div class="smm_in" ><a :href="our_renter.instagram" class="block" ></a >
                                </div >
                            </div >
                        </div >
                        <div class="col" v-if="our_renter.vk != null && our_renter.vk != ''" >
                            <div class="smm_item " >
                                <div class="smm_vk" ><a :href="our_renter.vk" class="block" ></a ></div >
                            </div >
                        </div >
                        <div class="col" v-if="our_renter.facebook != null && our_renter.facebook != ''" >
                            <div class="smm_item " >
                                <div class="smm_fb" ><a :href="our_renter.facebook" class="block" ></a ></div >
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        </div >
    </div >
</template >

<script >
    export default {
        name: "deparment-page",
        props: ['app_state'],
        metaInfo() {
            return {
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Торговый центр МАРМЕЛАЙТ г. Северск. Пространство для шопинга, отдыха и общения, уникальные бренды и атмосфера уютная атмосфера.' }
            ],
            title: this.our_renter.name +' в Торговомы центр МАРМЕЛАЙТ г. Северск',
        }},
        data: function () {
            return {
                id_renter: this.$route.params.id,
            }
        },
        computed: {
            our_renter: function () {
                let self = this;
                console.log('!!!')
                console.log(this.app_state)
                let our_array = [];
                if (this.app_state.renters) {
                    our_array = this.app_state.renters.filter(function (renter) {
                        return renter.id == self.id_renter
                    })
                }
                return our_array[0]
            }
        }
    }
</script >

<style scoped >

</style >