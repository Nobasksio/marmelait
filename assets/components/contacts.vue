<template >
    <div class="container-fluid px-0 mx-0" >
        <!--<bread-crumbs-->
        <!--level_name="null"-->
        <!--level_link="null"-->
        <!--page_name="Контакты"-->
        <!--&gt;-->
        <!--</bread-crumbs >-->
        <div class="row_my map pb-5" id="map2" >
            <div class="wa" >
            </div >
        </div >
        <div class="container-fluid bg-contact py-5" >


            <div class="container px-md-5 mb-md-5" >
                <div class="row align-items-stretch flex-column-reverse flex-md-row" >
                    <div class="col-md-6 col-12 d-flex align-items-stretch " >
                        <div class="col-12 bg-white py-3 px-4" >
                            <div class="font25 bold border_contact pb-3" >
                                КОНТАКТЫ
                            </div >
                            <div class="pt-3 pb-1" >
                                <img src="/img/icon/phone.svg" alt="" class="icon25" >
                            </div >
                            <div class="font20" >
                                {{app_state.phone.phone}}
                            </div >
                            <div class="pt-3 pb-1" >
                                <img src="/img/icon/letter.svg" alt="" class="icon25" >
                            </div >
                            <div class="font20 pb-3" >
                                {{app_state.phone.mail}}
                            </div >
                        </div >
                    </div >
                    <div class="col-md-6 col-12 d-flex align-items-stretch" >
                        <div class="col-12 bg-contact2 pt-3">
                            <div class="font25 bold border_contact pb-2 text-uppercase" >
                                как добраться
                            </div >
                            <div class="pb-4" >
                                <input type="text" class="form-control rounded-0 myinput" placeholder="Откуда"
                                       id="from"
                                       v-model="from"
                                >
                                <input type="text" class="form-control rounded-0 bg-light myinput"
                                       placeholder="ТЦ Мармелайт, г. Cеверск, ул. Курчатова 11А" readonly >
                                <button type="button" @click="make_path"
                                        class="btn btn-block rounded-0 py-3 px-0 button_indigo" >
                                    Построить маршрут
                                </button >
                            </div >
                        </div>
                    </div >

                </div >

                <!--<div class="contact_card " v-if="true" >-->
                    <!--<h1 class="text-center py-5 text-body" >КАК ДОБРАТЬСЯ</h1 >-->
                    <!--<div class="px-4 pb-5" >-->
                        <!--<input type="text" class="form-control text-center rounded-0 " placeholder="Откуда"-->
                               <!--id="from"-->
                               <!--v-model="from"-->
                        <!--&gt;-->
                        <!--<input type="text" class="form-control text-center rounded-0 bg-light"-->
                               <!--placeholder="ТЦ Мирамикс, г. Томск, ул. Проспект Мира 36" readonly >-->
                        <!--<button type="button" @click="make_path"-->
                                <!--class="btn btn-block rounded-0 btn-outline-danger bg-red-grad py-2 px-0 border-2 button_floor_red bg-red-grad" >-->
                            <!--Построить маршрут-->
                        <!--</button >-->
                    <!--</div >-->
                <!--</div >-->
                <!--<div class="contact_card" v-else >-->
                    <!--<h1 class="text-center py-5 text-body" >КОНТАКТЫ</h1 >-->
                    <!--<div class="row pb-5 px-5" >-->
                        <!--<div class="col pl-5 py-4 d-none d-md-block" >-->
                            <!--<div class="pb-3" >-->
                                <!--<span class="text-grey" >Режим работы:</span ><br >-->
                                <!--ежедневно с 10:00 до 21:00-->
                            <!--</div >-->
                            <!--<div >-->
                                <!--<span class="text-grey" >Адрес</span ><br >-->
                                <!--г. Томск, пр. Мира, 36-->
                            <!--</div >-->
                        <!--</div >-->

                        <!--<div class="col border-left border-1 py-4 d-block d-md-none" >-->
                            <!--<div class="pb-3" >-->
                                <!--<span class="text-grey" >Режим работы:</span ><br >-->
                                <!--ежедневно с 10:00 до 21:00-->
                            <!--</div >-->
                            <!--<div >-->
                                <!--<span class="text-grey" >Адрес</span ><br >-->
                                <!--г. Томск пр.Мира, 36-->
                            <!--</div >-->
                        <!--</div >-->


                        <!--<div class="col border-left border-1 py-4" >-->
                            <!--<div class="pb-3" >-->
                        <!--<span class="text-grey" >-->
                            <!--Размещение рекламы<br >-->
                            <!--на территории ТЦ:-->
                        <!--</span >-->
                            <!--</div >-->
                            <!--<div >-->

                                <!--+7 (3822) 900-403<br >-->
                                <!--Администрация ТЦ: тел. 900-467 доп 1-->
                                <!--<span class="text-danger" >-->
                        <!--</span >-->
                            <!--</div >-->
                        <!--</div >-->
                        <!--<div class="col border-left border-1 py-4" >-->
                            <!--<div class="pb-3" >-->
                        <!--<span class="text-grey" >-->
                            <!--Департамент маркетинга,<br >-->
                            <!--Digital:<br >-->
                        <!--</span >-->
                            <!--</div >-->
                            <!--<div >-->

                                <!--+7 (3822) 900-400 доп 1611<br >-->
                                <!--<span class="text-danger" >-->
                            <!--infomiramix@tomsk.ru-->
                        <!--</span >-->
                            <!--</div >-->
                        <!--</div >-->
                        <!--<div class="col border-left border-1 py-4" >-->
                            <!--<div class="pb-3" >-->
                        <!--<span class="text-grey" >Отдел арендных<br >-->
                            <!--отношений:</span >-->
                            <!--</div >-->
                            <!--<div >-->
                                <!--+7 (3822) 900-992<br >-->
                                <!--arenda@lama.tomsk.ru-->
                            <!--</div >-->
                        <!--</div >-->
                    <!--</div >-->
                <!--</div >-->
            </div >
        </div >
    </div >
</template >

<script >

    export default {
        name: "contacts",
        props: ['path_show','app_state'],
        data: function () {
            return {
                from: null
            }
        },
        metaInfo: {
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Торговый центр МАРМЕЛАЙТ г. Северск. Пространство для шопинга, отдыха и общения, уникальные бренды и атмосфера уютная атмосфера.' }
            ],
            title: 'Контаты. Как добраться до Торгового центра МАРМЕЛАЙТ г. Северск',
        },
        mounted: function () {
            ymaps.ready(function () {
                // Создание карты.
                var myMap = new ymaps.Map("map2", {
                    center: [56.593713, 84.909707],
                    zoom: 17,
                    controls: ['zoomControl'],
                });
                var suggestView = new ymaps.SuggestView(
                    'from', // ID input'а
                    {
                        offset: [-2, 3], // Отступы панели подсказок от её положения по умолчанию. Задаётся в виде смещений по горизонтали и вертикали относительно левого нижнего угла элемента input.
                        // Ширина панели подсказок
                        results: 6, // Максимальное количество показываемых подсказок.
                        boundedBy: [[55, 81], [58, 87]]
                    });

                var myGeoObject = new ymaps.GeoObject({
                    geometry: {
                        type: "Point", // тип геометрии - точка
                        coordinates: [56.593713, 84.909707] // координаты точки
                    }
                });
                var myPlacemark = new ymaps.Placemark([56.593713, 84.909707], {

                    // Хинт показывается при наведении мышкой на иконку метки.
                    hintContent: 'ТЦ Мармелайн',
                    // Балун откроется при клике по метке.
                    balloonContent: 'ТЦ Мармелайт, г. северск, ул. Курчатова 11А',
                }, {
                    iconColor: '#B52F18',
                });

                // После того как метка была создана, добавляем её на карту.
                myMap.geoObjects.add(myPlacemark);

            });
        },
        methods: {
            make_path() {
                $('#map2').html('');
                var myMap = new ymaps.Map("map2", {
                    center: [56.513742, 84.973629],
                    zoom: 16,
                    controls: ['zoomControl'],
                });

                var multiRoute = new ymaps.multiRouter.MultiRoute({
                    referencePoints: [
                        'г. Северск, ' + this.from,
                        'ТЦ Мармелайт, г. северск, ул. Курчатова 11А'
                    ],

                },);

                // Добавление маршрута на карту.
                myMap.geoObjects.add(multiRoute);
            }
        }

    }
</script >

<style scoped >
    .bg-contact {
        background: #f0fbf6;
    }

    .bg-contact2 {
        background: #e0f7ee;
    }

    .icon25 {
        width: 25px;
    }

    .border_contact {
        border-bottom: 1px solid #3fd5ae;
    }
    .myinput{
        height: 57px;
    }
    .button_indigo{
        background: #3fd5ae;
        color:#fff;
    }
    .button_indigo:hover{
        cursor: pointer;
        background: #44e2b9;
    }
    @media (max-width: 400px) {
        .map{
            height: 70%;
        }
    }
</style >