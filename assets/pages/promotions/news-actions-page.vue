<template >
    <div>
        <news-page :news="app_state.news_and_promo"
                   name="Акции"></news-page>
    </div>
</template >

<script >
    export default {
        name: "news-actions-page",
        props:['app_state'],
        metaInfo: {
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Новости и Акции. Торговый центр МАРМЕЛАЙТ г. Северск. Пространство для шопинга, отдыха и общения, уникальные бренды и атмосфера уютная атмосфера.' }
            ],
            title: 'Новости и Акции Торговый центр МАРМЕЛАЙТ г. Северск',
        }
    }
</script >

<style scoped >

</style >