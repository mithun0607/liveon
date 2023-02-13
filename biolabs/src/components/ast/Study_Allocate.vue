<template>
  <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
    <div class="modal fade" id="modal2" tabindex="-1" data-keyboard="false" data-backdrop="static" role="dialog" aria-labelledby="modal2" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <center>
              <button type="button" class="btn-shadow btn btn-primary mb-4 mt-3">
                ALLOCATE STUDY PERSONNEL
              </button>
            </center>
            <div class="row">
              <div class="col-12">
                <select class="form-control" v-model="allocate_personnel">
                  <option value="">Select</option>
                  <option value="Ram">Ram</option>
                  <option value="Arun">Arun</option>
                  <option value="Rahul">Rahul</option>
                  <option value="Rohith">Rohith</option>
                </select>
              </div>
            </div>
            <center>
              <button type="button" class="btn btn-secondary mt-3 mb-3 mr-1" data-dismiss="modal">CLOSE</button>
              <button class="btn btn-primary mt-3 mb-3 save" @click="save">SAVE</button>
            </center>
          </div> 
        </div>
      </div>
    </div>

    <div class="app-header header-shadow">
      <div class="app-header__logo">
        <div class=""><img src="../../assets/logo.png" width="190px"></div>
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
                    <img src="../../assets/logout.png" class="logout"><br>
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
                <router-link to="/studynewdash" class="">
                    NEW
                </router-link>
              </li><br>
              <li>
                <router-link to="/studyondash" class="">
                    ONGOING
                </router-link>
              </li><br>
              <li>
                <router-link to="/studycompdash" class="">
                    COMPLETED
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
              </div>
              <div class="page-title-actions">
                <div class="d-inline-block dropdown">
                  <button type="button" data-toggle="modal" data-target="#modal2" aria-expanded="false" class="btn-shadow btn btn-primary rounded-circle btn-sm">
                    <span class="btn-icon-wrapper">
                      <i class="fa fa-plus fa-w-20"></i>
                    </span>
                  </button>
                  <span class="ml-1">
                    Add New
                  </span>
                </div>
              </div>    
            </div>
          </div>
          <div class="row bg-light rounded">
            <div class="col-12">
              <table id="example1" class="table table-striped table-bordered text-center" cellspacing="0" width="100%">
                <thead>
                  <tr>
                    <th class="th-sm text-center">SL. No.</th>
                    <th class="th-sm text-center">Study Personnel</th>
                    <th class="th-sm text-center">Allocation Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="detail in details" :key="detail.id">
                    <td>{{detail.id}}</td>
                    <td>{{detail.personnel}}</td>
                    <td>{{detail.timestamp}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>    
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Study_Allocate',
  components: {
  },
  mounted: function(){
    this.loaddetailsTable()
  },
  data() {
    return {
      details: {},
      allocate_personnel: ""
    }
  },
  methods: {
    loaddetailsTable: function(){
      axios.get("/api/personnel").then((res) => {
        this.details = res.data.data;
        this.$nextTick(function () {
          $('#example1').DataTable();
        })
      })
      .catch(()=>{
        console.log("Something Went Wrong");
      })
    },
    save: function() {
      axios.post("/api/personnel", {
        allocate_personnel: this.allocate_personnel
      }).then((res) => {
          alert("Successfully Saved!");
          window.location.href='/studyallocateast';
      }).catch(()=> {
          alert("Something Went Wrong!");
          window.location.href='/studyallocateast';
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
