import Vue from 'vue';
import Vuex from 'vuex';
import {dbStorage} from '../firebasedb';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state:{
        topProducts:{},
        hotProducts:{},
        dailyDiscover:{},
        viewProduct:{
            name: 'bagnet',
            price: 100
        },
        cartItems:[]
    },
    getters:{
        getTopProducts: state =>{
            return state.topProducts;
        },
        getHotProducts: state => {
            return state.hotProducts;
        },
        getDailyDiscover: state => {
            return state.dailyDiscover;
        },

        
        getViewProduct: state => {
            return state.viewProduct;
        },
        getCartItems: state => {
            return state.cartItems;
        }
    },
    mutations:{
        setTopProducts(state,data){
            if(data!=null){
                state.topProducts = data;
            }
        },
        setHotProducts(state,data){
            if(data!=null){
                state.hotProducts = data;
            }
        },
        setDailyDiscover(state,data){
            if(data!=null){
                state.dailyDiscover = data;
            }
        },



        setViewProduct: (state,payload)=>{
            state.viewProduct = payload;
        },
        setCartItems: (state,payload) => {
            state.cartItems.push({imgUrl:payload, price:1000});
        }
    },
    actions:{
        setViewProduct: (context,payload)=>{
            context.commit('setViewProduct',payload);
        },
        setCartItems: (context,payload) => {
            context.commit('setCartItems', payload);
        }
    }
})







// Initial Query at firebase

var getTopProducts = function(){
    var imagesUrl = ['abel_weaving_sm.jpg','alaminos_longganisa_sm.jpg','bagnet_sm.jpg','biko_bulacan_sm.jpg','cashey_nuts_bataan_sm.png'
    ,'hopya_ibanag_sm.jpg','ilocos_bagoong_sm.jpg'];
    var images=[];
    
    imagesUrl.forEach(elmnt => {
        dbStorage.ref('images/'+elmnt).getDownloadURL().then((url)=>{
            images.push(url)
        });
      });

    store.commit('setTopProducts', images);
}
getTopProducts()

var getHotProducts = function(){
    var imagesUrl = ['abel_weaving_sm.jpg','alaminos_longganisa_sm.jpg','bagnet_sm.jpg','biko_bulacan_sm.jpg','cashey_nuts_bataan_sm.png'
    ,'hopya_ibanag_sm.jpg','ilocos_bagoong_sm.jpg'];
    var images=[];
    
    imagesUrl.forEach(elmnt => {
        dbStorage.ref('images/'+elmnt).getDownloadURL().then((url)=>{
            images.push(url)
        });
      });
    store.commit('setHotProducts', images);
}
getHotProducts()

var getdailyDiscover = function(){
    var imagesUrl = ['abel_weaving_sm.jpg','alaminos_longganisa_sm.jpg','bagnet_sm.jpg','biko_bulacan_sm.jpg','cashey_nuts_bataan_sm.png'
    ,'hopya_ibanag_sm.jpg','ilocos_bagoong_sm.jpg','inatata_isabela_sm.jpg','isabela_binalay_sm.jpg','manga_zambales_2_sm.jpg',
        'manga_zambales_sm.jpg','moriecos_isabela_sm.jpg'];
    var images=[];
    
    imagesUrl.forEach(elmnt => {
        dbStorage.ref('images/'+elmnt).getDownloadURL().then((url)=>{
            images.push(url)
        });
        
      });
    store.commit('setDailyDiscover', images);
}
getdailyDiscover()
