import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todoList: [],
    userList:[],
  },
  mutations: {
    addTodoItem(state, payload) {
      payload.index = state.todoList.length;
      state.todoList.push(payload);
      console.log(state.todoList);
    },
    addUserItem(state, payload) {
      payload.index = state.userList.length;
      state.userList.push(payload);
      console.log("***********************************Userlist");
      console.log(state.userList);
    },
    updateTodoItem(state, payload) {
      state.todoList.splice(payload.index, 1, payload);
    }
  },
  getters: {
    getTodoList: (state) => state.todoList,
    getUserList: (state) => state.userList
  },
  actions: {
  }
})

export default store;
