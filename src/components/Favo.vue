<template>
    <img class="w-72 h-72 pb-4 mx-auto" alt="fav logo" src="../assets/fav.jpg">
    <div class="bg-white mx-48 rounded-lg">
        <div class="text-lg pt-2 pb-2 text-center">My Favorite List</div>
        <div class="flex text-base pl-2 pb-2" v-for="f in favList" :key="f.id">{{f.name}} 
        <button v-on:click="removeFromList(f.id)"><img src="../assets/delete.svg"></button></div>
    </div>
</template>

<script>
export default {
    emits:['remove-fromlist'],
    props: {
        favList:{
            type: Array,
            require: true
        }
    },
    data(){
        return{
            have: false
        }
    },
    methods:{
    removeFromList(ic){
      console.log(ic)
      this.$emit("remove-fromlist",ic)
    }
    }
}
</script>