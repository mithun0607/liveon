<template>
<section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Biolabs" >
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <div class="page-content mt-4">
        <div class="row mb-4">
          <div class="col-xl-4 col-md-6 mb-4">
            <router-link to="/security" class="link">
              <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-warning text-uppercase mb-1 ml-2">
                        Security<br>Login
                      </div>
                      <!-- <div class="h5 mb-0 font-weight-bold text-gray-800">18</div> -->
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-xl-4 col-md-6 mb-4">
            <router-link to="/bd" class="link">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1 ml-2">
                        BD<br>Login
                      </div>
                      <!-- <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000</div> -->
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-xl-4 col-md-6 mb-4">
            <router-link to="/tfm" class="link">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-success text-uppercase mb-1 ml-2">
                        TFM<br>Login
                      </div>
                      <!-- <div class="h5 mb-0 font-weight-bold text-gray-800">$215,000</div> -->
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-xl-4 col-md-6 mb-4">
            <router-link to="/tico" class="link">
              <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-info text-uppercase mb-1 ml-2">
                        TICO<br>Login
                      </div>
                      <!-- <div class="h5 mb-0 font-weight-bold text-gray-800">$215,000</div> -->
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-xl-4 col-md-6 mb-4">
            <router-link to="/qa" class="link">
              <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-warning text-uppercase mb-1 ml-2">
                        QA<br>Login
                      </div>
                      <!-- <div class="h5 mb-0 font-weight-bold text-gray-800">18</div> -->
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-xl-4 col-md-6 mb-4">
            <router-link to="/study" class="link">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1 ml-2">
                        SD<br>Login
                      </div>
                      <!-- <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000</div> -->
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-xl-4 col-md-6 mb-4" style="display:none">
            <router-link to="/afm" class="link">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-success text-uppercase mb-1 ml-2">
                        AF<br>Login
                      </div>
                      <!-- <div class="h5 mb-0 font-weight-bold text-gray-800">$215,000</div> -->
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'LoginHome',
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

.link {
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.font-weight-bold {
    font-weight: 500!important;
}

.border-left-info {
    border-left: 0.25rem solid #36b9cc!important;
}

.border-left-success {
    border-left: 0.25rem solid #1cc88a!important;
}

.border-left-primary {
    border-left: 0.25rem solid #4e73df!important;
}

.border-left-warning {
    border-left: 0.25rem solid #f6c23e!important;
}
</style>
