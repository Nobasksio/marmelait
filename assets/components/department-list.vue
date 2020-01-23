<template >
    <div class="container departments_wrapper" >
        <!--<bread-crumbs-->
        <!--level_name="null"-->
        <!--level_link="null"-->
        <!--page_name="Отделы ТЦ"-->
        <!--&gt;-->

        <!--</bread-crumbs >-->
        <h3 class="bold pt-2 pb-4" >ОТДЕЛЫ ТЦ</h3 >
        <div >
            <b-button
                    squared
                    variant="outline-secondary"
                    class="department_button_active"
                    @click="department_id = 0"
            > Все
            </b-button >
            <b-button
                    squared
                    variant="outline-secondary"
                    class="department_button"
                    :key="department.id"
                    v-for="(department, index) in departments"
                    @click="choose_department(department.id)"
            >{{department.name}}
            </b-button >
        </div >
        <div class="row" >
            <div class="col-lg-4 col-12"
                 :key="brand.id"
                 v-for="(brand, index) in departments_brand"
            >

                        <div class="cardbrand_wrapper"
                        >
                            <div class="card-brand" >
                                <router-link :to="'/renter/'+brand.id" class="stretched-link">
                                <div class="img_wrapper" >
                                    <img :src="'/uploads/file/'+brand.logo" alt=""
                                         class="p-3 img-fluid" >



                                </div >
                                </router-link>
                                <div class="more_brand" >
                                    <div class="py-2" >
                                        <span v-for="department in brand.departments" >{{department}} </span >
                                    </div >
                                    <div >
                                        <b-button pill size="sm"
                                                  block
                                                  class=""
                                                  to='/department' variant="outline-info" >
                                            {{brand.floor}} этаж
                                        </b-button >
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
        name: "department-list",
        props: ['departments', 'renters'],
        data() {
            return {
                bg_array: [],
                show: false,
                selected_brand: {
                    image: null,
                    logo: null,
                    floor: null,
                    link: null,
                    desritpion: null,
                    name: null
                },
                department_id: 0,
                show_search: false,
                search_renter: null,
                departments_searched: this.renters
            }

        },
        methods: {
            choose_department(department_id) {
                this.department_id = department_id;
            },
            select_brand(brand) {
                this.selected_brand = brand
                this.show = true
            },
            clean_search() {
                this.show_search = false
            },
            openCat(department, key) {
                let name_ref = 'category' + key

                console.log(name_ref)
                console.log(this.$refs[name_ref])
                if (department.open == true) {
                    department.open = false
                    this.$refs[name_ref][0].classList.remove('category' + key + '-active')
                } else {
                    department.open = true
                    this.$refs[name_ref][0].classList.add('category' + key + '-active')
                }
            }
        },
        computed: {
            departments_brand: function () {
                let renter_arr = [];
                if (this.department_id == 0) return this.renters;
                this.renters.forEach((item, i, arr1) => {
                    item.departments_id.forEach((item2) => {
                        if (item2 == this.department_id) {
                            renter_arr.push(item)
                        }
                    })
                });
                return renter_arr;
            }
        },
        watch: {
            search_renter: function (new_search, old_serach) {
                if ((new_search == null) || (new_search == '')) {
                    this.show_search = false;
                    this.departments_searched = this.renters;
                } else {


                    let our_array = this.renters.filter(function (renter) {
                        return (renter.name.toUpperCase()).indexOf(new_search.toUpperCase()) != -1
                    })
                    this.departments_searched = our_array;
                    this.show_search = true;
                }
            }
        }
    }
</script >

<style scoped >
    .slide-fade-enter-active {
        height: 0px;

    }

    .slide-fade-enter-to {
        height: 100%;

    }

    .slide-fade-leave-active {
        height: 100%;
    }

    .slide-fade-leave-to {

        height: 0px;
    }

    svg {
        transition-duration: 1s;
        transition-timing-function: ease;

    }

    .rotate {
        /*transition-timing-function: ease-out;*/
        -webkit-transform: rotate(-180deg);
        -ms-transform: rotate(-180deg);
        transform: rotate(-180deg);
    }
    .cardbrand_wrapper {
        height: 130px;
        margin: 25px 0px;
        min-width: 100%;
        position: relative;
    }
    .card-brand {
        min-width: 100%;
        width: 1px;
        background: #fff;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 130px;
        border-radius: 15px;
        border: 2px solid #fff;
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        position: absolute;
        z-index: 1;
        overflow: hidden;
    }

    .card-brand:hover {
        background: #f5f5f5;
        height: 285px;
        z-index: 1000;
        position: relative;
    }

    .departments_wrapper {
        padding-bottom: 180px;
    }

    .img_wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 126px;
        min-width: 100%;
    }

    .more_brand {
        display: none;
    }
    .card-brand:hover > .more_brand {
        display: block;
    }

    .more_brand {
        border-top: 2px solid #3fd5ae;
        padding-top: 25px;
        padding-bottom: 15px;
        width: 50%;
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
    }
</style >