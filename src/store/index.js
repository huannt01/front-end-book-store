import Vue from "vue";
import Vuex from "vuex";
import user from './moduleUser';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLoading: false
    },
    actions: {
        setLoading({ commit }, loading = false) {
            commit('SET_LOADING', loading);
        }
    },
    mutations: {
        SET_LOADING: (state, loading = false) => {
            state.isLoading = loading;
        }
    },
    modules: {
        user
    }
});

export default store;