app.component('photo-search',{
    props: {
        searchForm: Object
    },
    /*html*/
    template:
    `
    <button v-on:click="toggleCancel" v-if="isHidden" class="ml-2 p-1 focus:outline-none">
        <div class="material-icons text-white">search</div>
    </button>
     <div v-else>
        <input v-model="inputSearch" placeholder="Search" class="ml-2 p-1 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none text-black rounded-sm"
        type="text">
        <button class="ml-2 p-1 rounded-sm focus:outline-none bg-black text-white" v-on:click="toggleCancel">Cancel</button>
     </div>
     `,

    data(){
        return{
           isHidden:true,
           inputSearch:''
        }
    },
    methods: {
        toggleCancel(){ 
            (this.inputSearch = '');
            (this.isHidden = !this.isHidden);
        }
    },
    watch:{
        inputSearch(){
          this.$emit('search',this.inputSearch);
        }
      }

})
