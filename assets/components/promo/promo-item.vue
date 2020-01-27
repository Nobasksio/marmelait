<template >
    <div class="card_news" :id="promo.type+''+promo.id">
        <div >
            <img :src="'/uploads/file/'+promo.image" alt="" class="img-fluid">
        </div >
        <div >
            <div class="row pt-3" >
                <div class="col-md-auto d-none d-md-block" >
                    <img src="/img/icon/news2.svg" alt="" class="news_icon_round" v-if="promo.type == 'news'">
                    <img src="/img/icon/label2.svg" alt="" class="news_icon_round " v-else>
                </div >
                <div class="col-8 flex-grow-1 border-left" >
                    <div class="uppercase text-black bold h3" > {{promo.name}}
                    </div >
                    <div >
                        {{promo.short_description}}
                    </div >
                    <div >
                        <b-button pill class="text-light py-1 button_news"
                                  :class="{'button_news' : promo.type == 'news',  'button_promo' : promo.type != 'news',}"
                                  variant="info"
                                  @click="show_more = !show_more"
                                  size="sm" >
                            <div class="d-flex">
                                <div >
                                    {{show_more ? 'Свернуть': "Читать"}}
                                </div >
                                <div class="pl-2">
                                    <img src="/img/icon/morew.svg" alt="" class="more_icon" :class="{  'rotate180':show_more }">
                                </div >
                            </div >
                        </b-button >
                    </div >
                    <div v-show="show_more" v-html="promo.description">

                    </div>
                </div >
                <div class="col" >
                    {{promo.date}}
                </div >
            </div >
        </div >
    </div >
</template >

<script >
    export default {
        name: "promo-item",
        props:['promo'],
        data (){
            return {
                show_more:false
            }
        }
    }
</script >

<style scoped >
    .card_news {
        max-width: 960px;
        margin: 15px auto;
        padding-bottom: 20px;
    }

    .news_icon_round {
        width: 90px;
    }
    .more_icon{
        width: 10px;
        fill:#fff;
        transition-duration: .5s;
    }
    .rotate180{
        transform: rotate(180deg);

    }
</style >