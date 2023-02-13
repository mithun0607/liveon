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
          <div class="row bg-light rounded" v-for="detail in details" :key="detail.id">
            <div class="col-12" style="display: none;">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <router-link class="nav-link active" to="#">Draft Study Plan</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link text-dark" to="/studyfinalplan">Final Study Plan</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link text-dark" to="/studyallocate">Allocate Study personnel</router-link>
                </li>
                <li class="nav-item"> 
                  <router-link class="nav-link text-dark" to="/studyschd">Study Schedule</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link text-dark" to="/studydata">Study Data</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link text-dark" to="/studycomment">Comments</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link text-dark" to="/studyreport">Final Report</router-link>
                </li>
              </ul>
            </div>

            <div class="col-12">
              <h6 class="text-center mt-3"><u>DRAFT STUDY PLAN</u></h6>
              <h6 class="text-center mt-3">STUDY TITLE</h6>
              <center><textarea class="form-control mt-3 w-75 no-bord text-center" v-model="title1"></textarea></center>
              <center><input type="text" class="form-control mt-3 w-50 no-bord text-center" v-model="title2"></center>
              <center><input type="text" class="form-control mt-3 w-50 no-bord text-center" v-model="study_no" placeholder="Study No."></center>
              <center><input type="text" class="form-control mt-3 w-50 no-bord text-center" v-model="study_code" placeholder="Study Code"></center>
              <h6 class="text-center mt-3">STUDY DIRECTOR</h6>
              <center><input type="text" class="form-control mt-3 w-50 no-bord text-center" v-model="study_dir"></center>
              <h6 class="text-center mt-3">SPONSOR</h6>
              <center><textarea class="form-control mt-3 w-50 no-bord text-center" v-model="sponser"></textarea></center>
              <h6 class="text-center mt-3">TEST FACILITY</h6>
              <p class="text-center mt-3">LIVEON BIOLABS PRIVATE LIMITED<br>
                                          PLOT NO. 46 & 47, II PHASE, WATER TANK ROAD<br>
                                          KIADB INDUSTRIAL AREA, ANTHARASANAHALLI<br>
                                          TUMAKURU-572106, KARNATAKA,<br>
                                          INDIA</p>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true">     
                  <span class="title">1. OBJECTIVE&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseOne" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2 mb-3">
                      The objective of this toxicity study was to assess the potential <input type="text" class="form-control no-bord d-inline w-50" v-model="obj" placeholder="Test Item Name"> by injecting both polar extract and non-polar extract as a single intradermal injection to evaluate the possibility of hyperreactive skin (visible reactions i.e. erythema/oedema) followed by topical induction (erythema/oedema) and challenge Phase for skin reaction (erythema) in guinea pigs. This test also provides information on health hazards likely to be arise from acute exposure by the intended clinical route in humans.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true">     
                  <span class="title">2. STUDY DETAILS&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwo" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">  
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td>Study Title</td>
                            <td><input type="text" class="form-control no-bord" v-model="study_title1"></td>
                          </tr>
                          <tr>
                            <td>Study Number</td>
                            <td><input type="text" class="form-control no-bord" v-model="study_no1"></td>
                          </tr>
                          <tr>
                            <td>Study Code</td>
                            <td><input type="text" class="form-control no-bord" v-model="study_code1"></td>
                          </tr>
                          <tr>
                            <td>ULR No.</td>
                            <td><input type="text" class="form-control no-bord" v-model="ulr_no1"></td>
                          </tr>
                          <tr>
                            <td>Sponsor</td>
                            <td><input type="text" class="form-control no-bord" v-model="sponsor1"></td>
                          </tr>
                          <tr>
                            <td>Test Facility</td>
                            <td>LIVEON BIOLABS PRIVATE LIMITED Plot No. 46 & 47, II Phase, Water Tank Road, KIADB Industrial Area, Antharasanahalli, Tumakuru – 572106, Karnataka, India.</td>
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
                <div class="card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true">     
                  <span class="title">3. STUDY RESPONSIBILITIES&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseThree" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td>Study Director</td>
                            <td><input type="text" class="form-control no-bord" v-model="study_director1"></td>
                          </tr>
                          <tr>
                            <td>Study Veterinarian</td>
                            <td><input type="text" class="form-control no-bord" v-model="study_vet1"></td>
                          </tr>
                          <tr>
                            <td>Sponsor Representative</td>
                            <td><input type="text" class="form-control no-bord" v-model="sponsor_rep1"></td>
                          </tr>
                          <tr>
                            <td>Monitoring Scientist</td>
                            <td><input type="text" class="form-control no-bord" v-model="monitor1"></td>
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
                <div class="card-header" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true">     
                  <span class="title">4. STUDY SCHEDULE&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseFour" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td>Study Initiation Date</td>
                            <td><input type="text" class="form-control no-bord" v-model="study_start_date"></td>
                          </tr>
                          <tr>
                            <td>Experiment Start Date</td>
                            <td><input type="text" class="form-control no-bord" v-model="exp_start_date"></td>
                          </tr>
                          <tr>
                            <td>Acclimatization Period</td>
                            <td><input type="text" class="form-control no-bord" v-model="acc"></td>
                          </tr>
                          <tr>
                            <td>Treatment Start Date</td>
                            <td><input type="text" class="form-control no-bord" v-model="treat_start_date"></td>
                          </tr>
                          <tr>
                            <td>Experiment End Date</td>
                            <td><input type="text" class="form-control no-bord" v-model="exp_end_date"></td>
                          </tr>
                          <tr>
                            <td>Draft Report to Sponsor</td>
                            <td><input type="text" class="form-control no-bord" v-model="draft_rep"></td>
                          </tr>
                          <tr>
                            <td>Study Completion Date</td>
                            <td><input type="text" class="form-control no-bord" v-model="study_end_date"></td>
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
                  <span class="title">5. ABBREVIATIONS AND SYMBOLS&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseFive" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short1"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full1"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short2"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full2"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short3"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full3"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short4"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full4"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short5"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full5"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short6"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full6"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short7"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full7"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short8"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full8"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short9"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full9"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short10"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full10"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short11"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full11"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short12"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full12"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short13"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full13"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short14"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full14"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short15"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full15"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short16"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full16"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short17"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full17"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short18"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full18"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short19"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full19"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short20"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full20"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short21"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full21"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="short22"></td>
                            <td><input type="text" class="form-control no-bord" v-model="full22"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p class="mt-2 mb-3"><b>Note:</b> The additional Abbreviations and symbols (if any) will be provided in the Study Report</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true">     
                  <span class="title">6. QUALITY ASSURANCE UNIT RESPONSIBILITIES&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseSix" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2 mb-3">
                      <p>The Quality Assurance Unit of Liveon Biolabs Private Limited will inspect at different phases of the study to review the draft study plan, final study plan, raw data, draft study report and final study report to assure the integrity of study in compliance with ISO/IEC 17025:2017 and in compliance with OECD Principles of GLP for testing of chemicals as specified by international [(C (97)186/Final] legislation. Findings of all the inspections during the study will be recorded and reported to the Study Director and Test Facility Management. A statement of Quality Assurance will be provided in the Study Report.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true">     
                  <span class="title">7. STUDY COMPLIANCE&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseSeven" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">  
                    <div class="col-12 mt-2 mb-3">
                      <p>This study will be performed in compliance with the following:
                        <li>ISO/IEC 17025:2017, General Requirements for the Competence of Testing and Calibration Laboratories.</li>
                        <li>OECD Principles of GLP for testing of chemicals as specified by international [(C (97)186/Final] legislation.</li>
                        <li>The Standard Operating Procedures of Test Facility and the mutually agreed Study Plan.</li>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseEight" aria-expanded="true">     
                  <span class="title">8. STUDY GUIDELINES&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseEight" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2 mb-3">
                      <p>The design of this study is based on the study objective and procedures as detailed in the study plan, the overall product development strategy for the test item and the below mentioned guidelines in principles as applicable:
                        <li>ISO 10993-10:2021 - Biological Evaluation of Medical Devices-Part 10: Tests for Skin Sensitization.</li>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseNine" aria-expanded="true">     
                  <span class="title">9. IAEC APPROVAL&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseNine" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2 mb-3">
                      <p>The use of animals for this study has been approved by Liveon Biolabs Private Limited IAEC. IAEC approved Protocol No.: <input type="text" class="form-control no-bord w-25 text-left d-inline" v-model="iaec_no">. Any significant changes to this study plan will be intimated to IAEC and approvals will be sought subsequently if required.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTen" aria-expanded="true">     
                  <span class="title">10. ANIMAL WELFARE AND VETERINARY CARE&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTen" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>Liveon Biolabs Private Limited is an AAALAC international accredited facility and registered with CPCSEA Department of Animal Husbandry and Dairying (DAHD), Ministry of Fisheries, Animal Husbandry and Dairying (MoFAH&D), Government of India. Also, Liveon Biolabs Pvt. Ltd. ensures that experiment/s on animals are performed in accordance with the recommendation of the guidelines for laboratory animal facility 2021.</p>
                    <p>During study if any animal gets injured, ill or moribund, care will be taken as per the current veterinary practices. If required, for human reasons animals will be euthanized as per the standard procedures. The objective of the study will be considered before any decision and event of any unlikely situations will be intimated to the sponsor.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="true">     
                  <span class="title">11. AMENDMENT AND DEVIATION PROCEDURES&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseEleven" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>This Study Plan may be amended or subjected to alterations. The amendment to the approved Study Plan will be put in writing and realized only after written consent from the Study Sponsor. If immediate action is necessary, verbal agreement with the Sponsor will be confirmed as soon as possible by Study Plan Amendment.</p>
                    <p>Any unintended change(s) to the Study Plan will be documented in the raw data and mentioned in the report as deviation(s).</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="true">     
                  <span class="title">12. SAFETY PRECAUTIONS&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwelve" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>The personnel involved in study conduct will be wearing all necessary personnel protective equipment like gloves, head cap and face mask in addition to protective body garments and slippers/shoes to ensure adequate personnel health and safety and to avoid inhalation and skin contact with the test item.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseThirteen" aria-expanded="true">     
                  <span class="title">13. MATERIALS AND METHODS&nbsp;&nbsp; | 13.1 Materials&nbsp;&nbsp; | 13.1.1 Test Item Information&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseThirteen" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>The Test Item Information provided by the sponsor to LBPL is furnished below:</p>
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td>Name of Test Item</td>
                            <td><input type="text" class="form-control no-bord" v-model="item_name"></td>
                          </tr>
                          <tr>
                            <td>Test Item Code by Test Facility</td>
                            <td><input type="text" class="form-control no-bord" v-model="item_code"></td>
                          </tr>
                          <tr>
                            <td>Test Item Code by Sponsor</td>
                            <td><input type="text" class="form-control no-bord" v-model="item_code1"></td>
                          </tr>
                          <tr>
                            <td>Intended use of device in Human</td>
                            <td><input type="text" class="form-control no-bord" v-model="intended_use"></td>
                          </tr>
                          <tr>
                            <td>Site of Contact in Human Body</td>
                            <td><input type="text" class="form-control no-bord" v-model="contact_site"></td>
                          </tr>
                          <tr>
                            <td>Duration of contact with Human body</td>
                            <td><input type="text" class="form-control no-bord" v-model="duration"></td>
                          </tr>
                          <tr>
                            <td>Material Category (As per ISO 10993 Part 1)</td>
                            <td><input type="text" class="form-control no-bord" v-model="material"></td>
                          </tr>
                          <tr>
                            <td>Weight in g (without packing)</td>
                            <td><input type="text" class="form-control no-bord" v-model="weight"></td>
                          </tr>
                          <tr>
                            <td>Storage Condition</td>
                            <td><input type="text" class="form-control no-bord" v-model="storage_cond"></td>
                          </tr>
                          <tr>
                            <td>Batch No. / Lot No.</td>
                            <td>
                              <select type="text" class="form-control no-bord" v-model="batch_no">
                                <option value="">Select</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>Date of Mfg.:</td>
                            <td>
                              <select type="text" class="form-control no-bord" v-model="mfg_date">
                                <option value="">Select</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>Date of Exp.:</td>
                            <td>
                              <select type="text" class="form-control no-bord" v-model="exp_date">
                                <option value="">Select</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>Sterility Status</td>
                            <td><input type="text" class="form-control no-bord" v-model="sterility"></td>
                          </tr>
                          <tr>
                            <td>Test Item Manufactured by</td>
                            <td><input type="text" class="form-control no-bord" v-model="mfg_by"></td>
                          </tr>
                          <tr>
                            <td>Test Item Supplied by</td>
                            <td><input type="text" class="form-control no-bord" v-model="supplied_by"></td>
                          </tr>
                          <tr>
                            <td>Others</td>
                            <td><input type="text" class="form-control no-bord" v-model="others"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>The Sponsor is responsible for authenticity of the test item and no further characterization of test item will be performed at LBPL. The test item details mentioned are as per the TIIS provided by the sponsor. The TIIS is included in the Annexure <input type="text" class="form-control d-inline no-bord w-25" v-model="anex_1"></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseFourteen" aria-expanded="true">     
                  <span class="title">13.1.2 Test System&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseFourteen" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td>Animal Species</td>
                            <td>Guinea Pig (Cavia porcellus)</td>
                          </tr>
                          <tr>
                            <td>Strain</td>
                            <td>Dunkin Hartley</td>
                          </tr>
                          <tr>
                            <td>Justification for Selection of Species</td>
                            <td>The Guinea pig has been the animal of choice for predictive sensitization tests for several decades and also as per ISO <input type="text" class="form-control d-inline no-bord w-25" v-model="iso_1"> specification.</td>
                          </tr>
                          <tr>
                            <td>Source</td>
                            <td><input type="text" class="form-control no-bord" v-model="source"></td>
                          </tr>
                          <tr>
                            <td>Age at treatment</td>
                            <td><input type="text" class="form-control no-bord" v-model="age"></td>
                          </tr>
                          <tr>
                            <td>No. of Groups</td>
                            <td><input type="text" class="form-control no-bord" v-model="no_groups"></td>
                          </tr>
                          <tr>
                            <td>Total No. of Animals</td>
                            <td><input type="text" class="form-control no-bord" v-model="no_animals"></td>
                          </tr>
                          <tr>
                            <td>Body weight range at treatment</td>
                            <td>
                              <input type="text" class="form-control no-bord" v-model="weight_range"><br>
                              At the commencement of treatment, the weight variation of guinea pig used will not exceed ± 20% of the mean body weight.
                            </td>
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
                  <span class="title">13.1.3 Test System Management | 13.1.3.1 Animal Room Preparation&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseFifteen" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>Prior to housing the animals, the experimental room will be decontaminated by fumigation and microbial load will be checked by settle plate method. The experimental room floor will be mopped daily once.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseSixteen" aria-expanded="true">     
                  <span class="title">13.1.3.2 Husbandry Conditions&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseSixteen" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>Animals will be housed in an environment-controlled room at temperature of <input type="text" class="form-control no-bord d-inline w-25 text-left" v-model="temp">. The photoperiod will be 12 hours fluorescent light and 12 hours darkness. Adequate fresh air supply of 12 - 15 air cycles/hour and sound level of less than 80 dB will be maintained in the experimental room.</p>
                    <p>The relative humidity, maximum and minimum temperature in the experimental room will be recorded once daily and will be included in the Study Report and Study file.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseSeventeen" aria-expanded="true">     
                  <span class="title">13.1.3.3 Housing&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseSeventeen" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>Individual animal will be housed in a standard polycarbonate cages (<input type="text" class="form-control no-bord d-inline w-25 text-left" v-model="cage_size">) with stainless steel mesh top, food will be provided in feed hoppers and drinking water with stainless sipping tubes. Clean sterilized corn cob will be provided as bedding material.</p>
                    <p>Based on the latest analytical certificate/s available, there are no known contaminants in the bedding that are expected to interfere with the results of this study. The analysis reports will be included in the Study Report.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseEighteen" aria-expanded="true">     
                  <span class="title">13.1.3.4 Diet and Water&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseEighteen" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>AF - 1000M Guinea pigs Diets manufactured by <input type="text" class="form-control d-inline no-bord w-25" v-model="mfg_by_name"> will be provided ad <i>libitum</i> to Guinea pigs or others to specify in the report. </p>
                    <p>Deep bore-well water subjected to filtration by reverse osmosis and UV sterilized, will be provided ad <i>libitum</i> to guinea pigs in polycarbonate bottles with rubber corked stainless steel sipper tubes and Vitamin C Supplement will be provided by mixing with water.</p>
                    <p>Based on the latest analytical certificate/s available, there are no known contaminants in the food and water that are expected to interfere with the results of this study. The analysis reports will be included in the Study Report.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseNineteen" aria-expanded="true">     
                  <span class="title">13.1.4 Test System Preparation | 13.1.4.1 Acclimatization&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseNineteen" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>After examination for good health and the suitability for the study, the guinea pigs will be acclimatized at least for 5 days before start of the treatment. During acclimatization animals will be observed at least once daily. Veterinary examination will be performed before selecting animals for the study.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwenty" aria-expanded="true">     
                  <span class="title">13.1.4.2 Animal Identification&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwenty" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>During acclimatization period (Temporary identification), each animal will be identified by ear marking with animal number written on the ear lobe using inedible marker pen. The cages will be identified with cage cards indicating study number, study code, species, strain, sex, acclimatization start and acclimatization end date etc.</p>
                    <p>During treatment period (Permanent identification), each animal will be identified by body marking using 1 % turmeric solution. The cages will be identified with cage cards indicating study number, animal accession number, study code, species, strain, sex, treatment start date and experiment end date etc.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwentyOne" aria-expanded="true">     
                  <span class="title">13.1.4.3 Randomization and Grouping&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwentyOne" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>The animals for the experiment will be weighed and arranged in ascending order of their body weights. Animals will be randomized using body weight stratification method of randomization and are grouped accordingly such that the mean body weight will not vary ± 20 percent among the groups on the Day 1 of administration. Guinea pig with extreme body weights and/or not selected for the treatment will be excluded. Grouping will be done during the acclimatization period.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwentyTwo" aria-expanded="true">     
                  <span class="title">13.1.4.4 Clipping of Animals&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwentyTwo" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2 mb-3">
                      <p>For induction phase, the fur of the animals will be closely clipped approximately 24 hrs before the treatment from shoulder region (at least an area of 3 cm x 5 cm). For challenge/re-challenge phase, the fur will be closely clipped from the required flank region [approximately 80 sq cm (8 cm x 10 cm)] approximately 24 hrs before treatment. In both the cases care will be taken to avoid abrasion on the skin. If required, the fur will be re-clipped to facilitate observation or to accommodate repeated exposure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwentyThree" aria-expanded="true">     
                  <span class="title">13.2 Methods | 13.2.1 Experimental Procedures | 13.2.1.1 Study Design&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwentyThree" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>The following study design will be adopted for the study:</p>
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th rowspan="2">Group</th>
                            <th rowspan="2">Treatment Description</th>
                            <th rowspan="2">Color of Cage Cards</th>
                            <th rowspan="2">No. of Animals and Sex</th>
                            <th colspan="2">Animal Accession No.</th>
                          </tr>
                          <tr>
                            <th>From</th>
                            <th>To</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="group"></td>
                            <td><input type="text" class="form-control no-bord" v-model="desc"></td>
                            <td><input type="text" class="form-control no-bord" v-model="cage_color"></td>
                            <td><input type="text" class="form-control no-bord" v-model="animal_nos"></td>
                            <td><input type="text" class="form-control no-bord" v-model="from"></td>
                            <td><input type="text" class="form-control no-bord" v-model="to"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="group"></td>
                            <td><input type="text" class="form-control no-bord" v-model="desc"></td>
                            <td><input type="text" class="form-control no-bord" v-model="cage_color"></td>
                            <td><input type="text" class="form-control no-bord" v-model="animal_nos"></td>
                            <td><input type="text" class="form-control no-bord" v-model="from"></td>
                            <td><input type="text" class="form-control no-bord" v-model="to"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="group"></td>
                            <td><input type="text" class="form-control no-bord" v-model="desc"></td>
                            <td><input type="text" class="form-control no-bord" v-model="cage_color"></td>
                            <td><input type="text" class="form-control no-bord" v-model="animal_nos"></td>
                            <td><input type="text" class="form-control no-bord" v-model="from"></td>
                            <td><input type="text" class="form-control no-bord" v-model="to"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="group"></td>
                            <td><input type="text" class="form-control no-bord" v-model="desc"></td>
                            <td><input type="text" class="form-control no-bord" v-model="cage_color"></td>
                            <td><input type="text" class="form-control no-bord" v-model="animal_nos"></td>
                            <td><input type="text" class="form-control no-bord" v-model="from"></td>
                            <td><input type="text" class="form-control no-bord" v-model="to"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p><b>Note:</b> a: Polar groups; b: Non-polar groups; M: Male, F: Female</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwentyFour" aria-expanded="true">     
                  <span class="title">13.2.1.2 Selection and Justification for the Choice of Extraction Medium&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwentyFour" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>The commercially available 0.9% w/v sodium chloride for injection (Normal saline) for polar test item extraction and sesame oil for non-polar test item extraction and respective polar and non-polar vehicle control are selected as per the guideline ISO 10993 “Biological Evaluation of Medical Devices”, Part 12 (Sample preparation and reference materials).</p>
                    <p>The details of polar and non-polar vehicles used will be recorded in the raw data and presented in the study report.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwentyFive" aria-expanded="true">     
                  <span class="title">13.2.1.3 Positive Control Response Validation&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwentyFive" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">  
                    <p>The results of latest positive control response validation study will be presented in study report as an Annexure.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwentySix" aria-expanded="true">     
                  <span class="title">13.3 Test Procedure | 13.3.1 Preparation of Test Item Extract&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwentySix" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2 mb-3">
                      <textarea class="form-control no-bord text-left" rows="4" v-model="test_extract"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwentySeven" aria-expanded="true">     
                  <span class="title">13.4 Treatment | 13.4.1 Intradermal Induction Phase&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwentySeven" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p class="font-weight-bold">Preparation of Polar Vehicle Control (Group G1a)</p>
                    <div class="col-12 mb-3">
                      <li>Site ‘A’ will be injected intradermally with 0.1 mL of 1:1 mixture (v/v) of       
                      FCA in physiological saline.</li>
                      <li>Site ‘B’ will be injected intradermally with 0.1 mL of polar Vehicle Control.</li>
                      <li>Site ‘C’ will be injected intradermally with 0.1 mL of 50 % v/v polar Vehicle 
                      Control in 1:1 mixture (v/v) of FCA in physiological saline.</li>
                    </div>
                    <p class="font-weight-bold">Preparation of Non-Polar Vehicle Control (Group G1b)</p>
                    <div class="col-12 mb-3">
                      <li>Site ‘A’ will be injected intradermally with 0.1 mL of 1:1 mixture (v/v) of FCA 
                      in physiological saline.</li>
                      <li>Site ‘B’ will be injected intradermally with 0.1 mL of non-polar Vehicle 
                      Control.</li>
                      <li>Site ‘C’ will be injected intradermally with 0.1 mL of 50 % v/v non-polar 
                      Vehicle Control in 1:1 mixture (v/v) of FCA in physiological saline.</li>
                    </div>
                    <p class="font-weight-bold">Preparation of Polar Test Item Extract (Group G2a)</p>
                    <div class="col-12 mb-3">
                      <li>Site ‘A’ will be injected intradermally with 0.1 mL of 1:1 mixture (v/v) of FCA 
                      in physiological saline.</li>
                      <li>Site ‘B’ will be injected intradermally with 0.1 mL of undiluted polar test item 
                      extract.</li>
                      <li>Site ‘C’ will be injected intradermally with 0.1 mL of 50 % v/v undiluted polar 
                      test item extract in 1:1 mixture (v/v) of FCA in physiological saline.</li>
                    </div>
                    <p class="font-weight-bold">Preparation of Non-Polar Test Item Extract (Group G2b)</p>
                    <div class="col-12 mb-3">
                      <li>Site ‘A’ will be injected intradermally with 0.1 mL of 1:1 mixture (v/v) of FCA 
                      in physiological saline.</li>
                      <li>Site ‘B’ will be injected intradermally with 0.1 mL of undiluted non-polar test   
                      item extract.</li>
                      <li>Site ‘C’ will be injected intradermally with 0.1 mL of 50 % v/v undiluted non-
                      polar test item extract in 1:1 mixture (v/v) of FCA in physiological saline.</li>
                    </div>
                    <p class="font-weight-bold">Administration</p>
                    <p>The animals of control groups (G1a and G1b) and test groups (G2a and G2b) will be injected with polar and non-polar test item extracts and polar and non-polar vehicle control, respectively. The animals will be injected at the shoulder region with 0.1 mL per injection of 3 pairs of intradermal injections. Injections 1 and 2 will be given near the head region at least 1 cm apart and injection 3 will be given 2 cm apart towards caudal part of the body as per Annexure <input type="text" class="form-control d-inline no-bord w-25" v-model="anex_2"></p>
                    <p>Site A: 1st pair of injection<br>Site B: 2nd pair of injection<br>Site C: 3rd pair of injection</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwentyEight" aria-expanded="true">     
                  <span class="title">13.4.2 Topical Induction Phase&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwentyEight" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>On day 7 ± 1 i.e., after completion of the Intradermal Induction phase, irritation of the treated area will be observed for erythema and Oedema. If the irritation is not produced/observed on skin over the injection sites (i.e., same area of Intradermal Induction Phase) and that sites will be massaged with 10% (w/w) SDS in petroleum jelly to provoke a mild acute inflammation (discoloration of injection site). After 24 ± 2 hrs of SDS application, any remaining SDS residue will be gently removed with cotton. If any irritation is observed (erythema and Oedema) after 7 ± 1 day, SDS will not be applied.</p>
                    <div class="col-12 mt-2 mb-3">
                      <textarea class="form-control no-bord text-left" rows="4" v-model="induction"></textarea>
                    </div>
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td>G1a</td>
                            <td><input type="text" class="form-control no-bord" v-model="g1a"></td>
                          </tr>
                          <tr>
                            <td>G2a</td>
                            <td><input type="text" class="form-control no-bord" v-model="g2a"></td>
                          </tr>
                          <tr>
                            <td>G1b</td>
                            <td><input type="text" class="form-control no-bord" v-model="g1b"></td>
                          </tr>
                          <tr>
                            <td>G2b</td>
                            <td><input type="text" class="form-control no-bord" v-model="g2b"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>Remove the semi-occlusive dressing and patches after 48 ± 2 hrs of application. </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwentyNine" aria-expanded="true">     
                  <span class="title">13.4.3 Challenge Phase&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwentyNine" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>On Day 14 ± 1 after completion of the topical induction phase (i.e., Day 21), fur from both anterior flank region, which is not treated during the induction phase will be clipped from all the animals.</p>
                    <div class="col-12 mt-2 mb-3">
                      <textarea class="form-control no-bord text-left" rows="4" v-model="challenge_phase"></textarea>
                    </div>
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td rowspan="2"><input type="text" class="form-control no-bord" v-model="g1a_head"></td>
                            <td><input type="text" class="form-control no-bord" v-model="g1a_right"></td>
                            <td><input type="text" class="form-control no-bord" v-model="g1a_polar"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="g1a_left"></td>
                            <td><input type="text" class="form-control no-bord" v-model="g1a_nonpolar"></td>
                          </tr>
                          <tr>
                            <td rowspan="2"><input type="text" class="form-control no-bord" v-model="g2a_head"></td>
                            <td><input type="text" class="form-control no-bord" v-model="g2a_right"></td>
                            <td><input type="text" class="form-control no-bord" v-model="g2a_polar"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="g2a_left"></td>
                            <td><input type="text" class="form-control no-bord" v-model="g2a_nonpolar"></td>
                          </tr>
                          <tr>
                            <td rowspan="2"><input type="text" class="form-control no-bord" v-model="g1b_head"></td>
                            <td><input type="text" class="form-control no-bord" v-model="g1b_right"></td>
                            <td><input type="text" class="form-control no-bord" v-model="g1b_polar"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="g1b_left"></td>
                            <td><input type="text" class="form-control no-bord" v-model="g1b_nonpolar"></td>
                          </tr>
                          <tr>
                            <td rowspan="2"><input type="text" class="form-control no-bord" v-model="g2b_head"></td>
                            <td><input type="text" class="form-control no-bord" v-model="g2b_right"></td>
                            <td><input type="text" class="form-control no-bord" v-model="g2b_polar"></td>
                          </tr>
                          <tr>
                            <td><input type="text" class="form-control no-bord" v-model="g2b_left"></td>
                            <td><input type="text" class="form-control no-bord" v-model="g2b_nonpolar"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>Remove the semi-occlusive dressing and patches after 24 ± 2 hrs of application.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseThirty" aria-expanded="true">     
                  <span class="title">13.4.4 Re-challenge Phase&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseThirty" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>If the response is equivocal, re-challenge will be recommended to confirm the results from the first challenge. The outcome of the test will be presented as the frequency of positive challenge results in treatment and Vehicle Control animals.</p>
                    <p>Re-challenge will be done to confirm the results of first challenge under following conditions:
                      <li>The scores of Vehicle Control animals are greater than one.</li>
                      <li>Greater number of animals shows response, but intensity of the reaction is not greater than Vehicle Control group.</li>
                    </p>
                    <p>The second challenge (i.e., a re-challenge), will be done one week after the first challenge. The posterior part of both flank region of the animal which is not treated previously during the induction or challenge phase will be used for the re-challenge. The test patches will be applied in a similar way as that of the first challenge.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseThirtyOne" aria-expanded="true">     
                  <span class="title">14. OBSERVATIONS | 14.1 Body Weight &nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseThirtyOne" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>Individual animal body weight will be measured on the first day of acclimatization (at receipt), prior to initiation of the treatment (Day 1) and at termination of the study.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseThirtyTwo" aria-expanded="true">     
                  <span class="title">14.2 Mortality, Morbidity and Clinical Signs&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseThirtyTwo" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>Animals will be observed twice daily for mortality, morbidity and at least once daily for clinical signs throughout the observation period. Based on clinical signs the animals will be observed once for morbidity and mortality during weekends and holidays.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseThirtyThree" aria-expanded="true">     
                  <span class="title">14.3 Grading of Skin Reactions | 14.3.1 Induction Phase (Intradermal and Topical Application)&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseThirtyThree" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>The skin reactions will be observed of the control and test animals at (24 ± 2) hrs, (48 ± 2) hrs, after the intradermal administration.</p>
                    <p>The skin reactions will be observed of the control and test animals at (1± 0.5) hrs, and (24± 2) hours, post removal of dressing after induction (topical application). The skin reactions for erythema and Oedema will be observed and recorded according to Draize method as per Annexure <input type="text" class="form-control d-inline no-bord w-25" v-model="anex_3"></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseThirtyFour" aria-expanded="true">     
                  <span class="title">14.3.2 Challenge phase&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseThirtyFour" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>The skin reactions will be observed of the test and control animals at (24 ± 2) hrs. (48 ± 2) hrs. After removal of dressing in the challenge/re-challenge phase. The skin reactions for erythema will be observed and recorded according to Magnusson and Kligman grading as per Annexure <input type="text" class="form-control d-inline no-bord w-25" v-model="anex_4"></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseThirtyFive" aria-expanded="true">     
                  <span class="title">15. EVALUATION CRITERIA&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseThirtyFive" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>
                      The following criteria will be used for the evaluation of results.
                      <li>The skin reactions for erythema and Oedema will be observed and recorded according to grading. If the Magnusson and Kligman grades of test group animals are 1 or greater compared to respective Vehicle Control group animals, it indicates sensitization due to test sample.</li>
                      <li>If grades of control group animals are 1 or greater compared to test item group animals, it indicates sensitization due to Vehicle Control samples.</li>
                      <li>If the response is equivocal, re-challenge will be done to confirm the results from the first challenge.</li>
                      <li>If the test group animals have a greater number of animals showing a response than the controls, although the intensity of the reaction is not greater than that exhibited by the respective Vehicle Control, a re-challenge will be carried out to define the response clearly. It will be carried out 1 week to 2 weeks after the first challenge.</li>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseThirtySix" aria-expanded="true">     
                  <span class="title">16. ANIMAL EUTHANASIA AND DISPOSAL&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseThirtySix" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2 mb-3">
                      <p>After the completion of the experiment, the animals will be sacrificed using carbon dioxide asphyxiation and the carcasses will be sent to disposal.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseThirtySeven" aria-expanded="true">     
                  <span class="title">17. DATA COMPILATION&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseThirtySeven" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>All individual animal data will be presented in Appendices and/or summarized and presented in Tables. All findings will be presented in the Study report as per the standard reporting format.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseThirtyEight" aria-expanded="true">     
                  <span class="title">18. STUDY REPORT&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseThirtyEight" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>The Final Study Report will include but not limited to the following information, as appropriate:
                      <li>The descriptive study title.</li>
                      <li>The name and address of the Sponsor and the Test Facility along with the Study Schedule.</li>
                      <li>List of Scientists/Professionals.</li>
                      <li>The test item and its code, composition nd other appropriate characteristics and vehicle with identification by name.</li>
                      <li>Vehicle: Justification for the choice of vehicle.</li>
                      <li>A description of the test Guinea pigs, including species, strain, source, number, sex, age at start of the treatment, body weight range, housing conditions, and method of identification.</li>
                      <li>Test conditions:<br>1.Details of food, bedding and water analysis reports</li>
                      <li>Descriptions of the dose volume, dose regimen, route of administration, extract preparations, and duration of the treatment period.</li>
                      <li>Observation and Results: Tabulation of response data and dose level for each animal (i.e., tables clinical signs and mortality, Guinea Pigs showing signs of toxicity (if any) including skin reactions, nature, severity and duration of effects)</li>
                      <li>Individual weights of Guinea Pigs</li>
                      <li>Pathology data (if done).</li>
                      <li>Conclusion</li>
                      <li>A description of all circumstances if any, that may have affected the quality or integrity of the study.</li>
                      <li>The Quality Assurance Statement signed by Quality Assurance Unit.</li>
                      <li>The storage location of all raw data, the study plan, the report, a sample of test item and the archiving period.</li>
                      <li>Statement of study compliance</li>
                      <li>Statement of confidentiality</li>
                      <li>Statement of test facility management</li>
                      <li>AAALAC Certificate.</li>
                      <li>A copy of the final signed study plan and any amendments if any as an annexure.</li>
                    </p>
                    <p><b>Note:</b> If response from sponsor for finalization of draft report is not received within six months after sending draft report in spite of repeated reminders, management could approve termination of study, or finalization of report and archiving. In such an event, any subsequent requests from sponsor for modification, correction or addition to the final report will be subject to report amendment at additional cost.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseThirtyNine" aria-expanded="true">     
                  <span class="title">19. STUDY PLAN DISTRIBUTION&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseThirtyNine" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2 mb-3">
                      <p>The Final Study Plan will be distributed as follows:<br> 
                        a) Copy No. 1/2 – Sponsor
                        b) Copy No. 2/2 – Archives, Liveon Biolabs Private Limited.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseForty" aria-expanded="true">     
                  <span class="title">20. STUDY REPORT DISTRIBUTION&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseForty" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2 mb-3">
                      <p>The Final Study Plan will be distributed as follows:<br> 
                        a) Copy No. 1/2 – Sponsor
                        b) Copy No. 2/2 – Archives, Liveon Biolabs Private Limited.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseFortyOne" aria-expanded="true">     
                  <span class="title">21. ARCHIVING&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseFortyOne" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2 mb-3">
                      <p>All study-related records, study plan, raw data, final report, Amendment and Deviation (if any) and the test item sample will be maintained in the archives of Liveon Biolabs Private Limited for <input type="text" class="form-control d-inline no-bord w-25" v-model="archive_1"> years from the date of study completion. All the records and test item will be handled according to OECD Principles of GLP for testing of chemicals as specified by international <input type="text" class="form-control d-inline no-bord w-25" v-model="archive_2"> legislation. After the completion of archiving period, the test facility management will coordinate with the sponsor for further course of action on archived material.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseFortyTwo" aria-expanded="true">     
                  <span class="title">22. REFERENCES&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseFortyTwo" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2 mb-3">
                      <p>
                        <li>ISO 10993-1:2018: Biological evaluation of medical devices-Part-1: Evaluation and testing within a risk management process.</li>
                        <li>ISO 10993-2:2006: Biological evaluation of medical devices-Part 2: Animal welfare requirements.</li>
                        <li>OECD Principles of GLP for testing of chemicals as specified by international [(C (97)186/Final] legislation.</li>
                        <li>ISO 10993-10:2021: Biological evaluation of medical devices-Part 10: Tests for Skin Sensitization.</li>
                        <li>ISO 10993-12:2021: Biological evaluation of medical devices-Part 12: Sample preparation and reference materials.</li>
                        <li>OECD 406: Skin Sensitization, Adopted by the Council on 17th July 1992, OECD Guidelines for Testing of Chemicals.</li>
                        <li>ISO/IEC 17025:2017, General Requirements for the Competence of Testing and Calibration Laboratories.</li>
                        <li>The Standard Operating Procedures (SOPs) of Test Facility and the mutually agreed Study Plan.</li>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseFortyThree" aria-expanded="true">     
                  <span class="title">23. STUDY PLAN APPROVAL&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseFortyThree" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">  
                    <p>The Study Plan for the Study No.: ‘<input type="text" class="form-control no-bord d-inline w-25" v-model="study_no2">’ has been agreed by the Sponsor through E-mail on <input type="text" class="form-control d-inline no-bord w-25" v-model="date_app"> and approved by the Study Director.</p>
                    <p class="font-weight-bold">For LIVEON BIOLABS PRIVATE LIMITED (Test Facility):</p>
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered text-center">
                        <tbody>
                          <tr>
                            <td>
                              <center><input type="text" class="form-control no-bord w-50 text-center" v-model="study_dir1"></center>
                              <b>Study Director</b>
                            </td>
                            <td>
                              <center><input type="text" class="form-control no-bord w-50" v-model="sign1"></center>
                              (Sign. & Date)
                            </td>
                          </tr>
                          <tr>
                            <th>Quality Assurance Unit</th>
                            <td>
                              <center><input type="text" class="form-control no-bord w-50" v-model="sign2"></center>
                              (Sign. & Date)
                            </td>
                          </tr>
                          <tr>
                            <th>Test Facility Management</th>
                            <td>
                              <center><input type="text" class="form-control no-bord w-50" v-model="sign3"></center>
                              (Sign. & Date)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p class="font-weight-bold">For <input type="text" class="form-control no-bord d-inline w-25" v-model="sponsor_name"> (Sponsor):</p>
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered text-center">
                        <tbody>
                          <tr>
                            <td>
                              <center><input type="text" class="form-control no-bord w-50 text-center" v-model="spons_rep"></center>
                              <b>Sponsor Representative</b>
                            </td>
                            <td>
                              <center><input type="text" class="form-control no-bord w-50" v-model="sign4"></center>
                              (Sign. & Date)
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <center><input type="text" class="form-control no-bord w-50 text-center" v-model="monitor_sci"></center>
                              <b>Monitoring Scientist</b>
                            </td>
                            <td>
                              <center><input type="text" class="form-control no-bord w-50" v-model="sign5"></center>
                              (Sign. & Date)
                            </td>
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
                <div class="card-header" data-toggle="collapse" data-target="#collapseFortyFour" aria-expanded="true">     
                  <span class="title">Annexure 1. Standard Surface Areas and Extract Liquid Volumes&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseFortyFour" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2 mb-3 text-center">
                      <img src="../../assets/draft_img1.png">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseFortyFive" aria-expanded="true">     
                  <span class="title">Annexure 2. Intradermal Injection and Topical Patch Application Sites Diagram&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseFortyFive" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-6 mt-2 mb-3 text-center">
                      <img src="../../assets/draft_img2.png">
                    </div>
                    <div class="col-6 mt-5 mb-3 text-left">
                      <table class="table table-bordered text-center">
                        <tbody>
                          <tr>
                            <td>
                              <b>Treatment Animals</b><br>A: 1:1 v/v of FCA + Physiological saline<br>B: Undiluted test item extract<br>C: 1:1 v/v of A + B
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-6 mt-2 mb-3 text-center">
                      <img src="../../assets/draft_img3.png">
                    </div>
                    <div class="col-6 mt-5 mb-3 text-left">
                      <table class="table table-bordered text-center">
                        <tbody>
                          <tr>
                            <td>
                              <b>Control Animals</b><br>A: 1:1 v/v of FCA + Physiological saline<br>B: Solvent only<br>C: 1:1 v/v of A + B
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-6 mt-2 mb-3 text-left">
                      <table class="table table-bordered text-center">
                        <tbody>
                          <tr>
                            <td>
                              1. Cranial End<br>2. Intradermal Injection Sites<br>3. Clipped Intrascapular Region<br>4. Caudal End
                            </td>
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
                <div class="card-header" data-toggle="collapse" data-target="#collapseFortySix" aria-expanded="true">     
                  <span class="title">Annexure 3. Challenge Phase at Flanks of Animal&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseFortySix" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-6 mt-2 mb-3 text-center">
                      <img src="../../assets/draft_img4.png">
                    </div>
                    <div class="col-6 mt-5 mb-3 text-left">
                      <table class="table table-bordered text-center">
                        <tbody>
                          <tr>
                            <td>
                              <b>All Animals</b><br>X: Treatment Animal Site C<br>Y: Control Animals Site C
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-6 mt-2 mb-3 text-left">
                      <table class="table table-bordered text-center">
                        <tbody>
                          <tr>
                            <td>
                              1. Cranial End<br>2. Intradermal Injection Sites<br>3. Clipped Intrascapular Region<br>4. Caudal End
                            </td>
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
                <div class="card-header" data-toggle="collapse" data-target="#collapseFortySeven" aria-expanded="true">     
                  <span class="title">Annexure 4. Evaluation of Skin Reactions (Draize Method)&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseFortySeven" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>1. Erythema and Eschar Formation</th>
                            <th>Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>No erythema</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>Very slight erythema (barely perceptible)</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>Well defined erythema</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>Moderate to severe erythema</td>
                            <td>3</td>
                          </tr>
                          <tr>
                            <td>Severe erythema (beef redness) to eschar formation preventing grading of erythema</td>
                            <td>4</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p class="font-weight-bold">Maximum Possible Score – 4</p>
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>2. Oedema Formation</th>
                            <th>Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>No Oedema</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>Very slight Oedema (barely perceptible)</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>Slight Oedema (edges of area well defined by definite raising)</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>Moderate Oedema (raised approximately 1 millimeter)</td>
                            <td>3</td>
                          </tr>
                          <tr>
                            <td>Severe Oedema (raised more than 1 millimeter and extending beyond area of exposure)</td>
                            <td>4</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p class="font-weight-bold">Maximum Possible Score – 4</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseFortyEight" aria-expanded="true">     
                  <span class="title">Annexure 5. Magnusson and Kligman Grading Scale for the Evaluation of Challenge Patch Test Reactions&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseFortyEight" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-2 mb-3">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>Patch Test Reaction</th>
                            <th>Grading Scale</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>No visible change</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>Discrete or patchy erythema</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>Moderate and confluent erythema</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>Intense erythema and/or swelling</td>
                            <td>3</td>
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
import axios from 'axios';
export default {
  name: 'Study_OngoingDashboard',
  components: {
  },
  mounted: function() {
    this.loaddetailsTable()
  },
  data() {
    return {
      details: {},
      title1: "SKIN SENSITIZATION STUDY OF POLAR AND NON-POLAR EXTRACTS OF PRESSURE MONITORING LINE IN GUINEA PIGS BY USING GUINEA PIG MAXIMIZATION TEST (GPMT)",
      title2: "ISO 10993-10:2021",
      study_no: "LBPL/G-XXX (TX)",
      study_code: "GPMT",
      study_dir: "Mr. Rakesh P.Y",
      sponser: "XXXX",
      obj: "skin sensitization and biocompatibility of a polar extract (physiological saline) and non-polar extract (sesame oil) of “Pressure Monitoring Line”",
      study_title1: "Skin Sensitization Test of Pressure Monitoring Line in Guinea Pigs by using Guinea Pig Maximization Test (GPMT)",
      study_no1: "LBPL/G-XXXX (TX)",
      study_code1: "GPMT",
      ulr_no1: "TC- 679422000000757F",
      sponsor1: "XXXXX",
      study_director1: "Ms.Zehra Khanum",
      study_vet1: "Dr. Sunkad Meghana",
      sponsor_rep1: "Dr. Sunkad Meghana",
      monitor1: "Dr. Sunkad Meghana",
      study_start_date: "XX/XX/2022",
      exp_start_date: "XX/XX/2022",
      acc: "XX/XX/2022",
      treat_start_date: "XX/XX/2022",
      exp_end_date: "XX/XX/2022",
      draft_rep: "XX/XX/2022",
      study_end_date: "XX/XX/2022",
      short1: "AAALAC",
      full1: "Association for Assessment and Accreditation of Laboratory Animal Care",
      short2: "CPCSEA",
      full2: "Committee for the Purpose of Control and Supervision of Experiments on Animals",
      short3: "Cm",
      full3: "Centimeter",
      short4: "dB",
      full4: "decibel",
      short5: "FCA",
      full5: "Freund’s Complete Adjuvant",
      short6: "hr/h(s)",
      full6: "Hour (s)",
      short7: "IAEC",
      full7: "Institutional Animal Ethics Committee",
      short8: "ISO",
      full8: "International Organization for Standardization",
      short9: "IEC",
      full9: "International Electrotechnical Commission",
      short10: "GLP",
      full10: "Good Laboratory Practice",
      short11: "g",
      full11: "Gram",
      short12: "LBPL",
      full12: "Liveon Biolabs Private Limited",
      short13: "mL",
      full13: "Millilitre",
      short14: "No.",
      full14: "Number",
      short15: "OECD",
      full15: "Organization for Economic Co-operation and Development",
      short16: "GPMT",
      full16: "Guinea Pigs Maximization Test",
      short17: "rpm",
      full17: "Revolutions Per Minute",
      short18: "SDS",
      full18: "Sodium Dodecyl Sulphate",
      short19: "Sign.",
      full19: "Signature",
      short20: "TIIS",
      full20: "Test Item Information Sheet",
      short21: "UV",
      full21: "Ultraviolet",
      short22: "">"",
      full22: "Less than",
      iaec_no: "LBPL-IAEC-019-04/2022",
      item_name: "",
      item_code: "",
      item_code1: "",
      intended_use: "",
      contact_site: "",
      duration: "",
      material: "",
      weight: "",
      storage_cond: "",
      batch_no: "",
      mfg_date: "",
      exp_date: "",
      sterility: "",
      mfg_by: "",
      supplied_by: "",
      others: "",
      anex_1: "6",
      iso_1: "10993-10:2021",
      source: "In-house breed animals",
      age: "7- 13 Weeks (exact age will be provided in the report)",
      no_groups: "4",
      no_animals: "30 Male/Female (Female will be Nulliparous and Non-Pregnant)",
      weight_range: "300-500g",
      temp: "20 ± 3 °C and relative humidity of 30-70%",
      cage_size: "Cage size approximately Length 43 X Breadth 29 X Height 18 cm",
      mfg_by_name: "Krishna Valley Agrotech LLP",
      test_extract: "The test item is irregularly shaped device hence, 0.2g/mL extraction ratio will be selected for extraction as per ISO 10993-12:2021 (Refer to Annexure 1). The test item contact period in clinically Prolonged Exposure, hence the extraction condition will be selected (50 ± 2) °C for (72 ± 2) hours. Similar extraction procedures will also be applicable for respective polar (0.9% w/v Sodium chloride) and non-polar (Sesame oil) vehicle control without test item.",
      induction: "Test Item extract with Vehicle Control (i.e., respective Vehicle Control and test item extract will be prepared separately) and will be applied on to each animal of intradermal region by topical application using Filter paper patches of approximately 2 cm X 4 cm = 8 cm2 loaded with 0.5 mL of respective Vehicle Control and test item extract as per Annexure 2, and It will be secured in position with hypoallergic tape around the torso. The details of treatment are as mentioned below.",
      anex_2: "2",
      g1a: "Filter paper loaded with 0.5 mL in Polar Vehicle Control",
      g2a: "Filter paper loaded with 0.5 mL undiluted Polar Test Item Extract",
      g1b: "Filter paper loaded with 0.5 mL Non-Polar Vehicle Control",
      g2b: "Filter paper loaded with 0.5 mL Undiluted Non-Polar Test Item Extract",
      challenge_phase: "On Day 22, the filter paper patches approximate size of 8 cm2 (2 cm x 4 cm) will be loaded with 0.5 mL of the respective vehicle control and test item extract as per Annexure 3. The filter paper secured with hypoallergic tape group as below:",
      g1a_head: "G1a",
      g1a_right: "Anterior Right Flank",
      g1a_polar: "Polar Vehicle Control",
      g1a_left: "Anterior Left Flank",
      g1a_nonpolar: "Undiluted Polar Test Item Extract",
      g2a_head: "G2a",
      g2a_right: "Anterior Right Flank",
      g2a_polar: "Polar Vehicle Control ",
      g2a_left: "Anterior Left Flank",
      g2a_nonpolar: "Undiluted Polar Test Item Extract",
      g1b_head: "G1b",
      g1b_right: "Anterior Right Flank",
      g1b_polar: "Non-Polar Vehicle Control",
      g1b_left: "Anterior Left Flank",
      g1b_nonpolar: "Undiluted Non-Polar Test Item Extract",
      g2b_head: "G2b",
      g2b_right: "Anterior Right Flank",
      g2b_polar: "Non-Polar Vehicle Control ",
      g2b_left: "Anterior Left Flank",
      g2b_nonpolar: "Undiluted Non-Polar Test Item Extract",
      anex_3: "4",
      anex_4: "5",
      archive_1: "9",
      archive_2: "[(C (97)186/Final]",
      study_no2: "LBPL/G-2266 (TX)",
      date_app: "XX/XX/2022",
      study_dir1: "Mr. Rakesh P.Y",
      sign1: "",
      sign2: "",
      sign3: "",
      sponsor_name: "XXXXXXXXXXXXXXXXX",
      spons_rep: "Dr. Mohan Krishnappa",
      sign4: "",
      monitor_sci: "Dr. Mohan Krishnappa",
      sign5: ""
    }
  },
  methods: {
    loaddetailsTable: function(){
      let uri = "/api/dplan/" + this.$route.params.id;
      axios.get(uri).then((res) => {
        this.details = res.data.data;
      })
      .catch(()=>{
        console.log("Something Went Wrong");
      })
    },
    save: function() {
      let uri = "/api/dplan/" + this.$route.params.id;
      axios.post(uri, {
        title1: this.title1,
        title2: this.title2,
        study_no: this.study_no,
        study_code: this.study_code,
        study_dir: this.study_dir,
        sponser: this.sponser,
        obj: this.obj,
        study_title1: this.study_title1,
        study_no1: this.study_no1,
        study_code1: this.study_code1,
        ulr_no1: this.ulr_no1,
        sponsor1: this.sponsor1,
        study_director1: this.study_director1,
        study_vet1: this.study_vet1,
        sponsor_rep1: this.sponsor_rep1,
        monitor1: this.monitor1,
        study_start_date: this.study_start_date,
        exp_start_date: this.exp_start_date,
        acc: this.acc,
        treat_start_date: this.treat_start_date,
        exp_end_date: this.exp_end_date,
        draft_rep: this.draft_rep,
        study_end_date: this.study_end_date,
        short1: this.short1,
        full1: this.full1,
        short2: this.short2,
        full2: this.full2,
        short3: this.short3,
        full3: this.full3,
        short4: this.short4,
        full4: this.full4,
        short5: this.short5,
        full5: this.full5,
        short6: this.short6,
        full6: this.full6,
        short7: this.short7,
        full7: this.full7,
        short8: this.short8,
        full8: this.full8,
        short9: this.short9,
        full9: this.full9,
        short10: this.short10,
        full10: this.full10,
        short11: this.short11,
        full11: this.full11,
        short12: this.short12,
        full12: this.full12,
        short13: this.short13,
        full13: this.full13,
        short14: this.short14,
        full14: this.full14,
        short15: this.short15,
        full15: this.full15,
        short16: this.short16,
        full16: this.full16,
        short17: this.short17,
        full17: this.full17,
        short18: this.short18,
        full18: this.full18,
        short19: this.short19,
        full19: this.full19,
        short20: this.short20,
        full20: this.full20,
        short21: this.short21,
        full21: this.full21,
        short22: this.short22,
        full22: this.full22,
        iaec_no: this.iaec_no,
        item_name: this.item_name,
        item_code: this.item_code,
        item_code1: this.item_code1,
        intended_use: this.intended_use,
        contact_site: this.contact_site,
        duration: this.duration,
        material: this.material,
        weight: this.weight,
        storage_cond: this.storage_cond,
        batch_no: this.batch_no,
        mfg_date: this.mfg_date,
        exp_date: this.exp_date,
        sterility: this.sterility,
        mfg_by: this.mfg_by,
        supplied_by: this.supplied_by,
        others: this.others,
        anex_1: this.anex_1,
        iso_1: this.iso_1,
        source: this.source,
        age: this.age,
        no_groups: this.no_groups,
        no_animals: this.no_animals,
        weight_range: this.weight_range,
        temp: this.temp,
        cage_size: this.cage_size,
        mfg_by_name: this.mfg_by_name,
        test_extract: this.test_extract,
        induction: this.induction,
        anex_2: this.anex_2,
        g1a: this.g1a,
        g2a: this.g2a,
        g1b: this.g1b,
        g2b: this.g2b,
        challenge_phase: this.challenge_phase,
        g1a_head: this.g1a_head,
        g1a_right: this.g1a_right,
        g1a_polar: this.g1a_polar,
        g1a_left: this.g1a_left,
        g1a_nonpolar: this.g1a_nonpolar,
        g2a_head: this.g2a_head,
        g2a_right: this.g2a_right,
        g2a_polar: this.g2a_polar,
        g2a_left: this.g2a_left,
        g2a_nonpolar: this.g2a_nonpolar,
        g1b_head: this.g1b_head,
        g1b_right: this.g1b_right,
        g1b_polar: this.g1b_polar,
        g1b_left: this.g1b_left,
        g1b_nonpolar: this.g1b_nonpolar,
        g2b_head: this.g2b_head,
        g2b_right: this.g2b_right,
        g2b_polar: this.g2b_polar,
        g2b_left: this.g2b_left,
        g2b_nonpolar: this.g2b_nonpolar,
        anex_3: this.anex_3,
        anex_4: this.anex_4,
        archive_1: this.archive_1,
        archive_2: this.archive_2,
        study_no2: this.study_no2,
        date_app: this.date_app,
        study_dir1: this.study_dir1,
        sign1: this.sign1,
        sign2: this.sign2,
        sign3: this.sign3,
        sponsor_name: this.sponsor_name,
        spons_rep: this.spons_rep,
        sign4: this.sign4,
        monitor_sci: this.monitor_sci,
        sign5: this.sign5
      }).then((res) => {
          alert("Successfully Saved!");
          window.location.href='/studynewdash';
      }).catch(()=> {
          alert("Something Went Wrong!");
          window.location.href='/studynewdash';
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

.no-bord {
  border-top: none;
  border-left: none;
  border-right: none;
}

.no-bord:hover, .no-bord:focus {
  box-shadow: none;
}
</style>
