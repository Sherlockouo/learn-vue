import Vue from "vue";
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

const moduleA={
  state:{
    name:'张三'
  },
  getters:{
    getName(index) {
      return this.state.name
    }
  },
  mutations:{
    updateName(state,payload){
      state.name = payload
    }
  },
  actions:{
    async acupdateName(context){
      return new Promise(((resolve, reject) => {
        context.commit('updateName','new name')
        resolve('wula')
      }),1000)
    }
  }
}

const store = new Vuex.Store({
  // 保存状态
  state:{
    counter:0,
    message:'wula',
    stu:[{id:1,name:'al',age:10}],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  mutations:{
    plus(state){
      state.counter++
    },
    minus(state){
      state.counter--
    },
    addStu(state,payload){
      state.stu.push(payload)
    },
    updateStu(state){
      Vue.delete(state.stu[0],'age')
    }

  },
  //进行异步处理
  actions:{
    // updateStu(context,payload){
    //   setTimeout(()=>{
    //     context.commit('updateStu')
    //     console.log(payload.message)
    //     payload.success()
    //   },1000)
    // }
    updateStu(context,payload){
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          context.commit('updateStu')
          console.log(payload)
        },1000)
        resolve('2333')
      })
    }
  },
  getters:{
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    },
    getStu:state => {
      return state.stu
    }
  },
  modules:{
    a:moduleA
  }
})

export default store
