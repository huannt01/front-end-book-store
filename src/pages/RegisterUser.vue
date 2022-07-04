<template>
  <!-- <div class="container"> -->
  <section
    class="vh-100 bg-image"
    style="
      background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');
    "
  >
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <div class="card-body py-3 px-5">
                <h2 class="text-uppercase text-center mb-3">
                  Create an account
                </h2>

                <!-- <div v-for="(error, index) of messages.errors" :key="index">
                  <b-alert show dismissible class="text-danger">
                    {{ error }}
                  </b-alert>
                </div>

                <div v-for="(item, index) of messages.success" :key="index">
                  <b-alert show dismissible class="text-success">
                    {{ item }}
                  </b-alert>
                </div> -->

                <form @submit.prevent="handleFormRegister()" autocomplete="off">
                  <div class="form-outline mb-3">
                    <label class="form-label" for="form3Example1cg"
                      >Your Name</label
                    >
                    <input
                      type="text"
                      id="form3Example1cg"
                      class="form-control form-control-md"
                      v-model="userData.name"
                      :class="{
                        'is-invalid': submitted && $v.userData.name.$error,
                      }"
                    />
                    <div
                      v-if="submitted && !$v.userData.name.required"
                      class="invalid-feedback"
                    >
                      User Name is required
                    </div>
                  </div>

                  <div class="form-outline mb-3">
                    <label class="form-label" for="form3Example3cg"
                      >Your Email</label
                    >
                    <input
                      type="email"
                      id="form3Example3cg"
                      class="form-control form-control-md"
                      v-model="userData.email"
                      :class="{
                        'is-invalid': submitted && $v.userData.email.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.userData.email.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.userData.email.required"
                        >Email is required</span
                      >
                      <span v-if="!$v.userData.email.email"
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
                      v-model="userData.password"
                      :class="{
                        'is-invalid': submitted && $v.userData.password.$error,
                      }"
                    />
                    <input
                      v-else
                      type="password"
                      id="form3Example4cg"
                      class="form-control form-control-md"
                      v-model="userData.password"
                      :class="{
                        'is-invalid': submitted && $v.userData.password.$error,
                      }"
                    />
                    <span class="icon-password" @click="showHidePassword()">
                      <i
                        :class="{
                          'bi bi-eye-slash-fill': showPassword,
                          'bi bi-eye-fill': !showPassword,
                        }"
                      ></i>
                    </span>
                    <div
                      v-if="submitted && $v.userData.password.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.userData.password.required"
                        >Password is required</span
                      >
                      <span v-if="!$v.userData.password.minLength"
                        >Password must be at least 8 characters</span
                      >
                    </div>
                  </div>

                  <div class="form-outline mb-3 position-relative">
                    <label class="form-label" for="form3Example4cdg"
                      >Repeat your password</label
                    >
                    <input
                      v-if="showConfirmPassword"
                      type="text"
                      id="form3Example4cdg"
                      class="form-control form-control-md"
                      v-model="userData.confirmPassword"
                      :class="{
                        'is-invalid':
                          submitted && $v.userData.confirmPassword.$error,
                      }"
                    />
                    <input
                      v-else
                      type="password"
                      id="form3Example4cdg"
                      class="form-control form-control-md"
                      v-model="userData.confirmPassword"
                      :class="{
                        'is-invalid':
                          submitted && $v.userData.confirmPassword.$error,
                      }"
                    />
                    <span
                      class="icon-password"
                      @click="showHideConfirmPassword()"
                    >
                      <i
                        :class="{
                          'bi bi-eye-slash-fill': showConfirmPassword,
                          'bi bi-eye-fill': !showConfirmPassword,
                        }"
                      ></i>
                    </span>
                    <div
                      v-if="submitted && $v.userData.confirmPassword.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.userData.confirmPassword.required"
                        >Confirm Password is required</span
                      >
                      <span
                        v-else-if="!$v.userData.confirmPassword.sameAsPassword"
                        >Passwords must match</span
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
                    <label class="form-check-label" for="form2Example3g">
                      I agree all statements in
                      <a href="#!" class="text-body"><u>Terms of service</u></a>
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
                      Register
                    </button>
                  </div>

                  <p class="text-center text-muted mt-2 mb-0">
                    Have already an account?
                    <!-- <a href="#!" class="fw-bold text-body"><u>Login here</u></a> -->
                    <router-link
                      tag="a"
                      :to="{
                        name: 'login',
                      }"
                      class="fw-bold text-body"
                      ><u>Login here</u>
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
  <!-- </div> -->
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      messages: {
        errors: [],
        success: [],
      },
      userData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      submitted: false,
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  validations: {
    userData: {
      name: { required },
      email: { required, email },
      password: { required, minLength: minLength(8) },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
    },
  },

  methods: {
    ...mapActions(["register"]),
    handleFormRegister() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      let data = {
        name: this.userData.name,
        email: this.userData.email,
        password: this.userData.password,
        password_confirmation: this.userData.confirmPassword,
      };
      this.register(data).then((res) => {
        if (!res.ok) {
          let errors = res.error;
          for (const key in errors) {
            this.makeToast("danger", errors[key]);
          }
        } else {
          this.$router.push("/login");
          alert(res.data.message);
          // this.makeToast("success", res.data.message);
        }
      });
    },
    showHidePassword() {
      this.showPassword = !this.showPassword;
    },
    showHideConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
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