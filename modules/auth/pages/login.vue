<template>
  <v-container>
    <v-row class="mt-0 mt-sm-16" justify="center">
      <v-col cols="12" sm="6" md="6">
        <h1
          class="
            text-h3 text-sm-h2 text-center
            font-weight-regular
            mb-6 mb-sm-16
          "
        >
          Добро пожаловать в
          <span class="font-weight-bold">Impact </span> capital
        </h1>
        <h2
          class="
            text-h5 text-sm-h4 text-center
            mb-7 mb-sm-12
            font-weight-regular
          "
        >
          Логин
        </h2>
        <div class="mx-auto form-wrapper">
          <v-alert v-if="error" type="error"> {{ error }} </v-alert>
          <v-form ref="form" @submit.prevent="login">
            <v-text-field
              v-model="form.login"
              :rules="loginRules"
              label="Login"
            />
            <v-text-field
              v-model="form.password"
              :rules="passwordRules"
              label="Password"
              type="password"
            />
            <v-btn
              :disabled="!form.login || !form.password"
              block
              type="submit"
            >
              Login
            </v-btn>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'clear',
  data() {
    return {
      form: {
        login: null,
        password: null,
      },
      loginRules: [(v) => !!v || 'Введите логин'],
      passwordRules: [(v) => !!v || 'Введите пароль'],
      error: null,
    }
  },
  methods: {
    async login() {
      this.error = null
      const isValid = this.$refs.form.validate()
      if (!isValid) return
      try {
        const account = await this.$store.dispatch('auth/LOGIN', this.form)
        if (account) {
          this.$router.push({ name: 'portfolio' })
        }
      } catch (error) {
        this.error = error.response.data.mesage
        console.dir(error)
      }
    },
  },
}
</script>

<style></style>
