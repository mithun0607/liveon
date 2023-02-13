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
                  <router-link class="nav-link active" to="#">Draft Study Plan</router-link>
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
                  <router-link class="nav-link text-dark" to="/studydatairtnzw">Study Data</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link text-dark" to="/studycommentirtnzw">Comments</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link text-dark" to="/studyreportirtnzw">Final Report</router-link>
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
                      The objective of this study is to assess the possible irritation likely to arise from <input type="text" class="form-control no-bord d-inline w-50" v-model="obj" placeholder="Test Item Name"> following its single administration in New Zealand White Rabbits. This study will provide a rational basis of risk assessment in humans.
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
                      <p>The Quality Assurance Unit of Liveon Biolabs Private Limited will inspect at different phases of the study to review the draft study plan, final study plan, raw data, draft study report and final study report to assure the integrity of study in compliance with ISO/IEC 17025:2017 and in compliance with OECD Principles of GLP for testing of chemicals as specified by international [(C (97)186/Final] legislation. Findings of all the inspections during the study will be recorded and reported to the Study Director and Test Facility Management. A statement of Quality Assurance will be provided in the study report.</p>
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
                        <li>ISO 10993 Part-23:2021- First Edition – Biological Evaluation of Medical Devices part: 23: Tests for Irritation.</li>
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
                            <td>Rabbit (Oryctolagus Cuniculus)</td>
                          </tr>
                          <tr>
                            <td>Strain</td>
                            <td>New Zealand White</td>
                          </tr>
                          <tr>
                            <td>Justification for Selection of Species</td>
                            <td>Rabbit is one of the recommended species for conducting intracutaneous reactivity test as per guideline (<input type="text" class="form-control d-inline no-bord w-25" v-model="iso_1">).</td>
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
                            <td>Total No. of Mice</td>
                            <td><input type="text" class="form-control no-bord" v-model="no_animals"></td>
                          </tr>
                          <tr>
                            <td>Body weight range at treatment</td>
                            <td><input type="text" class="form-control no-bord" v-model="weight_range"></td>
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
                    <p>Animals will be housed in an environment-controlled room temperature of <input type="text" class="form-control no-bord d-inline w-25 text-left" v-model="temp"> and relative humidity of 30-70%. The photoperiod will be 12 hrs fluorescent light and 12hrs darkness. Adequate fresh air supply of 12 - 15 air cycles/hr and sound level of less than 80dB will be maintained in the experimental room.</p>
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
                    <p>Animal will be housed individually in a standard stainless-steel cage (<input type="text" class="form-control no-bord d-inline w-25 text-left" v-model="cage_size">) provided with stainless steel wire bottom grill facilitated with polycarbonate resting board, feed hopper and polycarbonate water bottle with stainless steel sipper tube Additionally, hanging bells will be provided as an enrichment device to minimize the animal stress and promote overall wellbeing of animals. Litter trays were provided with bedding material.</p>
                    <p>Steam sterilized corn cob will be provided as bedding material in litter tray. Based on the latest analytical certificate/s available, there are no known contaminants in the bedding that are expected to interfere with the results of this study. The analysis reports will be included in the Study Report.</p>
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
                    <p>AF- 1000M R&M Rabbit Diets manufactured by <input type="text" class="form-control d-inline no-bord w-25" v-model="mfg_by_name"> will be provided ad <i>libitum</i> to Rabbits or others to specify in the report.</p>
                    <p>Deep bore-well water subjected to filtration by reverse osmosis and UV sterilized, will be provided ad <i>libitum</i> to Rabbits in polycarbonate bottles with stainless rubber corked steel sipper tubes.</p>
                    <p>The feed and water provided will be tested for contaminants. The latest analysis reports of feed and water will be included in the report.</p>
                    <p>Based on the latest analytical certificate/s available, there are no known contaminants in the food and water which will interfere with the study results</p>
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
                    <p>After examination for good health and the suitability for the study, the mice will be acclimatized at least for 5 days before start of the treatment. During acclimatization animals will be observed at least once daily. Veterinary examination will be performed before selecting the animals for the study.</p>
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
                    <p>During acclimatization period (Temporary identification), each animal will be identified by tail marking with animal number written on the tail using marker pen. The cages will be identified with cage cards indicating study number, study code, species, strain, sex, acclimatization start and acclimatization end date etc.</p>
                    <p>During treatment period (Permanent identification), each animal will be identified by body marking using 1 % turmeric solution. The cages will be identified with cage cards indicating study number, animal accession number, study code, species, strain, sex, treatment start date and experiment end date etc.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwentyOne" aria-expanded="true">     
                  <span class="title">13.1.4.3 Clipping of Animals&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwentyOne" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>4 to 18 hrs prior to the treatment / test item administration, the dorsal region of animal fur will be removed by clipping. Care will be taken to avoid abrasion to the skin.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwentyThree" aria-expanded="true">     
                  <span class="title">13.2 Methods | 13.2.1 Experimental Procedures | 13.2.1.1 Selection and justification for the Choice of Extraction Medium&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwentyThree" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>The following study design will be adopted for the study:</p>
                    <div class="col-12 mt-2 mb-3">
                      <p>The commercially available 0.9% w/v sodium chloride for injection (Normal saline) for polar test item extraction and sesame oil for non-polar test item extraction and respective polar and non-polar vehicle control are selected as per the guideline ISO 10993 “Biological Evaluation of Medical Devices”, Part 12 (Sample preparation and reference materials).</p>
                      <p>The details of vehicles used will be recorded in the raw data and presented in the study report.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwentySix" aria-expanded="true">     
                  <span class="title">13.2.1.2 Preparation of Test Item Extract&nbsp;&nbsp;</span>
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
                  <span class="title">13.3 Test Procedure&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwentySeven" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>Three animals will be injected with respective vehicle on one side (1mL), and extract on another side of the spinal column of intracutaneous at 5 different sites (0.2 mL per site). The injection sites will be examined for evidence of any tissue reaction such as erythema, oedema, and necrosis. The detailed procedure for injection site is presented in Annexure 2 and 3 respectively.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseThirtyOne" aria-expanded="true">     
                  <span class="title">14. OBSERVATIONS | 14.1 Mortality, Morbidity and Clinical Signs&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseThirtyOne" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>Animals will be observed twice daily for mortality, morbidity and at least once daily for clinical signs throughout the observation period. Based on clinical signs the animals will be observed once for morbidity and mortality during weekends and holidays. The appearance of each injection site will be observed immediately after injection and at (24 ± 2h), (48 ± 2h) and (72 ± 2h) after injection.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseThirtyTwo" aria-expanded="true">     
                  <span class="title">14.2 Body Weight&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseThirtyTwo" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>Individual animal body weights will be measured on the day of receipt, on Day 1, (prior to test item administration), on Day 4 (at the end of the experimental period).</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseTwentyEight" aria-expanded="true">     
                  <span class="title">14.3 Skin Reaction&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseTwentyEight" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>he tissue reaction for erythema and oedema will be scored according to the system given as per Annexure <input type="text" class="form-control d-inline no-bord w-25" v-model="anex_2"></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseThirtyFive" aria-expanded="true">     
                  <span class="title">15. SKIN IRRITATION EVALUATION CRiTERIA&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseThirtyFive" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <p>
                      The following criteria will be used for the evaluation of results.
                      <li>After (72 ± 2h) grading, all erythema grades plus oedema grades (24 ± 2h), (48 ± 2h) and (72 ± 2h) are totaled separately for each test sample or vehicle control for each individual animal.</li>
                      <li>The score of a test sample or vehicle control sample on each individual animal will be calculated by dividing each of the totals by 15 (3 Scoring time points X 5 test or vehicle control sample injection sites).</li>
                      <li>The overall mean score for each test sample and each corresponding vehicle control will be calculated by adding scores for the three animals and divided by three.</li>
                      <li>The final test sample score can be obtained by subtracting the score of the vehicle control from the test sample score.  The requirements of the test are met if the final test sample score is 1,0 or less. If at any observation period the average reaction to the test sample is questionably greater than the average reaction to the vehicle control, repeat the test using three additional rabbits. The requirements of the test are met if the final test sample score is 1, 0 or less.</li>
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
                      <p>At the end of experimental period (day 4), all the animals will be sacrificed by using lethal dose of sodium thiopentone injection. The carcasses will be stored in deep freezer and will be disposed.</p>
                      <p><b>Note:</b> Sodium thiopental injection details will be recorded & same will be reported.</p>
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
                    <p>All individual animal data will be presented in appendices and / or summarized and presented in tables. All findings will be presented in the report as per the standard reporting format.</p>
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
                      <li>A description of the test rabbit, including species, strain, source, number, sex, age at start of the treatment, body weight range, housing conditions, and method of identification.</li>
                      <li>Test conditions:<br>1.Details of Test Item information<br>2. Details of food, RO water quality and bedding material analysis reports.</li>
                      <li>Descriptions of the dose volume, dose regimen, route of administration, extract preparations, and duration of the treatment period.</li>
                      <li>Observation and Results: Tabulation of response data and dose level for each animal (i.e., tables of clinical signs and mortality, mice showing signs of toxicity (if any) including mortality, nature, severity and duration of effects)</li>
                      <li>Individual weights of Mice</li>
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
                        1) Copy No. 1/2 – Archives, Liveon Biolabs Private Limited.
                        b) Copy No. 2/2 – Sponsor
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
                        <li>ISO/IEC 17025:2017, General Requirements for the Competence of Testing and Calibration Laboratories.</li>
                        <li>In compliance with OECD Principles of GLP for testing of chemicals as specified by international [(C (97)186/Final] legislation.</li>
                        <li>The Standard Operating Procedure of Test Facility and the mutually agreed Study Plan.</li>
                        <li>ISO 10993-23:2021 – Biological Evaluation of Medical Devices part: 23 Tests for Irritation.</li>
                        <li>ISO 10993-12:2021: Biological evaluation of medical devices, Part 12: Sample preparation and reference materials.</li>
                        <li>ISO 10993-1:2018: Biological Evaluation of Medical Devices-Part 1: Evaluation and Testing within a Risk Management Process.</li>
                        <li>ISO 10993-2:2006- Biological Evaluation of Medical Devices - Part 2: Animal Welfare and Requirements.</li>
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
                      <img src="../../assets/draftnzw_img1.png">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion mt-4" id="accordionExample">
              <div class="card rounded">
                <div class="card-header" data-toggle="collapse" data-target="#collapseFortyFive" aria-expanded="true">     
                  <span class="title">Annexure 2. Arrangement of Injection Sites&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseFortyFive" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-6 mt-2 mb-3 text-center">
                      <img src="../../assets/draftnzw_img2.png">
                    </div>
                    <div class="col-6 mt-5 mb-3 text-left">
                      <table class="table table-bordered text-center">
                        <tbody>
                          <tr>
                            <th>INDICATIONS</th>
                          </tr>
                          <tr>
                            <td>1. Cranial End</td>
                          </tr>
                          <tr>
                            <td>2. 0.2 mL Injection of Polar Extract</td>
                          </tr>
                          <tr>
                            <td>3. 0.2 mL Injection of Non-Polar Extract</td>
                          </tr>
                          <tr>
                            <td>4. 0.2 mL Injection of Polar Vehicle</td>
                          </tr>
                          <tr>
                            <td>5. 0.2 mL Injection of Non-Polar Vehicle</td>
                          </tr>
                          <tr>
                            <td>6. Caudal End</td>
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
                  <span class="title">Annexure 3. Administration of Test Item&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseFortySix" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-3 mb-3">
                      <table class="table table-bordered text-center">
                        <tbody>
                          <tr>
                            <th>Sl. No.</th>
                            <th>Treatment</th>
                            <th>Extract</th>
                            <th>Incubation</th>
                            <th>Dose Volume/Site (ml)</th>
                            <th>Total Volume Injected</th>
                            <th>Region</th>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Polar Vehicle</td>
                            <td>0.9% Sodium Chloride Injection</td>
                            <td rowspan="4">37 ± 1˚C for 72±2 hr</td>
                            <td>0.2 ml</td>
                            <td>1.0 ml</td>
                            <td>Right</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Polar Test item Extract</td>
                            <td>Test Item + 0.9% Sodium Chloride Injection</td>
                            <td>0.2 ml</td>
                            <td>1.0 ml</td>
                            <td>Left</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Non-polar Vehicle</td>
                            <td>Sesame oil</td>
                            <td>0.2 ml</td>
                            <td>1.0 ml</td>
                            <td>Right</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Non-polar Test item Extract</td>
                            <td>Test item + Sesame oil</td>
                            <td>0.2 ml</td>
                            <td>1.0 ml</td>
                            <td>Left</td>
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
                  <span class="title">Annexure 4. Evaluation of Skin Reactions&nbsp;&nbsp;</span>
                  <span class="accicon"><font-awesome-icon icon="fa-solid fa-angle-down" type="button" /></span>
                </div>
                <div id="collapseFortySeven" class="collapse" data-parent="#accordionExample">
                  <div class="row ml-2 mr-2 mt-3">
                    <div class="col-12 mt-3 mb-3">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <th>Erythema and Eschar Formation</th>
                            <th>Score</th>
                          </tr>
                          <tr>
                            <td>No erythema</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>Very slight erythema (Barely perceptible)</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>Well-defined erythema</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>Moderate to severe erythema</td>
                            <td>3</td>
                          </tr>
                          <tr>
                            <td>Severe erythema (beet-redness) to eschar formation preventing grading of erythema</td>
                            <td>4</td>
                          </tr>
                          <tr>
                            <th colspan="2"></th>
                          </tr>
                          <tr>
                            <th>Oedema Formation</th>
                            <th>Score</th>
                          </tr>
                          <tr>
                            <td>No oedema</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>Very slight oedema (Barely perceptible)</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>Slight oedema (edges of area well defined by definite raising)</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>Moderate oedema (raised approximately 1mm)</td>
                            <td>3</td>
                          </tr>
                          <tr>
                            <td>Severe oedema (raised more than 1 mm and extending beyond the area of exposure)</td>
                            <td>4</td>
                          </tr>
                          <tr>
                            <td>Maximal possible score for irritation</td>
                            <td>8</td>
                          </tr>
                          <tr>
                            <td colspan="2">Other adverse changes at the skin sites shall be recorded and reported.</td>
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
      title1: "INTRACUTANEOUS REACTIVITY TEST OF POLAR AND NON-POLAR EXTRACTS OF XXXX IN NEW ZEALAND WHITE RABBITS",
      title2: "ISO 10993-23:2021",
      study_no: "LBPL/G-XXXX (TX)",
      study_code: "IRTNZW",
      study_dir: "Ms. Zehra Khanum",
      sponser: "XXXX",
      obj: "intracutaneous injection of extract of the test item, “XXXX”",
      study_title1: "Intracutaneous Reactivity Test of Polar and Non-Polar extracts of XXXX in New Zealand White Rabbits.",
      study_no1: "LBPL/G-XXXX (TX)",
      study_code1: "IRTNZW",
      ulr_no1: "XXXX",
      sponsor1: "XXXX",
      study_director1: "Ms. Zehra Khanum",
      study_vet1: "Dr. Sunkad Meghana",
      sponsor_rep1: "XXXX",
      monitor1: "XXXX",
      study_start_date: "XXXX",
      exp_start_date: "XXXX",
      acc: "XXXX",
      treat_start_date: "XXXX",
      exp_end_date: "XXXX",
      draft_rep: "Latest by XXXX",
      study_end_date: "Latest by XXXX or within a week after receiving comments for draft report from sponsor.",
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
      short16: "IRTNZW",
      full16: "Intracutaneous Reactivity Test in New Zealand White Rabbits",
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
      iaec_no: "LBPL-IAEC-XXXX.",
      item_name: "XXXX",
      item_code: "XXXX",
      item_code1: "XXXX",
      intended_use: "XXXX",
      contact_site: "XXXX",
      duration: "XXXX",
      material: "XXXX",
      weight: "XXXX",
      storage_cond: "XXXX",
      batch_no: "XXXX",
      mfg_date: "XXXX",
      exp_date: "XXXX",
      sterility: "XXXX",
      mfg_by: "XXXX",
      supplied_by: "XXXX",
      others: "XXXX",
      anex_1: "5",
      iso_1: "ISO-10993-23:2021",
      source: "In-house bred animals",
      age: "About 4 Months (exact age will be provided in the report)",
      no_groups: "03 Male/Female (Female will be Nulliparous and Non-Pregnant)",
      no_animals: "XXXX - XXXX",
      weight_range: "2.0 – 2.5 kg (exact weight will be provided in the report)",
      temp: "20 ± 3°C",
      cage_size: "Cage Size Length 1.6 X Breadth 2 X Height 1.6 feet",
      mfg_by_name: "Krishna Valley Agrotech LLP",
      test_extract: "Test item thickness is less than 0.5mm, 6cm2/mL will be selected for extraction as per ISO 10993-12:2021 (Annexure 1). The extraction condition will be selected (37 ± 1) °C for (72 ± 2) hrs. Example of preparation for 10 mL: 60cm2 of test item will be taken and transferred to the sterilized beaker containing 10 mL of 0.9% NaCl (polar vehicle) Similarly, 60cm2 of test item will be taken and transferred to the sterilized beaker containing 10 mL of sesame oil (non-polar vehicle). Similar procedure will be followed for polar and non-polar vehicle control without adding test item. All the (polar and non-polar test item extracts and polar and non-polar vehicle control) beakers / containers will be subjected to extraction at 37 ± 1°C for a period 72 ± 2 hrs with continuous agitation in orbital shaker incubator at 110(±2) rpm. Similar extraction procedures will also be applicable for respective polar (0.9% w/v Sodium chloride) and non-polar (Sesame oil) vehicle control without test item. Pre and post extraction condition for the appearance of extracts will be checked. The extract will be filtered if any particulates observed using syringe filters / filter papers. The extracts will be prepared under aseptic conditions. Note: pH of extracts will be checked for pre and post-extraction and will be mentioned in the raw data file and Study report.",
      anex_2: "4",
      archive_1: "9",
      archive_2: "[(C (97)186/Final]",
      study_no2: "LBPL/G-XXXX (TX)",
      date_app: "XX/XX/2022",
      study_dir1: "Ms. Zehra Khanum",
      sign1: "",
      sign2: "",
      sign3: "",
      sponsor_name: "WRP ASIA PACIFIC SDN BHD",
      spons_rep: "XXXX",
      sign4: "",
      monitor_sci: "XXXX",
      sign5: ""
    }
  },
  methods: {
    loaddetailsTable: function(){
      let uri = "/api/dnzwplan/" + this.$route.params.id;
      axios.get(uri).then((res) => {
        this.details = res.data.data;
      })
      .catch(()=>{
        console.log("Something Went Wrong");
      })
    },
    save: function() {
      let uri = "/api/dnzwplan/" + this.$route.params.id;
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
        anex_2: this.anex_2,
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
