<template>
  <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
    <div class="app-header header-shadow">
      <div class="app-header__logo">
        <div class=""><img src="../assets/logo.png" width="190px"></div>  
      </div>
      <div class="app-header__mobile-menu">
        <div>
          <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div class="app-header__menu">
        <span>
          <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
            <span class="btn-icon-wrapper">
              <i class="fa fa-ellipsis-v fa-w-6"></i>
            </span>
          </button>
        </span>
      </div>    
      <div class="app-header__content">
        <div class="app-header-right">
          <div class="header-btn-lg pr-0">
            <div class="widget-content p-0">
              <div class="widget-content-wrapper">
                <div class="widget-content-right header-user-info ml-3">
                  <router-link to="/"><button type="button" class="btn btn-sm show-toastr-example">
                    <img src="../assets/logout.png" class="logout"><br>
                    <span>Logout</span>
                  </button></router-link>
                </div>
              </div>
            </div>
          </div>        
        </div>
      </div>
    </div>        
    <div class="ui-theme-settings">
      <button type="button" id="TooltipDemo" class="btn-open-options btn btn-warning">
        <i class="fa fa-cog fa-w-16 fa-spin fa-2x"></i>
      </button>
    </div>        
    <div class="app-main">
      <div class="app-sidebar sidebar-shadow">
        <div class="app-header__logo">
          <div class="logo-src"></div>
          <div class="header__pane ml-auto">
            <div>
              <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="app-header__mobile-menu">
          <div>
            <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <div class="app-header__menu">
          <span>
            <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
              <span class="btn-icon-wrapper">
                <i class="fa fa-ellipsis-v fa-w-6"></i>
              </span>
            </button>
          </span>
        </div>    
        <div class="scrollbar-sidebar mt-4">
          <div class="app-sidebar__inner">
            <ul class="vertical-nav-menu">
              <li>
                <router-link to="/ticosecdash" class="">
                    SECURITY
                </router-link>
              </li><br>
              <li>
                <router-link to="/ticodash" class="mm-active">
                    TICO
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>    
      <div class="app-main__outer">
        <div class="app-main__inner">
          <div class="row bg-light rounded pl-4" v-for="detail in details3" :key="detail.id">
            <div class="accordion mt-4 mb-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true">     
                  <label class="text-primary mb-0 font-weight-bold">ANNEXURE: <span class="text-dark mb-0 font-weight-bold">6 SUB SAMPLING RECORD</span></label>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" class="text-dark" type="button" /></span>
                </div>
                <div id="collapseOne" class="collapse show" data-parent="#accordionExample">
                  <div class="card-body row">
                    <div class="col-12">
                      <label class="text-primary font-weight-bold">SPONSOR CODE :<span class="text-dark mb-0 font-weight-bold">XXXX</span></label>
                    </div>
                    <div class="col-12">
                      <table class="table table-striped text-center">
                        <thead>
                          <tr>
                            <th scope="col">Weight of empty container</th>
                            <th scope="col">Container ID</th>
                            <th scope="col">Gross weight with test article</th>
                            <th scope="col">ID No. of sub sampling container</th>
                            <th scope="col">Balance ID</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th><input type="text" class="form-control" v-model="cont_weight1"></th>
                            <td><input type="text" class="form-control" v-model="con_id1"></td>
                            <td><input type="text" class="form-control" v-model="gross_wt1"></td>
                            <td><input type="text" class="form-control" v-model="samp_id1"></td>
                            <td><input type="text" class="form-control" v-model="bal_id1"></td>
                          </tr>
                          <tr>
                            <th><input type="text" class="form-control" v-model="cont_weight2"></th>
                            <td><input type="text" class="form-control" v-model="con_id2"></td>
                            <td><input type="text" class="form-control" v-model="gross_wt2"></td>
                            <td><input type="text" class="form-control" v-model="samp_id2"></td>
                            <td><input type="text" class="form-control" v-model="bal_id2"></td>
                          </tr>
                          <tr>
                            <th><input type="text" class="form-control" v-model="cont_weight3"></th>
                            <td><input type="text" class="form-control" v-model="con_id3"></td>
                            <td><input type="text" class="form-control" v-model="gross_wt3"></td>
                            <td><input type="text" class="form-control" v-model="samp_id3"></td>
                            <td><input type="text" class="form-control" v-model="bal_id3"></td>
                          </tr>
                          <tr>
                            <th><input type="text" class="form-control" v-model="cont_weight4"></th>
                            <td><input type="text" class="form-control" v-model="con_id4"></td>
                            <td><input type="text" class="form-control" v-model="gross_wt4"></td>
                            <td><input type="text" class="form-control" v-model="samp_id4"></td>
                            <td><input type="text" class="form-control" v-model="bal_id4"></td>
                          </tr>
                          <tr>
                            <th><input type="text" class="form-control" v-model="cont_weight5"></th>
                            <td><input type="text" class="form-control" v-model="con_id5"></td>
                            <td><input type="text" class="form-control" v-model="gross_wt5"></td>
                            <td><input type="text" class="form-control" v-model="samp_id5"></td>
                            <td><input type="text" class="form-control" v-model="bal_id5"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                      <div class="col-12">
                        <center>
                          <button type="button" class="btn btn-success text-white ml-1 mb-4 mt-2" @click="save">SAVE</button>
                        </center>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>      
        </div>    
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'TicoAdd1',
  components: {
  },
  mounted: function() {
    this.tico()
  },
  data() {
    return {
      details3: {},
      cont_weight1: "",
      con_id1: "",
      gross_wt1: "",
      samp_id1: "",
      bal_id1: "",
      cont_weight2: "",
      con_id2: "",
      gross_wt2: "",
      samp_id2: "",
      bal_id2: "",
      cont_weight3: "",
      con_id3: "",
      gross_wt3: "",
      samp_id3: "",
      bal_id3: "",
      cont_weight4: "",
      con_id4: "",
      gross_wt4: "",
      samp_id4: "",
      bal_id4: "",
      cont_weight5: "",
      con_id5: "",
      gross_wt5: "",
      samp_id5: "",
      bal_id5: ""
    }
  },
  methods: {
    tico: function(){
      let uri3 = "/api/ticoview/" + this.$route.params.id;
      axios.get(uri3).then((res) => {
        this.details3 = res.data.data;
      })
      .catch(()=>{
        console.log("Something Went Wrong");
      })
    },
    save: function() {
      let uri = "/api/ticoadd1/" + this.$route.params.id;
      axios.post(uri, {
        cont_weight1: this.cont_weight1,
        con_id1: this.con_id1,
        gross_wt1: this.gross_wt1,
        samp_id1: this.samp_id1,
        bal_id1: this.bal_id1,
        cont_weight2: this.cont_weight2,
        con_id2: this.con_id2,
        gross_wt2: this.gross_wt2,
        samp_id2: this.samp_id2,
        bal_id2: this.bal_id2,
        cont_weight3: this.cont_weight3,
        con_id3: this.con_id3,
        gross_wt3: this.gross_wt3,
        samp_id3: this.samp_id3,
        bal_id3: this.bal_id3,
        cont_weight4: this.cont_weight4,
        con_id4: this.con_id4,
        gross_wt4: this.gross_wt4,
        samp_id4: this.samp_id4,
        bal_id4: this.bal_id4,
        cont_weight5: this.cont_weight5,
        con_id5: this.con_id5,
        gross_wt5: this.gross_wt5,
        samp_id5: this.samp_id5,
        bal_id5: this.bal_id5
      }).then((res) => {
          alert("Successfully Saved!");
          window.location.href='/ticodash';
      }).catch(()=> {
          alert("Already Added!");
          window.location.href='/ticodash';
      })
    }
  }
}
</script>

<style scoped>
.app-sidebar {
  width: 220px;
  min-width: 220px;
}

.fixed-sidebar .app-main .app-main__outer {
  padding-left: 220px;
}

.text-primary {
  color: #4161A0 !important;
}

.pending, .idle {
  color: #4075FF !important;
}

.text-success {
  color: #0F8831 !important;
}

.btn-success {
  background-color: #1B8639 !important;
  border: #1B8639 !important;
}

.vertical-nav-menu li a.mm-active {
  color: #343a40;
  background: rgba(32, 55, 107, 0.12);
  font-weight: 700;
}

.logout {
  height: 20px;
}

.bg-light {
  background-color: #fff !important;
}

.card-header:not(.collapsed) .rotate-icon {
  transform: rotate(180deg);
}

.bg-secondary {
  background: rgba(65, 97, 160, 0.06) !important;
}

.accordion {
  padding-left: 0 !important;
}

.btn-secondary {
  background-color: #D3D3D3 !important;
  border: #D3D3D3 !important;
}

.btn-info {
  background: #183265 !important;
  border: #183265 !important;
}
</style>
