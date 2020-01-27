<template >
    <div class="container-fluid px-md-0 px-0 py-5 grey-bg subscribe_blk" id="wrapper" >
        <div class="container px-0" >
            <div class="subscribe_wraper bg-white" >
                <div class="container_subscribe py-5" >
                    <div class="text-black bold text-uppercase font17 pb-2" >
                        Подпишитесь на нашу рассылку
                    </div >
                    <div class="font14 pb-4" >
                        и регулярно получайте купоны
                        на розыгрыши бытовой и цифровой техники
                        и других полезных призов!
                    </div >
                    <div v-if="show_form" >
                        <div class="pb-1" >
                            <b-form-input v-model="email" placeholder="email" class="input_subscribe" ></b-form-input >
                        </div >
                        <div class="pb-4" >
                            <input type="checkbox" class="" id="exampleCheck1" v-model="agree" >
                            <label class="text10" for="exampleCheck1" > Я прочитал (-а) и принимаю Политику
                                конфиденциальности</label >
                        </div >
                        <b-button pill class="text-light" variant="info" @click="saveEmail" >
                            <div class="row justify-content-center align-content-center" >
                                <div class="col" >
                                    Подписаться
                                </div >
                                <div class="col" v-show="loading">
                                    <b-spinner type="grow" label="Spinning"  small ></b-spinner >
                                </div >
                            </div >
                        </b-button >
                    </div >
                    <div v-else >
                        <div class="text-black bold text-uppercase font17 pb-2" >
                            Ваш запрос успешно отправлен!
                        </div >
                        <div class="font14">
                            Вам на почту должно прийти подтверждение подписки.
                        </div>
                    </div >
                </div >
            </div >
        </div >
    </div >

</template >

<script >
    const axios = require('axios');
    export default {
        name: "subsrib-form",
        data: function () {
            return {
                email: null,
                agree: false,
                loading: false,
                show_form: true,
                show_tolltip: false
            }
        },
        methods: {
            chechvalid: function () {
                if (!this.disable) {
                    this.show_tolltip = true;
                } else {
                    this.show_tolltip = false;
                }
            },
            removetool: function () {
                this.show_tolltip = false;
            },
            beforeEnter: function (el) {
                el.style.opacity = 0
            },

            enter: function (el, done) {
                Velocity(el, {opacity: 1, fontSize: '1.4em'}, {duration: 300})
                Velocity(el, {fontSize: '1em'}, {complete: done})
            },
            leave: function (el, done) {
                Velocity(el, {translateX: '15px', rotateZ: '50deg'}, {duration: 600})
                Velocity(el, {rotateZ: '100deg'}, {loop: 2})
                Velocity(el, {
                    rotateZ: '45deg',
                    translateY: '30px',
                    translateX: '30px',
                    opacity: 0
                }, {complete: done})
            },
            saveEmail: function () {
                this.loading = true
                let data_request = JSON.stringify({
                    email: this.email,
                });


                let text = ''
                axios.post('/ajax/subscriber/new',
                    "data=" + data_request
                ).then(response => {

                    this.show_form = false;
                    this.loading = false

                }).catch(error => {

                });
            },
        },
        computed: {
            disable: function () {
                let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                if (reg.test(this.email) == false || this.agree == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

    // var toggle = document.querySelector('.toggleButton input')
    // var animate = setInterval(() => {
    //     toggle.checked = !toggle.checked
    // }, 3000)
    //
    // document.querySelector('body').addEventListener('click', () => {
    //     clearInterval(animate);
    // })
</script >

<style scoped >
    .grey-bg {
        background: #f5f4f3;
    }

    .subscribe_blk {

        background: url(/img/fon.svg) center;
    }

    .subscribe_wraper {
        margin: 0 auto;
        width: 100%;
        max-width: 750px;
    }

    .container_subscribe {
        max-width: 300px;
        margin: 0 auto;
    }

    .input_subscribe {
        border-radius: 20px;
        border: 1px solid #3fd5ae;
        padding: 3px 15px;
    }

</style >