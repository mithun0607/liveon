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
              </li>
              <li><br>
                <router-link to="#" class="mm-active">
                    TICO
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>    
      <div class="app-main__outer">
        <div class="app-main__inner">
          <div class="app-page-title">
            <div class="page-title-wrapper">
              <div class="page-title-heading">
                <div>
                  <button type="button" class="btn-shadow btn btn-primary">
                    TEST ARTICLE RECEIPT
                  </button>
                </div>
              </div>
              <div class="page-title-actions">
                <div class="d-inline-block dropdown">
                  <router-link to="/ticoadd">
                    <button type="button" aria-expanded="false" class="btn-shadow btn btn-primary rounded-circle btn-sm">
                      <span class="btn-icon-wrapper">
                        <i class="fa fa-plus fa-w-20"></i>
                      </span>
                    </button>
                  </router-link>
                  <span class="ml-1">
                    Add New
                  </span>
                </div>
              </div>    
            </div>
          </div>            
          <div class="row bg-light rounded">
          <div class="col-6 mb-3">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="#">Test Item</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">Reference Item</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">Vehicle</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">Placebo</a>
              </li>
            </ul>
          </div>
            <table id="example1" class="table table-striped table-bordered text-center" cellspacing="0" width="100%">
              <thead>
                <tr>
                  <th class="th-sm text-center">TICO SL. No.
                  </th>
                  <th class="th-sm text-center">Article Name
                  </th>
                  <th class="th-sm text-center">Mode of Delivery
                  </th>
                  <th class="th-sm text-center">Storage Location
                  </th>
                  <th class="th-sm text-center">Date | Time
                  </th>
                  <th class="th-sm text-center">Action
                  </th>
                  <th class="th-sm text-center">Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="detail in details" :key="detail.id">
                  <td>{{detail.tico_sl}}</td>
                  <td>{{detail.tico_art_name}}</td>
                  <td>{{detail.tico_mode}}</td>
                  <td>{{detail.tico_storage}}</td>
                  <td>{{detail.timestamp}}</td>
                  <td><router-link :to="{ name: 'TicoViewID', params: { id: detail.id } }" class="text-dark"><font-awesome-icon icon="fa-solid fa-eye" type="button"/></router-link></td>
                  <td><router-link :to="{ name: 'TicoAdd1ID', params: { id: detail.id } }" class="text-dark">Add Annexure 6</router-link></td>
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
  name: 'TicoDashboard',
  components: {
  },
  mounted: function(){
    this.loaddetailsTable()
  },
  data() {
    return {
      details: {}
    }
  },
  methods: {
    loaddetailsTable: function(){
      axios.get("/api/ticodash").then((res) => {
        this.details = res.data.data;
        this.$nextTick(function () {
          $('#example1').DataTable();
        })
      })
      .catch(()=>{
        console.log("Something Went Wrong");
      })
    },
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
  padding-top: 15px;
  padding-bottom: 15px;
}

.btn-primary {
  background-color: #4161A0 !important;
  border: #4161A0 !important;
}

.text-primary {
  color: #4161A0 !important;
}

.save {
  background-color: #63A94B !important;
  border: #63A94B !important;
}

.bg-primary, .bg-primary:hover {
  background-color: #183265 !important;
  border: #183265 !important;
  color: #fff;
}

.active {
  color: #4161A0 !important;
}
</style>
