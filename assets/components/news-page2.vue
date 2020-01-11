<template >
    <div class="container px-md-0" >
        <h3 class="mx-cauto pt-2 pb-4 uppercase" >НОВОСТИ И АКЦИИ</h3 >

        <promo-item :promo="news_item" :key='index' v-for="(news_item, index) in news"></promo-item>

    </div >
</template >

<script >
    import promoItem from './promo/promo-item';
    export default {
        name: "news-page",
        props: ['news', 'name'],
        components:{
            promoItem
        },
        data() {
            return {
                show_num: 3,
                more_class: 'news-down2',
                centre_class: 'news-down3',
                show_more:false
            }
        },
        methods: {
            show_more() {
                this.show_num += 3;
            },
            need_padding(row) {
                if (((this.news).length - row * 3) <= 0) {
                    return false;
                } else if (row * 3 < this.show_num) {
                }
                else {
                    return true;
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
                this.$refs[main][0].style.height = 500 + 'px';
                this.$refs[main][0].style.width = 380 + 'px';
                this.$refs[main][0].style.marginTop = 0 + 'px';
                this.$refs[main][0].style.marginBottom = 0 + 'px';
                this.$refs[main][0].style.boxShadow = "none";
                this.$refs[name1][0].style.height = 65 + '%';
                this.$refs[name2][0].style.height = 35 + '%';
                this.$refs[name3][0].style.height = 40 + 'px';
            }
        },
        computed: {
            entity_kit() {
                if (this.name == 'Новости') {
                    return {
                        name: 'новостей',
                        bg: 'bg-violet',
                        text_color: 'text-violet',
                        link_name: 'news'
                    }
                } else {
                    return {
                        name: 'акций',
                        bg: 'bg-my-red',
                        text_color: 'text-my-red',
                        link_name: 'action'
                    }
                }
            },
            count_row() {

                return Math.ceil((this.news).length / 3)
            },
        }
    }
</script >

<style scoped >

</style >