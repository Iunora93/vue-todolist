`use strict`
const { createApp } = Vue;

createApp({
    data(){
        return {
            newTodo : '',
            todoList : [
                {
                    "text": "Ripasso lezione",
                    "done": true
                },
                {
                    "text": "Creare repo",
                    "done": true
                },
                {
                    "text": "Fare esercizio",
                    "done": false
                },
                {
                    "text": "Caricare su GitHub",
                    "done": false
                },
            ]
        }
    },
    methods: {
        addTodo(){
            const newListItem = {
                "text": this.newTodo,
                "done": false
            } 
           this.todoList.push(newListItem);
           this.newTodo = '';
        },
        removeTodo(i){
            this.todoList.splice(i, 1);
        },
        onClickDone(i){
            if(this.todoList[i].done === false){
                this.todoList[i].done = true;
            }else{
                this.todoList[i].done = false;
            }
        }
    }
}).mount('#app')

// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
// Buon lavoro e buon divertimento!