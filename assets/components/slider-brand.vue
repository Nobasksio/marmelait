<template >
    <div class="container-fluid indigo-bg" >

        <div class="container ofh pt-5" >
            <div class="row card-carousel-cards_wrapper"
                 :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}" >
                <div class="col-lg-4 brand-col" >
                    <div class="card-brand" >
                        <img src="img/hm.png" alt="" >
                    </div >
                    <div class="card-brand2" >
                        <img src="img/ostin.png" alt="" >
                    </div >

                </div >
                <div class="col-lg-4 brand-col" >
                    <div class="card-brand" >
                        <img src="img/hm.png" alt="" >
                    </div >
                    <div class="card-brand2" >
                        <img src="img/ostin.png" alt="" >
                    </div >

                </div >
                <div class="col-lg-4 brand-col" >
                    <div class="card-brand" >
                        <img src="img/hm.png" alt="" >
                    </div >
                    <div class="card-brand2" >
                        <img src="img/ostin.png" alt="" >
                    </div >

                </div >
                <div class="col-lg-4 brand-col" >
                    <div class="card-brand" >
                        <img src="img/hm.png" alt="" >
                    </div >
                    <div class="card-brand" >
                        <img src="img/ostin.png" alt="" >
                    </div >

                </div >
            </div >
        </div >


        <div class="container ofh px-0 d-none" >
            <div class="container d-flex justify-content-between card-carousel-cards_wrapper px-0"
                 :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}" >
                <div class="card-brand d-flex flex-column justify-content-between" v-for="brand in brands" >
                    <div class="py-5 border-grey border-bottom h-65 d-flex align-items-center justify-content-center" >
                        <div class="d-flex " >
                            <router-link :to="'/renter/' + brand.id" class="" >
                                <img :src="'/uploads/file/'+brand.logo" alt=""
                                     class="logo_brand_main align-items-center" >
                            </router-link >
                        </div >

                    </div >
                    <div class="text-center py-2 px-3" >
                    <span v-for="department in brand.departments" >
                        {{ department }}
                    </span >
                    </div >
                    <router-link :to="'/our_map/'+brand.floor+'/'+brand.map_place+'/'"
                                 class="btn btn-block rounded-0 btn-outline-danger py-1 px-0 button_floor_red" >
                        {{brand.floor }} ЭТАЖ
                    </router-link >

                </div >
            </div >
        </div >

        <div class="container px-0" >
            <div class="d-md-none justify-content-between arrow-blc d-flex py-3" >
                <div class="left2 nav-arrow mr-2" @click="moveCarousel(-1)" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.01 16.63" >
                        <title >logoРесурс 2</title >
                        <g id="Слой_2" data-name="Слой 2" >
                            <g id="Слой_1-2" data-name="Слой 1" >
                                <path class="card-carousel--nav__left"
                                      :disabled="atHeadOfList"
                                      d="M.12,7.84l0,.06v0A.43.43,0,0,0,.06,8l0,.08a.14.14,0,0,0,0,.06,1.11,1.11,0,0,0,0,.19,1.38,1.38,0,0,0,0,.22.43.43,0,0,1,0,.05l0,.08s0,0,0,.06l0,.07,0,.07a.72.72,0,0,0,.16.2l7.26,7.27a1.08,1.08,0,0,0,1.49,0,1,1,0,0,0,.31-.74,1.06,1.06,0,0,0-.31-.75L3.59,9.37H28a1.05,1.05,0,1,0,0-2.1H3.58L9.06,1.79a1,1,0,0,0,0-1.48,1.06,1.06,0,0,0-1.49,0L.31,7.57A1.17,1.17,0,0,0,.12,7.84Z" />
                            </g >
                        </g >
                    </svg >
                </div >
                <div class="right2 nav-arrow mr-2"
                     @click="moveCarousel(1)" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.01 16.63" >

                        <g id="down" :class="'cls-'+key" data-name="Слой 1" >
                            <path :disabled="atEndOfList"
                                  d="M27.52,35l.07,0,.12,0,.09,0,.09,0,.11-.06a1.18,1.18,0,0,0,.28-.22L38.56,24.34a1.52,1.52,0,0,0,0-2.1,1.47,1.47,0,0,0-2.1,0L28.72,30l-1.51,1.46L25.74,30h0L18,22.23A1.48,1.48,0,0,0,17,21.8a1.47,1.47,0,0,0-1,.43,1.5,1.5,0,0,0,0,2.11L26.17,34.61a1.61,1.61,0,0,0,.38.27l.09,0,0,0h.07l.11,0,.08,0,.27,0A1.35,1.35,0,0,0,27.52,35Z" />
                            <path d="M27.22,54.44A27.22,27.22,0,1,1,54.44,27.22,27.25,27.25,0,0,1,27.22,54.44ZM27.22,3A24.22,24.22,0,1,0,51.44,27.22,24.25,24.25,0,0,0,27.22,3Z" />
                        </g >

                    </svg >
                </div >
            </div >
            <div class="justify-content-between arrow-blc d-none d-md-flex pb-3" >
                <div class="col" ></div >
                <div class="col text-center" >
                    <b-button pill class="text-light" variant="info">
                        Посмотреть все
                    </b-button >
                </div >
                <div class="col d-flex justify-content-end">
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
            </div >
            <router-link to='/department' class="d-none" >
                <button type="button"
                        class="clearfix btn btn-block rounded-0 btn-outline-danger bg-red-grad mb-lg-5  mt-lg-3 my-3 py-1 px-0 border-2 button_floor_red bg-red-grad" >
                    Смотреть все отделы
                </button >
            </router-link >
        </div >

    </div >
</template >

<script >
    export default {
        name: "slider-brand",
        props: ['brands'],
        data() {
            return {
                currentOffset: 0,

            }
        },
        computed: {
            atEndOfList() {
                // return this.currentOffset <= (this.paginationFactor * -1) * (this.brands.length - this.windowSize);
                return false
            },
            atHeadOfList() {
                // return this.currentOffset === 0;
                return false
            },
            paginationFactor() {
                if (screen.width < 400) {
                    return 340
                } else {
                    return 400
                }
            },
            windowSize() {
                if (screen.width < 400) {
                    return 1
                } else {
                    return 5
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
            oncursor() {

            }

        }

    }
</script >

<style scoped >
    .indigo-bg {
        background: #f0fbf6;
    }

    .nav-arrow {
        width: 30px;
    }

    @media (min-width: 401px) {
        .card-brand2 {
            width: 100%;
            background: #e0f7ee;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 25px 0px;
            border-radius: 15px;
            height: 130px;
            border:2px solid #e0f7ee;
            transition: transform 150ms ease-out;
        }
        .card-brand2:hover{
            background: #ffffff;
            border:2px solid #3fd5ae;
            height: 285px;
            margin-top: -155px;
            z-index:10000;
            position: relative;
            transition: transform 150ms ease-out;
        }
        .card-brand {
            width: 100%;
            background: #e0f7ee;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 25px 0px;
            border-radius: 15px;
            height: 130px;
            border:2px solid #e0f7ee;
            transition: transform 150ms ease-out;
        }
        .card-brand:hover{
            background: #ffffff;
            border:2px solid #3fd5ae;
            height: 285px;
            margin-bottom: -155px;
            z-index:10000;
            position: relative;
            transition: transform 150ms ease-out;
        }
    }

    @media (max-width: 400px) {
        .card-brand {
            min-width: 340px;
            margin: 0 0px 0 0;
        }
    }

    .left_ar {
        fill: #3fd5ae;

    }

    .right_ar {
        fill: #3fd5ae;
        transform: rotate(-180deg);
    }

    .brand-col {

    }
</style >