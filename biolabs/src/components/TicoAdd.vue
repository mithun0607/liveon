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
          <div class="row bg-light rounded pl-4">
            <div class="col-9 mb-2 mt-4">
              <label class="font-weight-bold text-primary">ANNEXURE : <span class="text-dark font-weight-bold">03 TEST ARTICLE VERIFICATION DETAILS</span></label>
            </div>
            <div class="col-3 mb-2 mt-4">
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">TEST ART. NAME</label>
              <input type="text" class="form-control" id="test_article_name" v-model="test_article_name">
            </div>
            <div class="col-6 mb-3" style="display: none;">
              <label class="text-primary font-weight-bold">NAME</label>
              <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">SPONSOR NAME</label>
              <select class="form-control" id="mydropbox" v-model="tico_key" @change="copyValue()">
                <option v-for="detail in details" :key="detail.id" :value="detail.id">{{detail.sponser_name}}</option>
              </select>
              <input style="display: none;" type="text" id="mytextbox" v-model="sponsor_name"/>
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">PACKAGING DETAILS</label>
              <input type="text" class="form-control" id="pack_details" v-model="pack_details">
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">EXPIRY DATE</label>
              <input type="text" class="form-control" id="expiry_date1" v-model="expiry_date1">
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">BATCH/LOT NO.</label>
              <input type="text" class="form-control" id="batch_no" v-model="batch_no">
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">PHYSICAL APPEAR.</label>
              <input type="text" class="form-control" id="phy_app1" v-model="phy_app1">
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">BALANCE ID</label>
              <input type="text" class="form-control" id="balance_id1" v-model="balance_id1">
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">TOTAL QTY</label>
              <input type="text" class="form-control" id="total_qty1" v-model="total_qty1">
            </div>

            <div class="col-12 mt-4">
              <label class="text-primary mb-0 font-weight-bold">DETAILS OF TEST ITEM</label>
              <hr>
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">Condition at time of<br>receipt</label>
              <input class="form-control" list="condition1" v-model="condition1">
              <datalist id="condition1">
                <option value="Good"></option>
                <option value="Breakage"></option>
                <option value="Spillage"></option>
                <option value="Cracks"></option>
              </datalist>
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">Availability of documents pertaining to item</label>
              <input class="form-control" list="availability1" v-model="availability1">
              <datalist id="availability1">
                <option value="TIIS"></option>
                <option value="RIIS"></option>
                <option value="VIIS"></option>
                <option value="COM"></option>
                <option value="MSDS"></option>
              </datalist>
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">Transportation<br>check</label>
              <input class="form-control" list="transport1" v-model="transport1">
              <datalist id="transport1">
                <option value="Date of Dispatch of Item"></option>
                <option value="Coolant Not Available"></option>
                <option value="Mode of Transport"></option>
              </datalist>
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">Verification TIIS / RIIS/ VIIS Vs. Sample Label</label>
              <input type="text" class="form-control" id="verify1" v-model="verify1">
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">Details of observation</label>
              <input type="text" class="form-control" id="details1" v-model="details1">
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">Details of observation</label>
              <input type="text" class="form-control" id="details2" v-model="details2">
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">Details of observation</label>
              <input type="text" class="form-control" id="details3" v-model="details3">
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">Details of observation</label>
              <input type="text" class="form-control" id="details4" v-model="details4">
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">EXPIRY DATE</label>
              <input type="text" class="form-control" id="expiry_date2" v-model="expiry_date2">
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">PHYSICAL APPEAR.</label>
              <input type="text" class="form-control" id="phy_app2" v-model="phy_app2">
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">TOTAL QTY. RECEIVED</label>
              <input type="text" class="form-control" id="total_qty2" v-model="total_qty2">
            </div>
            <div class="col-3">
              <label class="text-primary font-weight-bold">BALANCE ID</label>
              <input type="text" class="form-control" id="balance_id2" v-model="balance_id2">
            </div>

            <div class="col-12 mt-4" style="display: none;">
              <label class="text-primary mb-0 font-weight-bold">DETAILS OF TEST ITEM</label>
              <hr>
            </div>
            <div class="col-3 mb-3" style="display: none;">
              <label class="text-primary font-weight-bold">Condition at time of<br>receipt</label>
              <input type="text" class="form-control" id="condition2" v-model="condition2">
            </div>
            <div class="col-3 mb-3" style="display: none;">
              <label class="text-primary font-weight-bold">Availability of documents pertaining to item</label>
              <input type="text" class="form-control" id="availability2" v-model="availability2">
            </div>
            <div class="col-3 mb-3" style="display: none;">
              <label class="text-primary font-weight-bold">Transportation<br>check</label>
              <input type="text" class="form-control" id="transport2" v-model="transport2">
            </div>
            <div class="col-3 mb-3" style="display: none;">
              <label class="text-primary font-weight-bold">Verification TIIS / RIIS/ VIIS Vs. Sample Label</label>
              <input type="text" class="form-control" id="verify2" v-model="verify2">
            </div>
            <div class="col-3 mb-3" style="display: none;">
              <label class="text-primary font-weight-bold">Details of observation</label>
              <input type="text" class="form-control" id="details5" v-model="details5">
            </div>
            <div class="col-3 mb-3" style="display: none;">
              <label class="text-primary font-weight-bold">Details of observation</label>
              <input type="text" class="form-control" id="details6" v-model="details6">
            </div>
            <div class="col-3 mb-3" style="display: none;">
              <label class="text-primary font-weight-bold">Details of observation</label>
              <input type="text" class="form-control" id="details7" v-model="details7">
            </div>
            <div class="col-3 mb-3" style="display: none;">
              <label class="text-primary font-weight-bold">Details of observation</label>
              <input type="text" class="form-control" id="details8" v-model="details8">
            </div>
            <div class="col-3 mb-3" style="display: none;">
              <label class="text-primary font-weight-bold">Any Discrepancy found</label>
              <input type="text" class="form-control" id="discrepancy2" v-model="discrepancy2">
            </div>
            <div class="col-3 mb-3" style="display: none;">
              <label class="text-primary font-weight-bold">Corrective Action</label>
              <input type="text" class="form-control" id="action2" v-model="action2">
            </div>

            <div class="col-12 mt-4">
              <label class="text-primary mb-0 font-weight-bold">ANNEXURE: <span class="text-dark mb-0 font-weight-bold">4 TEST ARTICLES RECEIPT RECORD</span></label>
              <hr>
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">TICO SL. NO</label>
              <input type="text" class="form-control" id="tico_sl" v-model="tico_sl">
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">TEST ART. NAME</label>
              <input type="text" class="form-control" id="tico_art_name" v-model="tico_art_name">
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">MODE OF DELIVERY</label>
              <input class="form-control" list="tico_mode" v-model="tico_mode">
              <datalist id="tico_mode">
                <option value="Courier"></option>
                <option value="In Person"></option>
              </datalist>
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">STORAGE CONDITION</label>
              <select class="form-control" id="tico_storage" v-model="tico_storage">
                  <option value="">Select</option>
                  <option value="Ambient ( +19 to 25 deg C )">Ambient ( +19 to 25 deg C )</option>
                  <option value="Refrigerator ( Cool / Dry ) ( +2 to +8 deg C )">Refrigerator ( Cool / Dry ) ( +2 to +8 deg C )</option>
                  <option value="Deep Freeze ( -14 to -27 deg C )">Deep Freeze ( -14 to -27 deg C )</option>
                </select>
            </div>
            <div class="col-3 mb-3">
              <label class="text-primary font-weight-bold">QTY. RECEIVED</label>
              <input type="text" class="form-control" id="tico_qty" v-model="tico_qty">
            </div>
            <div class="col-6 mb-3">
              <label class="text-primary font-weight-bold">REMARKS</label>
              <input type="text" class="form-control" id="tico_remarks" v-model="tico_remarks">
            </div>

            <div class="col-12">
              <center>
                <button type="button" class="btn btn-info text-white mb-4 mt-2">CANCEL</button>
                <button type="button" class="btn btn-success text-white ml-1 mb-4 mt-2" @click="save">SAVE</button>
              </center>
            </div>
          </div>      
        </div>    
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'TicoAdd',
  components: {
  },
  mounted: function(){
    this.loaddetailsTable()
  },
  data() {
    return {
      details: {},
      tico_sl: "",
      tico_art_name: "",
      tico_mode: "",
      tico_storage: "",
      tico_qty: "",
      tico_remarks: "",
      test_article_name: "",
      name: "",
      sponsor_name: "",
      tico_key: "",
      pack_details: "",
      expiry_date1: "",
      batch_no: "",
      phy_app1: "",
      balance_id1: "",
      total_qty1: "",
      condition1: "",
      availability1: "",
      transport1: "",
      verify1: "",
      details1: "",
      details2: "",
      details3: "",
      details4: "",
      expiry_date2: "",
      phy_app2: "",
      total_qty2: "",
      balance_id2: "",
      condition2: "",
      availability2: "",
      transport2: "",
      verify2: "",
      details5: "",
      details6: "",
      details7: "",
      details8: "",
      discrepancy2: "",
      action2: ""
    }
  },
  methods: {
    loaddetailsTable: function(){
      axios.get("/api/bddash").then((res) => {
        this.details = res.data.data;
      })
      .catch(()=>{
        console.log("Something Went Wrong");
      })
    },
    copyValue: function(){
      var dropboxvalue = $.trim($("#mydropbox").children("option:selected").text());
      this.sponsor_name = dropboxvalue;
    },
    save: function() {
      axios.post("/api/ticodash", {
        tico_sl: this.tico_sl,
        tico_art_name: this.tico_art_name,
        tico_mode: this.tico_mode,
        tico_storage: this.tico_storage,
        tico_qty: this.tico_qty,
        tico_remarks: this.tico_remarks,
        test_article_name: this.test_article_name,
        name: this.name,
        sponsor_name: this.sponsor_name,
        tico_key: this.tico_key,
        pack_details: this.pack_details,
        expiry_date1: this.expiry_date1,
        batch_no: this.batch_no,
        phy_app1: this.phy_app1,
        balance_id1: this.balance_id1,
        total_qty1: this.total_qty1,
        condition1: this.condition1,
        availability1: this.availability1,
        transport1: this.transport1,
        verify1: this.verify1,
        details1: this.details1,
        details2: this.details2,
        details3: this.details3,
        details4: this.details4,
        expiry_date2: this.expiry_date2,
        phy_app2: this.phy_app2,
        total_qty2: this.total_qty2,
        balance_id2: this.balance_id2,
        condition2: this.condition2,
        availability2: this.availability2,
        transport2: this.transport2,
        verify2: this.verify2,
        details5: this.details5,
        details6: this.details6,
        details7: this.details7,
        details8: this.details8,
        discrepancy2: this.discrepancy2,
        action2: this.action2
      }).then((res) => {
          alert("Successfully Saved!");
          window.location.href='/ticodash';
      }).catch(()=> {
          alert("Something Went Wrong!");
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
