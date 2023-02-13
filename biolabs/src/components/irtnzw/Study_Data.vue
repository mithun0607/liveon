<template>
  <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
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
          <div class="row bg-light rounded">
            <div class="col-12" style="display: none;">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <router-link class="nav-link text-dark" to="/studyongoingdashirtnzw">Draft Study Plan</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link text-dark" to="/studyfinalplanirtnzw">Final Study Plan</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link text-dark" to="/studyallocateirtnzw">Allocate Study personnel</router-link>
                </li>
                <li class="nav-item"> 
                  <router-link class="nav-link text-dark" to="/studyschdirtnzw">Study Schedule</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link active" to="#">Study Data</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link text-dark" to="/studycommentirtnzw">Comments</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link text-dark" to="/studyreportirtnzw">Final Report</router-link>
                </li>
              </ul>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseNine" aria-expanded="true">     
                  <span class="title">ANNEXURE 1:  DAILY WORK CHECKLIST&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseNine" class="collapse show" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-2 mt-2">
                      <label class="font-weight-bold">Study No:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_no9">
                    </div>
                    <div class="col-2 mt-2">
                      <label class="font-weight-bold">Room No:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <input type="text" class="form-control half-bord" v-model="room_no4">
                    </div>
                    <div class="col-2 mt-2">
                      <label class="font-weight-bold">Month and Year:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <input type="text" class="form-control half-bord" v-model="month_year">
                    </div>
                    <div class="col-12 mt-2">
                      <table class="table table-bordered">
                        <thead style="font-size: 11px">
                          <tr>
                            <th>Work</th>
                            <th colspan="31">Days</th>
                          </tr>
                          <tr>
                            <th></th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                            <th>11</th>
                            <th>12</th>
                            <th>13</th>
                            <th>14</th>
                            <th>15</th>
                            <th>16</th>
                            <th>17</th>
                            <th>18</th>
                            <th>19</th>
                            <th>20</th>
                            <th>21</th>
                            <th>22</th>
                            <th>23</th>
                            <th>24</th>
                            <th>25</th>
                            <th>26</th>
                            <th>27</th>
                            <th>28</th>
                            <th>29</th>
                            <th>30</th>
                            <th>31</th>
                          </tr>
                        </thead>
                        <tbody style="font-size: 10px;">
                          <tr>
                            <td><label>Observation time (Morning)</label></td>
                            <td v-for="(item1, index) in items1" :key="index"><input type="checkbox" :value="item1.value" v-model="check1"/></td>
                          </tr>
                          <tr>
                            <td><label>Bed and Cage Change</label></td>
                            <td v-for="(item2, index) in items2" :key="index"><input type="checkbox" :value="item2.value" v-model="check2"/></td>
                          </tr>
                          <tr>
                            <td><label>Animal Enrichment Change ^</label></td>
                            <td v-for="(item3, index) in items3" :key="index"><input type="checkbox" :value="item3.value" v-model="check3"/></td>
                          </tr>
                          <tr>
                            <td><label>Feeding</label></td>
                            <td v-for="(item4, index) in items4" :key="index"><input type="checkbox" :value="item4.value" v-model="check4"/></td>
                          </tr>
                          <tr>
                            <td><label>Fasting</label></td>
                            <td v-for="(item5, index) in items5" :key="index"><input type="checkbox" :value="item5.value" v-model="check5"/></td>
                          </tr>
                          <tr>
                            <td><label>Body Marking $</label></td>
                            <td v-for="(item6, index) in items6" :key="index"><input type="checkbox" :value="item6.value" v-model="check6"/></td>
                          </tr>
                          <tr>
                            <td><label>Hopper Trough Change</label></td>
                            <td v-for="(item7, index) in items7" :key="index"><input type="checkbox" :value="item7.value" v-model="check7"/></td>
                          </tr>
                          <tr>
                            <td><label>Mesh Change</label></td>
                            <td v-for="(item8, index) in items8" :key="index"><input type="checkbox" :value="item8.value" v-model="check8"/></td>
                          </tr>
                          <tr>
                            <td><label>Bottle Change</label></td>
                            <td v-for="(item9, index) in items9" :key="index"><input type="checkbox" :value="item9.value" v-model="check9"/></td>
                          </tr>
                          <tr>
                            <td><label>Watering</label></td>
                            <td v-for="(item10, index) in items10" :key="index"><input type="checkbox" :value="item10.value" v-model="check10"/></td>
                          </tr>
                          <tr>
                            <td><label>Hair/Nail Clipping</label></td>
                            <td v-for="(item11, index) in items11" :key="index"><input type="checkbox" :value="item11.value" v-model="check11"/></td>
                          </tr>
                          <tr>
                            <td><label>Floor Sweeping & Mopping</label></td>
                            <td v-for="(item12, index) in items12" :key="index"><input type="checkbox" :value="item12.value" v-model="check12"/></td>
                          </tr>
                          <tr>
                            <td><label>Room Mopping</label></td>
                            <td v-for="(item13, index) in items13" :key="index"><input type="checkbox" :value="item13.value" v-model="check13"/></td>
                          </tr>
                          <tr>
                            <td><label>Cage Battery Change</label></td>
                            <td v-for="(item14, index) in items14" :key="index"><input type="checkbox" :value="item14.value" v-model="check14"/></td>
                          </tr>
                          <tr>
                            <td><label>Litter Tray Change</label></td>
                            <td v-for="(item15, index) in items15" :key="index"><input type="checkbox" :value="item15.value" v-model="check15"/></td>
                          </tr>
                          <tr>
                            <td><label>Exhaust Filter & Air Inlet Duct Cleaning</label></td>
                            <td v-for="(item16, index) in items16" :key="index"><input type="checkbox" :value="item16.value" v-model="check16"/></td>
                          </tr>
                          <tr>
                            <td><label>Measures for Photosensitive Test Item/s ®</label></td>
                            <td v-for="(item17, index) in items17" :key="index"><input type="checkbox" :value="item17.value" v-model="check17"/></td>
                          </tr>
                          <tr>
                            <td><label>Morning Observation(NM / MO)</label></td>
                            <td v-for="(item18, index) in items18" :key="index"><input type="checkbox" :value="item18.value" v-model="check18"/></td>
                          </tr>
                          <tr>
                            <td><label>Morning - Observer’s Sign. & Date</label></td>
                            <td v-for="(item19, index) in items19" :key="index"><input type="checkbox" :value="item19.value" v-model="check19"/></td>
                          </tr>
                          <tr>
                            <td><label>Afternoon Observation(NM / MO)</label></td>
                            <td v-for="(item20, index) in items20" :key="index"><input type="checkbox" :value="item20.value" v-model="check20"/></td>
                          </tr>
                          <tr>
                            <td><label>Afternoon Observation Time</label></td>
                            <td v-for="(item21, index) in items21" :key="index"><input type="checkbox" :value="item21.value" v-model="check21"/></td>
                          </tr>
                          <tr>
                            <td><label>Afternoon Observer’s Sign. & Date</label></td>
                            <td v-for="(item22, index) in items22" :key="index"><input type="checkbox" :value="item22.value" v-model="check22"/></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-9 mt-2">
                      <p style="font-size:12px">NM: No mortality, MO: Mortality, Put tick against each Activity, ^: Animal Enrichment Used: Polycarbonate Huts / Tunnels / Others to Specify</p>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="others1">
                    </div>
                    <div class="col-4">
                      <p style="font-size:12px">$: Body marking details (sign. & date): 1% Turmeric solution</p>
                    </div>
                    <div class="col-2">
                      <input type="text" class="form-control half-bord" v-model="sign22">
                    </div>
                    <div class="col-1">
                      <p style="font-size:12px">/ Marker pen</p>
                    </div>
                    <div class="col-2">
                      <input type="text" class="form-control half-bord" v-model="marker">
                    </div>
                    <div class="col-1">
                      <p style="font-size:12px">/ Others</p>
                    </div>
                    <div class="col-2">
                      <input type="text" class="form-control half-bord" v-model="others2">
                    </div>
                    <div class="col-4 mb-3">
                      <p style="font-size:12px">Bedding material used: Steam sterilised corn cob/others</p>
                    </div>
                    <div class="col-1 mb-3">
                      <input type="text" class="form-control half-bord" v-model="sign23">
                    </div>
                    <div class="col-4 mb-3">
                      <p style="font-size:12px">Sign. & Date ®: Use of yellow Light/Amber Coloured Glassware/Others</p>
                    </div>
                    <div class="col-1 mb-3">
                      <input type="text" class="form-control half-bord" v-model="sign24">
                    </div>
                    <div class="col-1 mb-3">
                      <p style="font-size:12px">Sign. & Date</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true">     
                  <span class="title">ANNEXURE 6: MODEL LETTER FOR ALLOTMENT OF SD / REPLACEMENT OF SD / AMENDMENT TO ALLOTMENT &nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseOne" class="collapse" data-parent="#accordionExample">
                  <h6 class="mt-3 ml-3">From TFM</h6>
                  <h6 class="mt-2 ml-3">Dear All,</h6>
                  <p class="mt-2 ml-3">This is to inform you that you are appointed as SD for the following study (ies) as listed below:</p>
                  <div class="row ml-2 mr-2">
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Test Item:</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="test_item">
                    </div>
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Test Item Code:</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="test_code">
                    </div>
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Sponsor (Name and Address):</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="sponser">
                    </div>
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Sponsor Representative:</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="sponser_rep">
                    </div>
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Monitoring Scientist:</label>
                    </div>
                    <div class="col-3 mt-2 mb-3">
                      <input type="text" class="form-control half-bord" v-model="scientist">
                    </div>
                    <div class="col-12">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>Sl. No.</th>
                            <th>Study No.</th>
                            <th>Study Code</th>
                            <th>Study Title</th>
                            <th>G / NG</th>
                            <th>Test Guidelines</th>
                            <th>SD</th>
                            <th>SD Sign. for Acceptance</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="sl_no"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_no"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_code"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_title"></td>
                            <td><input type="text" class="form-control half-bord" v-model="g_ng"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_guide"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sd"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sd_sign"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="sl_no"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_no"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_code"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_title"></td>
                            <td><input type="text" class="form-control half-bord" v-model="g_ng"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_guide"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sd"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sd_sign"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="sl_no"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_no"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_code"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_title"></td>
                            <td><input type="text" class="form-control half-bord" v-model="g_ng"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_guide"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sd"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sd_sign"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="sl_no"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_no"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_code"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_title"></td>
                            <td><input type="text" class="form-control half-bord" v-model="g_ng"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_guide"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sd"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sd_sign"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="sl_no"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_no"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_code"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_title"></td>
                            <td><input type="text" class="form-control half-bord" v-model="g_ng"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_guide"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sd"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sd_sign"></td>
                          </tr>
                        </tbody>
                      </table>
                      <p class="mt-2">G: GLP and NG: Non GLP</p>
                      <p class="mt-2">Respective responsible for overall execution and control of the proposed study. Hereby you are instructed to take necessary actions as per specifications, guidelines and SOPs.</p>
                    </div>
                    <div class="col-9">
                      <p class="mt-2">Distribution Details: Original: DCO, Soft Copies: SD, TICO and QAU</p>
                    </div>
                    <div class="col-3">
                      <input type="text" class="form-control half-bord" v-model="sign">
                      <h6 class="mt-1 text-center">TFM</h6>
                      <h6 class="text-center">(Sign. and Date)</h6>
                    </div>
                    <div class="col-6">
                      <p class="mt-2"><b>Note:</b><br> All SD’s to sign on the original copy in the Sign. column in the table.<br>
                                                       SD’s to consult with HOD / In-charge to choose one or more SP during Study conduct.<br> 
                                                       ULR No. is applicable to Biocompatibility Studies.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true">     
                  <span class="title">ANNEXURE 1: PREPARATION AND TRACKING DETAILS OF STUDY PLAN / AMENDMENTS &nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwo" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>Study No:
                            <input type="text" class="form-control half-bord" v-model="study_no1"></th>
                            <th>Study Plan Amendment No:
                            <input type="text" class="form-control half-bord" v-model="amend_no"></th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <h6 class="mt-2 font-weight-bold">Preparation of Draft Copy:</h6>
                    <div class="col-12 mt-2">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <td>SD / SP Name</td>
                            <td>Sign. and Date</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="sd_name"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sign1"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h6 class="mt-2 font-weight-bold">Review of Draft Copy (Sign.and Date):</h6>
                    <div class="col-12 mt-2">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <td>Review by</td>
                            <td>Sent by SD / SP</td>
                            <td>Received by</td>
                            <td>Sent by Reviewer</td>
                            <td>Received by SD </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="review"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sent_sd"></td>
                            <td><input type="text" class="form-control half-bord" v-model="received"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sent_review"></td>
                            <td><input type="text" class="form-control half-bord" v-model="recieved_sd"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="review"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sent_sd"></td>
                            <td><input type="text" class="form-control half-bord" v-model="received"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sent_review"></td>
                            <td><input type="text" class="form-control half-bord" v-model="recieved_sd"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="review"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sent_sd"></td>
                            <td><input type="text" class="form-control half-bord" v-model="received"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sent_review"></td>
                            <td><input type="text" class="form-control half-bord" v-model="recieved_sd"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="review"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sent_sd"></td>
                            <td><input type="text" class="form-control half-bord" v-model="received"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sent_review"></td>
                            <td><input type="text" class="form-control half-bord" v-model="recieved_sd"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="review"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sent_sd"></td>
                            <td><input type="text" class="form-control half-bord" v-model="received"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sent_review"></td>
                            <td><input type="text" class="form-control half-bord" v-model="recieved_sd"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h6 class="mt-2 font-weight-bold">Review by Sponsor(s), if applicable:</h6>
                    <div class="col-8 mt-2">
                      <textarea class="form-control" rows="2" name="review_sponsor"></textarea>
                    </div>
                    <div class="col-4">
                      <input type="text" class="form-control half-bord" v-model="sign2">
                      <h6 class="text-center mt-1">Sign. and Date (SD)</h6>
                    </div>
                    <h6 class="mt-2 font-weight-bold">Review of Final Copy by QAU (Sign. and Date)</h6>
                    <div class="col-12 mt-2">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <td>Sent by SD</td>
                            <td>Received by</td>
                            <td>Sent by reviewer</td>
                            <td>Received by SD </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="sent_sd1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="received1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sent_reviewer"></td>
                            <td><input type="text" class="form-control half-bord" v-model="received_sd"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-8 mt-2">
                      <textarea class="form-control" rows="2">Verified and confirmed the validation status of computer systems to be used in the study.</textarea>
                    </div>
                    <div class="col-4">
                      <input type="text" class="form-control half-bord" v-model="sign3">
                      <h6 class="text-center mt-1">Sign. and Date (SD)</h6>
                      <h6 class="text-center">(Not applicable for Study Plan Amendments)</h6>
                    </div>
                    <h6 class="mt-2 font-weight-bold">Signature on Final Copies:</h6>
                    <div class="col-2 mt-2">
                      <label>No. of copies:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <input type="text" class="form-control half-bord" v-model="copies">
                    </div>
                    <div class="col-2 mt-2">
                      <label>Test Facility Copy No:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <input type="text" class="form-control half-bord" v-model="test_copy_no">
                    </div>
                    <div class="col-2 mt-2">
                      <label>Sponsor Copy No:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <input type="text" class="form-control half-bord" v-model="sponser_copy_no">
                    </div>
                    <div class="col-4 mt-2">
                      <input type="text" class="form-control half-bord" v-model="sign4">
                      <h6 class="text-center mt-1">SD</h6>
                      <h6 class="text-center">(Sign. and Date)</h6>
                    </div>
                    <div class="col-4 mt-2">
                      <input type="text" class="form-control half-bord" v-model="sign5">
                      <h6 class="text-center mt-1">QUA</h6>
                      <h6 class="text-center">(Sign. and Date)</h6>
                    </div>
                    <div class="col-4 mt-2">
                      <input type="text" class="form-control half-bord" v-model="sign6">
                      <h6 class="text-center mt-1">TFM</h6>
                      <h6 class="text-center">(Sign. and Date)</h6>
                    </div>
                    <h6 class="mt-3 font-weight-bold">Sponsor(s) Approval:</h6>
                    <div class="col-8 mt-2">
                      <label>Study Plan Approval page received by fax / e-mail on / e-mail approval:</label>
                    </div>
                    <div class="col-4 mt-2">
                      <input type="text" class="form-control half-bord" v-model="approval1">
                      <h6 class="text-center mt-1">Sign. and Date (SD)</h6>
                    </div>
                    <div class="col-8 mt-2">
                      <label>Original Approval page signed by sponsor(s) received on:</label>
                    </div>
                    <div class="col-4 mt-2">
                      <input type="text" class="form-control half-bord" v-model="approval2">
                      <h6 class="text-center mt-1">Sign. and Date (SD)</h6>
                    </div>
                    <p class="mt-2 mb-3">Note: Original copy of this shall be retained in the study file.</p>
                    <div class="col-4 mt-2">
                      <label>Remarks (If any):</label>
                    </div>
                    <div class="col-8 mt-2 mb-3">
                      <input type="text" class="form-control half-bord" v-model="remarks">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true">     
                  <span class="title">ANNEXURE 2: RECORD FOR DISTRIBUTION, RETURN AND DESTRUCTION OF STUDY PLAN / STUDY PLAN AMENDMENT &nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseThree" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-2 mt-2">
                      <label class="font-weight-bold">Study No:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_no1">
                    </div>
                    <div class="col-2 mt-2">
                      <label class="font-weight-bold">Study Code:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_code1">
                    </div>
                    <div class="col-2 mt-2">
                      <label class="font-weight-bold">SD:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <input type="text" class="form-control half-bord" v-model="sd1">
                    </div>
                    <p class="mt-2">A photocopy of Study Plan / Study plan Amendment / Study Schedule for distribution is authorised as “AUTHORISED COPY” (written or by affixing a seal), write the name of the department / section  / person to whom the copy is sent and sign. with date only on the first page.</p>
                    <div class="col-12 mt-2">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <td colspan="6">Distribution</td>
                            <td colspan="2">Return and Destruction*</td>
                          </tr>
                          <tr>
                            <td>Page No(s).</td>
                            <td>Sent by SD / (Sign. and Date)</td>
                            <td>Mode of Distribution (P: Paper Copy, E: Electronic Copy)</td>
                            <td>Purpose</td>
                            <td>To Dept. / Section / Person</td>
                            <td>Received by(Sign. and Date) @</td>

                            <td>Returned by (Sign. and Date)</td>
                            <td>Received and Destroyed by SD / SP (Sign. and Date)</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="page_no"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sent_sd2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="mode"></td>
                            <td><input type="text" class="form-control half-bord" v-model="purpose"></td>
                            <td><input type="text" class="form-control half-bord" v-model="to_dept"></td>
                            <td><input type="text" class="form-control half-bord" v-model="received2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="returned"></td>
                            <td><input type="text" class="form-control half-bord" v-model="received_destroy"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="page_no"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sent_sd2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="mode"></td>
                            <td><input type="text" class="form-control half-bord" v-model="purpose"></td>
                            <td><input type="text" class="form-control half-bord" v-model="to_dept"></td>
                            <td><input type="text" class="form-control half-bord" v-model="received2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="returned"></td>
                            <td><input type="text" class="form-control half-bord" v-model="received_destroy"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="page_no"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sent_sd2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="mode"></td>
                            <td><input type="text" class="form-control half-bord" v-model="purpose"></td>
                            <td><input type="text" class="form-control half-bord" v-model="to_dept"></td>
                            <td><input type="text" class="form-control half-bord" v-model="received2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="returned"></td>
                            <td><input type="text" class="form-control half-bord" v-model="received_destroy"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="page_no"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sent_sd2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="mode"></td>
                            <td><input type="text" class="form-control half-bord" v-model="purpose"></td>
                            <td><input type="text" class="form-control half-bord" v-model="to_dept"></td>
                            <td><input type="text" class="form-control half-bord" v-model="received2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="returned"></td>
                            <td><input type="text" class="form-control half-bord" v-model="received_destroy"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="page_no"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sent_sd2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="mode"></td>
                            <td><input type="text" class="form-control half-bord" v-model="purpose"></td>
                            <td><input type="text" class="form-control half-bord" v-model="to_dept"></td>
                            <td><input type="text" class="form-control half-bord" v-model="received2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="returned"></td>
                            <td><input type="text" class="form-control half-bord" v-model="received_destroy"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p class="mt-2">Note:<br>*:<br>The SD is responsible for collection of all distributed paper copies before issuing the report or on termination or cancellation of the study and their destruction (not applicable if distributed as soft copies). However, this list has to be filed in the study records.</p>
                    <p class="mt-2 mb-3">@:<br>In case of distribution Study Plan and / amendments as soft copies by email, “Received by and Sign. and Date” is not applicable.</p>
                    <div class="col-4 mt-2">
                      <label>Remarks (If any):</label>
                    </div>
                    <div class="col-8 mt-2 mb-3">
                      <input type="text" class="form-control half-bord" v-model="remarks1">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true">     
                  <span class="title">ANNEXURE 1: STUDY INITIATION MEETING RECORD&nbsp;&nbsp; &nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseFour" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-2 mt-2">
                      <label class="font-weight-bold">Study No:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_no2">
                    </div>
                    <div class="col-2 mt-2">
                      <label class="font-weight-bold">Study Code:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_code2">
                    </div>
                    <div class="col-2 mt-2">
                      <label class="font-weight-bold">SD Name:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <input type="text" class="form-control half-bord" v-model="sd2">
                    </div>
                    <div class="col-2 mt-2">
                      <label class="font-weight-bold">(Sign and Date):</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="sign7">
                    </div>
                    <div class="col-12 mt-2">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Sign. and Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="date"></td>
                            <td><input type="text" class="form-control half-bord" v-model="name"></td>
                            <td><input type="text" class="form-control half-bord" v-model="desg"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sign8"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="date"></td>
                            <td><input type="text" class="form-control half-bord" v-model="name"></td>
                            <td><input type="text" class="form-control half-bord" v-model="desg"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sign8"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="date"></td>
                            <td><input type="text" class="form-control half-bord" v-model="name"></td>
                            <td><input type="text" class="form-control half-bord" v-model="desg"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sign8"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="date"></td>
                            <td><input type="text" class="form-control half-bord" v-model="name"></td>
                            <td><input type="text" class="form-control half-bord" v-model="desg"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sign8"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="date"></td>
                            <td><input type="text" class="form-control half-bord" v-model="name"></td>
                            <td><input type="text" class="form-control half-bord" v-model="desg"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sign8"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true">     
                  <span class="title">ANNEXURE 1: ANIMAL REQUEST AND SUPPLY RECORD&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseFive" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p class="mt-2">To,<br>Animal Facility department:<br>Please supply the below mentioned animals.</p>
                    <div class="col-12 mt-2">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td><label>Study No.</label></td>
                            <td colspan="2"><input type="text" class="form-control half-bord" v-model="study_no3"></td>
                          </tr>
                          <tr>
                            <td><label>Species and Strain</label></td>
                            <td colspan="2"><input type="text" class="form-control half-bord" v-model="species"></td>
                          </tr>
                          <tr>
                            <td><label>Required Date</label></td>
                            <td colspan="2"><input type="text" class="form-control half-bord" v-model="req_date"></td>
                          </tr>
                          <tr>
                            <td><label>Age (Weeks / Days)</label></td>
                            <td>Male: <input type="text" class="form-control half-bord" v-model="age_male"></td>
                            <td>Female: <input type="text" class="form-control half-bord" v-model="age_female"></td>
                          </tr>
                          <tr>
                            <td><label>No. of Animals required</label></td>
                            <td>Male: <input type="text" class="form-control half-bord" v-model="no_male"></td>
                            <td>Female: <input type="text" class="form-control half-bord" v-model="no_female"></td>
                          </tr>
                          <tr>
                            <td><label>Body Weight Range</label></td>
                            <td>Male: <input type="text" class="form-control half-bord" v-model="wt_male"></td>
                            <td>Female: <input type="text" class="form-control half-bord" v-model="wt_female"></td>
                          </tr>
                          <tr>
                            <td><label>Requested by (Name):</label></td>
                            <td colspan="2">Sign. and Date: <input type="text" class="form-control half-bord" v-model="sign9"></td>
                          </tr>
                          <tr class="text-center">
                            <th colspan="3">ANIMAL SUPPLY DETAILS</th>
                          </tr>
                          <tr>
                            <td><label>Species and Strain</label></td>
                            <td colspan="2"><input type="text" class="form-control half-bord" v-model="species1"></td>
                          </tr>
                          <tr>
                            <td><label>IAEC Approval Date and Protocol Number</label></td>
                            <td colspan="2"><input type="text" class="form-control half-bord" v-model="iaec"></td>
                          </tr>
                          <tr>
                            <td><label>Date of Supply</label></td>
                            <td colspan="2"><input type="text" class="form-control half-bord" v-model="req_date1"></td>
                          </tr>
                          <tr>
                            <td><label>Age (Weeks / Days)</label></td>
                            <td>Male: <input type="text" class="form-control half-bord" v-model="age_male1"></td>
                            <td>Female: <input type="text" class="form-control half-bord" v-model="age_female1"></td>
                          </tr>
                          <tr>
                            <td><label>Date of Birth</label></td>
                            <td>Male: <input type="text" class="form-control half-bord" v-model="dob_male"></td>
                            <td>Female: <input type="text" class="form-control half-bord" v-model="dob_female"></td>
                          </tr>
                          <tr>
                            <td><label>No. of Animals</label></td>
                            <td>Male: <input type="text" class="form-control half-bord" v-model="no_male1"></td>
                            <td>Female: <input type="text" class="form-control half-bord" v-model="no_female1"></td>
                          </tr>
                          <tr>
                            <td><label>Body Weight Range</label></td>
                            <td>Male: <input type="text" class="form-control half-bord" v-model="wt_male1"></td>
                            <td>Female: <input type="text" class="form-control half-bord" v-model="wt_female1"></td>
                          </tr>
                          <tr>
                            <td><label>Supplied by Animal Facility In-charge/Personnel:</label></td>
                            <td colspan="2">Sign. and Date: <input type="text" class="form-control half-bord" v-model="sign10"></td>
                          </tr>
                          <tr>
                            <td colspan="3"><b>Animal Health Status:</b><br>
                                               This is to certify that the above-described laboratory animals are healthy good in condition free from contagious / infectious disease that are communicable to human beings and are fit for conduction of studies.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-4 mt-2 mb-3">
                      <input type="text" class="form-control half-bord" v-model="sign11">
                      <h6 class="text-center mt-1">Veterinarian / In-charge</h6>
                      <h6 class="text-center">(Sign. and Date)</h6>
                    </div>
                    <div class="col-4 mt-2 mb-3">
                      <input type="text" class="form-control half-bord" v-model="sign12">
                      <h6 class="text-center mt-1">(Sign. and Date)</h6>
                    </div>
                    <div class="col-4 mt-2 mb-3">
                      <input type="text" class="form-control half-bord" v-model="sign13">
                      <h6 class="text-center mt-1">Received</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true">     
                  <span class="title">ANNEXURE 2: STUDY ROOM ALLOTMENT REQUEST&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseSix" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-2 mt-2">
                      <label>Date:</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="date1">
                    </div>
                    <div class="col-12 mt-2">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td><label>Study No.</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_no4"></td>
                          </tr>
                          <tr>
                            <td><label>Species and Strain</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="species2"></td>
                          </tr>
                          <tr>
                            <td><label>No. of Animals</label></td>
                            <td>Male: <input type="text" class="form-control half-bord" v-model="no_male2"></td>
                            <td>Female: <input type="text" class="form-control half-bord" v-model="no_female2"></td>
                          </tr>
                          <tr>
                            <td><label>Duration of Study</label></td>
                            <td>From (Date): <input type="text" class="form-control half-bord" v-model="from_date"></td>
                            <td>To (Date): <input type="text" class="form-control half-bord" v-model="to_date"></td>
                          </tr>
                          <tr>
                            <td><label>Requested by (Name):</label></td>
                            <td>Sign. and Date: <input type="text" class="form-control half-bord" v-model="sign14"></td>
                          </tr>
                          <tr>
                            <td><label>Received by (Name):</label></td>
                            <td>Sign. and Date: <input type="text" class="form-control half-bord" v-model="sign15"></td>
                          </tr>
                          <tr class="text-center">
                            <th colspan="3">Animal Room Allotment Details:</th>
                          </tr>
                          <tr>
                            <td><label>Room No.</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="room_no"></td>
                          </tr>
                          <tr>
                            <td><label>Study No.</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_no5"></td>
                          </tr>
                          <tr>
                            <td><label>From (Date)</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="from_date1"></td>
                          </tr>
                          <tr>
                            <td><label>To (Date)</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="to_date1"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p class="mt-2"><b>Note:</b><br>Photocopy of room allotment and animal request letter to be maintained by the animal facility department, discard Photocopy at the end of every calendar year with approval of Animal Facility in-charge.</p>
                    <div class="col-6 mt-2 mb-3">
                      <input type="text" class="form-control half-bord" v-model="sign16">
                      <h6 class="text-center mt-1">Animal Facility In-charge / Personnel:</h6>
                      <h6 class="text-center">(Sign. and Date)</h6>
                    </div>
                    <div class="col-6 mt-2 mb-3">
                      <input type="text" class="form-control half-bord" v-model="sign17">
                      <h6 class="text-center mt-1">Receiver</h6>
                      <h6 class="text-center">(Sign. and Date)</h6>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true">     
                  <span class="title">ANNEXURE 3: CHECKLIST FOR ROOM RECORDS&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseSeven" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-3 mt-2">
                      <label>Study No(s):</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_no6">
                    </div>
                    <div class="col-3 mt-2">
                      <label>Room No:</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="room_no1">
                    </div>
                    <div class="col-12 mt-2">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>Particulars#</th>
                            <th>Date</th>
                            <th>Results</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><label>Fumigation</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="fum_date"></td>
                            <td><input type="text" class="form-control half-bord" v-model="fum_result"></td>
                          </tr>
                          <tr>
                            <td><label>Air Sampling</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="airsamp_date"></td>
                            <td><input type="text" class="form-control half-bord" v-model="airsamp_result"></td>
                          </tr>
                          <tr>
                            <td><label>Air Flow (Cycles/Hr) Measurement</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="airflow_date"></td>
                            <td><input type="text" class="form-control half-bord" v-model="airflow_result"></td>
                          </tr>
                          <tr>
                            <td><label>Differential Air Pressure (Pascal’s / MM WC)</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="airpres_date"></td>
                            <td><input type="text" class="form-control half-bord" v-model="airpres_result"></td>
                          </tr>
                          <tr>
                            <td><label>Lux Measurement</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="lux_date"></td>
                            <td><input type="text" class="form-control half-bord" v-model="lux_result"></td>
                          </tr>
                          <tr>
                            <td><label>Sound Level (dB) Measurement</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="sound_date"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sound_result"></td>
                          </tr>
                          <tr>
                            <td><label>Feed Batch/Lot No.</label></td>
                            <td colspan="2"><input type="text" class="form-control half-bord" v-model="feed_no"></td>
                          </tr>
                          <tr>
                            <td><label>Bedding Material Batch/Lot No.</label></td>
                            <td colspan="2"><input type="text" class="form-control half-bord" v-model="bedding_no"></td>
                          </tr>
                          <tr>
                            <td><label>Others (to Specify)</label></td>
                            <td colspan="2"><input type="text" class="form-control half-bord" v-model="others"></td>
                          </tr>
                          <tr>
                            <td><label>Sign. & Date:</label></td>
                            <td colspan="2"><input type="text" class="form-control half-bord" v-model="sign18"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p class="mt-2"><b>Note 1: </b>√: Satisfactory X: Unsatisfactory #: Transcribed Data</p>
                    <p class="mt-2"><b>Note 2: </b>Analysis Report of Water / Food / Bedding material should be included in the Final Report.</p>
                    <div class="col-4 mt-2">
                      <label>Remarks (If any):</label>
                    </div>
                    <div class="col-8 mt-2 mb-3">
                      <input type="text" class="form-control half-bord" v-model="remarks2">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseEight" aria-expanded="true">     
                  <span class="title">ANNEXURE 3: CHECKLIST TO PERFORM MULTIPLE STUDIES IN A SINGLE ROOM&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseEight" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p class="mt-2">From : HOD / In-charge,</p>
                    <div class="col-4">
                      <label>To : SD for Study No.</label>
                    </div>
                    <div class="col-8">
                      <input type="text" class="form-control half-bord" v-model="study_no7">
                    </div>
                    <div class="col-4">
                      <label>Conduct all the studies mentioned in the Room No.</label>
                    </div>
                    <div class="col-8">
                      <input type="text" class="form-control half-bord" v-model="room_no2">
                    </div>
                    <div class="col-4">
                      <label>Approved by (HOD / Section):</label>
                    </div>
                    <div class="col-8">
                      <input type="text" class="form-control half-bord" v-model="approved">
                    </div>
                    <div class="col-12 mt-2">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>Sl. No.</th>
                            <th colspan="3">Particulars</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><label>1</label></td>
                            <td><label>Room No.</label></td>
                            <td colspan="2"><input type="text" class="form-control half-bord" v-model="room_no3"></td>
                          </tr>
                          <tr>
                            <td><label>2</label></td>
                            <td><label>Room size (L x B)</label></td>
                            <td colspan="2"><input type="text" class="form-control half-bord" v-model="room_size"></td>
                          </tr>
                          <tr>
                            <th colspan="4">Study Details</th>
                          </tr>
                          <tr>
                            <td><label>3</label></td>
                            <td><label>Study Nos.</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_nos1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_nos2"></td>
                          </tr>
                          <tr>
                            <td><label>4</label></td>
                            <td><label>Study Code</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_codes1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_codes2"></td>
                          </tr>
                          <tr>
                            <td><label>5</label></td>
                            <td><label>Test Item Code</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="item_codes1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="item_codes2"></td>
                          </tr>
                          <tr>
                            <td><label>6</label></td>
                            <td><label>SD</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="sd_nos1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sd_nos2"></td>
                          </tr>
                          <tr>
                            <td><label>7</label></td>
                            <td><label>Species / Strain</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="species_nos1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="species_nos2"></td>
                          </tr>
                          <tr>
                            <td><label>8</label></td>
                            <td><label>No. of Animals per Study</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_nos1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_nos2"></td>
                          </tr>
                          <tr>
                            <td><label>9</label></td>
                            <td><label>Route of Administration</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="route_nos1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="route_nos2"></td>
                          </tr>
                          <tr>
                            <td><label>10</label></td>
                            <td><label>No. of Days of Administration</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="days_nos1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days_nos2"></td>
                          </tr>
                          <tr>
                            <td><label>11</label></td>
                            <td><label>Vehicle Used</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="vehicle_nos1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="vehicle_nos2"></td>
                          </tr>
                          <tr>
                            <th colspan="4">Precautions to Avoid Cross Contamination</th>
                          </tr>
                          <tr>
                            <td><label>12</label></td>
                            <td><label>Use of curtains (Yes / No)</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="curtain_nos1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="curtain_nos2"></td>
                          </tr>
                          <tr>
                            <td><label>13</label></td>
                            <td><label>Dose administrations will be completed for one study and then dose administration will be performed for the other study.</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="dose_nos1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="dose_nos2"></td>
                          </tr>
                          <tr>
                            <td><label>14</label></td>
                            <td><label>Use of Individual Cage Batteries for each Study (Yes / No)</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="battery_nos1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="battery_nos2"></td>
                          </tr>
                          <tr>
                            <td><label>15</label></td>
                            <td><label>Door label to reflect all studies in the room (Yes / No)</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="door_nos1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="door_nos2"></td>
                          </tr>
                          <tr>
                            <td><label>15</label></td>
                            <td><label>Measure Light Intensity (Tick after Measurement)</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="light_nos1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="light_nos2"></td>
                          </tr>
                          <tr>
                            <td colspan="2"><label>Conclusion</label></td>
                            <td colspan="2"><label>Conduct of the above studies in a single room is likely to cause: No Interference / Interference on each of the studies.</label></td>
                          </tr>
                          <tr>
                            <td><label>Recorded by (Sign. and Date)</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="sign19"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p class="mt-2">Recommendation: Conduct / Do not conduct studies in the same room.</p>
                    <div class="col-6">
                      <label>Note: Annexure 3 is part of raw data and archived accordingly.</label>
                    </div>
                    <div class="col-3">
                      <label>Original in Study No.</label>
                    </div>
                    <div class="col-3">
                      <input type="text" class="form-control half-bord" v-model="study_no8">
                    </div>
                    <p class="mt-2">Approved by:</p>
                    <div class="col-6">
                      <label>HOD / In-charge</label>
                    </div>
                    <div class="col-6">
                      <label class="float-right">TFM</label>
                    </div>
                    <div class="col-4">
                      <input type="text" class="form-control half-bord" v-model="sign20">
                    </div>
                    <div class="col-4">
                      
                    </div>
                    <div class="col-4">
                      <input type="text" class="form-control float-right half-bord" v-model="sign21">
                    </div>
                    <div class="col-6 mb-3">
                      <label>Sign. and Date </label>
                    </div>
                    <div class="col-6 mb-3">
                      <label class="float-right">Sign. and Date </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTen" aria-expanded="true">     
                  <span class="title">ANNEXURE 2: INDIVIDUAL ANIMAL BODY WEIGHT (g / kg) AT RECEIPT&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTen" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-3">
                      <label>Study No:</label>
                    </div>
                    <div class="col-3">
                      <input type="text" class="form-control half-bord" v-model="study_no10">
                    </div>
                    <div class="col-3">
                      <label>Study Code:</label>
                    </div>
                    <div class="col-3">
                      <input type="text" class="form-control half-bord" v-model="study_code3">
                    </div>
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <td>Sex</td>
                            <td>Cage No.</td>
                            <td>Animal No.</td>
                            <td>Body Weight</td>
                            <td>Sex</td>
                            <td>Cage No.</td>
                            <td>Animal No.</td>
                            <td>Body Weight</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="sex_1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="cage_1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="body_1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex_2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="cage_2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="body_2"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="sex_1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="cage_1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="body_1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex_2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="cage_2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="body_2"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="sex_1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="cage_1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="body_1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex_2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="cage_2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="body_2"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="sex_1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="cage_1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="body_1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex_2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="cage_2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="body_2"></td>
                          </tr>
                          <tr>
                            <td colspan="4"><label>Time:</label></td>
                            <td colspan="4"><input type="text" class="form-control half-bord" v-model="time"></td>
                          </tr>
                          <tr>
                            <td colspan="4"><label>Balance ID:</label></td>
                            <td colspan="4"><input type="text" class="form-control half-bord" v-model="balance_id"></td>
                          </tr>
                          <tr>
                            <td colspan="4"><label>Sign. and Date:</label></td>
                            <td colspan="4"><input type="text" class="form-control half-bord" v-model="sign25"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="true">     
                  <span class="title">ANNEXURE 3: ANIMAL RECEIPT AND USAGE RECORD &nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseEleven" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Study No:</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_no11">
                    </div>
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Study Code:</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_code4">
                    </div>
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <thead>
                          <tr class="text-center">
                            <th colspan="3">Particulars of Animal Receipt</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><label>Species and Strain</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="species3"></td>
                          </tr>
                          <tr>
                            <td><label>Source</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="species4"></td>
                          </tr>
                          <tr>
                            <td><label>Sex</label></td>
                            <td><label>Male</label></td>
                            <td><label>Female</label></td>
                          </tr>
                          <tr>
                            <td><label>Number</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="number_male"></td>
                            <td><input type="text" class="form-control half-bord" v-model="number_female"></td>
                          </tr>
                          <tr>
                            <td><label>Age (Weeks / Months)</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="age_male2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="age_female2"></td>
                          </tr>
                          <tr>
                            <td><label>Body weight range (g / kg)</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="body_male"></td>
                            <td><input type="text" class="form-control half-bord" v-model="body_female"></td>
                          </tr>
                          <tr>
                            <td><label>Animals Received by</label></td>
                            <td><label>Sign. and Date:</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="sign26"></td>
                          </tr>
                          <tr class="text-center">
                            <th colspan="3">Particulars of Animal Usage</th>
                          </tr>
                          <tr>
                            <td><label>Sex</label></td>
                            <td><label>Male</label></td>
                            <td><label>Female</label></td>
                          </tr>
                          <tr>
                            <td><label>No. of animals used</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="used_male"></td>
                            <td><input type="text" class="form-control half-bord" v-model="used_female"></td>
                          </tr>
                          <tr>
                            <td><label>No. of animals unused</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="unused_male"></td>
                            <td><input type="text" class="form-control half-bord" v-model="unused_female"></td>
                          </tr>
                          <tr>
                            <td><label>Mode of disposal of unused animals</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="disposal_male"></td>
                            <td><input type="text" class="form-control half-bord" v-model="disposal_female"></td>
                          </tr>
                          <tr>
                            <td><label>(Sign. and Date)</label></td>
                            <td colspan="2"><input type="text" class="form-control half-bord" v-model="sign27"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="true">     
                  <span class="title">ANNEXURE 1: ACCLIMATIZATION RECORD&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwelve" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Study No:</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_no12">
                    </div>
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Study Code:</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_code5">
                    </div>
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Species / Strain:</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="species5">
                    </div>
                    <div class="col-3 mt-2">
                    </div>
                    <div class="col-3 mt-2">
                    </div>
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Acclimatization period:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <label class="font-weight-bold">Start:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <input type="text" class="form-control half-bord" v-model="start">
                    </div>
                    <div class="col-2 mt-2">
                      <label class="font-weight-bold">End:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <input type="text" class="form-control half-bord" v-model="end">
                    </div>
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td rowspan="4"><label>No. of animals acclimatized</label></td>
                            <td><label>Males</label></td>
                            <td><label>Females</label></td>
                            <td><label>Total</label></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="males"></td>
                            <td><input type="text" class="form-control half-bord" v-model="females"></td>
                            <td><input type="text" class="form-control half-bord" v-model="total"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td><label>Diet</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="diet"></td>
                          </tr>
                          <tr>
                            <td><label>Batch No.</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="batch_no"></td>
                          </tr>
                          <tr>
                            <td><label>Manufacture Date</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="man_date"></td>
                          </tr>
                          <tr>
                            <td><label>Expiry Date</label></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_date"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-3">
                      <label>Cage Size:</label>
                    </div>
                    <div class="col-3">
                      <input type="text" class="form-control half-bord" v-model="cage_size">
                    </div>
                    <div class="col-3">
                    </div>
                    <div class="col-3">
                    </div>
                    <div class="col-3">
                      <label>Sign. and Date:</label>
                    </div>
                    <div class="col-3">
                      <input type="text" class="form-control half-bord" v-model="sign28">
                    </div>
                    <div class="col-3">
                    </div>
                    <div class="col-3">
                    </div>
                    <div class="col-3">
                      <label>Examinations (If applicable):</label>
                    </div>
                    <div class="col-3">
                      <input type="text" class="form-control half-bord" v-model="exam">
                    </div>
                    <div class="col-3">
                    </div>
                    <div class="col-3">
                    </div>
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td>Type of Examination</td>
                            <td>Date</td>
                            <td>Observations</td>
                            <td>Sign. and Date</td>
                          </tr>
                          <tr>
                            <td rowspan="4">Veterinary Examination</td>
                            <td><input type="text" class="form-control half-bord" v-model="exam_type"></td>
                            <td><input type="text" class="form-control half-bord" v-model="date2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sign29"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="exam_type"></td>
                            <td><input type="text" class="form-control half-bord" v-model="date2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sign29"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="exam_type"></td>
                            <td><input type="text" class="form-control half-bord" v-model="date2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sign29"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="exam_type"></td>
                            <td><input type="text" class="form-control half-bord" v-model="date2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sign29"></td>
                          </tr>
                          <tr>
                            <td>Ophthalmoscopic Examination</td>
                            <td><input type="text" class="form-control half-bord" v-model="exam_type"></td>
                            <td><input type="text" class="form-control half-bord" v-model="date2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sign29"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-3">
                      <label>Ophthalmoscope ID:</label>
                    </div>
                    <div class="col-3">
                      <input type="text" class="form-control half-bord" v-model="optho_id ">
                    </div>
                    <div class="col-3">
                    </div>
                    <div class="col-3">
                    </div>
                    <div class="col-3">
                      <label>Mydriatic agent:</label>
                    </div>
                    <div class="col-3">
                      <input type="text" class="form-control half-bord" v-model="myd_agent">
                    </div>
                    <div class="col-3">
                      <label>Batch No:</label>
                    </div>
                    <div class="col-3">
                      <input type="text" class="form-control half-bord" v-model="batch_no1">
                    </div>
                    <div class="col-3">
                      <label>Manufacture date:</label>
                    </div>
                    <div class="col-3">
                      <input type="text" class="form-control half-bord" v-model="man_date1">
                    </div>
                    <div class="col-3">
                      <label>Expiry date:</label>
                    </div>
                    <div class="col-3">
                      <input type="text" class="form-control half-bord" v-model="exp_date1">
                    </div>
                    <div class="col-3">
                      <label>Animals are Accepted / rejected:</label>
                    </div>
                    <div class="col-3">
                      <input type="text" class="form-control half-bord" v-model="animals">
                    </div>
                    <div class="col-3">
                    </div>
                    <div class="col-3">
                    </div>
                    <div class="col-3">
                      <label>If rejected reason:</label>
                    </div>
                    <div class="col-3">
                      <input type="text" class="form-control half-bord" v-model="rejected">
                    </div>
                    <div class="col-3">
                    </div>
                    <div class="col-3">
                    </div>
                    <div class="col-3">
                      <label>Sign. & Date:</label>
                    </div>
                    <div class="col-3 mb-3">
                      <input type="text" class="form-control half-bord" v-model="sign30">
                    </div>
                    <div class="col-3 mb-3">
                    </div>
                    <div class="col-3 mb-3">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseThirteen" aria-expanded="true">     
                  <span class="title">ANNEXURE 1: CLINICAL SIGNS OBSERVATION RECORD&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseThirteen" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Study No:</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_no13">
                    </div>
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Study Code:</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_code6">
                    </div>
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Dose / Group:</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="dose">
                    </div>
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <thead>
                          <tr class="text-center">
                            <th>Animal No.</th>
                            <th>Sex</th>
                            <th colspan="15">Days</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="animal_no1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="animal_no1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="animal_no1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                          </tr>
                          <tr>
                            <th><label>Time</label></th>
                            <td><input type="text" class="form-control half-bord" v-model="sex"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                          </tr>
                          <tr>
                            <th><label>Sign and Date</label></th>
                            <td><input type="text" class="form-control half-bord" v-model="sex"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                            <td><input type="text" class="form-control half-bord" v-model="days"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseFourteen" aria-expanded="true">     
                  <span class="title">ANNEXURE 7: TEST ARTICLE DISPENSING RECORD&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseFourteen" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <th>Item Name</th>
                            <td><input type="text" class="form-control half-bord" v-model="item_name"></td>
                            <th>Code by Test Facility</th>
                            <td><input type="text" class="form-control half-bord" v-model="code"></td>
                          </tr>
                          <tr>
                            <th>Batch No./ Lot No.</th>
                            <td><input type="text" class="form-control half-bord" v-model="batch_no2"></td>
                            <th>Mfg. Date</th>
                            <td><input type="text" class="form-control half-bord" v-model="man_date2"></td>
                          </tr>
                          <tr>
                            <th>Storage Condition</th>
                            <td><input type="text" class="form-control half-bord" v-model="storage_cond"></td>
                            <th>Exp. Date / Retest Date</th>
                            <td><input type="text" class="form-control half-bord" v-model="exp_date2"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h6 class="mt-3 ml-3">DISPENSING DETAILS</h6>
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Study No.</th>
                            <th>Gross Weight of Container(mg / g / µl / mL / vial / cm2 / No.)</th>
                            <th colspan="6">Test Article Dispensed (mg / g / µl / mL / vial / cm2 / No.)</th>
                            <th>Gross weight of Container After Dispensing (mg / g / µl / mL / vial / cm2 / No.)</th>
                            <th>Dispensing Loss* (mg /g / µl / mL / vial / No.)</th>
                            <th>Dispensed by (Sign. and date)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="date3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_no14"></td>
                            <td><input type="text" class="form-control half-bord" v-model="gross_wt"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_art"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_art"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_art"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_art"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_art"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_art"></td>
                            <td><input type="text" class="form-control half-bord" v-model="gross_wt1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="disp_loss"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sign31"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="date3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_no14"></td>
                            <td><input type="text" class="form-control half-bord" v-model="gross_wt"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_art"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_art"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_art"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_art"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_art"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_art"></td>
                            <td><input type="text" class="form-control half-bord" v-model="gross_wt1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="disp_loss"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sign31"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="date3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="study_no14"></td>
                            <td><input type="text" class="form-control half-bord" v-model="gross_wt"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_art"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_art"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_art"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_art"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_art"></td>
                            <td><input type="text" class="form-control half-bord" v-model="test_art"></td>
                            <td><input type="text" class="form-control half-bord" v-model="gross_wt1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="disp_loss"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sign31"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseFifteen" aria-expanded="true">     
                  <span class="title">ANNEXURE 3: TEST ITEM EXTRACT PREPARATION RECORD&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseFifteen" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">  
                    <div class="col-2 mt-1">
                      <label class="font-weight-bold">Study No:</label>
                    </div>
                    <div class="col-2 mt-1">
                      <input type="text" class="form-control half-bord" v-model="study_no15">
                    </div>
                    <div class="col-2 mt-1">
                      <label class="font-weight-bold">Study Code:</label>
                    </div>
                    <div class="col-2 mt-1">
                      <input type="text" class="form-control half-bord" v-model="study_code7">
                    </div>
                    <div class="col-2 mt-1">
                      <label class="font-weight-bold">Test item Code:</label>
                    </div>
                    <div class="col-2 mt-1">
                      <input type="text" class="form-control half-bord" v-model="test_code1">
                    </div>
                    <div class="col-3 mt-1">
                      <label class="font-weight-bold">Polar Solvent Batch No *:</label>
                    </div>
                    <div class="col-3 mt-1">
                      <input type="text" class="form-control half-bord" v-model="polar_no">
                    </div>
                    <div class="col-3 mt-1">
                      <label class="font-weight-bold">Mfg. / Exp. Date *:</label>
                    </div>
                    <div class="col-3 mt-1">
                      <input type="text" class="form-control half-bord" v-model="mfg_date1">
                    </div>
                    <div class="col-3 mt-1">
                      <label class="font-weight-bold">Non-polar Solvent Batch No *:</label>
                    </div>
                    <div class="col-3 mt-1">
                      <input type="text" class="form-control half-bord" v-model="nonpolar_no">
                    </div>
                    <div class="col-3 mt-1">
                      <label class="font-weight-bold">Mfg. / Exp. Date *:</label>
                    </div>
                    <div class="col-3 mt-1">
                      <input type="text" class="form-control half-bord" v-model="mfg_date2">
                    </div>
                    <div class="col-3 mt-1">
                      <label class="font-weight-bold">Polar solvent manufacturer Name *:</label>
                    </div>
                    <div class="col-3 mt-1">
                      <input type="text" class="form-control half-bord" v-model="man_name1">
                    </div>
                    <div class="col-3 mt-1">
                    </div>
                    <div class="col-3 mt-1">
                    </div>
                    <div class="col-3 mt-1">
                      <label class="font-weight-bold">Nonpolar solvent manufacturer Name *:</label>
                    </div>
                    <div class="col-3 mt-1">
                      <input type="text" class="form-control half-bord" v-model="man_name2">
                    </div>
                    <div class="col-3 mt-1">
                    </div>
                    <div class="col-3 mt-1">
                    </div>
                    <div class="col-3 mt-1">
                      <label>Weighing Balance ID:</label>
                    </div>
                    <div class="col-3 mt-1">
                      <input type="text" class="form-control half-bord" v-model="balance_id1">
                    </div>
                    <div class="col-3 mt-1">
                    </div>
                    <div class="col-3 mt-1">
                    </div>
                    <div class="col-3 mt-1">
                      <label>Laminar Air Flow / Bio safety cabinet ID:</label>
                    </div>
                    <div class="col-3 mt-1">
                      <input type="text" class="form-control half-bord" v-model="cabinet_id">
                    </div>
                    <div class="col-3 mt-1">
                    </div>
                    <div class="col-3 mt-1">
                    </div>
                    <div class="col-3 mt-1">
                      <label>Instrument ID:</label>
                    </div>
                    <div class="col-3 mt-1">
                      <input type="text" class="form-control half-bord" v-model="inst_id">
                    </div>
                    <div class="col-3 mt-1">
                    </div>
                    <div class="col-3 mt-1">
                    </div>
                    <div class="col-12 mt-2 mb-3">
                      <table border="0" class="mb-3">
                        <tr>
                          <th colspan="2">Vehicle Control (Polar and Non-Polar):</th>
                          <td colspan="2"><input type="text" class="form-control half-bord" v-model="blank1"></td>
                          <td colspan="2">ml of Polar solvent (</td>
                          <td colspan="2"><input type="text" class="form-control half-bord" v-model="blank2"></td>
                          <td colspan="2">) and</td>
                        </tr>
                        <tr>
                          <td colspan="2"><input type="text" class="form-control half-bord" v-model="blank3"></td>
                          <td colspan="2">ml of Non polar Solvent (</td>
                          <td colspan="2"><input type="text" class="form-control half-bord" v-model="blank4"></td>
                          <td colspan="2">) was separately taken in</td>
                          <td colspan="1"><input type="text" class="form-control half-bord" v-model="blank5"></td>
                          <td colspan="1">) and</td>
                        </tr>
                        <tr>
                          <td>Kept in</td>
                          <td><input type="text" class="form-control half-bord" v-model="blank6"></td>
                          <td>at</td>
                          <td><input type="text" class="form-control half-bord" v-model="blank7"></td>
                          <td>°C &</td>
                          <td><input type="text" class="form-control half-bord" v-model="blank8"></td>
                          <td>rpm,</td>
                          <td>Kept in Date (</td>
                          <td><input type="text" class="form-control half-bord" v-model="blank9"></td>
                          <td>)</td>
                        </tr>
                        <tr>
                          <td colspan="3">& Time (</td>
                          <td colspan="4"><input type="text" class="form-control half-bord" v-model="blank10"></td>
                          <td colspan="3">)</td>
                        </tr>
                        <tr>
                          <th colspan="2">Sign. and Date:</th>
                          <td><input type="text" class="form-control half-bord" v-model="blank11"></td>
                        </tr>
                        <tr class="mt-4">
                          <td colspan="2">Test item (Polar and Non-Polar):</td>
                          <td colspan="2"><input type="text" class="form-control half-bord" v-model="blank12"></td>
                          <td colspan="2">g/mg/Cm2 of Test item taken in</td>
                          <td colspan="2"><input type="text" class="form-control half-bord" v-model="blank13"></td>
                          <td colspan="2">containing</td>
                        </tr>
                        <tr>
                          <td colspan="2">ml of Polar solvent (</td>
                          <td colspan="2"><input type="text" class="form-control half-bord" v-model="blank14"></td>
                          <td colspan="1">and</td>
                          <td colspan="1"><input type="text" class="form-control half-bord" v-model="blank15"></td>
                          <td colspan="2">g/mg/Cm2 of Test item taken in</td>
                          <td colspan="1"><input type="text" class="form-control half-bord" v-model="blank16"></td>
                          <td colspan="1">containing</td>
                        </tr>
                        <tr>
                          <td colspan="2">ml of Non polar solvent (</td>
                          <td colspan="2"><input type="text" class="form-control half-bord" v-model="blank17"></td>
                          <td colspan="2">these Kept in</td>
                          <td colspan="1"><input type="text" class="form-control half-bord" v-model="blank18"></td>
                          <td colspan="1">at</td>
                          <td colspan="1"><input type="text" class="form-control half-bord" v-model="blank19"></td>
                          <td colspan="1">°C</td>
                        </tr>
                        <tr>
                          <td colspan="1">& </td>
                          <td colspan="1"><input type="text" class="form-control half-bord" v-model="blank20"></td>
                          <td colspan="1">rpm,</td>
                          <td colspan="3">Kept In Date (</td>
                          <td colspan="1"><input type="text" class="form-control half-bord" v-model="blank21"></td>
                          <td colspan="1">) & Time (</td>
                          <td colspan="1"><input type="text" class="form-control half-bord" v-model="blank22"></td>
                          <td colspan="1">)</td>
                        </tr>
                        <tr>
                          <th colspan="2">Sign. and Date:</th>
                          <td><input type="text" class="form-control half-bord" v-model="blank23"></td>
                        </tr>
                        <tr>
                          <td colspan="4">Pre-extraction appearance / clarity</td>
                          <td><input type="text" class="form-control half-bord" v-model="blank24"></td>
                        </tr>
                        <tr>
                          <td colspan="4">pH found to be (Pre-Extraction)</td>
                          <td><input type="text" class="form-control half-bord" v-model="blank25"></td>
                        </tr>
                        <tr>
                          <td colspan="1">After</td>
                          <td colspan="1"><input type="text" class="form-control half-bord" v-model="blank26"></td>
                          <td colspan="1">hours</td>
                          <td colspan="1"><input type="text" class="form-control half-bord" v-model="blank27"></td>
                          <td colspan="1">minutes</td>
                          <td colspan="1"><input type="text" class="form-control half-bord" v-model="blank28"></td>
                          <td colspan="4">containing Polar and Non-polar vehicle</td>
                        </tr>
                        <tr>
                          <td colspan="3">control and Extracts were taken out from</td>
                          <td colspan="1"><input type="text" class="form-control half-bord" v-model="blank29"></td>
                          <td colspan="2">Taken out Date (</td>
                          <td colspan="1"><input type="text" class="form-control half-bord" v-model="blank30"></td>
                          <td colspan="1">) & Time (</td>
                          <td colspan="1"><input type="text" class="form-control half-bord" v-model="blank31"></td>
                          <td colspan="1">)</td>
                        </tr>
                        <tr>
                          <th colspan="2">Sign. and Date:</th>
                          <td><input type="text" class="form-control half-bord" v-model="blank32"></td>
                        </tr>
                        <tr>
                          <td colspan="4">Post-extraction appearance / clarity</td>
                          <td><input type="text" class="form-control half-bord" v-model="blank33"></td>
                        </tr>
                        <tr>
                          <td colspan="4">pH found to be (Post-Extraction)</td>
                          <td><input type="text" class="form-control half-bord" v-model="blank34"></td>
                        </tr>
                        <tr>
                          <td colspan="10"><b>Note:</b> * The details should be updated (at least on the first page) or whenever required / interval / phase.</td>
                        </tr>
                        <tr>
                          <th colspan="2">  Remarks (If any):</th>
                          <td><input type="text" class="form-control half-bord" v-model="blank36"></td>
                        </tr>
                        <tr>
                          <th colspan="2">Sign. and Date:</th>
                          <td><input type="text" class="form-control half-bord" v-model="blank37"></td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseSixteen" aria-expanded="true">     
                  <span class="title">ANNEXURE 1:  INDIVIDUAL ANIMAL BODY WEIGHT (g/kg) RECORD&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseSixteen" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Study No:</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_no16">
                    </div>
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Study Code:</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_code8">
                    </div>
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <td>Group & Dose</td>
                            <td>Animal No.</td>
                            <td>Sex</td>
                            <td colspan="6">Experimental Days / week</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td rowspan="4"><input type="text" class="form-control half-bord" v-model="group"></td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_no2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days4"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days6"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="animal_no2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days4"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days6"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="animal_no2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days4"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days6"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="animal_no2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days4"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days6"></td>
                          </tr>
                          <tr>
                            <td colspan="2">Time</td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_no2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days4"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days6"></td>
                          </tr>
                          <tr>
                            <td colspan="2">Balance ID</td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_no2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days4"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days6"></td>
                          </tr>
                          <tr>  
                            <td colspan="2">Sign.</td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_no2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days4"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days6"></td>
                          </tr>
                          <tr>
                            <td colspan="2">Date</td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_no2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days2"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days4"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days6"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-3 mt-2 mb-3">
                      <label class="font-weight-bold">Remarks if any:</label>
                    </div>
                    <div class="col-3 mt-2 mb-3">
                      <input type="text" class="form-control half-bord" v-model="remarks3">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwenty" aria-expanded="true">     
                  <span class="title">ANNEXURE 1:  INDIVIDUAL ANIMAL BODY WEIGHT (g/kg) RECORD  BEFORE DOSING&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwenty" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Study No:</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_no21">
                    </div>
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Study Code:</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_code13">
                    </div>
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <td>Group & Dose</td>
                            <td>Animal No.</td>
                            <td>Sex</td>
                            <td colspan="6">Experimental Days / week</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td rowspan="4"><input type="text" class="form-control half-bord" v-model="group1"></td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_no4"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days12"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="animal_no4"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days12"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="animal_no4"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days12"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="animal_no4"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days12"></td>
                          </tr>
                          <tr>
                            <td colspan="2">Time</td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_no4"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days12"></td>
                          </tr>
                          <tr>
                            <td colspan="2">Balance ID</td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_no4"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days12"></td>
                          </tr>
                          <tr>  
                            <td colspan="2">Sign.</td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_no4"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days12"></td>
                          </tr>
                          <tr>
                            <td colspan="2">Date</td>
                            <td><input type="text" class="form-control half-bord" v-model="animal_no4"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sex3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="exp_days12"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-3 mt-2 mb-3">
                      <label class="font-weight-bold">Remarks if any:</label>
                    </div>
                    <div class="col-3 mt-2 mb-3">
                      <input type="text" class="form-control half-bord" v-model="remarks4">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseEighteen" aria-expanded="true">     
                  <span class="title">ANNEXURE: 1 ANIMAL BODY WEIGHT AND VOLUME ADMINISTRATION RECORD&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseEighteen" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-2 mt-2">
                      <label>Study No:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_no19">
                    </div>
                    <div class="col-2 mt-2">
                      <label>Study Code:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_code11">
                    </div>
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th colspan="8">Clipping Details</th>
                          </tr>
                          <tr>
                            <td colspan="8">Time of hair clipping: <input type="text" class="form-control half-bord d-inline w-25" v-model="clipping"> Area of Clipping: <input type="text" class="form-control half-bord d-inline w-25" v-model="clipping_area"> at <input type="text" class="form-control half-bord d-inline w-25" v-model="clipping_flank"> flank using an electric clipper/ others to be specified.<br>
                            Clipper ID: <input type="text" class="form-control half-bord d-inline w-25" v-model="clipping_id"> Sign. & Date: <input type="text" class="form-control half-bord d-inline w-25" v-model="sign64"></td>
                          </tr>
                          <tr>
                            <th>Animal No. and Sex</th>
                            <th>Initial body weight (g/kg)</th>
                            <th>Total Volume administrated (mL)</th>
                            <th>Polar Control (mL)</th>
                            <th>Non-PolarControl (mL)</th>
                            <th>Polar Extract (mL)</th>
                            <th>Non-Polar Extract (mL)</th>
                            <th>Terminal body weight (g/kg)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td rowspan="5"><input type="text" class="form-control half-bord" v-model="animal_no5"></td>
                            <td rowspan="5"><input type="text" class="form-control half-bord" v-model="initial_wt"></td>
                            <td rowspan="5"><input type="text" class="form-control half-bord" v-model="total_vol"></td>
                            <td>Site 1: <input type="text" class="form-control half-bord" v-model="tab1"></td>
                            <td>Site 6: <input type="text" class="form-control half-bord" v-model="tab2"></td>
                            <td>Site 1: <input type="text" class="form-control half-bord" v-model="tab3"></td>
                            <td>Site 6: <input type="text" class="form-control half-bord" v-model="tab4"></td>
                            <td rowspan="5"><input type="text" class="form-control half-bord" v-model="terminal_wt"></td>
                          </tr>
                          <tr>
                            <td>Site 1: <input type="text" class="form-control half-bord" v-model="tab1"></td>
                            <td>Site 6: <input type="text" class="form-control half-bord" v-model="tab2"></td>
                            <td>Site 1: <input type="text" class="form-control half-bord" v-model="tab3"></td>
                            <td>Site 6: <input type="text" class="form-control half-bord" v-model="tab4"></td>
                          </tr>
                          <tr>
                            <td>Site 1: <input type="text" class="form-control half-bord" v-model="tab1"></td>
                            <td>Site 6: <input type="text" class="form-control half-bord" v-model="tab2"></td>
                            <td>Site 1: <input type="text" class="form-control half-bord" v-model="tab3"></td>
                            <td>Site 6: <input type="text" class="form-control half-bord" v-model="tab4"></td>
                          </tr>
                          <tr>
                            <td>Site 1: <input type="text" class="form-control half-bord" v-model="tab1"></td>
                            <td>Site 6: <input type="text" class="form-control half-bord" v-model="tab2"></td>
                            <td>Site 1: <input type="text" class="form-control half-bord" v-model="tab3"></td>
                            <td>Site 6: <input type="text" class="form-control half-bord" v-model="tab4"></td>
                          </tr>
                          <tr>
                            <td>Site 1: <input type="text" class="form-control half-bord" v-model="tab1"></td>
                            <td>Site 6: <input type="text" class="form-control half-bord" v-model="tab2"></td>
                            <td>Site 1: <input type="text" class="form-control half-bord" v-model="tab3"></td>
                            <td>Site 6: <input type="text" class="form-control half-bord" v-model="tab4"></td>
                          </tr>
                          <tr>
                            <td colspan="3">Time: <input type="text" class="form-control half-bord" v-model="time1"></td>
                            <td colspan="2">Start Time: <input type="text" class="form-control half-bord" v-model="start_time"></td>
                            <td colspan="2">End Time: <input type="text" class="form-control half-bord" v-model="start_end"></td>
                            <td>Time: <input type="text" class="form-control half-bord" v-model="time2"></td>
                          </tr>
                          <tr>
                            <td colspan="2">Balance ID: <input type="text" class="form-control half-bord" v-model="balance1"></td>
                            <td colspan="5" rowspan="2">Sign. & Date: <input type="text" class="form-control half-bord" v-model="sign65"></td>
                            <td>Balance ID: <input type="text" class="form-control half-bord" v-model="balance2"></td>
                          </tr>
                          <tr>
                            <td colspan="2">Sign. & Date: <input type="text" class="form-control half-bord" v-model="sign66"></td>
                            <td>Sign. & Date: <input type="text" class="form-control half-bord" v-model="sign67"></td>
                          </tr>
                          <tr>
                            <td colspan="8">Total No. of administered sites per animal : <input type="text" class="form-control half-bord" v-model="sites"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-6 mt-2 mb-3">
                      <label><b>Remarks (if any):</b> <input type="text" class="form-control half-bord d-inline w-50" v-model="remarks5"></label>
                    </div>
                    <div class="col-6 mt-2 mb-3">
                      <label><b>Sign and Date:</b> <input type="text" class="form-control half-bord d-inline w-50" v-model="sign35"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwentyFive" aria-expanded="true">     
                  <span class="title">ANNEXURE 2: EVALUATION OF INDIVIDUAL ANIMAL SKIN REACTION RECORD&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwentyFive" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Study No:</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_no26">
                    </div>
                    <div class="col-3 mt-2">
                      <label class="font-weight-bold">Study Code:</label>
                    </div>
                    <div class="col-3 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_code9">
                    </div>
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>Animal No. & Sex</th>
                            <th>Solvent</th>
                            <th>Skin Reaction</th>
                            <th colspan="5">Control Site(s)</th>
                            <th colspan="5">Test Site(s) </th>
                            <th>Observation Timings</th>
                            <th>Sign. and Date</th>
                          </tr>
                          <tr>
                            <th colspan="3"></th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td rowspan="12"><input type="text" class="form-control half-bord" v-model="animal_no6"></td>
                            <td rowspan="2">Polar</td>
                            <td>Erythema</td>
                            <td><input type="text" class="form-control half-bord" v-model="tab5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab6"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab12"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab13"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab14"></td>
                            <td rowspan="4">(24±2 h)</td>
                            <td rowspan="4"><input type="text" class="form-control half-bord" v-model="sign69"></td>
                          </tr>
                          <tr>
                            <td>Edema</td>
                            <td><input type="text" class="form-control half-bord" v-model="tab5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab6"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab12"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab13"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab14"></td>
                          </tr>
                          <tr>
                            <td rowspan="2">Non Polar</td>
                            <td>Erythema</td>
                            <td><input type="text" class="form-control half-bord" v-model="tab5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab6"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab12"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab13"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab14"></td>
                          </tr>
                          <tr>
                            <td>Edema</td>
                            <td><input type="text" class="form-control half-bord" v-model="tab5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab6"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab12"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab13"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab14"></td>
                          </tr>
                          <tr>
                            <td rowspan="2">Polar</td>
                            <td>Erythema</td>
                            <td><input type="text" class="form-control half-bord" v-model="tab5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab6"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab12"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab13"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab14"></td>
                            <td rowspan="4">(48±2 h)</td>
                            <td rowspan="4"><input type="text" class="form-control half-bord" v-model="sign70"></td>
                          </tr>
                          <tr>
                            <td>Edema</td>
                            <td><input type="text" class="form-control half-bord" v-model="tab5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab6"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab12"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab13"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab14"></td>
                          </tr>
                          <tr>
                            <td rowspan="2">Non Polar</td>
                            <td>Erythema</td>
                            <td><input type="text" class="form-control half-bord" v-model="tab5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab6"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab12"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab13"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab14"></td>
                          </tr>
                          <tr>
                            <td>Edema</td>
                            <td><input type="text" class="form-control half-bord" v-model="tab5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab6"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab12"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab13"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab14"></td>
                          </tr>
                          <tr>
                            <td rowspan="2">Polar</td>
                            <td>Erythema</td>
                            <td><input type="text" class="form-control half-bord" v-model="tab5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab6"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab12"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab13"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab14"></td>
                            <td rowspan="4">(72±2 h)</td>
                            <td rowspan="4"><input type="text" class="form-control half-bord" v-model="sign71"></td>
                          </tr>
                          <tr>
                            <td>Edema</td>
                            <td><input type="text" class="form-control half-bord" v-model="tab5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab6"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab12"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab13"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab14"></td>
                          </tr>
                          <tr>
                            <td rowspan="2">Non Polar</td>
                            <td>Erythema</td>
                            <td><input type="text" class="form-control half-bord" v-model="tab5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab6"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab12"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab13"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab14"></td>
                          </tr>
                          <tr>
                            <td>Edema</td>
                            <td><input type="text" class="form-control half-bord" v-model="tab5"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab6"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab8"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab9"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab10"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab11"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab12"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab13"></td>
                            <td><input type="text" class="form-control half-bord" v-model="tab14"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-6 mt-2 mb-3">
                      <label><b>Remarks (if any):</b> <input type="text" class="form-control half-bord d-inline w-50" v-model="remarks7"></label>
                    </div>
                    <div class="col-6 mt-2 mb-3">
                      <label><b>Sign and Date:</b> <input type="text" class="form-control half-bord d-inline w-50" v-model="sign68"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwentySix" aria-expanded="true">     
                  <span class="title">ANNEXURE 2: LIST OF PERSONNEL INVOLVED IN THE STUDY&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwentySix" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Full sign.</th>
                            <th>Short Sign.</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="date6"></td>
                            <td><input type="text" class="form-control half-bord" v-model="name3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="full_sign"></td>
                            <td><input type="text" class="form-control half-bord" v-model="short_sign"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="date6"></td>
                            <td><input type="text" class="form-control half-bord" v-model="name3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="full_sign"></td>
                            <td><input type="text" class="form-control half-bord" v-model="short_sign"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="date6"></td>
                            <td><input type="text" class="form-control half-bord" v-model="name3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="full_sign"></td>
                            <td><input type="text" class="form-control half-bord" v-model="short_sign"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="date6"></td>
                            <td><input type="text" class="form-control half-bord" v-model="name3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="full_sign"></td>
                            <td><input type="text" class="form-control half-bord" v-model="short_sign"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="date6"></td>
                            <td><input type="text" class="form-control half-bord" v-model="name3"></td>
                            <td><input type="text" class="form-control half-bord" v-model="full_sign"></td>
                            <td><input type="text" class="form-control half-bord" v-model="short_sign"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-2 mt-2 mb-3">
                      <label class="font-weight-bold">Study No:</label>
                    </div>
                    <div class="col-2 mt-2 mb-3">
                      <input type="text" class="form-control half-bord" v-model="study_no27">
                    </div>
                    <div class="col-2 mt-2 mb-3">
                      <label class="font-weight-bold">Study Code:</label>
                    </div>
                    <div class="col-2 mt-2 mb-3">
                      <input type="text" class="form-control half-bord" v-model="study_code15">
                    </div>
                    <div class="col-2 mt-2 mb-3">
                      <label class="font-weight-bold">SD Name:</label>
                    </div>
                    <div class="col-2 mt-2 mb-3">
                      <input type="text" class="form-control half-bord" v-model="sd_name1">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwentySeven" aria-expanded="true">     
                  <span class="title">ANNEXURE 4: REVIEW BY SD / PI&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwentySeven" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-2 mt-2">
                      <label class="font-weight-bold">Study No:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_no28">
                    </div>
                    <div class="col-2 mt-2">
                      <label class="font-weight-bold">Study Code:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <input type="text" class="form-control half-bord" v-model="study_code16">
                    </div>
                    <div class="col-2 mt-2">
                      <label class="font-weight-bold">SD / PI:</label>
                    </div>
                    <div class="col-2 mt-2">
                      <input type="text" class="form-control half-bord" v-model="sd_pi">
                    </div>
                    <div class="col-12 mt-2">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Details of review</th>
                            <th>Sign. with Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><input type="text" class="form-control half-bord" v-model="date7"></td>
                            <td><input type="text" class="form-control half-bord" v-model="review"></td>
                            <td><input type="text" class="form-control half-bord" v-model="sign63"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p class="mt-2"><b>Note:</b> The SD should review and document the following (as applicable):</p>
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td>1. SOP Adoption</td>
                            <td>5. Computer Generated data, if applicable</td>
                          </tr>
                          <tr>
                            <td>2. Study Plan / Amendment Adoption</td>
                            <td>6. Related data from PI / contributory Scientist / others</td>
                          </tr>
                          <tr>
                            <td>3. Overview of Raw data Generated during the study period</td>
                            <td>7. Others items (Please specify under comments)</td>
                          </tr>
                          <tr>
                            <td>4. Record of deviation (SOP / SP)</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <center>
              <button type="button" class="btn btn-primary mt-3 mb-3 save" @click="save">SAVE</button>
            </center>

          </div>
        </div>    
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Study_Data',
  components: {
  },
  data() {
    return {
      items1: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items2: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items3: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items4: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items5: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items6: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items7: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items8: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items9: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items10: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items11: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items12: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items13: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items14: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items15: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items16: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items17: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items18: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items19: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items20: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items21: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      items22: [
        { label: 'Day 1', value: 'day1' },
        { label: 'Day 2', value: 'day2' },
        { label: 'Day 3', value: 'day3' },
        { label: 'Day 4', value: 'day4' },
        { label: 'Day 5', value: 'day5' },
        { label: 'Day 6', value: 'day6' },
        { label: 'Day 7', value: 'day7' },
        { label: 'Day 8', value: 'day8' },
        { label: 'Day 9', value: 'day9' },
        { label: 'Day 10', value: 'day10' },
        { label: 'Day 11', value: 'day11' },
        { label: 'Day 12', value: 'day12' },
        { label: 'Day 13', value: 'day13' },
        { label: 'Day 14', value: 'day14' },
        { label: 'Day 15', value: 'day15' },
        { label: 'Day 16', value: 'day16' },
        { label: 'Day 17', value: 'day17' },
        { label: 'Day 18', value: 'day18' },
        { label: 'Day 19', value: 'day19' },
        { label: 'Day 20', value: 'day20' },
        { label: 'Day 21', value: 'day21' },
        { label: 'Day 22', value: 'day22' },
        { label: 'Day 23', value: 'day23' },
        { label: 'Day 24', value: 'day24' },
        { label: 'Day 25', value: 'day25' },
        { label: 'Day 26', value: 'day26' },
        { label: 'Day 27', value: 'day27' },
        { label: 'Day 28', value: 'day28' },
        { label: 'Day 29', value: 'day29' },
        { label: 'Day 30', value: 'day30' },
        { label: 'Day 31', value: 'day31' },
      ],
      study_no9: "",
      room_no4: "",
      month_year: "",
      check1: [],
      check2: [],
      check3: [],
      check4: [],
      check5: [],
      check6: [],
      check7: [],
      check8: [],
      check9: [],
      check10: [],
      check11: [],
      check12: [],
      check13: [],
      check14: [],
      check15: [],
      check16: [],
      check17: [],
      check18: [],
      check19: [],
      check20: [],
      check21: [],
      check22: [],
      others1: "",
      sign22: "",
      marker: "",
      others2: "",
      sign23: "",
      sign24: "",
      study_no3: "",
      species: "",
      req_date: "",
      age_male: "",
      age_female: "",
      no_male: "",
      no_female: "",
      wt_male: "",
      wt_female: "",
      sign9: "",
      species1: "",
      iaec: "",
      req_date1: "",
      age_male1: "",
      age_female1: "",
      dob_male: "",
      dob_female: "",
      no_male1: "",
      no_female1: "",
      wt_male1: "",
      wt_female1: "",
      sign10: "",
      sign11: "",
      sign12: "",
      sign13: "",
      date1: "",
      study_no4: "",
      species2: "",
      no_male2: "",
      no_female2: "",
      from_date: "",
      to_date: "",
      sign14: "",
      sign15: "",
      room_no: "",
      study_no5: "",
      from_date1: "",
      to_date1: "",
      sign16: "",
      sign17: "",
      study_no6: "",
      room_no1: "",
      fum_date: "",
      fum_result: "",
      airsamp_date: "",
      airsamp_result: "",
      airflow_date: "",
      airflow_result: "",
      airpres_date: "",
      airpres_result: "",
      lux_date: "",
      lux_result: "",
      sound_date: "",
      sound_result: "",
      feed_no: "",
      bedding_no: "",
      others: "",
      sign18: "",
      remarks2: ""
    }
  },
  methods: {
    save: function() {
      let uri = "/api/sdata/" + this.$route.params.id;
      axios.post(uri, {
        study_no9: this.study_no9,
        room_no4: this.room_no4,
        month_year: this.month_year,
        check1: this.check1,
        check2: this.check2,
        check3: this.check3,
        check4: this.check4,
        check5: this.check5,
        check6: this.check6,
        check7: this.check7,
        check8: this.check8,
        check9: this.check9,
        check10: this.check10,
        check11: this.check11,
        check12: this.check12,
        check13: this.check13,
        check14: this.check14,
        check15: this.check15,
        check16: this.check16,
        check17: this.check17,
        check18: this.check18,
        check19: this.check19,
        check20: this.check20,
        check21: this.check21,
        check22: this.check22,
        others1: this.others1,
        sign22: this.sign22,
        marker: this.marker,
        others2: this.others2,
        sign23: this.sign23,
        sign24: this.sign24,
        study_no3: this.study_no3,
        species: this.species,
        req_date: this.req_date,
        age_male: this.age_male,
        age_female: this.age_female,
        no_male: this.no_male,
        no_female: this.no_female,
        wt_male: this.wt_male,
        wt_female: this.wt_female,
        sign9: this.sign9,
        species1: this.species1,
        iaec: this.iaec,
        req_date1: this.req_date1,
        age_male1: this.age_male1,
        age_female1: this.age_female1,
        dob_male: this.dob_male,
        dob_female: this.dob_female,
        no_male1: this.no_male1,
        no_female1: this.no_female1,
        wt_male1: this.wt_male1,
        wt_female1: this.wt_female1,
        sign10: this.sign10,
        sign11: this.sign11,
        sign12: this.sign12,
        sign13: this.sign13,
        date1: this.date1,
        study_no4: this.study_no4,
        species2: this.species2,
        no_male2: this.no_male2,
        no_female2: this.no_female2,
        from_date: this.from_date,
        to_date: this.to_date,
        sign14: this.sign14,
        sign15: this.sign15,
        room_no: this.room_no,
        study_no5: this.study_no5,
        from_date1: this.from_date1,
        to_date1: this.to_date1,
        sign16: this.sign16,
        sign17: this.sign17,
        study_no6: this.study_no6,
        room_no1: this.room_no1,
        fum_date: this.fum_date,
        fum_result: this.fum_result,
        airsamp_date: this.airsamp_date,
        airsamp_result: this.airsamp_result,
        airflow_date: this.airflow_date,
        airflow_result: this.airflow_result,
        airpres_date: this.airpres_date,
        airpres_result: this.airpres_result,
        lux_date: this.lux_date,
        lux_result: this.lux_result,
        sound_date: this.sound_date,
        sound_result: this.sound_result,
        feed_no: this.feed_no,
        bedding_no: this.bedding_no,
        others: this.others,
        sign18: this.sign18,
        remarks2: this.remarks2
      }).then((res) => {
          alert("Successfully Saved!");
          window.location.href='/studydata';
      }).catch(()=> {
          alert("Something Went Wrong!");
          window.location.href='/studydata';
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

.half-bord {
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
}

.no-bord {
  border: none;
}

.half-bord:hover, .half-bord:focus, .no-bord:hover, .no-bord:focus {
  box-shadow: none;
}
</style>
