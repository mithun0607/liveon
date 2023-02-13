<template>
  <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
  <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">GPMT</h5>
          </div>
          <div class="modal-body pl-4">
            <div class="row" v-for="detail in details1" :key="detail.id">
              <div class="col-12">
                <table class="table table-bordered" cellspacing="0" width="100%">
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Draft Study Plan</td>
                      <td><router-link :to="{ name: 'GpmtViewID', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>  
                      <td>2</td>
                      <td>Final Study Plan</td>
                      <td><router-link :to="{ name: 'FinalPlanGpmtViewID', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Allocate Study personnel</td>
                      <td><router-link to="/studyallocategpmt" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Study Schedule</td>
                      <td><router-link :to="{ name: 'StudySchdGpmtViewID', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Raw Data</td>
                      <td><router-link :to="{ name: 'StudyDataGpmtViewID', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Comments</td>
                      <td><router-link :to="{ name: 'GpmtCommentView', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Draft Study Report</td>
                      <td><router-link :to="{ name: 'StudyDraftReportGpmtViewID', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Final Study Report</td>
                      <td><router-link :to="{ name: 'StudyReportGpmtViewID', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <center>
            <button type="button" class="btn btn-secondary mt-3 mb-3 mr-1" data-dismiss="modal">CLOSE</button>
          </center>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">AST</h5>
          </div>
          <div class="modal-body pl-4">
            <div class="row" v-for="detail in details2" :key="detail.id">
              <div class="col-12">
                <table class="table table-bordered" cellspacing="0" width="100%">
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Draft Study Plan</td>
                      <td><router-link :to="{ name: 'AstViewID', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>  
                      <td>2</td>
                      <td>Final Study Plan</td>
                      <td><router-link :to="{ name: 'FinalPlanAstViewID', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Allocate Study personnel</td>
                      <td><router-link to="/studyallocateast" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Study Schedule</td>
                      <td><router-link :to="{ name: 'StudySchdAstViewID', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Raw Data</td>
                      <td><router-link :to="{ name: 'StudyDataAstViewID', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Comments</td>
                      <td><router-link :to="{ name: 'AstCommentView', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Draft Study Report</td>
                      <td><router-link :to="{ name: 'StudyDraftReportAstViewID', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Final Study Report</td>
                      <td><router-link :to="{ name: 'StudyReportAstViewID', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <center>
            <button type="button" class="btn btn-secondary mt-3 mb-3 mr-1" data-dismiss="modal">CLOSE</button>
          </center>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">IRTNZW</h5>
          </div>
          <div class="modal-body pl-4">
            <div class="row" v-for="detail in details2" :key="detail.id">
              <div class="col-12">
                <table class="table table-bordered" cellspacing="0" width="100%">
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Draft Study Plan</td>
                      <td><router-link :to="{ name: 'IrtnzwViewID', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>  
                      <td>2</td>
                      <td>Final Study Plan</td>
                      <td><router-link :to="{ name: 'FinalPlanIrtnzwViewID', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Allocate Study personnel</td>
                      <td><router-link to="/studyallocateartnzw" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Study Schedule</td>
                      <td><router-link :to="{ name: 'StudySchdIrtnzwViewID', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Raw Data</td>
                      <td><router-link :to="{ name: 'StudyDataIrtnzwViewID', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Comments</td>
                      <td><router-link :to="{ name: 'IrtnzwCommentView', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Draft Study Report</td>
                      <td><router-link :to="{ name: 'StudyDraftReportIrtnzwViewID', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Final Study Report</td>
                      <td><router-link :to="{ name: 'StudyReportIrtnzwViewID', params: { id: detail.id } }" class="text-dark" type="button" data-dismiss="modal"><font-awesome-icon icon="fa-solid fa-eye"/></router-link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <center>
            <button type="button" class="btn btn-secondary mt-3 mb-3 mr-1" data-dismiss="modal">CLOSE</button>
          </center>
        </div>
      </div>
    </div>

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
                <router-link to="#" class="mm-active">
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
          <div class="row bg-light rounded">
            <table id="example2" class="table table-striped table-bordered text-center" cellspacing="0" width="100%">
              <thead>
                <tr>
                  <th class="th-sm text-center">SL. No.
                  </th>
                  <th class="th-sm text-center">Sponsor Name
                  </th>
                  <th class="th-sm text-center">Study Number
                  </th>
                  <th class="th-sm text-center">Study Code
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
                <tr v-for="detail in details1" :key="detail.id">
                  <td>{{detail.id}}</td>
                  <td>{{detail.sponser_name}}</td>
                  <td>{{detail.study_no}}</td>
                  <td>{{detail.study_code}}</td>
                  <td>{{detail.timestamp}}</td>
                  <td><font-awesome-icon icon="fa-solid fa-envelope" type="button"/></td>
                  <td><font-awesome-icon icon="fa-solid fa-eye" data-toggle="modal" data-target="#exampleModal1" type="button"/></td>
                </tr>
                <tr v-for="detail in details2" :key="detail.id">
                  <td>{{detail.id}}</td>
                  <td>{{detail.sponser_name}}</td>
                  <td>{{detail.study_no}}</td>
                  <td>{{detail.study_code}}</td>
                  <td>{{detail.timestamp}}</td>
                  <td><font-awesome-icon icon="fa-solid fa-envelope" type="button"/></td>
                  <td><font-awesome-icon icon="fa-solid fa-eye" data-toggle="modal" data-target="#exampleModal2" type="button"/></td>
                </tr>
                <tr v-for="detail in details3" :key="detail.id">
                  <td>{{detail.id}}</td>
                  <td>{{detail.sponser_name}}</td>
                  <td>{{detail.study_no}}</td>
                  <td>{{detail.study_code}}</td>
                  <td>{{detail.timestamp}}</td>
                  <td><font-awesome-icon icon="fa-solid fa-envelope" type="button"/></td>
                  <td><font-awesome-icon icon="fa-solid fa-eye" data-toggle="modal" data-target="#exampleModal3" type="button"/></td>
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
  name: 'Study_NewDashboard',
  components: {
  },
  mounted: function() {
    this.loaddetailsTable1(),
    this.loaddetailsTable2(),
    this.loaddetailsTable3()
  },
  data() {
    return {
      details1: {},
      details2: {},
      details3: {},
    }
  },
  methods: {
    loaddetailsTable1: function(){
      axios.get("/api/bddashgpmt").then((res) => {
        this.details1 = res.data.data;
        this.$nextTick(function () {
          $('#example2').DataTable();
        })
      })
      .catch(()=>{
        console.log("Something Went Wrong");
      })
    },
    loaddetailsTable2: function(){
      axios.get("/api/bddashast").then((res) => {
        this.details2 = res.data.data;
        this.$nextTick(function () {
          $('#example2').DataTable();
        })
      })
      .catch(()=>{
        console.log("Something Went Wrong");
      })
    },
    loaddetailsTable3: function(){
      axios.get("/api/bddashirtnzw").then((res) => {
        this.details3 = res.data.data;
        this.$nextTick(function () {
          $('#example2').DataTable();
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
