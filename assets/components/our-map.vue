<template >
    <div class="row_my map" >
        <!--<bread-crumbs-->
        <!--level_name="null"-->
        <!--level_link="null"-->
        <!--page_name="Карта этажей"-->
        <!--&gt;-->
        <!--</bread-crumbs >-->
        <div class="wa map" >
            <div class="container " >
                <div class="row justify-content-end" >
                    <div class="btn-group pb-3 " role="group" aria-label="Basic example" >
                        <b-button
                                squared
                                variant="outline-secondary"
                                class="department_button"
                                :class="{ 'department_button_active': floor1}"

                                @click="show1" >1
                            этаж
                        </b-button >
                        <b-button squared
                                  variant="outline-secondary"
                                  class="department_button"
                                :class="{ 'department_button_active': floor2}" @click="show2" >2
                            этаж
                        </b-button >
                    </div >
                </div >
            </div >
            <div class="row_manage" >
                <div class="card_on_map" v-show="show_card" id="card_brend" v-draggable >
                    <div class="close2 fr" @click="close_card" ></div >
                    <div class="p-4 ofscroll2" >
                        <div class="container-fluid text-center" >
                            <img :src="'/uploads/file/'+active_renter.logo" alt="" class="logo_on_map img-fluid" >
                        </div >
                        <div class="h3 text-body pt-4 text-center" >
                            {{ active_renter.name}}
                        </div >
                        <div class="h4 text-body text-center" >
                            {{ active_floor}} этаж
                        </div >

                        <div class="descr_part text-body" >
                            <span v-html="active_renter.description" ></span >
                        </div >
                    </div >
                    <div class="more_on_map" >
                        <router-link :to="'/renter/'+active_renter.id" class='block_href' id="link" >
                            ПОДРОБНЕЕ
                        </router-link >
                    </div >
                </div >
            </div >
            <div class="help" ></div >

            <div class="container-fluid px-0" >
                <div class="container px-5 py-5 ofh" v-show="floor1"
                >
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" ref="floor1" viewBox="0 0 1202.6 552.1" >

                            <title >logoРесурс 1</title >


                            <polygon class="cls-1"
                                     points="1149.8 0.1 0 0.1 0 552.1 1149.8 552.1 1149.8 101.2 1202.6 101.2 1202.6 0.1 1149.8 0.1" />

                            <g >
                                <rect ref='place1' @click="showOnMap(1)"
                                      class="cls-2" x="1149.8" y="81.9" width="16.5" height="19.3" />
                            </g >
                            <g >
                                <rect ref='place2' @click="showOnMap(2)"
                                      class="cls-2" x="1178.8" y="81.9" width="23.8" height="19.3" />
                            </g >
                            <g >
                                <rect ref='place3' @click="showOnMap(3)"
                                      class="cls-2" x="1112.8" y="0.2" width="37" height="40.3" />
                            </g >
                            <g >
                                <rect ref='place4' @click="showOnMap(4)"
                                      class="cls-2" x="1086.8" y="0.2" width="13.5" height="40.5" />
                            </g >
                            <g >
                                <rect ref='place5' @click="showOnMap(5)"
                                      class="cls-2" x="1086.8" y="53.1" width="13.5" height="48" />
                            </g >
                            <g >
                                <rect ref='place6' @click="showOnMap(6)"
                                      class="cls-2" x="1042.4" y="0.2" width="31.9" height="40.2" />
                            </g >
                            <g >
                                <rect ref='place7' @click="showOnMap(7)"
                                      class="cls-2" x="1042.4" y="52.8" width="31.9" height="48.3" />
                            </g >
                            <g >
                                <rect ref='place8' @click="showOnMap(8)"
                                      class="cls-2" x="979.1" y="113.5" width="50.8" height="48.3" />
                            </g >
                            <g >
                                <rect ref='place9' @click="showOnMap(9)"
                                      class="cls-2" x="1042.4" y="113.6" width="107.4" height="165.6" />
                            </g >
                            <g >
                                <rect ref='place10' @click="showOnMap(10)"
                                      class="cls-2" x="1109.7" y="504.7" width="33" height="15.8" />
                            </g >
                            <g >
                                <rect ref='place11' @click="showOnMap(11)"
                                      class="cls-2" x="1042.4" y="452.2" width="18.5" height="51.4" />
                            </g >
                            <g >
                                <rect ref='place12' @click="showOnMap(12)"
                                      class="cls-2" x="1073.4" y="452.2" width="30.8" height="51.4" />
                            </g >
                            <g >
                                <rect ref='place13' @click="showOnMap(13)"
                                      class="cls-2" x="1042.4" y="291.8" width="18.5" height="51.4" />
                            </g >
                            <g >
                                <rect ref='place14' @click="showOnMap(14)"
                                      class="cls-2" x="1073.4" y="291.8" width="30.8" height="51.4" />
                            </g >
                            <g >
                                <rect ref='place15' @click="showOnMap(15)"
                                      class="cls-2" x="1042.4" y="403.9" width="61.8" height="36" />
                            </g >
                            <g >
                                <rect ref='place16' @click="showOnMap(16)"
                                      class="cls-2" x="1042.4" y="355.6" width="61.8" height="36" />
                            </g >
                            <g >
                                <rect ref='place17' @click="showOnMap(17)"
                                      class="cls-2" x="1066.1" y="172.9" width="41.3" height="21.9" />
                            </g >
                            <g >
                                <rect ref='place18' @click="showOnMap(18)"
                                      class="cls-2" x="1117" y="449.5" width="13.3" height="14.1" />
                            </g >
                            <g >
                                <rect ref='place19' @click="showOnMap(19)"
                                      class="cls-2" x="1135.6" y="449.5" width="14.2" height="14.1" />
                            </g >
                            <g >
                                <rect ref='place20' @click="showOnMap(20)"
                                      class="cls-2" x="1117" y="476.1" width="13.3" height="13.7" />
                            </g >
                            <g >
                                <rect ref='place21' @click="showOnMap(21)"
                                      class="cls-2" x="1135.5" y="476.1" width="14.3" height="13.7" />
                            </g >
                            <g >
                                <rect ref='place22' @click="showOnMap(22)"
                                      class="cls-2" x="829.7" y="290.3" width="66.9" height="26.3" />
                            </g >
                            <g >
                                <rect ref='place23' @click="showOnMap(23)"
                                      class="cls-2" x="465.7" y="445.8" width="34.5" height="66" />
                            </g >
                            <g >
                                <rect ref='place24' @click="showOnMap(24)"
                                      class="cls-2" x="330.7" y="445.8" width="86.5" height="106.3" />
                            </g >
                            <g >
                                <rect ref='place25' @click="showOnMap(25)"
                                      class="cls-2" x="182.4" y="445.8" width="135.8" height="106.3" />
                            </g >
                            <g >
                                <rect ref='place26' @click="showOnMap(26)"
                                      class="cls-2" x="512.7" y="445.8" width="33.3" height="106.3" />
                            </g >
                            <g >
                                <rect ref='place27' @click="showOnMap(27)"
                                      class="cls-2" x="558.5" y="445.8" width="141.6" height="106.3" />
                            </g >
                            <g >
                                <rect ref='place28' @click="showOnMap(28)"
                                      class="cls-2" y="445.8" width="169.9" height="106.3" />
                            </g >
                            <g >
                                <rect ref='place29' @click="showOnMap(29)"
                                      class="cls-2" x="429.7" y="445.8" width="23.5" height="29.9" />
                            </g >
                            <g >
                                <rect ref='place30' @click="showOnMap(30)"
                                      class="cls-2" x="429.7" y="524.4" width="23.5" height="27.7" />
                            </g >
                            <g >
                                <rect ref='place31' @click="showOnMap(31)"
                                      class="cls-2" x="429.7" y="488.2" width="23.5" height="9.8" />
                            </g >
                            <g >
                                <rect ref='place32' @click="showOnMap(32)"
                                      class="cls-2" x="429.7" y="502" width="23.5" height="9.8" />
                            </g >
                            <g >
                                <rect ref='place33' @click="showOnMap(33)"
                                      class="cls-2" x="35.2" y="416.2" width="35.9" height="15.6" />
                            </g >
                            <g >
                                <rect ref='place34' @click="showOnMap(34)"
                                      class="cls-2" x="179.7" y="416.2" width="35.9" height="15.6" />
                            </g >
                            <g >
                                <rect ref='place35' @click="showOnMap(35)"
                                      class="cls-2" x="227.7" y="416.2" width="35.9" height="15.6" />
                            </g >
                            <g >
                                <rect ref='place36' @click="showOnMap(36)" class="cls-2" x="292.4" y="416.2"
                                      width="35.9" height="15.6" />
                            </g >
                            <g >
                                <rect ref='place37' @click="showOnMap(37)" class="cls-2" x="357.9" y="401.7"
                                      width="35.9" height="15.6" />
                            </g >
                            <g >
                                <rect ref='place38' @click="showOnMap(38)" class="cls-2" x="357.9" y="355.2"
                                      width="35.9" height="15.6" />
                            </g >
                            <g >
                                <rect ref='place39' @click="showOnMap(39)" class="cls-2" x="357.9" y="288.9"
                                      width="35.9" height="15.6" />
                            </g >
                            <g >
                                <rect ref='place40' @click="showOnMap(40)" class="cls-2" x="357.9" y="137.9"
                                      width="35.9" height="15.6" />
                            </g >
                            <g >
                                <rect ref='place41' @click="showOnMap(41)" class="cls-2" x="454.2" y="113.2"
                                      width="35.9" height="15.6" />
                            </g >
                            <g >
                                <rect ref='place42' @click="showOnMap(42)" class="cls-2" x="524.5" y="113.2"
                                      width="35.9" height="15.6" />
                            </g >
                            <g >
                                <rect ref='place43' @click="showOnMap(43)" class="cls-2" x="137.5" y="416.2"
                                      width="10.6" height="15.6" />
                            </g >
                            <g >
                                <rect ref='place44' @click="showOnMap(44)" class="cls-2" x="154.5" y="416.2"
                                      width="10.6" height="15.6" />
                            </g >
                            <g >
                                <rect ref='place45' @click="showOnMap(45)" class="cls-2" x="575.4" y="113.2"
                                      width="10.6" height="15.6" />
                            </g >
                            <g >
                                <rect ref='place46' @click="showOnMap(46)" class="cls-2" x="592.4" y="113.2"
                                      width="10.6" height="15.6" />
                            </g >
                            <g >
                                <rect ref='place47' @click="showOnMap(47)" class="cls-2" x="466.7" y="75.3" width="39.6"
                                      height="29.5" />
                            </g >
                            <g >
                                <rect ref='place48' @click="showOnMap(48)" class="cls-2" x="607.8" width="49.8"
                                      height="104.7" />
                            </g >
                            <g >
                                <rect ref='place49' @click="showOnMap(49)" class="cls-2" x="518.8" width="76.5"
                                      height="104.7" />
                            </g >
                            <g >
                                <polygon ref='place50' @click="showOnMap(50)" class="cls-2"
                                         points="504.3 210.9 491.8 210.9 491.8 210.8 491.8 198.3 491.8 137.4 423.8 137.4 423.8 339.2 579.4 339.2 579.4 210.8 504.3 210.8 504.3 210.9" />
                            </g >
                            <g >
                                <rect ref='place51' @click="showOnMap(51)" class="cls-2" x="504.3" y="137.4" width="75"
                                      height="60.9" />
                            </g >
                            <g >
                                <rect ref='place52' @click="showOnMap(52)" class="cls-2" x="591.7" y="137.4" width="75"
                                      height="55.8" />
                            </g >
                            <g >
                                <rect ref='place53' @click="showOnMap(53)" class="cls-2" x="591.7" y="254.1" width="75"
                                      height="44.3" />
                            </g >
                            <g >
                                <rect ref='place54' @click="showOnMap(54)" class="cls-2" x="591.7" y="351.7" width="75"
                                      height="50.4" />
                            </g >
                            <g >
                                <rect ref='place55' @click="showOnMap(55)" class="cls-2" x="591.7" y="310.9" width="75"
                                      height="28.3" />
                            </g >
                            <g >
                                <rect ref='place56' @click="showOnMap(56)" class="cls-2" x="591.7" y="205.6" width="75"
                                      height="36" />
                            </g >
                            <g >
                                <rect ref='place57' @click="showOnMap(57)" class="cls-2" x="508.7" y="351.7"
                                      width="36.9" height="50.4" />
                            </g >
                            <g >
                                <rect ref='place58' @click="showOnMap(58)" class="cls-2" x="558.2" y="351.7"
                                      width="21.2" height="50.4" />
                            </g >
                            <g >
                                <rect ref='place59' @click="showOnMap(59)" class="cls-2" x="423.8" y="351.7"
                                      width="72.4" height="50.4" />
                            </g >
                            <g >
                                <polygon ref='place60' @click="showOnMap(60)" class="cls-2"
                                         points="191.3 0.1 191.3 0.2 0 0.2 0 251 328 251 328 104.7 454.3 104.7 454.3 0.1 191.3 0.1" />
                            </g >
                            <g >
                                <rect ref='place61' @click="showOnMap(61)" class="cls-2" y="263.5" width="165"
                                      height="138.2" />
                            </g >
                            <g >
                                <rect ref='place62' @click="showOnMap(62)" class="cls-2" x="177.5" y="355.2"
                                      width="42.7" height="46.5" />
                            </g >
                            <g >
                                <polygon ref='place63' @click="showOnMap(63)" class="cls-2"
                                         points="328 263.5 177.5 263.5 177.5 342.7 232.7 342.7 232.7 401.7 270.3 401.7 270.3 342.7 328 342.7 328 263.5" />
                            </g >
                            <g >
                                <rect ref='place64' @click="showOnMap(64)" class="cls-2" x="282.8" y="355.2"
                                      width="45.2" height="46.5" />
                            </g >
                        </svg >
                    </div >


                </div >
                <div class="container px-5 py-5 ofh" v-show="floor2" >
                    <svg xmlns="http://www.w3.org/2000/svg" ref="floor2" viewBox="0 0 1149.9 552.3" >
                        <title >logoРесурс 1</title >

                        <g id="Слой_1-2" data-name="Слой 1" >
                            <rect ref='place65' @click="showOnMap(65)" class="cls-1" y="0.1" width="1149.8"
                                  height="552" />
                        </g >
                        <g >

                            <rect ref='place66' @click="showOnMap(66)" class="cls-2" x="1040.4" y="398.1" width="109.4"
                                  height="153.9" />
                        </g >
                        <g >
                            <rect ref='place67' @click="showOnMap(67)" class="cls-2" x="658" y="0.1" width="369.7"
                                  height="552.2" />
                        </g >
                        <g >
                            <rect ref='place68' @click="showOnMap(68)" class="cls-2" x="518.1" width="127.4"
                                  height="139" />
                        </g >
                        <g >
                            <rect ref='place69' @click="showOnMap(69)" class="cls-3" x="481.1" y="75.2" width="24.5"
                                  height="32.2" />
                        </g >
                        <g >
                            <rect ref='place70' @click="showOnMap(70)" class="cls-2" x="395" width="62.4"
                                  height="107.3" />
                        </g >
                        <g >
                            <rect ref='place71' @click="showOnMap(71)" class="cls-2" x="319.9" width="62.4"
                                  height="107.3" />
                        </g >
                        <g >
                            <rect ref='place72' @click="showOnMap(72)" class="cls-2" x="238" width="69.6"
                                  height="107.3" />
                        </g >
                        <g >
                            <polygon ref='place73' @click="showOnMap(73)" class="cls-2"
                                     points="156.1 0 156.1 27.6 192.5 27.6 192.5 107.3 225.7 107.3 225.7 0 156.1 0" />
                        </g >
                        <g >
                            <rect ref='place74' @click="showOnMap(74)" class="cls-2" x="156.1" y="39.9" width="23.7"
                                  height="67.4" />
                        </g >
                        <g >
                            <rect ref='place75' @click="showOnMap(75)" class="cls-2" y="0.1" width="143.4"
                                  height="107.2" />
                        </g >
                        <g >
                            <rect ref='place76' @click="showOnMap(76)" class="cls-2" x="129.7" y="126.5" width="8.5"
                                  height="8.5" />
                        </g >
                        <g >
                            <rect ref='place77' @click="showOnMap(77)" class="cls-2" x="164.7" y="126.5" width="8.5"
                                  height="8.5" />
                        </g >
                        <g >
                            <rect ref='place78' @click="showOnMap(78)" class="cls-2" y="119.8" width="30"
                                  height="19.4" />
                        </g >
                        <g >
                            <rect ref='place79' @click="showOnMap(79)" class="cls-2" y="151.6" width="30"
                                  height="19.4" />
                        </g >
                        <g >
                            <rect ref='place80' @click="showOnMap(80)" class="cls-2" y="183.4" width="30"
                                  height="19.4" />
                        </g >
                        <g >
                            <rect ref='place81' @click="showOnMap(81)" class="cls-2" y="215.3" width="30"
                                  height="19.4" />
                        </g >
                        <g >
                            <rect ref='place82' @click="showOnMap(82)" class="cls-2" y="247.1" width="30"
                                  height="19.4" />
                        </g >
                        <g >
                            <rect ref='place83' @click="showOnMap(83)" class="cls-2" x="42.3" y="151.4" width="55.7"
                                  height="115.1" />
                        </g >
                        <g >
                            <polygon ref='place84' @click="showOnMap(84)" class="cls-2"
                                     points="277.4 151.4 277.4 170.2 277.4 182.7 264.9 182.7 155.1 182.7 142.6 182.7 142.6 170.2 142.6 151.4 110.5 151.4 110.5 266.5 307.6 266.5 307.6 151.4 277.4 151.4" />
                        </g >
                        <g >
                            <rect ref='place85' @click="showOnMap(85)" class="cls-2" x="155.1" y="151.4" width="109.8"
                                  height="18.8" />
                        </g >
                        <g >
                            <rect ref='place86' @click="showOnMap(86)" class="cls-2" y="278.9" width="307.6"
                                  height="273.1" />
                        </g >
                        <g >
                            <rect ref='place87' @click="showOnMap(87)" class="cls-2" x="320.1" y="434.5" width="81.2"
                                  height="117.7" />
                        </g >
                        <g >
                            <rect ref='place88' @click="showOnMap(88)" class="cls-2" x="336.5" y="153.6" width="12.6"
                                  height="12.6" />
                        </g >
                        <g >
                            <rect ref='place89' @click="showOnMap(89)" class="cls-2" x="404" y="153.6" width="12.6"
                                  height="12.6" />
                        </g >
                        <g >
                            <rect ref='place90' @click="showOnMap(90)" class="cls-2" x="336.5" y="205.2" width="12.6"
                                  height="12.6" />
                        </g >
                        <g >
                            <rect ref='place91' @click="showOnMap(91)" class="cls-2" x="404" y="205.2" width="12.6"
                                  height="12.6" />
                        </g >
                        <g >
                            <rect ref='place92' @click="showOnMap(92)" class="cls-2" x="336.5" y="245.2" width="12.6"
                                  height="12.6" />
                        </g >
                        <g >
                            <rect ref='place93' @click="showOnMap(93)" class="cls-2" x="404" y="245.2" width="12.6"
                                  height="12.6" />
                        </g >
                        <g >
                            <polygon ref='place94' @click="showOnMap(94)" class="cls-2"
                                     points="497.1 151.5 497.1 344.9 433.2 344.9 433.2 497.2 507 497.2 507 552.3 645.5 552.3 645.5 151.5 497.1 151.5" />
                        </g >
                        <g >
                            <rect ref='place95' @click="showOnMap(95)" class="cls-2" x="433.7" y="215.2" width="50.9"
                                  height="23.6" />
                        </g >
                        <g >
                            <polygon ref='place96' @click="showOnMap(96)" class="cls-2"
                                     points="484.7 202.7 484.7 151.5 444.1 151.5 433.7 164.4 433.7 202.7 484.7 202.7" />
                        </g >
                        <g >
                            <rect ref='place97' @click="showOnMap(97)" class="cls-2" x="433.7" y="287" width="50.9"
                                  height="45.4" />
                        </g >
                        <g >
                            <rect ref='place98' @click="showOnMap(98)" class="cls-2" x="433.7" y="251.3" width="50.9"
                                  height="23.2" />
                        </g >
                        <g >
                            <polygon ref='place99' @click="showOnMap(99)" class="cls-2"
                                     points="1114.1 0.1 1114.1 90.6 1040.4 90.6 1040.4 385.7 1149.8 385.7 1149.8 0.1 1114.1 0.1" />
                        </g >
                        <g >
                            <rect ref='place100' @click="showOnMap(100)" class="cls-2" x="1040.4" width="61.5"
                                  height="78.2" />
                        </g >
                        <!--<g >-->
                            <!--<rect ref='place101' @click="showOnMap(101)" class="cls-2" x="1110.1" y="431.6" width="39.8"-->
                                  <!--height="15.7" />-->
                        <!--</g >-->
                        <!--<g >-->
                            <!--<rect ref='place102' @click="showOnMap(102)" class="cls-2" x="1110.1" y="460.4" width="39.8"-->
                                  <!--height="18" />-->
                        <!--</g >-->
                        <!--<g >-->
                            <!--<rect ref='place103' @click="showOnMap(103)" class="cls-2" x="1097.2" y="491.4" width="52.6"-->
                                  <!--height="60.7" />-->
                        <!--</g >-->

                    </svg >

                </div >

            </div >
            <div class="container" >
                <div class="d-flex justify-content-start my-3 align-items-end" >
                    <button class="btn btn-light rounded-circle zoom1 mr-3" type="submit" @click="zoomMore" >+
                    </button >
                    <button class="btn btn-light rounded-circle zoom2" type="submit" @click="zoomless" >-</button >
                    <!--<div class="zoom" onclick="zoom(1)" >+</div >-->
                    <!--<div class="zoom" onclick="zoom(0)" >-</div >-->
                </div >
            </div >

        </div >
    </div >

</template >

<script >
    import drag from '@branu-jp/v-drag'
    import {Draggable} from 'draggable-vue-directive'

    export default {
        name: "our-map",
        props: ['app_state'],
        directives: {
            Draggable,
        },
        metaInfo() {
            return {
                meta: [
                    {charset: 'utf-8'},
                    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                    {
                        name: 'description',
                        content: 'Торговый центр МАРМЕЛАЙТ г. Северск. Пространство для шопинга, отдыха и общения, уникальные бренды и атмосфера уютная атмосфера.'
                    }
                ],
                title: 'Карта Торговый центр МАРМЕЛАЙТ г. Северск',
            }
        },
        data() {
            return {
                active_floor: 1,
                self: this,
                floor1: true,
                floor2: false,
                csale: 1,
                name: 'floor1',
                show_card: false,
                active_place: null,
                active_renter: {
                    name: 'some name',
                    floor: 2,
                    logo: '',
                    description: '',
                    id: 0
                },
                renters: this.app_state.renters,
                empty_place: {
                    name: 'Здесь пока никого нет',
                    logo: 'logo.png',
                    description: 'Напишите в наш отдел аренды для более подробной информации на почту future_renter@mail.ru'
                },
            }
        },
        methods: {
            show1() {
                this.floor1 = true
                this.floor2 = false
                this.name = 'floor1'
                this.active_floor = 1
                this.scale = 1
                this.$refs[this.name].setAttribute('transform', 'scale(' + this.csale + ' ' + this.csale + ')')
            },
            show2() {
                this.floor1 = false
                this.floor2 = true
                this.name = 'floor2'
                this.active_floor = 2
                this.scale = 1
                this.$refs[this.name].setAttribute('transform', 'scale(' + this.csale + ' ' + this.csale + ')')

            },
            zoomMore() {
                this.csale = this.csale * 1.1
                this.$refs[this.name].setAttribute('transform', 'scale(' + this.csale + ' ' + this.csale + ')')
            },
            zoomless() {
                this.csale = this.csale * 0.9
                this.$refs[this.name].setAttribute('transform', 'scale(' + this.csale + ' ' + this.csale + ')')
            },
            showRenter(renter) {
                this.active_renter = renter;
                this.active_place = 'place' + renter.map_place;
                this.showOnMap(renter.map_place)
                this.show_card = true;
            },
            showOnMap(map_id) {
                let name_active = 'place' + map_id

                let renter = this.renter_place(map_id);

                if (this.active_place != null) {
                    try {
                        this.$refs[this.active_place].classList.remove('active_place')
                    } catch (e) {

                    }
                }

                this.$refs[name_active].classList.add('active_place')
                console.log('see')
                console.log(renter)
                console.log(map_id)
                if (renter != null) {
                    this.active_renter = renter
                } else {
                    this.active_renter = this.empty_place
                }

                this.active_place = name_active
                this.show_card = true;
            },
            renter_place(map_id) {
                let positiveArr = this.app_state.renters.filter((renter) => {
                    return renter.map_place == map_id;
                });

                if (positiveArr.length > 0) {
                    return positiveArr[0]
                } else {
                    return null
                }
            },
            close_card() {
                try {
                    this.$refs[this.active_place].classList.remove('active_place')
                } catch (e) {

                }
                this.show_card = false
            }
        },
        computed: {
            heigth_map: function () {
                try {
                    return this.heigth_map = this.$refs[this.name].clientHeight
                } catch (e) {
                    return 800
                }
            },
            renter_active_floor: function () {

                let positiveArr = this.renters.filter((renter) => {
                    return renter.floor == this.active_floor;
                });
                return positiveArr;
            },
            num_row: function () {
                return Math.ceil(this.renter_active_floor.length / 3)
            }
        },
    }
</script >

<style scoped >

    .cls-1 {
        fill: #e0f7ee;
    }

    .cls-2 {
        fill: #89e3c5;
    }

    .cls-3 {
        fill: #e5d0d6;
    }

    /*.st0 {*/
    /*fill: #FFFFFF;*/
    /*}*/

    /*.st1 {*/
    /*fill: none;*/
    /*stroke: #F9C606;*/
    /*stroke-width: 4;*/
    /*stroke-miterlimit: 10;*/
    /*}*/

    /*.st2 {*/
    /*fill: #fff;*/
    /*stroke: #D0172C;*/
    /*stroke-width: 2;*/
    /*stroke-miterlimit: 10;*/
    /*}*/

    /*.st3 {*/
    /*fill: url(#SVGID_1_);*/
    /*stroke: #D0172C;*/
    /*stroke-width: 2;*/
    /*stroke-miterlimit: 10;*/
    /*}*/

    /*.st4 {*/
    /*fill-rule: evenodd;*/
    /*clip-rule: evenodd;*/
    /*fill: #F9C606;*/
    /*}*/

    /*.st0 {*/
    /*fill: #FFFFFF;*/
    /*}*/

    /*.st1 {*/
    /*fill: none;*/
    /*stroke: #D0172C;*/
    /*stroke-width: 2;*/
    /*stroke-miterlimit: 10;*/
    /*}*/

    /*.st2 {*/
    /*fill: none;*/
    /*stroke: #F9C606;*/
    /*stroke-width: 4;*/
    /*stroke-miterlimit: 10;*/
    /*}*/

    .st3 {
        fill: none;
        stroke: #F9C606;
        stroke-miterlimit: 10;
    }

    .st0 {
        fill: #FFFFFF;
    }

    /*.st1 {*/
    /*fill: none;*/
    /*stroke: #D0172C;*/
    /*stroke-width: 2;*/
    /*stroke-miterlimit: 10;*/
    /*}*/

    /*.st2 {*/
    /*fill: none;*/
    /*stroke: #F9C606;*/
    /*stroke-width: 4;*/
    /*stroke-miterlimit: 10;*/
    /*}*/

    .zoom1 {
        position: relative;
        z-index: 100000;
        width: 55px;
        height: 55px;
        font-size: 25px;
        line-height: 25px;
        padding-top: 2px;
    }

    .zoom2 {
        position: relative;
        z-index: 100000;
        width: 40px;
        height: 40px;
        font-size: 25px;
        line-height: 25px;
        padding-top: 2px;
    }

    .cursor-pointer {
        cursor: pointer;
    }

    g:hover .cls-2 {
        fill: #e5d0d6;
        stroke: #e5d0d6;
    }

    .active_place {
        fill: #e5d0d6;
        stroke: #e5d0d6;
    }

    .logo_on_map {
        max-height: 100px;
    }

</style >