<template>
<section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="../assets/TFM.jpg" class="img-fluid" alt="Biolabs" style="height:657px !important;">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
        <div class="text-center mb-2 pb-2">
          <img src="../assets/profile.png" alt="Profile" class="avatar">
        </div>
        <h5 class="fw-normal mb-3 pb-3 text-center">TFM LOGIN</h5>
          <div class="form-outline mb-4">
            <input type="text" id="username" v-model="username" class="form-control form-control-md" placeholder="Username" />
          </div>
          <div class="form-outline mb-3">
            <input type="password" id="password" v-model="password" class="form-control form-control-md" placeholder="Password" />
          </div>
          <div class="text-center mb-3">
            <button type="button" class="btn btn-primary w-100" @click="login">LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'TfmLogin',
  components: {
  },
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    login: function() {
      axios.post("/api/tfmlogin", {
        username: this.username,
        password: this.password
      }).then((res) => {
          alert("Login Successfull!");
          window.location.href='/tfmbddash';
      }).catch(()=> {
          alert("Wrong username and/or password!");
      })
    }
  }
}

</script>

<style scoped>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}

.h-custom {
  height: calc(100% - 73px);
}

@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}

.avatar {
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.btn-primary {
  background-color: #3346F0 !important;
}
</style>
