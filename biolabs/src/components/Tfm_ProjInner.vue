<template>
  <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
    <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-body pl-4">
            <center>
              <label class="text-primary font-weight-bold mb-4 mt-3">
                RECORD FOR ALLOTMENT OF SPONSOR CODE
              </label>
            </center>
            <div class="row" v-for="detail in details1" :key="detail.id">
              <div class="col-3">
                <label class="text-primary">SPONSOR NAME</label>
                <input type="text" class="form-control disabled" v-model="detail.sponser_name">
              </div>
              <div class="col-3">
                <label class="text-primary">SPONSOR ADDRESS</label>
                <input type="text" class="form-control disabled" v-model="detail.address">
              </div>
              <div class="col-3">
                <label class="text-primary">SPONSOR CODE</label>
                <input type="text" class="form-control" v-model="sponsor_code">
              </div>
              <div class="col-3">
                <label class="text-primary">ALLOTED BY</label>
                <input type="text" class="form-control disabled" value="Ramya">
              </div>
              <div class="col-6 mt-3">
                <label class="text-primary">REMARKS</label>
                <input type="text" class="form-control" v-model="remarks1">
              </div>
            </div>
          </div>
          <center>
            <button type="button" class="btn btn-secondary mt-3 mb-3 mr-1 text-dark" data-dismiss="modal">BACK</button>
          </center>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-body pl-4">
            <center>
              <label class="text-primary font-weight-bold mb-4 mt-3">
                RECORD FOR ALLOTMENT OF TEST ARTICLE CODE
              </label>
            </center>
            <div class="row" v-for="detail in details1" :key="detail.id">
              <div class="col-3" v-for="detail in details2" :key="detail.id">
                <label class="text-primary">TEST ARTICLE NAME</label>
                <input type="text" class="form-control disabled" v-model="detail.article_name">
              </div>
              <div class="col-3">
                <label class="text-primary">TYPE@</label>
                <input class="form-control" list="type" v-model="type">
                <datalist id="type">
                  <option value="Test Item"></option>
                  <option value="Reference Item"></option>
                  <option value="Vehicle"></option>
                  <option value="Placebo"></option>
                </datalist>
              </div>
              <div class="col-3">
                <label class="text-primary">TEST ARTICLE CODE</label>
                <input type="text" class="form-control" v-model="article_code">
              </div>
              <div class="col-3">
                <label class="text-primary">ALLOTED BY</label>
                <input type="text" class="form-control disabled" value="Ramya">
              </div>
              <div class="col-6 mt-3">
                <label class="text-primary">REMARKS</label>
                <input type="text" class="form-control" v-model="remarks2">
              </div>
            </div>
          </div>
          <center>
            <button type="button" class="btn btn-secondary mt-3 mb-3 mr-1 text-dark" data-dismiss="modal">BACK</button>
          </center>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-body pl-4">
            <center>
              <label class="text-primary font-weight-bold mb-4 mt-3">
                RECORD FOR ALLOTMENT OF STUDY NUMBER / STUDY DIRECTOR
              </label>
            </center>
            <div class="row" v-for="detail in details1" :key="detail.id">
              <div class="col-3">
                <label class="text-primary">STUDY NO.</label>
                <input type="text" class="form-control" v-model="study_no">
              </div>
              <div class="col-3">
                <label class="text-primary">G / NG</label>
                <input class="form-control" list="g_ng" v-model="g_ng">
                <datalist id="g_ng">
                  <option value="G"></option>
                  <option value="NG"></option>
                </datalist>
              </div>
              <div class="col-3">
                <label class="text-primary">STUDY CODE</label>
                <select class="form-control" v-model="study_code">
                  <option value="AOTR">AOTR</option>
                  <option value="AOTM">AOTM</option>
                  <option value="ADRT">ADRT</option>
                  <option value="ADIRB">ADIRB</option>
                  <option value="AEIR">AEIR</option>
                  <option value="GPMT">GPMT</option>
                  <option value="BT">BT</option>
                  <option value="AST">AST</option>
                  <option value="BRMT">BRMT</option>
                  <option value="CAT">CAT</option>
                  <option value="HDM">HDM</option>
                  <option value="HIDM">HIDM</option>
                  <option value="IMP-M (12 Weeks)">IMP-M (12 Weeks)</option>
                  <option value="IMP-S (1 Week)">IMP-S (1 Week)</option>
                  <option value="IRTNZW">IRTNZW</option>
                  <option value="SINZW">SINZW</option>
                  <option value="ICT">ICT</option>
                  <option value="MNT">MNT</option>
                  <option value="MLA">MLA</option>
                  <option value="OMIT">OMIT</option>
                  <option value="PYR">PYR</option>
                  <option value="RP-DT">RP-DT</option>
                  <option value="28-ONZW">28-ONZW</option>
                  <option value="28-OGR">28-OGR</option>
                  <option value="90-OGR">90-OGR</option>
                  <option value="28-OGM">28-OGM</option>
                  <option value="90-OGM">90-OGM</option>
                  <option value="14-SAIVIP">14-SAIVIP</option>
                  <option value="28-SAIVIP">28-SAIVIP</option>
                  <option value="90-SCIVIP">90-SCIVIP</option>
                  <option value="180-CIVIP">180-CIVIP</option>
                </select>
              </div>
              <div class="col-3">
                <label class="text-primary">TEST ARTICLE CODE</label>
                <input type="text" class="form-control disabled" v-model="detail.article_code">
              </div>
              <div class="col-3 mt-3">
                <label class="text-primary">SD</label>
                <select class="form-control" v-model="study_dir">
                  <option value="">Select</option>
                  <option value="Mr.Rakesh">Mr.Rakesh</option>
                  <option value="Ms.Savitha">Ms.Savitha</option>
                  <option value="Ms.Lakshmi">Ms.Lakshmi</option>
                  <option value="Ms.Zehra Khanum">Ms.Zehra Khanum</option>
                </select>
              </div>
              <div class="col-3 mt-3">
                <label class="text-primary">ALLOTED BY</label>
                <input type="text" class="form-control disabled" value="Ramya">
              </div>
              <div class="col-3 mt-3">
                <label class="text-primary">REMARKS</label>
                <input type="text" class="form-control" v-model="remarks3">
              </div>
            </div>
          </div>
          <center>
            <button type="button" class="btn btn-secondary mt-3 mb-3 mr-1 text-dark" data-dismiss="modal">BACK</button>
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
          <div class="row bg-light rounded pl-4">

          <div class="accordion mt-4" id="accordionExample">
            <div class="card rounded" v-for="detail in details1" :key="detail.id">
              <div class="card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true">     
                <span class="title">BD </span>
                <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button"/></span>
              </div>
              <div id="collapseOne" class="collapse show" data-parent="#accordionExample">
                <div class="card-body row">
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
                    <p class="text-success">{{detail.tfm_status}}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mt-4 rounded" v-for="detail in details2" :key="detail.id">
              <div class="card-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true">     
                <span class="title">TICO </span>
                <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" class="text-dark" type="button"/></span>
              </div>
              <div id="collapseTwo" class="collapse show" data-parent="#accordionExample">
                <div class="card-body row">
                  <div class="col-9 mb-2">
                    <label class="font-weight-bold">TEST ARTICLE VERIFICATION DETAILS</label>
                  </div>
                  <div class="col-3 mb-2" v-for="detail in details1" :key="detail.id">
                    <label class="text-primary font-weight-bold">DOCUMENT: 
                    <span class="font-weight-normal"><a :href="'/uploads/' + detail.pdf" target="_blank">View</a></span></label>
                  </div>
                  <div class="col-5">
                    <label class="text-primary font-weight-bold">ARTICLE NAME</label>
                    <p class="text-primary">{{detail.article_name}}</p>
                  </div>
                  <div class="col-4">
                    <label class="text-primary font-weight-bold">NAME</label>
                    <p class="text-primary">Lorem Ipsum</p>
                  </div>
                  <div class="col-3">
                    <label class="text-primary font-weight-bold">DATE OF RECEIPT</label>
                    <p class="text-primary">08-08-2022</p>
                  </div>
                  <div class="col-3" v-for="detail in details4" :key="detail.id">
                    <label class="text-primary font-weight-bold">SPONSOR NAME</label>
                    <p class="text-primary">{{ detail.sponsor_name }}</p>
                  </div>
                  <div class="col-3" v-for="detail in details4" :key="detail.id">
                    <label class="text-primary font-weight-bold">PACKAGING DETAILS</label>
                    <p class="text-primary">{{ detail.pack_details }}</p>
                  </div>
                  <div class="col-3" v-for="detail in details4" :key="detail.id">
                    <label class="text-primary font-weight-bold">BATCH/LOT NO.</label>
                    <p class="text-primary">{{ detail.batch_no }}</p>
                  </div>
                  <div class="col-3" v-for="detail in details4" :key="detail.id">
                    <label class="text-primary font-weight-bold">P. APPEARANCE</label>
                    <p class="text-primary">{{ detail.phy_app1 }}</p>
                  </div>
                  <div class="col-3" v-for="detail in details4" :key="detail.id">
                    <label class="text-primary font-weight-bold">BALANCE ID</label>
                    <p class="text-primary">{{ detail.balance_id1 }}</p>
                  </div>
                  <div class="col-3" v-for="detail in details4" :key="detail.id">
                    <label class="text-primary font-weight-bold">TOTAL QTY</label>
                    <p class="text-primary">{{ detail.total_qty1 }}</p>
                  </div>
                  <div class="col-3">
                    <label class="text-primary font-weight-bold">STUDY STATUS</label>
                    <p class="text-success">In Progress</p>
                  </div>
                  <div class="col-3">
                    <label class="text-primary font-weight-bold">VERIFIED BY</label>
                    <p class="text-primary">Ramya, TICO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 mt-4">
            <label class="text-primary mb-0 font-weight-bold">DETAILS OF TEST ITEM</label>
            <hr>
          </div>
          <div class="col-3" v-for="detail in details4" :key="detail.id">
            <label class="text-primary font-weight-bold">Condition at time of<br>receipt</label>
            <p class="">{{ detail.condition2 }}</p>
          </div>
          <div class="col-3" v-for="detail in details4" :key="detail.id">
            <label class="text-primary font-weight-bold">Availability of documents pertaining to item</label>
            <p class="">{{ detail.availability2 }}</p>
          </div>
          <div class="col-3" v-for="detail in details4" :key="detail.id">
            <label class="text-primary font-weight-bold">Transportation<br>check</label>
            <p class="">{{ detail.transport2 }}</p>
          </div>
          <div class="col-3" v-for="detail in details4" :key="detail.id">
            <label class="text-primary font-weight-bold">Verification TIIS / RIIS/ VIIS Vs. Sample Label</label>
            <p class="">{{ detail.verify2 }}</p>
          </div>
          <div class="col-3" v-for="detail in details4" :key="detail.id">
            <label class="text-primary font-weight-bold">Details of observation</label>
            <p class="">{{ detail.details5 }}</p>
          </div>
          <div class="col-3" v-for="detail in details4" :key="detail.id">
            <label class="text-primary font-weight-bold">Details of observation</label>
            <p class="">{{ detail.details6 }}</p>
          </div>
          <div class="col-3" v-for="detail in details4" :key="detail.id">
            <label class="text-primary font-weight-bold">Details of observation</label>
            <p class="">{{ detail.details7 }}</p>
          </div>
          <div class="col-3" v-for="detail in details4" :key="detail.id">
            <label class="text-primary font-weight-bold">Details of observation</label>
            <p class="">{{ detail.details8 }}</p>
          </div>
          <div class="col-3" v-for="detail in details4" :key="detail.id">
            <label class="text-primary font-weight-bold">Any Discrepancy found</label>
            <p class="">{{ detail.discrepancy2 }}</p>
          </div>
          <div class="col-3" v-for="detail in details4" :key="detail.id">
            <label class="text-primary font-weight-bold">Corrective Action</label>
            <p class="">{{ detail.action2 }}</p>
          </div>

          <div class="col-12 mt-4">
            <label class="text-primary mb-0 font-weight-bold">ANNEXURE: <span class="text-dark mb-0 font-weight-bold">4 TEST ARTICLES RECEIPT RECORD</span></label>
            <hr>
          </div>
          <div class="col-3" v-for="detail in details4" :key="detail.id">
            <label class="text-primary font-weight-bold">TICO SL. NO</label>
            <p class="">{{ detail.tico_sl }}</p>
          </div>
          <div class="col-3" v-for="detail in details4" :key="detail.id">
            <label class="text-primary font-weight-bold">TEST ART. NAME</label>
            <p class="">{{ detail.tico_art_name }}</p>
          </div>
          <div class="col-3" v-for="detail in details4" :key="detail.id">
            <label class="text-primary font-weight-bold">MODE OF DELIVERY</label>
            <p class="">{{ detail.tico_mode }}</p>
          </div>
          <div class="col-3" v-for="detail in details4" :key="detail.id">
            <label class="text-primary font-weight-bold">STORAGE CONDITION</label>
            <p class="">{{ detail.tico_storage }}</p>
          </div>
          <div class="col-3" v-for="detail in details4" :key="detail.id">
            <label class="text-primary font-weight-bold">QTY. RECEIVED</label>
            <p class="">{{ detail.tico_qty }}</p>
          </div>
          <div class="col-3" v-for="detail in details4" :key="detail.id">
             <label class="text-primary font-weight-bold">REMARKS</label>
            <p class="">{{ detail.tico_remarks }}</p>
          </div>
          <div class="col-3">
            <label class="text-primary font-weight-bold">RECEIVED BY</label>
            <p class="">Ramya, TICO</p>
          </div>

          <div class="accordion mt-4" id="accordionExample">
            <div class="card rounded">
              <div class="card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true">     
                <label class="text-primary mb-0 font-weight-bold">ANNEXURE: <span class="text-dark mb-0 font-weight-bold">6 SUB SAMPLING RECORD</span></label>
                <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" class="text-dark" type="button"/></span>
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
            <p class="">Ramya, TICO</p>
          </div>

          <div class="col-12 mt-4">
            <label class="text-primary mb-0 font-weight-bold">ALLOTMANT OF SPONSOR CODE, TEST ARTICLE CODE, STUDY NUMBER, STUDY CODE</label>
          </div>
          <div class="col-8 mt-4 mb-0">
            <label class="">RECORD FOR ALLOTMENT OF SPONSOR CODE</label>
          </div>
          <div class="col-4 mt-3 mb-0">
            <button class="float-right btn btn-success" data-toggle="modal" data-target="#exampleModal1" type="button">ADD</button>
          </div>
          <div class="col-12">
            <hr class="mt-0">
          </div>
          <div class="col-12">
            <label class="font-italic">No Records</label>
          </div>
          <div class="col-8 mt-4 mb-0">
            <label class="">RECORD FOR ALLOTMENT OF TEST ARTICLE CODE</label>
          </div>
          <div class="col-4 mt-3 mb-0">
            <button class="float-right btn btn-success" data-toggle="modal" data-target="#exampleModal2" type="button">ADD</button>
          </div>
          <div class="col-12">
            <hr class="mt-0">
          </div>
          <div class="col-12">
            <label class="font-italic">No Records</label>
          </div>
          <div class="col-8 mt-4 mb-0">
            <label class="">RECORD FOR ALLOTMENT OF STUDY NUMBER &  STUDY DIRECTOR</label>
          </div>
          <div class="col-4 mt-3 mb-0">
            <button class="float-right btn btn-success" data-toggle="modal" data-target="#exampleModal3" type="button">ADD</button>
          </div>
          <div class="col-12">
            <hr class="mt-0">
          </div>
          <div class="col-12 mb-4">
            <label class="font-italic">No Records</label>
          </div>
          <center>
            <button type="button" class="btn btn-success mt-3 mb-3 save" @click="save">SAVE</button>
          </center>
          </div>      
        </div>    
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Tfm_ProjInner',
  components: {
  },
  mounted: function() {
    this.bd()
    this.sec()
    this.tico1()
    this.tico()
  },
  data() {
    return {
      details1: {},
      details2: {},
      details3: {},
      details4: {},
      sponsor_code: "",
      type: "",
      article_code: "",
      study_no: "",
      study_dir: "",
      study_code: "",
      g_ng: "",
      remarks1: "",
      remarks2: "",
      remarks3: ""
    }
  },
  methods: {
    bd: function(){
      let uri1 = "/api/bdview/" + this.$route.params.id;
      axios.get(uri1).then((res) => {
        this.details1 = res.data.data;
      })
      .catch(()=>{
        console.log("Something Went Wrong");
      })
    },
    sec: function(){
      let uri2 = "/api/secdashview/" + this.$route.params.id;
      axios.get(uri2).then((res) => {
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
    tico: function(){
      let uri4 = "/api/ticoview/" + this.$route.params.id;
      axios.get(uri4).then((res) => {
        this.details4 = res.data.data;
      })
      .catch(()=>{
        console.log("Something Went Wrong");
      })
    },
    save: function() {
      let uri = "/api/bdupdate/" + this.$route.params.id;
      axios.post(uri, {
        sponsor_code: this.sponsor_code,
        type: this.type,
        article_code: this.article_code,
        study_no: this.study_no,
        study_dir: this.study_dir,
        study_code: this.study_code,
        g_ng: this.g_ng,
        remarks1: this.remarks1,
        remarks2: this.remarks2,
        remarks3: this.remarks3
      }).then((res) => {
          alert("Successfully Saved!");
          window.location.href='/tfmprojdash';
      }).catch(()=> {
          alert("Something Went Wrong!");
          window.location.href='/tfmprojdash';
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
