<template >
    <div class="container-fluid px-0" >
        <!--новости-->
        <div class="container" >
            <h3 class="mx-cauto pt-2 pb-4" >Новости и акции</h3 >
            <div class="row" >
                <div class="news_start_blk row align-content-between" >
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
                            <div class=" nav-arrow mr-4" @click="moveCarousel(-1)" >
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
                                 @click="moveCarousel(1)" >
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
                                      size="sm" >
                                Посмотреть все
                            </b-button >
                        </div >
                    </div >
                </div >
                <div class="col d-flex ofh"
                >
                    <div class='col-12 d-flex align-items-stretch card-carousel-cards_wrapper' :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}" >
                        <div class="col-4 news1 d-flex align-items-end p-0" >
                            <div class="cover_news black_c" >
                                <div class="py-4" >
                                    <div class="d-flex align-items-center justify-content-between" >
                                        <img src="/img/icon/news2.svg" alt="" class="news_icon_round" >
                                        <div >22 мая 2019 г.</div >
                                    </div >
                                </div >
                                <div class="uppercase bold py-2" >
                                    ДО -60% НА ВСЁ ДЛЯ ОТПУСКА
                                </div >
                                <div >
                                    Акция действует в течение ограниченного времени, пока товары имеются в наличии.
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
                        </div >
                        <div class="col-4 news1 d-flex align-items-end p-0" >
                            <div class="cover_news black_c" >
                                <div class="py-4" >
                                    <div class="d-flex align-items-center justify-content-between" >
                                        <img src="/img/icon/news2.svg" alt="" class="news_icon_round" >
                                        <div >22 мая 2019 г.</div >
                                    </div >
                                </div >
                                <div class="uppercase bold py-2" >
                                    ДО -60% НА ВСЁ ДЛЯ ОТПУСКА
                                </div >
                                <div >
                                    Акция действует в течение ограниченного времени, пока товары имеются в наличии.
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
                        </div >
                        <div class="col-4 news1 d-flex align-items-end p-0" >
                            <div class="cover_news black_c" >
                                <div class="py-4" >
                                    <div class="d-flex align-items-center justify-content-between" >
                                        <img src="/img/icon/news2.svg" alt="" class="news_icon_round" >
                                        <div >22 мая 2019 г.</div >
                                    </div >
                                </div >
                                <div class="uppercase bold py-2" >
                                    ДО -60% НА ВСЁ ДЛЯ ОТПУСКА
                                </div >
                                <div >
                                    Акция действует в течение ограниченного времени, пока товары имеются в наличии.
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
                        </div >
                        <div class="col-4 news1 d-flex align-items-end p-0" >
                            <div class="cover_news black_c" >
                                <div class="py-4" >
                                    <div class="d-flex align-items-center justify-content-between" >
                                        <img src="/img/icon/news2.svg" alt="" class="news_icon_round" >
                                        <div >22 мая 2019 г.</div >
                                    </div >
                                </div >
                                <div class="uppercase bold py-2" >
                                    ДО -60% НА ВСЁ ДЛЯ ОТПУСКА
                                </div >
                                <div >
                                    Акция действует в течение ограниченного времени, пока товары имеются в наличии.
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
                        </div >
                    </div >
                </div >
            </div >
        </div >
        <!--акции-->
        <div class="container" >
            <h3 class="mx-cauto pt-2 pb-4" >Новости и акции</h3 >
            <div class="row" >
                <div class="news_start_blk row align-content-between" >
                    <div class="col p-0 " >
                        <img src="/img/icon/label.svg" alt="" class="news_icon" >
                        <div class="zag_news py-3" >Акции</div >
                        <div class="font11" >
                            Не пропусти
                            всё самое интересное!
                        </div >
                    </div >
                    <div class="col p-0" >
                        <div class="d-flex justify-content-center" >
                            <div class=" nav-arrow mr-4" @click="moveCarousel(-1)" >
                                <svg xmlns="http://www.w3.org/2000/svg" class="left_ar_promo" viewBox="0 0 30 30" >

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
                                 @click="moveCarousel(1)" >
                                <svg xmlns="http://www.w3.org/2000/svg" class="right_ar_promo" viewBox="0 0 30 30" >
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
                            <b-button pill class="text-light py-1 button_promo"
                                      variant="info"
                                      size="sm" >
                                Посмотреть все
                            </b-button >
                        </div >
                    </div >
                </div >
                <div class="col d-flex ofh"
                >
                    <div class='col-12 d-flex align-items-stretch card-carousel-cards_wrapper' :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}" >
                        <div class="col-4 news1 d-flex align-items-end p-0" >
                            <div class="cover_news black_c" >
                                <div class="py-4" >
                                    <div class="d-flex align-items-center justify-content-between" >
                                        <img src="/img/icon/label2.svg" alt="" class="news_icon_round" >
                                        <div >22 мая 2019 г.</div >
                                    </div >
                                </div >
                                <div class="uppercase bold py-2" >
                                    ДО -60% НА ВСЁ ДЛЯ ОТПУСКА
                                </div >
                                <div >
                                    Акция действует в течение ограниченного времени, пока товары имеются в наличии.
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
                        </div >
                        <div class="col-4 news1 d-flex align-items-end p-0" >
                            <div class="cover_news black_c" >
                                <div class="py-4" >
                                    <div class="d-flex align-items-center justify-content-between" >
                                        <img src="/img/icon/label2.svg" alt="" class="news_icon_round" >
                                        <div >22 мая 2019 г.</div >
                                    </div >
                                </div >
                                <div class="uppercase bold py-2" >
                                    ДО -60% НА ВСЁ ДЛЯ ОТПУСКА
                                </div >
                                <div >
                                    Акция действует в течение ограниченного времени, пока товары имеются в наличии.
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
                        </div >
                        <div class="col-4 news1 d-flex align-items-end p-0" >
                            <div class="cover_news black_c" >
                                <div class="py-4" >
                                    <div class="d-flex align-items-center justify-content-between" >
                                        <img src="/img/icon/label2.svg" alt="" class="news_icon_round" >
                                        <div >22 мая 2019 г.</div >
                                    </div >
                                </div >
                                <div class="uppercase bold py-2" >
                                    ДО -60% НА ВСЁ ДЛЯ ОТПУСКА
                                </div >
                                <div >
                                    Акция действует в течение ограниченного времени, пока товары имеются в наличии.
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
                        </div >
                        <div class="col-4 news1 d-flex align-items-end p-0" >
                            <div class="cover_news black_c" >
                                <div class="py-4" >
                                    <div class="d-flex align-items-center justify-content-between" >
                                        <img src="/img/icon/label2.svg" alt="" class="news_icon_round" >
                                        <div >22 мая 2019 г.</div >
                                    </div >
                                </div >
                                <div class="uppercase bold py-2" >
                                    ДО -60% НА ВСЁ ДЛЯ ОТПУСКА
                                </div >
                                <div >
                                    Акция действует в течение ограниченного времени, пока товары имеются в наличии.
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
                        </div >
                    </div >
                </div >
            </div >
        </div >



        <!--старое удалить ниже -->
        <div class="container-fluid news-up px-0" >
            <div class="container px-0 " >
                <h3 class="mx-auto text-center pt-2 pb-4" >Новости и акции</h3 >
                <div class="container-news  mx-auto px-0" ref="wrapper" >
                    <div class=" d-flex px-0 card-carousel-cards_wrapper"
                         :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}" >
                        <div class="news-card" v-for="news_item in news"
                             :ref="'main'+news_item.type+''+news_item.id"
                             v-on:mouseover="mouseon(news_item.type+''+news_item.id,news_item.type)"
                             v-on:mouseout="mouseout(news_item.type+''+news_item.id,news_item.type)" >
                            <div class="img-part" :ref="'image'+news_item.type+''+news_item.id" >
                                <img :src="'/uploads/file/'+news_item.image" alt="" class="w-100" >
                            </div >
                            <div class="part-text ofh" :ref="'text'+news_item.type+''+news_item.id" >

                                <div class="text-danger float-left" v-if="news_item.type=='action'" >
                                    АКЦИИ
                                </div >
                                <div class="text-violet float-left" v-else >
                                    НОВОСТИ
                                </div >
                                <div class="action_date float-right" >
                                    {{ news_item.date }}
                                </div >

                                <div class="text18 clear_both text-body pt-3 pb-2 font-weight-bold" >
                                    {{ news_item.name }}
                                </div >
                                <div class="discr-news ofh" :ref="'text2'+news_item.type+''+news_item.id" >
                                    <span v-html="news_item.short_description" ></span >
                                </div >
                            </div >
                            <router-link :to="'/'+news_item.type+'/' + news_item.id"
                                         class="stretched-link" ></router-link >
                        </div >
                    </div >
                </div >
            </div >
        </div >

        <div class="container-fluid px-md-0 bg-blue-grad news-down d-flex flex-column justify-content-end" >
            <div class="container px-0 container-news " >
                <div class="d-md-none justify-content-between arrow-blc d-flex py-3" >
                    <div class="left2 nav-arrow mr-2" @click="moveCarousel(-1)" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.01 16.63" >
                            <title >logoРесурс 2</title >
                            <g id="Слой_2" data-name="Слой 2" >
                                <g id="Слой_1-2" data-name="Слой 1" >
                                    <path class="card-carousel--nav__left2"
                                          :disabled="atHeadOfList"
                                          d="M.12,7.84l0,.06v0A.43.43,0,0,0,.06,8l0,.08a.14.14,0,0,0,0,.06,1.11,1.11,0,0,0,0,.19,1.38,1.38,0,0,0,0,.22.43.43,0,0,1,0,.05l0,.08s0,0,0,.06l0,.07,0,.07a.72.72,0,0,0,.16.2l7.26,7.27a1.08,1.08,0,0,0,1.49,0,1,1,0,0,0,.31-.74,1.06,1.06,0,0,0-.31-.75L3.59,9.37H28a1.05,1.05,0,1,0,0-2.1H3.58L9.06,1.79a1,1,0,0,0,0-1.48,1.06,1.06,0,0,0-1.49,0L.31,7.57A1.17,1.17,0,0,0,.12,7.84Z" />
                                </g >
                            </g >
                        </svg >
                    </div >
                    <div class="right2 nav-arrow mr-2"
                         @click="moveCarousel(1)" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.01 16.63" >
                            <defs >
                            </defs >
                            <title >logoРесурс 1</title >
                            <g id="Слой_2" data-name="Слой 2" >
                                <g id="Слой_1-2" data-name="Слой 1" >
                                    <path class="card-carousel--nav__right2" :disabled="atEndOfList"
                                          d="M28.89,8.79l0-.07v0a.1.1,0,0,0,0,0l0-.08s0,0,0-.06a1.23,1.23,0,0,0,0-.19,1.38,1.38,0,0,0,0-.22s0,0,0,0L29,8a.14.14,0,0,0,0-.07l0-.06,0-.08a1.26,1.26,0,0,0-.16-.2L21.44.3A1.08,1.08,0,0,0,20,.3a1,1,0,0,0-.31.74,1,1,0,0,0,.31.74l5.47,5.48H1.05a1,1,0,0,0,0,2.1H25.43L20,14.83a1.06,1.06,0,0,0-.31.75,1,1,0,0,0,.31.74,1.06,1.06,0,0,0,1.49,0L28.7,9.05A1.09,1.09,0,0,0,28.89,8.79Z" />
                                </g >
                            </g >
                        </svg >
                    </div >
                </div >
                <router-link to="/news"
                             class="btn btn-news btn-block btn-outline-light mb-4 mx-auto py-1 px-0 rounded-0" >
                    СМОТРЕТЬ ВСЁ
                </router-link >
                <div class="justify-content-end arrow-blc d-none d-md-flex" >
                    <div class="left2 nav-arrow mr-2" @click="moveCarousel(-1)" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.01 16.63" >
                            <g id="Слой_2" data-name="Слой 2" >
                                <g id="Слой_1-2" data-name="Слой 1" >
                                    <path class="card-carousel--nav__left2"
                                          :disabled="atHeadOfList"
                                          d="M.12,7.84l0,.06v0A.43.43,0,0,0,.06,8l0,.08a.14.14,0,0,0,0,.06,1.11,1.11,0,0,0,0,.19,1.38,1.38,0,0,0,0,.22.43.43,0,0,1,0,.05l0,.08s0,0,0,.06l0,.07,0,.07a.72.72,0,0,0,.16.2l7.26,7.27a1.08,1.08,0,0,0,1.49,0,1,1,0,0,0,.31-.74,1.06,1.06,0,0,0-.31-.75L3.59,9.37H28a1.05,1.05,0,1,0,0-2.1H3.58L9.06,1.79a1,1,0,0,0,0-1.48,1.06,1.06,0,0,0-1.49,0L.31,7.57A1.17,1.17,0,0,0,.12,7.84Z" />
                                </g >
                            </g >
                        </svg >
                    </div >
                    <div class="right2 nav-arrow mr-2"
                         @click="moveCarousel(1)" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.01 16.63" >
                            <defs >
                            </defs >
                            <g id="Слой_2" data-name="Слой 2" >
                                <g id="Слой_1-2" data-name="Слой 1" >
                                    <path class="card-carousel--nav__right2" :disabled="atEndOfList"
                                          d="M28.89,8.79l0-.07v0a.1.1,0,0,0,0,0l0-.08s0,0,0-.06a1.23,1.23,0,0,0,0-.19,1.38,1.38,0,0,0,0-.22s0,0,0,0L29,8a.14.14,0,0,0,0-.07l0-.06,0-.08a1.26,1.26,0,0,0-.16-.2L21.44.3A1.08,1.08,0,0,0,20,.3a1,1,0,0,0-.31.74,1,1,0,0,0,.31.74l5.47,5.48H1.05a1,1,0,0,0,0,2.1H25.43L20,14.83a1.06,1.06,0,0,0-.31.75,1,1,0,0,0,.31.74,1.06,1.06,0,0,0,1.49,0L28.7,9.05A1.09,1.09,0,0,0,28.89,8.79Z" />
                                </g >
                            </g >
                        </svg >
                    </div >
                </div >
            </div >

        </div >

    </div >
</template >

<script >
    export default {
        name: "main-news-slider",
        props: ['news'],
        data() {
            return {
                currentOffset: 0,

            }
        },
        computed: {
            atEndOfList() {
                // return this.currentOffset <= (this.paginationFactor * -1) * (this.news.length - this.windowSize);
                return false
            },
            atHeadOfList() {
                // return this.currentOffset === 0;
                return false
            },

            paginationFactor() {
                if (screen.width < 400) {
                    return 315
                } else {
                    return 380
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
            moveCarousel(direction) {
                // Find a more elegant way to express the :style. consider using props to make it truly generic
                if (direction === 1 && !this.atEndOfList) {
                    this.currentOffset -= this.paginationFactor;
                } else if (direction === -1 && !this.atHeadOfList) {
                    this.currentOffset += this.paginationFactor;
                }
            },
            mouseon(ref_name, type) {

                let main = 'main' + ref_name
                let image_name = 'image' + ref_name
                let text_name = 'text' + ref_name
                let text2 = 'text2' + ref_name
                let shadow = '#d0172c';

                if (type == 'news') {
                    shadow = '#55408c'
                }
                this.$refs['wrapper'].style.paddingTop = 40 + 'px'
                this.$refs['wrapper'].style.paddingBottom = 40 + 'px'
                this.$refs['wrapper'].style.marginTop = -40 + 'px'
                this.$refs['wrapper'].style.marginBottom = -40 + 'px'
                this.$refs[image_name][0].style.height = 45 + '%';
                this.$refs[main][0].style.height = 550 + 'px';
                this.$refs[main][0].style.width = 420 + 'px';
                this.$refs[main][0].style.boxShadow = "0 0 15px " + shadow;
                this.$refs[main][0].style.marginTop = -25 + 'px';
                this.$refs[main][0].style.marginBottom = -25 + 'px';
                this.$refs[text_name][0].style.height = 55 + '%';
                this.$refs[text2][0].style.height = 120 + 'px';
            },
            mouseout(ref_name, type) {
                let main = 'main' + ref_name
                let name1 = 'image' + ref_name
                let name2 = 'text' + ref_name
                let name3 = 'text2' + ref_name
                this.$refs['wrapper'].style.paddingTop = 0 + 'px'
                this.$refs['wrapper'].style.marginTop = 0 + 'px'
                this.$refs['wrapper'].style.paddingBottom = 0 + 'px'
                this.$refs['wrapper'].style.marginBottom = 0 + 'px'
                this.$refs[main][0].style.height = 500 + 'px';
                this.$refs[main][0].style.width = 380 + 'px';
                this.$refs[main][0].style.marginTop = 0 + 'px';
                this.$refs[main][0].style.marginBottom = 0 + 'px';
                this.$refs[main][0].style.boxShadow = "none";
                this.$refs[name1][0].style.height = 65 + '%';
                this.$refs[name2][0].style.height = 35 + '%';
                this.$refs[name3][0].style.height = 40 + 'px';
            }

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
        margin-right: 25px;
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

    .button_news {
        background: #9eca43;
        border: none;
        font-size: 12px;
        margin: 15px auto;
    }
    .button_promo{
        background: #f39bb9;
        border: none;
        font-size: 12px;
        margin: 15px auto;
    }

    .news1 {
        background: url(/img/style-feed-article-square-16.jpg) no-repeat;
        background-position: center;
        background-size: cover;
        margin-right: 20px;
    }

    .cover_news {
        background-color: rgba(245, 244, 243, 0.9);
        padding: 10px 20px 25px;
    }

    .more_icon {
        width: 5px;
    }

</style >