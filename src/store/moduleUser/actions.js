import axiosInstance from '../../plugins/axios';

import { parseJwt } from '../../helpers';
import { CONFIG_ACCESS_TOKEN } from '../../constants';

export default {
    async getUserById({ commit }, userId) {
        try {
            var result = await axiosInstance.get(`/user/${userId}`);
            if (result.data.status === 200) {
                let user = result.data.result.data
                commit('SET_USER_INFO', user);
                return {
                    ok: true,
                    data: result.data.result.data,
                    error: null
                }
            }
            return {
                ok: false,
                error: result.data.result.errors
            }
        } catch (error) {
            return {
                ok: false,
                error: error.message
            }
        }
    },
    async login({ commit }, { email = '', password = '' }) {
        commit('SET_LOADING', true);
        try {
            let data = {
                email: email,
                password: password
            }
            var result = await axiosInstance.post('/login', data);

            commit('SET_LOADING', false);
            if (result.data.status === 200) {

                commit('SET_USER_INFO', result.data.result.data.user);
                commit('SET_LOGIN_INFO', { user: result.data.result.data.user, token: result.data.result.data.access_token });

                return {
                    ok: true,
                    error: null,
                    data: result.data.result.data
                }

            } else {
                return {
                    ok: false,
                    error: result.data.result.errors
                }
            }

        } catch (error) {
            commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    },
    async logout({ commit }) {
        commit('SET_LOGOUT');
        return null;
    },
    async checkLogin({ commit, dispatch }) {
        try {
            let tokenLocal = localStorage.getItem(CONFIG_ACCESS_TOKEN);
            let userObj = parseJwt(tokenLocal);

            if (userObj) {
                console.log(userObj.sub);
                let resultUser = await dispatch('getUserById', userObj.sub);
                console.log('check user: ', resultUser)

                if (resultUser.ok) {
                    let data = {
                        user: resultUser.data,
                        token: tokenLocal
                    }
                    commit('SET_LOGIN_INFO', data);
                    return {
                        ok: true,
                        error: null
                    }
                }
            }
            return {
                ok: false
            }

        } catch (error) {
            return {
                ok: false,
                error: error.message
            }
        }
    },
    async register({ commit }, data) {
        commit('SET_LOADING', true);
        try {
            let response = await axiosInstance.post('/register', data);
            commit('SET_LOADING', false);
            if (response.data.status === 200) {
                let objLoginInfo = {
                    user: response.data.result.data.user,
                    token: response.data.token
                }

                commit('SET_USER_INFO', objLoginInfo.user);
                commit('SET_LOGIN_INFO', objLoginInfo);

                return {
                    ok: true,
                    data: response.data.result.data,
                    error: null
                }
            } else {
                return {
                    ok: false,
                    error: response.data.result.errors.error_message
                }
            }
        } catch (error) {
            commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    },
}