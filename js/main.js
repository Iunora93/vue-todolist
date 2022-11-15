`use strict`
const { createApp } = Vue;

createApp({
    data(){
        return {
            todoList : {
                text: 'latte',
                done: true
            }
        }
    }
}).mount('#app')