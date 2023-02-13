<template>
<section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Biolabs" >
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
        <div class="text-center mb-2 pb-2">
          <img src="../assets/profile.png" alt="Profile" class="avatar">
        </div>
        <h5 class="fw-normal mb-3 pb-3 text-center">AFM LOGIN</h5>
          <div class="form-outline mb-4">
            <input type="text" id="username" name="username" class="form-control form-control-md" placeholder="Username" />
          </div>
          <div class="form-outline mb-3">
            <input type="password" id="password" name="password" class="form-control form-control-md" placeholder="Password" />
          </div>
          <div class="text-center mb-3">
            <router-link to="/afmdash"><button type="button" class="btn btn-primary w-100">LOGIN</button></router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'AfmLogin',
  components: {
  },
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
