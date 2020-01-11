<template >
    <div >
        <main-slider :slides="app_state.sliders" ></main-slider >
        <slider-brand :brands="app_state.renters" ></slider-brand >
        <main-news-slider :news="app_state.news"
                          :promo="app_state.actions"
        >
        </main-news-slider>
    </div >
</template >

<script >
    export default {
        name: "main-page",
        props:['app_state'],
        metaInfo: {
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Торговый центр МАРМЕЛАЙТ г. Северск. Пространство для шопинга, отдыха и общения, уникальные бренды и атмосфера уютная атмосфера.' }
            ],
            title: 'Торговый центр МАРМЕЛАЙТ г. Северск',
        }
    }
</script >

<style scoped >

</style >