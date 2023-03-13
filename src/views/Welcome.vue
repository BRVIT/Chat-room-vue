<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <LoginForm @login="enterChat" />
      <p>
        Dont have account ?
        <span
          class="welcome__create-account"
          @click="() => (showLogin = !showLogin)"
          >let's create it !</span
        >
      </p>
    </div>
    <div v-else>
      <SignupForm @signup="enterChat" />
      <p>
        Already have an account?
        <span
          class="welcome__create-account"
          @click="() => (showLogin = !showLogin)"
          >let's login !</span
        >
      </p>
    </div>
    <div></div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();
    const enterChat = () => {
      router.push({ name: "Chatroom" });
    };

    return { showLogin, enterChat };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome__create-account {
  text-decoration: underline;
  cursor: pointer;
}
</style>
