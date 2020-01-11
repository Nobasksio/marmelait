<template >
    <department-list
            :departments="app_state.departments"
            :renters="app_state.renters"
    ></department-list>
</template >

<script >
    export default {
        name: "deaprtment",
        props:['app_state'],
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
                title: 'Отделы Торговый центр МАРМЕЛАЙТ г. Северск',
            }
        }
    }
</script >

<style scoped >

</style >