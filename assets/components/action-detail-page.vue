<template >
    <promo-item :promo="our_action" :detail="true"></promo-item>
</template >

<script >
    export default {
        name: "action-detail-page",
        props:['app_state'],
        data: function(){
            return{
                id_action:this.$route.params.id,
                name:'Новости',
            }
        },
        computed:{
            our_action: function () {
                let self = this;
                let our_array = this.app_state.news_and_promo.filter(function (action) {
                    if (action.type == 'news') return false
                    return action.id == self.id_action
                })
                return our_array[0]
            }
        },
        watch:{
            '$route' (val){
                this.id_action = val.params.id
            }
        }
    }
</script >

<style scoped >

</style >