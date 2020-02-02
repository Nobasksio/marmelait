<template >
    <div class="container py-5" >
        <div class="row align-items-stretch" >
            <div class="col-6 col-lg-3 d-flex align-items-stretch" >
                <div class="card-cool" >
                    <div >
                        <img src="/img/icon/first.svg" alt="" class="img_we_cool" >
                    </div >
                    <div class="text-cool">
                        Единственный
                        профессиональный Торговый Центр
                        в Северске
                    </div >
                </div >
            </div >
            <div class="col-6 col-lg-3 d-flex align-items-stretch" >
                <div class="card-cool " >
                    <div >
                        <img src="/img/icon/comg.svg" alt="" class="img_we_cool" >
                    </div >
                    <div class="text-cool">
                        Комфортное
                        пространство
                        для комфортного
                        шоппинга
                    </div >
                </div >
            </div >
            <div class="col-6 col-lg-3 d-flex align-items-stretch" >
                <div class="card-cool" >
                    <div >
                        <img src="/img/icon/family.svg" alt="" class="img_we_cool" >
                    </div >
                    <div class="text-cool">
                        Место для
                        общения & отдыха всей семьи
                    </div >
                </div >
            </div >
            <div class="col-6 col-lg-3 align-items-stretch" >
                <div class="card-cool" >
                    <div >
                        <img src="/img/icon/brands.svg" alt="" class="img_we_cool" >
                    </div >
                    <div class="text-cool">
                        Уникальные
                        бренды
                        для города
                    </div >
                </div >
            </div >
        </div >
    </div >
</template >

<script >
    export default {
        name: "we-cool"
    }
</script >

<style scoped >
    .img_we_cool {
        max-height: 100px;
    }

    .card-cool {
        background: #f3dde3;
        border-radius: 15px;
        padding: 40px;
        height: 100%;
        color:#803556;
        font-size: 18px;
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
    }
    .card-cool:hover {
        background: #fae3ea;
        font-size: 19px;
    }
    .text-cool{
        padding-top: 30px;

    }

    @keyframes tada {
        from {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }

        10%,
        20% {
            -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
            transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
        }

        30%,
        50%,
        70%,
        90% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
        }

        40%,
        60%,
        80% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
        }

        to {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
    }

    .tada {
        -webkit-animation-name: tada;
        animation-name: tada;
    }
</style >