app.component('photo-item',{
    props:[
        "member"
    ],
    /*html*/
    template:
    `<img class="card-img" v-on:click="popupImage(member.id)" :src="member.img">
    <div class="pt-3 pr-2 pb-1">
        <div class="d-flex align-items-start justify-content-between">
            <div class="d-flex flex-column">
                <div class="ml-2 pb-1 text-xl font-bold">{{member.name}}</div>
            </div>
            <div class="heart pr-2">
                <i v-on:click="toggleLike(member.id)" :class="{like: member.like == true}" aria-hidden="true" class="material-icons transform scale-125 ">favorite_border</i>
            </div>
        </div>
    </div>`,
 
    methods:{
        toggleLike(id){
            this.$emit('like',id)
        },
        popupImage(id){
            this.$emit('popup',id)
        }
    }
})

