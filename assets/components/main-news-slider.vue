<template >
    <div class="container-fluid px-0" >
        <!--новости-->
        <div class="container" >
            <h3 class="mx-cauto pt-2 pb-4" >Новости и акции</h3 >
            <div class="row promo_blk" >
                <div class="news_start_blk row align-content-between d-md-flex d-none" >
                    <div class="col p-0 " >
                        <img src="/img/icon/news.svg" alt="" class="news_icon" >
                        <div class="zag_news py-3" >Новости</div >
                        <div class="font11" >
                            Не пропусти
                            всё самое интересное!
                        </div >
                    </div >
                    <div class="col p-0" >
                        <div class="d-flex justify-content-center" >
                            <div class=" nav-arrow mr-4" @click="slidePrev(s)" >
                                <svg xmlns="http://www.w3.org/2000/svg" class="left_ar" viewBox="0 0 30 30" >
                                    <title >logoРесурс 7</title >
                                    <g id="Слой_2" data-name="Слой 2" >
                                        <g id="Слой_1-2" data-name="Слой 1" :disabled="atHeadOfList" >
                                            <path class="cls-1"
                                                  d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,1.76A13.24,13.24,0,1,0,28.24,15,13.26,13.26,0,0,0,15,1.76Z" />
                                            <path class="cls-1"
                                                  d="M16,20.29A.86.86,0,0,1,15.4,20L12,16.66a2.36,2.36,0,0,1,0-3.32L15.4,10a.88.88,0,0,1,1.24,1.25l-3.37,3.37a.6.6,0,0,0,0,.84l3.37,3.37a.88.88,0,0,1,0,1.25A.86.86,0,0,1,16,20.29Z" />
                                        </g >
                                    </g >
                                </svg >

                            </div >
                            <div class="nav-arrow mr-2"
                                 @click="slideNext()" >
                                <svg xmlns="http://www.w3.org/2000/svg" class="right_ar" viewBox="0 0 30 30" >

                                    <title >logoРесурс 7</title >
                                    <g id="Слой_2" data-name="Слой 2" >
                                        <g id="Слой_1-2" data-name="Слой 1" :disabled="atEndOfList" >
                                            <path class="cls-1"
                                                  d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,1.76A13.24,13.24,0,1,0,28.24,15,13.26,13.26,0,0,0,15,1.76Z" />
                                            <path class="cls-1"
                                                  d="M16,20.29A.86.86,0,0,1,15.4,20L12,16.66a2.36,2.36,0,0,1,0-3.32L15.4,10a.88.88,0,0,1,1.24,1.25l-3.37,3.37a.6.6,0,0,0,0,.84l3.37,3.37a.88.88,0,0,1,0,1.25A.86.86,0,0,1,16,20.29Z" />
                                        </g >
                                    </g >
                                </svg >
                            </div >
                        </div >
                        <div class="text-center" >
                            <b-button pill class="text-light py-1 button_news"
                                      variant="info"
                                      to="/news"
                                      size="sm" >
                                Посмотреть все
                            </b-button >
                        </div >
                    </div >
                </div >
                <div class="col d-flex ofh  pr-0"
                >

                    <hooper :itemsToShow="windowSize"
                            @slide="updateCarousel"
                            ref="carousel"
                            :wheelControl="false"
                            style="height: 100%"
                            class='col-12 d-flex row align-items-stretch card-carousel-cards_wrapper pl-0 pl-md-3  pr-0 '>
                        <slide
                                class="col-lg-4 col-12 col-md-6 d-flex align-items-stretch pr-0 pr-md-2"
                                :key='news_item.id'
                                v-for="(news_item, index) in news">


                            <div :style="'background: url(/uploads/file/'+news_item.preview+') no-repeat; background-position: center; background-size: cover;'"
                            class="d-flex align-items-end col-12 p-0 news_card"
                            >

                                <div class="cover_news black_c col-12"
                                >
                                    <div class="py-4" >
                                        <div class="d-flex align-items-center justify-content-between" >
                                            <img src="/img/icon/news2.svg" alt="" class="news_icon_round" >
                                            <div >{{ news_item.date}}</div >
                                        </div >
                                    </div >
                                    <div class="uppercase bold py-2" >
                                        {{news_item.name}}
                                    </div >
                                    <div >
                                        {{news_item.short_description}}
                                    </div >
                                    <div class="d-flex justify-content-end align-items-center pt-3 bold" >
                                        <div class="font11" >
                                            Подробнее
                                        </div >
                                        <div class="pl-3" >
                                            <img src="/img/icon/more.svg" alt="" class="more_icon" >
                                        </div >
                                    </div >
                                </div >
                                <b-link class='stretched-link'
                                        :href="`/news/${news_item.id}`" ></b-link >
                            </div >

                        </slide>
                    </hooper>



                </div >
            </div >
            <div class="row d-md-none d-flex" >
                <div class="col py-3" >
                    <div class="d-flex justify-content-around" >
                        <div class=" nav-arrow mr-4"  @click="slidePrev()" >
                            <svg xmlns="http://www.w3.org/2000/svg" class="left_ar" viewBox="0 0 30 30" >
                                <title >logoРесурс 7</title >
                                <g id="Слой_2" data-name="Слой 2" >
                                    <g id="Слой_1-2" data-name="Слой 1" :disabled="atHeadOfList" >
                                        <path class="cls-1"
                                              d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,1.76A13.24,13.24,0,1,0,28.24,15,13.26,13.26,0,0,0,15,1.76Z" />
                                        <path class="cls-1"
                                              d="M16,20.29A.86.86,0,0,1,15.4,20L12,16.66a2.36,2.36,0,0,1,0-3.32L15.4,10a.88.88,0,0,1,1.24,1.25l-3.37,3.37a.6.6,0,0,0,0,.84l3.37,3.37a.88.88,0,0,1,0,1.25A.86.86,0,0,1,16,20.29Z" />
                                    </g >
                                </g >
                            </svg >

                        </div >
                        <div class="nav-arrow mr-2"
                             @click="slideNext()" >
                            <svg xmlns="http://www.w3.org/2000/svg" class="right_ar" viewBox="0 0 30 30" >

                                <title >logoРесурс 7</title >
                                <g id="Слой_2" data-name="Слой 2" >
                                    <g id="Слой_1-2" data-name="Слой 1" :disabled="atEndOfList" >
                                        <path class="cls-1"
                                              d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,1.76A13.24,13.24,0,1,0,28.24,15,13.26,13.26,0,0,0,15,1.76Z" />
                                        <path class="cls-1"
                                              d="M16,20.29A.86.86,0,0,1,15.4,20L12,16.66a2.36,2.36,0,0,1,0-3.32L15.4,10a.88.88,0,0,1,1.24,1.25l-3.37,3.37a.6.6,0,0,0,0,.84l3.37,3.37a.88.88,0,0,1,0,1.25A.86.86,0,0,1,16,20.29Z" />
                                    </g >
                                </g >
                            </svg >
                        </div >
                    </div >
                    <div class="text-center" >
                        <b-button pill class="text-light py-1 button_news"
                                  variant="info"
                                  to="/news"
                                  size="sm" >
                            Посмотреть все
                        </b-button >
                    </div >
                </div >
            </div >
        </div >
        <!--акции-->

        <promo-slider :promo="promo" ></promo-slider >

    </div >
</template >

<script >
    import {Hooper, Slide} from 'hooper';
    import 'hooper/dist/hooper.css';
    import promoSlider from './promo-slider'

    export default {
        name: "main-news-slider",
        props: ['news', 'promo'],
        components: {
            promoSlider,
            Hooper,
            Slide,
        },
        data() {
            return {
                carouselData: 1,
            }
        },
        computed: {
            atEndOfList() {
                return this.currentOffset <= (this.paginationFactor * -1) * (this.news.length - this.windowSize);
                // return false
            },
            atHeadOfList() {
                return this.currentOffset === 0;
                // return false
            },

            paginationFactor() {
                if (screen.width < 500) {
                    return screen.width
                } else {
                    return 345
                }
            },
            windowSize() {
                if (screen.width < 400) {
                    return 1
                } else if (screen.width < 1140) {
                    return 2
                } else {
                    return 3
                }
            }
        },
        methods: {
            slidePrev() {
                this.$refs.carousel.slidePrev();
            },
            slideNext() {
                this.$refs.carousel.slideNext();

            },
            updateCarousel(payload) {
                this.carouselData = payload.currentSlide;
            },

        }
    }
</script >

<style scoped >
    .nav-arrow {
        width: 30px;
    }

    @media (min-width: 401px) {
        .arrow-blc {
            width: 100px;
            float: right;
            margin-top: -50px;
        }
    }

    @media (max-width: 400px) {
        .arrow-blc {
            width: 100%;
            margin-top: 50px;
        }
    }

    .news_start_blk {
        background: #f5f4f3;
        border-radius: 15px;
        padding: 0 18px;
        height: 435px;
        width: 150px;
        margin-right: 0px;
    }

    .promo_blk {
        height: 435px;
    }

    .zag_news {
        font-size: 26px;
        color: #000;
        text-transform: uppercase;
        font-family: plumbbold;
    }

    .left_ar {
        fill: #9eca43;

    }

    .right_ar {
        fill: #9eca43;
        transform: rotate(-180deg);
    }

    .left_ar_promo {
        fill: #f39bb9;

    }

    .right_ar_promo {
        fill: #f39bb9;
        transform: rotate(-180deg);
    }

    .news_icon {
        width: 55px;
        margin-top: 35px;
    }

    .news_icon_round {
        width: 45px;
    }

    .news_card:hover > .cover_news {
        background-color: rgba(233, 241, 208, 1);
    }

    .cover_news {
        background-color: rgba(245, 244, 243, 0.9);
        padding: 10px 20px 25px;
    }

    .more_icon {
        width: 5px;
    }

</style >