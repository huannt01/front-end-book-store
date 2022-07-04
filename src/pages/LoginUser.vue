<template>
  <div>
    <div>
      <section
        class="vh-100 bg-image"
        style="
          background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');
        "
      >
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div
              class="row d-flex justify-content-center align-items-center h-100"
            >
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style="border-radius: 15px">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">
                      Login Your Account
                    </h2>

                    <div v-for="(error, index) of errors" :key="index">
                      <b-alert show dismissible class="text-danger">
                        {{ error }}
                      </b-alert>
                    </div>

                    <form
                      @submit.prevent="handleSubmitLogin"
                      autocomplete="off"
                    >
                      <div class="form-outline mb-3">
                        <label class="form-label" for="form3Example3cg"
                          >Your Email</label
                        >
                        <input
                          type="text"
                          id="form3Example3cg"
                          class="form-control form-control-md"
                          v-model="user.email"
                          :class="{
                            'is-invalid': submitted && $v.user.email.$error,
                          }"
                        />
                        <div
                          v-if="submitted && $v.user.email.$error"
                          class="invalid-feedback"
                        >
                          <span v-if="!$v.user.email.required"
                            >Email is required</span
                          >
                          <span v-if="!$v.user.email.email"
                            >Email is invalid</span
                          >
                        </div>
                      </div>

                      <div class="form-outline mb-3 position-relative">
                        <label class="form-label" for="form3Example4cg"
                          >Password</label
                        >
                        <input
                          v-if="showPassword"
                          type="text"
                          id="form3Example4cg"
                          class="form-control form-control-md"
                          v-model="user.password"
                          :class="{
                            'is-invalid': submitted && $v.user.password.$error,
                          }"
                        />
                        <input
                          v-else
                          type="password"
                          id="form3Example4cg"
                          class="form-control form-control-md"
                          v-model="user.password"
                          :class="{
                            'is-invalid': submitted && $v.user.password.$error,
                          }"
                        />
                        <span
                          class="icon-password"
                          @click="handleShowHidePassword()"
                        >
                          <i
                            :class="{
                              'bi bi-eye-slash-fill': showPassword,
                              'bi bi-eye-fill': !showPassword,
                            }"
                          ></i>
                        </span>
                        <div
                          v-if="submitted && $v.user.password.$error"
                          class="invalid-feedback"
                        >
                          <span v-if="!$v.user.password.required"
                            >Password is required</span
                          >
                          <span v-if="!$v.user.password.minLength"
                            >Password must be at least 8 characters</span
                          >
                        </div>
                      </div>

                      <div class="form-check d-flex justify-content-start mb-3">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label class="form-check-label" for="form2Example3cg">
                          Remember username
                        </label>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          type="submit"
                          class="
                            btn btn-success btn-block btn-lg
                            gradient-custom-4
                            text-body
                          "
                        >
                          Login
                        </button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">
                        No account?
                        <!-- <a href="#!" class="fw-bold text-body"><u>Register here</u></a> -->
                        <router-link
                          tag="a"
                          :to="{
                            name: 'register',
                          }"
                          class="fw-bold text-body"
                          ><u>Register here</u>
                        </router-link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  name: "login-user",
  data() {
    return {
      errors: [],
      user: {
        email: "",
        password: "",
      },
      submitted: false,
      showPassword: false,
    };
  },
  validations: {
    user: {
      email: { required, email },
      password: { required, minLength: minLength(8) },
    },
  },
  methods: {
    ...mapActions(["login"]),
    handleSubmitLogin(e) {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      let data = {
        email: this.user.email,
        password: this.user.password,
      };
      this.login(data).then((res) => {
        if (!res.ok) {
          this.makeToast("danger", res.error.error_message);
        } else {
          this.$router.push("/");
        }
      });
    },
    handleShowHidePassword() {
      this.showPassword = !this.showPassword;
    },
    makeToast(variant = null, content) {
      this.$bvToast.toast(content, {
        title: "Error",
        variant: variant,
        solid: true,
      });
    },
  },
};
</script>

<style scoped>
.gradient-custom-3 {
  background: #84fab0;
  background: -webkit-linear-gradient(
    to right,
    rgba(132, 250, 176, 0.5),
    rgba(143, 211, 244, 0.5)
  );
  background: linear-gradient(
    to right,
    rgba(132, 250, 176, 0.5),
    rgba(143, 211, 244, 0.5)
  );
}
.gradient-custom-4 {
  background: #84fab0;
  background: -webkit-linear-gradient(
    to right,
    rgba(132, 250, 176, 1),
    rgba(143, 211, 244, 1)
  );
  background: linear-gradient(
    to right,
    rgba(132, 250, 176, 1),
    rgba(143, 211, 244, 1)
  );
}
.icon-password {
  position: absolute;
  top: 55%;
  right: 5%;
  cursor: pointer;
}
</style>