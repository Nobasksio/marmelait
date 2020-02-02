<template >
    <promo-item :promo="our_new" :detail="true"></promo-item >
</template >

<script >

    import promoItem from '../../components/promo/promo-item'

    export default {
        name: "action-detail-page",
        props: ['app_state'],
        components: {
            promoItem
        },
        data: function () {
            return {
                id_news: this.$route.params.id,
                name: 'Акции',
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
            our_new: function () {
                let self = this;
                let our_array = [{}]
                try {
                    our_array = this.app_state.news_and_promo.filter(function (action) {
                        if (action.type != 'news') return false;
                        return action.id == self.id_news
                    })
                } catch (e) {

                }
                return our_array[0]
            }
        },
        watch: {
            '$route'(val) {
                this.id_news = val.params.id
            }
        }
    }
</script >

<style scoped >

</style >