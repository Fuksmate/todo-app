<template>
  <div class="row">
    <div class="main col-3">
      <h1>TO-DO LIST</h1>
      <input type="text" v-model="newTodo" @keyup.enter="addTodo">
      <div class="col-12">
        <div v-for="todo in todos" 
        :key="todo.id" 
        v-bind:class="{
         completed: todo.completed
          }"
        class="boxToDo">
          {{todo.title}} <button v-if="!todo.completed" @click="removeItem(todo.id)">Zrobione</button><div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'List',
    data() {
      return {
        newTodo: '',
        todos: []
      }
    },
    methods: {
      addTodo() {
        this.todos.push({
          title: this.newTodo,
          completed: false,
          id: Math.random()+1
        })

        this.newTodo = '';
      },
      removeItem(id) {
        console.log(this.id)
      }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    height: 900px;
    padding: 30px;
    font-family: serif;
    font-weight: 700;
    color: #2A78B9;
    background-color: #262626;
    border: 1px solid grey;
    margin: 0 auto;
    margin-top: 20px;
  }

  .boxToDo {
    height: auto;
    background-color: #1C1C1C;
    font-size: 32px;
    border-radius: 6%;
    margin: 0 auto;
    margin-top: 20px;
    padding-left: 20px;
    text-align: left;
  }
  .completed{
    opacity: 0.5;
  }

</style>
