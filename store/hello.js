export const state = () =>({
  message:'Hello Vuex'
})

export const mutations = {
  updateMessage: function(state) {
    state.message = 'Updated!'
  }
}

export const actions = {
  updateMessageActions(context,payload) {
    context.commit('updateMessage', payload)
    // コミットメソッドで第一引数にmutationsを呼ぶ
  }
}
