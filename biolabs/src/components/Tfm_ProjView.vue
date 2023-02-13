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
                <router-link to="/tfmbddash" class="">
                    BD
                </router-link>
              </li><br>
              <li>
                <router-link to="/tfmprojdash" class="mm-active">
                    Study
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>    
      <div class="app-main__outer">
        <div class="app-main__inner">
          <div class="row bg-light rounded" v-for="detail in details" :key="detail.id">
          <div class="row">
            <div class="col-12">
              <label class="text-primary">Sponsor Name: </label><span>&nbsp; {{detail.sponser_name}}</span>
            </div>
            <div class="col-12 mb-3">
              <label class="text-primary">Sponsor Code: </label><span>&nbsp; {{detail.sponsor_code}}</span>
            </div>
          </div>
            <table id="example2" class="table table-striped table-bordered text-center" cellspacing="0" width="100%">
              <thead>
                <tr>
                  <th class="th-sm text-center">SL. No.
                  </th>
                  <th class="th-sm text-center">Test Article Code
                  </th>
                  <th class="th-sm text-center">Study Number
                  </th>
                  <th class="th-sm text-center">Study Director
                  </th>
                  <th class="th-sm text-center">Study Status
                  </th>
                  <th class="th-sm text-center">Category
                  </th>
                  <th class="th-sm text-center">Date of Creation
                  </th>
                  <th class="th-sm text-center">Comments
                  </th>
                  <th class="th-sm text-center">View/Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{detail.id}}</td>
                  <td>{{detail.article_code}}</td>
                  <td>{{detail.study_no}}</td>
                  <td>{{detail.study_dir}}</td>
                  <td>In Progress</td>
                  <td>{{detail.g_ng}}</td>
                  <td>{{detail.timestamp}}</td>
                  <td><font-awesome-icon icon="fa-solid fa-envelope" type="button"/></td>
                  <td><router-link :to="{ name: 'TfmProjInnerViewID', params: { id: detail.id } }" class="text-dark"><font-awesome-icon icon="fa-solid fa-eye" type="button"/></router-link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>    
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Tfm_ProjView',
  components: {
  },
  mounted: function() {
    this.getProductById()
  },
  data() {
    return {
      details: {}
    }
  },
  methods: {
    getProductById: function(){
      let uri = "/api/bdview/" + this.$route.params.id;
      axios.get(uri).then((res) => {
        this.details = res.data.data;
        this.$nextTick(function () {
          $('#example2').DataTable();
        })
      })
      .catch(()=>{
        console.log("Something Went Wrong");
      })
    },
  },
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

.vertical-nav-menu li a.mm-active {
  color: #343a40;
  background: rgba(32, 55, 107, 0.12);
  font-weight: 700;
}

.logout {
  height: 20px;
}

.text-primary {
  color: #4161A0 !important;
}

.text-warning {
  color: #FCAC62 !important;
}

.text-success {
  color: #1B9A3F !important;
}

.bg-light {
  background-color: #fff !important;
  padding-top: 15px;
  padding-bottom: 15px;
}

.btn-primary {
  background-color: #4161A0 !important;
  border: #4161A0 !important;
}

.save {
  background-color: #63A94B !important;
  border: #63A94B !important;
}
</style>
