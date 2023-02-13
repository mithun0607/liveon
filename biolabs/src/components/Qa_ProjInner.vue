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
                <router-link to="/qabddash" class="">
                    BD
                </router-link>
              </li><br>
              <li>
                <router-link to="/qaprojdash" class="mm-active">
                    Study
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>    
      <div class="app-main__outer">
        <div class="app-main__inner">
          <div class="row bg-light rounded pl-4">
          <div class="col-12 mt-4">
            <label class="text-primary mb-0 font-weight-bold">DETAILS OF TEST ITEM</label>
            <hr>
          </div>
          <div class="col-3">
            <label class="text-primary font-weight-bold">Condition at time of<br>receipt</label>
            <p class="">Good</p>
          </div>
          <div class="col-3">
            <label class="text-primary font-weight-bold">Availability of documents pertaining to item</label>
            <p class="">TIIS</p>
          </div>
          <div class="col-3">
            <label class="text-primary font-weight-bold">Transportation<br>check</label>
            <p class="">Date of dispatch of Item</p>
          </div>
          <div class="col-3">
            <label class="text-primary font-weight-bold">Verification TIIS / RIIS/ VIIS Vs. Sample Label</label>
            <p class="">TIIS</p>
          </div>
          <div class="col-3">
            <label class="text-primary font-weight-bold">Details of observation</label>
            <p class="">NA</p>
          </div>
          <div class="col-3">
            <label class="text-primary font-weight-bold">Details of observation</label>
            <p class="">NA</p>
          </div>
          <div class="col-3">
            <label class="text-primary font-weight-bold">Details of observation</label>
            <p class="">NA</p>
          </div>
          <div class="col-3">
            <label class="text-primary font-weight-bold">Details of observation</label>
            <p class="">NA</p>
          </div>
          <div class="col-3">
            <label class="text-primary font-weight-bold">Any Discrepancy found</label>
            <p class="">NA</p>
          </div>
          <div class="col-3">
            <label class="text-primary font-weight-bold">Corrective Action</label>
            <p class="">NA</p>
          </div>

          <div class="col-12 mt-4">
            <label class="text-primary mb-0 font-weight-bold">ANNEXURE: <span class="text-dark mb-0 font-weight-bold">4 TEST ARTICLES RECEIPT RECORD</span></label>
            <hr>
          </div>
          <div class="col-3" v-for="detail in details2" :key="detail.id">
            <label class="text-primary font-weight-bold">TICO SL. NO</label>
            <p class="">{{detail.id}}</p>
          </div>
          <div class="col-3" v-for="detail in details2" :key="detail.id">
            <label class="text-primary font-weight-bold">TEST ART. NAME</label>
            <p class="">{{detail.article_name}}</p>
          </div>
          <div class="col-3" v-for="detail in details2" :key="detail.id">
            <label class="text-primary font-weight-bold">MODE OF DELIVERY</label>
            <p class="">{{detail.mode}}</p>
          </div>
          <div class="col-3">
            <label class="text-primary font-weight-bold">STORAGE CONDITION</label>
            <p class="">Ambient</p>
          </div>
          <div class="col-3">
            <label class="text-primary font-weight-bold">QTY. RECEIVED</label>
            <p class="">2 Boxes</p>
          </div>
          <div class="col-3">
            <label class="text-primary font-weight-bold">REMARKS</label>
            <p class="">NA</p>
          </div>
          <div class="col-3">
            <label class="text-primary font-weight-bold">RECEIVED BY</label>
            <p class="">Lavanya, TICO</p>
          </div>

          <div class="accordion mt-4" id="accordionExample">
            <div class="card rounded">
              <div class="card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true">     
                <label class="text-primary mb-0 font-weight-bold">ANNEXURE: <span class="text-dark mb-0 font-weight-bold">6 SUB SAMPLING RECORD</span></label>
                <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button"/></span>
              </div>
              <div id="collapseThree" class="collapse show" data-parent="#accordionExample">
                <div class="card-body row">
                  <div class="col-12">
                    <label class="text-primary font-weight-bold">SPONSOR CODE :<span class="text-dark mb-0 font-weight-bold">XXXX</span></label>
                  </div>
                  <div class="col-12">
                    <table class="table table-striped text-center">
                      <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Weight of empty container</th>
                            <th scope="col">Container ID</th>
                            <th scope="col">Gross weight with test article</th>
                            <th scope="col">ID No. of sub sampling container</th>
                            <th scope="col">Balance ID</th>
                            <th scope="col">Signed</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="detail in details3" :key="detail.id">
                            <th>12-09-2022</th>
                            <td>{{ detail.cont_weight1 }}</td>
                            <td>{{ detail.con_id1 }}</td>
                            <td>{{ detail.gross_wt1 }}</td>
                            <td>{{ detail.samp_id1 }}</td>
                            <td>{{ detail.bal_id1 }}</td>
                            <td>LAVANYA G</td>
                          </tr>
                          <tr v-for="detail in details3" :key="detail.id">
                            <th>12-09-2022</th>
                            <td>{{ detail.cont_weight2 }}</td>
                            <td>{{ detail.con_id2 }}</td>
                            <td>{{ detail.gross_wt2 }}</td>
                            <td>{{ detail.samp_id2 }}</td>
                            <td>{{ detail.bal_id2 }}</td>
                            <td>LAVANYA G</td>
                          </tr>
                          <tr v-for="detail in details3" :key="detail.id">
                            <th>12-09-2022</th>
                            <td>{{ detail.cont_weight3 }}</td>
                            <td>{{ detail.con_id3 }}</td>
                            <td>{{ detail.gross_wt3 }}</td>
                            <td>{{ detail.samp_id3 }}</td>
                            <td>{{ detail.bal_id3 }}</td>
                            <td>LAVANYA G</td>
                          </tr>
                          <tr v-for="detail in details3" :key="detail.id">
                            <th>12-09-2022</th>
                            <td>{{ detail.cont_weight4 }}</td>
                            <td>{{ detail.con_id4 }}</td>
                            <td>{{ detail.gross_wt4 }}</td>
                            <td>{{ detail.samp_id4 }}</td>
                            <td>{{ detail.bal_id4 }}</td>
                            <td>LAVANYA G</td>
                          </tr>
                          <tr v-for="detail in details3" :key="detail.id">
                            <th>12-09-2022</th>
                            <td>{{ detail.cont_weight5 }}</td>
                            <td>{{ detail.con_id5 }}</td>
                            <td>{{ detail.gross_wt5 }}</td>
                            <td>{{ detail.samp_id5 }}</td>
                            <td>{{ detail.bal_id5 }}</td>
                            <td>LAVANYA G</td>
                          </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 mt-4">
            <label class="text-primary mb-0 font-weight-bold">RECENT ACTIVITY</label>
            <hr>
          </div>
          <div class="col-8">
            <label class="text-primary font-weight-bold">EDIT : <span class="text-dark font-weight-normal">Re saved the form with updated sample weight</span></label>
          </div>
          <div class="col-4">
            <label class="">16-09-2022 | 5:30 PM IST</label>
            <p class="">LAVANYA, TICO</p>
          </div>

          <div class="col-12 mt-4">
            <label class="text-primary mb-0 font-weight-bold">ALLOTMANT OF SPONSOR CODE, TEST ARTICLE CODE, STUDY NUMBER, STUDY CODE</label>
          </div>
          <div class="col-8 mt-4 mb-0">
            <label class="">RECORD FOR ALLOTMENT OF SPONSOR CODE</label>
          </div>
          <div class="col-12">
            <hr class="mt-0">
          </div>
          <div class="col-12">
            <table class="table table-striped">
              <thead>
              <tr>
                <th scope="col">Sponor Name</th>
                <th scope="col">Sponor Address</th>
                <th scope="col">Sponor Code</th>
                <th scope="col">Alloted by</th>
                <th scope="col">Date</th>
                <th scope="col">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="detail in details1" :key="detail.id">
                <th>{{detail.sponser_name}}</th>
                <td>{{detail.address}}</td>
                <td>{{detail.sponsor_code}}</td>
                <td>LAVANYA</td>
                <td>{{detail.tfm_timestamp}}</td>
                <td>{{detail.remarks1}}</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div class="col-8 mt-4 mb-0">
            <label class="">RECORD FOR ALLOTMENT OF TEST ARTICLE CODE</label>
          </div>
          <div class="col-12">
            <hr class="mt-0">
          </div>
          <div class="col-12">
            <table class="table table-striped">
              <thead>
              <tr>
                <th scope="col">Test Article Name</th>
                <th scope="col">Type@</th>
                <th scope="col">Test Artice Code</th>
                <th scope="col">Alloted by</th>
                <th scope="col">Date</th>
                <th scope="col">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="detail in details1" :key="detail.id">
                <th v-for="detail in details2" :key="detail.id">{{detail.article_name}}</th>
                <td>{{detail.type}}</td>
                <td>{{detail.article_code}}</td>
                <td>LAVANYA</td>
                <td>{{detail.timestamp}}</td>
                <td>{{detail.remarks2}}</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div class="col-8 mt-4 mb-0">
            <label class="">RECORD FOR ALLOTMENT OF STUDY NUMBER &  STUDY DIRECTOR</label>
          </div>
          <div class="col-12">
            <hr class="mt-0">
          </div>
          <div class="col-12 mb-4">
            <table class="table table-striped">
              <thead>
              <tr>
                <th scope="col">Study No.</th>
                <th scope="col">G / NG</th>
                <th scope="col">Study Code</th>
                <th scope="col">Test Art. Code</th>
                <th scope="col">SD</th>
                <th scope="col">Alloted by</th>
                <th scope="col">Date</th>
                <th scope="col">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="detail in details1" :key="detail.id">
                <th>{{detail.study_no}}</th>
                <td>{{detail.g_ng}}</td>
                <td>{{detail.study_code}}</td>
                <td>{{detail.article_code}}</td>
                <td>Rakesh</td>
                <td>LAVANYA</td>
                <td>{{detail.timestamp}}</td>
                <td>{{detail.remarks3}}</td>
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
  name: 'Qa_ProjInner',
  components: {
  },
  mounted: function() {
    this.bd()
    this.sec()
    this.tico1()
  },
  data() {
    return {
      details1: {},
      details2: {},
      details3: {}
    }
  },
  methods: {
    bd: function(){
      let uri = "/api/bdview/" + this.$route.params.id;
      axios.get(uri).then((res) => {
        this.details1 = res.data.data;
      })
      .catch(()=>{
        console.log("Something Went Wrong");
      })
    },
    sec: function(){
      let uri = "/api/secdashview/" + this.$route.params.id;
      axios.get(uri).then((res) => {
        this.details2 = res.data.data;
      })
      .catch(()=>{
        console.log("Something Went Wrong");
      })
    },
    tico1: function(){
      let uri3 = "/api/ticoview1/" + this.$route.params.id;
      axios.get(uri3).then((res) => {
        this.details3 = res.data.data;
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
  background-color: #63A94B !important;
  border: #63A94B !important;
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

.disabled {
  pointer-events:none;
  background: #E2E2E2;
}

.btn-info {
  background: #284681 !important;
  border: #284681 !important;
}
</style>
