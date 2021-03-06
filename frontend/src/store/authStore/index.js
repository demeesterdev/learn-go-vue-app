export default {
    namespaced: true,
    state: {
        user:{
            userName:"idalmasso",
            loggedIn: false
        }
    },
    mutations: {
      LOGIN(state) {
        state.user.loggedIn = true;
      },
      LOGOUT(state) {
        state.user.loggedIn = false;
      }
    },
    actions: {
      async login(context) {
        context.commit("LOGIN");
      },
      async logout(context) {
        context.commit("LOGOUT");
      }
    },
    getters: {
      currentUser(state) {
        return state.user;
      },
      isLoggedIn(state) {
        if (!state.user) return false;
        return state.user.loggedIn;
      }
    }
  };