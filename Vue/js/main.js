var xm = new Vue({
    el:"#app",
    data() {
        return {
            key:"",
            id:"",
            name:'',
            sex:null,
            age:null,
            user:[
                {key:"user:1",id:"1",name:"张三",sex:"男",age:20},
                {key:"user:2",id:"2",name:"李思",sex:"女",age:10},
                {key:"user:3",id:"3",name:"王五",sex:"男",age:50}
            ]
        }
    },
    methods: {
        add(id){
            
        },
        update(id){

        },
        delete(id){

        },
        select(id){

        }
    },
    computed: { //计算属性
        
    },
    watch: {  //监听
        
    },
    beforeCreate() {
        
    },

})