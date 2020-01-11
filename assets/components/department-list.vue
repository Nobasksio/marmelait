<template >
    <div class="container">
        <!--<bread-crumbs-->
                <!--level_name="null"-->
                <!--level_link="null"-->
                <!--page_name="Отделы ТЦ"-->
        <!--&gt;-->

        <!--</bread-crumbs >-->
        <h3 class="bold pt-2 pb-4" >ОТДЕЛЫ ТЦ</h3 >
        <div>
            <b-button
                    squared
                    variant="outline-secondary"
                    class="department_button_active"
                    @click="department_id = 0"
            > Все
            </b-button>
            <b-button
                    squared
                    variant="outline-secondary"
                    class="department_button"
                    :key="department.id"
                    v-for="(department, index) in departments"
                    @click="choose_department(department.id)"
            >{{department.name}}
            </b-button>
        </div>
        <div class="row">
            <div class="col-lg-4 col-12"
                 :key="brand.id"
                 v-for="(brand, index) in departments_brand"
            >
                <router-link :to="'/renter/'+brand.id"><div class="card-brand" >
                    <img :src="'/uploads/file/'+brand.logo" alt="" >
                </div >
                </router-link>
            </div>
        </div>


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
                department_id:0,
                show_search: false,
                search_renter: null,
                departments_searched: this.renters
            }

        },
        methods: {
            choose_department(department_id){
                this.department_id = department_id;
            },
            select_brand(brand) {
                this.selected_brand = brand
                this.show = true
            },
            clean_search() {
                this.show_search = false
            },
            openCat(department, key){
                let name_ref = 'category'+key

                console.log(name_ref)
                console.log(this.$refs[name_ref])
                if (department.open == true){
                    department.open = false
                    this.$refs[name_ref][0].classList.remove('category'+key+'-active')
                } else {
                    department.open = true
                    this.$refs[name_ref][0].classList.add('category'+key+'-active')
                }
            }
        },
        computed:{
            departments_brand: function() {
                let renter_arr = [];
                if (this.department_id == 0) return this.renters;
                this.renters.forEach((item, i, arr1) => {
                    item.departments_id.forEach( (item2) => {
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
    svg{
        transition-duration: 1s;
        transition-timing-function: ease;

    }
    .rotate{
        /*transition-timing-function: ease-out;*/
        -webkit-transform: rotate(-180deg);
        -ms-transform: rotate(-180deg);
        transform: rotate(-180deg);
    }



        .card-brand {
            max-width: 100%;
            background: #fff;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 25px 0px;
            padding: 15px;
            border-radius: 15px;
            height: 130px;
            transition: transform 150ms ease-out;
        }
        .card-brand:hover{
            background: #f5f5f5;

            height: 285px;
            margin-bottom: -155px;
            z-index:10000;
            position: relative;
            transition: transform 150ms ease-out;
        }

</style >