<template>
  <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
    <div class="modal fade" id="exampleModalpdf" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Document View</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Document Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="detail in details" :key="detail.id">
                  <td>{{ detail.pdf }}</td>
                  <td><a :href="'/uploads/' + detail.pdf" target="_blank">View</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Reply from BD</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <textarea class="form-control" rows="4" v-model="bd_comments"></textarea>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success" @click="save">Submit</button>
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
                <router-link to="/bddash" class="mm-active">
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
            <div class="col-12 mb-4 mt-4">
              <label class="text-primary font-weight-bold">STUDY NO: {{detail.id}}</label>
            </div>
            <div class="col-3">
              <label class="text-primary font-weight-bold">SPONSOR NAME</label>
              <p class="text-primary">{{detail.sponser_name}}</p>
            </div>
            <div class="col-3">
              <label class="text-primary font-weight-bold">SPONSOR REP. NAME</label>
              <p class="text-primary">{{detail.rep_name}}</p>
            </div>
            <div class="col-3">
              <label class="text-primary font-weight-bold">SPONSOR CITY</label>
              <p class="text-primary">{{detail.city}}</p>
            </div>
            <div class="col-3">
              <label class="text-primary font-weight-bold">SPONSOR COUNTRY</label>
              <p class="text-primary">{{detail.country}}</p>
            </div>
            <div class="col-3">
              <label class="text-primary font-weight-bold">STUDY DATE</label>
              <p class="text-primary">{{detail.timestamp}}</p>
            </div>
            <div class="col-3">
              <label class="text-primary font-weight-bold">DOCUMENT</label>
              <p class="text-success">Uploaded <a :href="'/uploads/' + detail.pdf" target="_blank"> <font-awesome-icon icon="fa-solid fa-eye" class="text-dark" type="button"/></a></p>
            </div>
            <div class="col-3">
              <label class="text-primary font-weight-bold">BD PERSONNEL NAME</label>
              <p class="text-primary">Benith</p>
            </div>
            <div class="col-3">
              <label class="text-primary font-weight-bold">TFM APPROVAL STATUS</label>
              <p class="pending">{{detail.tfm_status}}</p>
            </div>
            <div class="col-12">
              <hr>
            </div>
            <div class="col-12">
              <p>Comments</p>
            </div>
            <div class="col-4 mb-2">
              <label class="text-primary font-weight-bold">Comment from TFM</label>
              <p class="text-primary">{{detail.tfm_comments}}</p>
            </div>
            <div class="col-4 mb-2">
              <label>{{detail.timestamp}}</label><br>
            </div>
            <div class="col-4 mb-2">
            </div>
            <div class="col-4 mb-2">
              <label class="text-primary font-weight-bold">Reply from BD</label>
              <p class="text-primary">{{detail.bd_comments}}</p>
            </div>
            <div class="col-4 mb-2">
              <label>{{detail.timestamp}}</label>
            </div>
            <div class="col-4 mb-2 text-right">
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">Reply</button>
            </div>
          </div>      
        </div>    
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'BdView',
  components: {
  },
  mounted: function() {
    this.getProductById()
  },
  data() {
    return {
       details: {},
       bd_comments: "",  
    }
  },
  methods: {
    getProductById: function(){
      let uri = "/api/bdview/" + this.$route.params.id;
      axios.get(uri).then((res) => {
        this.details = res.data.data;
      })
      .catch(()=>{
        console.log("Something Went Wrong");
      })
    },
    save: function() {
      let uri = "/api/bdupdatecom/" + this.$route.params.id;
      axios.post(uri, {
        bd_comments: this.bd_comments
      }).then((res) => {
          alert("Successfully Saved!");
          window.location.href='/bddash';
      }).catch(()=> {
          alert("Something Went Wrong!");
          window.location.href='/bddash';
      })
    }
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
</style>
