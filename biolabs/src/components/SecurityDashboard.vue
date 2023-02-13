<template>
  <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
    <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="modal1" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="bg-primary rounded pt-2 pb-2">
            <center>
              <span>
                VIEW TEST ARTICLE RECEIPT
              </span>
            </center>
          </div>
          <div class="modal-body">
            <div class="row pl-4">
              <div class="col-6">
                <label class="text-primary uppercase">TEST ARTICLE NUMBER</label>
                <p>1</p>
              </div>
              <div class="col-6">
                <label class="text-primary">DATE OF RECEIPT</label>
                <p>16-09-2022 | 9:00 AM</p>
              </div>
              <div class="col-6">
                <label class="text-primary">TEST ARTICLE NAME</label>
                <p>Test Item</p>
              </div>
              <div class="col-6">
                <label class="text-primary">MODE OF DELIVERY</label>
                <p>Courier</p>
              </div>
              <div class="col-6">
                <label class="text-primary">STORAGE CONDITION<br>(As on label)</label>
                <p>Ambient</p>
              </div>
              <div class="col-6">
                <label class="text-primary">STORAGE CONDITION<br>(After receipt)</label>
                <p>Frozen</p>
              </div>
              <div class="col-6">
                <label class="text-primary">QUANTITY RECEIVED</label>
                <p>1 Box</p>
              </div>
              <div class="col-6">
                <label class="text-primary">LOCATION OF STORAGE</label>
                <p>TICO Room 1</p>
              </div>
              <div class="col-6">
                <label class="text-primary">RECEIVED BY</label>
                <p>Akash</p>
              </div>
              <div class="col-6">
                <label class="text-primary">RECEIVED BY TICO</label>
                <p>Status: Received, Kiran G</p>
              </div>
            </div>
          </div>
          <center><button type="button" class="btn bg-primary mb-3 mt-1" data-dismiss="modal">CLOSE</button></center>
        </div>
      </div>
    </div>

    <div class="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="modal2" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
          <center>
            <button type="button" class="btn-shadow btn btn-primary mb-4 mt-3">
              NEW TEST ARTICLE RECEIPT
            </button>
          </center>
            <div class="row">
              <div class="col-6 mb-4">
                <label>Test Article Name</label>
                <input type="text" class="form-control" v-model="article_name" id="article_name">
              </div>
              <div class="col-6 mb-4">
                <label>Mode of Delivery</label>
                <select class="form-control" v-model="mode" id="mode">
                  <option value="">Select</option>
                  <option value="Courier">Courier</option>
                  <option value="In Person">In Person</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div class="col-6 mb-4">
                <label>Storage Condition<br>(As on label)</label>
                <select class="form-control" v-model="condition1" id="condition1">
                  <option value="">Select</option>
                  <option value="Ambient">Ambient</option>
                  <option value="Frozen">Frozen</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div class="col-6 mb-4">
                <label>Storage Condition<br>(After receipt)</label>
                <select class="form-control" v-model="condition2" id="condition2">
                  <option value="">Select</option>
                  <option value="Ambient">Ambient</option>
                  <option value="Frozen">Frozen</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div class="col-6">
                <label>Quantity Received</label>
                <input type="text" class="form-control" v-model="quantity" id="quantity">
              </div>
              <div class="col-6">
                <label>Location of Storage</label>
                <select class="form-control" v-model="location" id="location">
                  <option value="">Select</option>
                  <option value="TICO Room 1">TICO Room 1</option>
                  <option value="TICO Room 2">TICO Room 2</option>
                  <option value="TICO Room 3">TICO Room 3</option>
                </select>
              </div>
            </div>
            <center>
              <button type="button" class="btn btn-secondary mt-3 mb-3 mr-1" data-dismiss="modal">CLOSE</button>
              <button class="btn btn-primary mt-3 mb-3 save">SAVE</button>
            </center>
          </div>
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
                    Records
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
                  <router-link to="/secdashadd"><button type="button" class="btn-shadow btn btn-primary rounded-circle btn-sm">
                    <span class="btn-icon-wrapper">
                      <i class="fa fa-plus fa-w-20"></i>
                    </span>
                  </button></router-link>
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
                  <th class="th-sm text-center">SL. No.
                  </th>
                  <th class="th-sm text-center">Article Name
                  </th>
                  <th class="th-sm text-center">Mode of Delivery
                  </th>
                  <th class="th-sm text-center">Storage Location
                  </th>
                  <th class="th-sm text-center">Date | Time
                  </th>
                  <th class="th-sm text-center">View
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="detail in details" :key="detail.id">
                  <td>{{detail.id}}</td>
                  <td>{{detail.article_name}}</td>
                  <td>{{detail.mode}}</td>
                  <td>{{detail.location}}</td>
                  <td>{{detail.timestamp}}</td>
                  <td><router-link :to="{ name: 'SecViewID', params: { id: detail.id } }" class="text-dark"><font-awesome-icon icon="fa-solid fa-eye" type="button"/></router-link></td>
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
import axios from 'axios';
export default {
  name: "SecurityDashboard",
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
      axios.get("/api/secdash").then((res) => {
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
};
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
