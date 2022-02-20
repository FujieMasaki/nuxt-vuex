import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: function(){
      return{
        message:'Hello Vuex'
      }
    },
    mutations:{
      updateMessage: function(state) {
        state.message = 'Updated!'
      }
    },
    actions:{
      updateMessageActions(context,payload) {
        context.commit('updateMessage', payload)
        // コミットメソッドで第一引数にmutationsを呼ぶ
      }
    }
  })
}

export default createStore
