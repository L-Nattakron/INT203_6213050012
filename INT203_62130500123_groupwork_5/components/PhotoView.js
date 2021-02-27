app.component('popup',{
    props:[
        "member"
    ],
    template: 
    /*html*/
    `<div class="Image" v-show="member.show === true"  :class= "{lightbox: member.show === true}" >
        <i v-on:click="popupImage(member.id)" class="fa fa-times" aria-hidden="true"></i>
        <img :src="member.img">
    </div>`,
    methods: {
        popupImage(id){
            this.$emit('click-popup',id)
        }

    }
})
