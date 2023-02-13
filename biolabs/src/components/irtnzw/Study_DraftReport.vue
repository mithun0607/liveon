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
                  <router-link class="nav-link text-dark" to="/studydatairtnzw">Study Data</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link text-dark" to="/studycommentirtnzw">Comments</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link active" to="#">Final Study Report</router-link>
                </li>
              </ul>
            </div>

            <section id="sec1" class="p-5">
              <div class="col-12">
              <h6 class="text-center mt-3"><u>DRAFT STUDY REPORT</u></h6>
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
            </section>

            <section id="sec2" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">1. OBJECTIVE</p>
                <p>The objective of this toxicity study was to assess the potential <input type="text" class="form-control no-bord d-inline w-50" v-model="obj" placeholder="Test Item Name"> by injecting both polar extract and non-polar extract as a single intradermal injection to evaluate the possibility of hyperreactive skin (visible reactions i.e. erythema/oedema) followed by topical induction (erythema/oedema) and challenge Phase for skin reaction (erythema) in rabbits. This test also provides information on health hazards likely to be arise from acute exposure by the intended clinical route in humans.</p>
              </div>
            </section>

            <section id="sec3" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">2. STUDY DETAILS</p>
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
            </section>

            <section id="sec4" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">3. STUDY RESPONSIBILITIES</p>
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
            </section>

            <section id="sec4" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">4. STUDY SCHEDULE</p>
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
            </section>

            <section id="sec4" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">5. ABBREVIATIONS AND SYMBOLS</p>
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
            </section>

            <section id="sec6" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">6. STATEMENT OF STUDY COMPLIANCE </p>
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Study Number </td>
                      <td><u>{{detail.study_no}}</u></td>
                    </tr>
                    <tr>
                      <td>Study Title</td>
                      <td><u>{{detail.title1}}</u></td>
                    </tr>
                  </tbody>
                </table>
                <p>This study will be performed in compliance with the following:
                  <li>ISO/IEC 17025:2017, General Requirements for the Competence of Testing and Calibration Laboratories.</li>
                  <li>OECD Principles of GLP for testing of chemicals as specified by international [(C (97)186/Final] legislation.</li>
                  <li>The Standard Operating Procedures of Test Facility and the mutually agreed Study Plan.</li>
                </p>
                <p class="text-center font-weight-bold">DECLARATION</p>
                <p>The Study Director hereby declares that the work was performed under her supervision and in accordance with the described procedures. It is assured that the reported results faithfully represent the raw data obtained during the experimental work.  No circumstances have been left unreported which may have affected the quality or integrity of the data or which might have a potential bearing on the validity and reproducibility of this study.</p>
                <p>The Study Director accepts overall responsibility for the technical conduct of the study as well as the interpretation, analysis, documentation, and reporting of the results.</p>
              </div>
              <div class="col-3 float-right">
                <input type="text" class="form-control no-bord" v-model="sign1"><p class="text-center font-weight-bold">Study Director<br>Sign. and Date</p>
              </div>
            </section>

            <section id="sec7" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">7. STATEMENT OF QUALITY ASSURANCE UNIT</p>
                <p><u>{{detail.study_no}}</u></p>
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Study Number </td>
                      <td><u>{{detail.study_no}}</u></td>
                    </tr>
                    <tr>
                      <td>Study Title</td>
                      <td><u>{{detail.title1}}</u></td>
                    </tr>
                  </tbody>
                </table>
                <p>The following study phases were inspected and findings were reported to the Management and Study Director on the dates shown below.</p>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th rowspan="2">Sl. No.</th>
                      <th rowspan="2">Inspection Phase</th>
                      <th colspan="3">Dates</th>
                    </tr>
                    <tr>
                      <th rowspan="2">Inspection</th>
                      <th colspan="2">Reporting To</th>
                    </tr>
                    <tr>
                      <th></th>
                      <th></th>
                      <th>Study Director</th>
                      <th>Test Facility Management</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Draft Study Plan</td>
                      <td>XX/XX/2022</td>
                      <td>XX/XX/2022</td>
                      <td>XX/XX/2022</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Final Study Plan</td>
                      <td>XX/XX/2022</td>
                      <td>XX/XX/2022</td>
                      <td>XX/XX/2022</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Acclimatization</td>
                      <td>XX/XX/2022</td>
                      <td>XX/XX/2022</td>
                      <td>XX/XX/2022</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Test Item Extraction</td>
                      <td>XX/XX/2022</td>
                      <td>XX/XX/2022</td>
                      <td>XX/XX/2022</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Dosing</td>
                      <td>XX/XX/2022</td>
                      <td>XX/XX/2022</td>
                      <td>XX/XX/2022</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Draft Study Report</td>
                      <td>XX/XX/2022</td>
                      <td>XX/XX/2022</td>
                      <td>XX/XX/2022</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Final Study Report</td>
                      <td>XX/XX/2022</td>
                      <td>XX/XX/2022</td>
                      <td>XX/XX/2022</td>
                    </tr>
                  </tbody>
                </table>
                <p>Inspections were performed according to the Standard Operating Procedures of the Test Facility's Quality Assurance Unit. The report was inspected against the approved Study Plan and pertinent raw data and accurately reflects the raw data.</p>
              </div>
              <div class="col-3 float-right">
                <input type="text" class="form-control no-bord" v-model="sign2"><p class="text-center font-weight-bold">Quality Assurance Unit<br>Sign. and Date</p>
              </div>
            </section>

            <section id="sec8" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">8. STATEMENT OF CONFIDENTIALITY</p>
                <p>The information and data presented in this Study Report is considered as confidential and proprietary information of the XXXX and will not be disclosed to anyone without the expressed or written approval of sponsor, except to the employees of this test facility wherever necessary and to persons authorized by law or judicial judgement.</p>
              </div>
              <div class="col-3 float-right">
                <input type="text" class="form-control no-bord" v-model="sign3"><p class="text-center font-weight-bold">Test Facility Management<br>Sign. and Date</p>
              </div>
            </section>

            <section id="sec9" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">9. STATEMENT OF TEST FACILITY MANAGEMENT</p>
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Study Number </td>
                      <td><u>{{detail.study_no}}</u></td>
                    </tr>
                    <tr>
                      <td>Study Title</td>
                      <td><u>{{detail.title1}}</u></td>
                    </tr>
                  </tbody>
                </table>
                <p>This is to affirm that for the above-mentioned study, Test Facility Management has made available all the resources to the study director necessary for conduct of the present study in compliance with OECD Principles of GLP for testing of chemicals as specified by international [(C (97)186/Final] legislation and in compliance with ISO/IEC 17025:2017 and mutually agreed study plan.</p>
              </div>
              <div class="col-3 float-right">
                <input type="text" class="form-control no-bord" v-model="sign4"><p class="text-center font-weight-bold">Test Facility Management<br>Sign. and Date</p>
              </div>
            </section>

            <section id="sec10" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">10. STUDY SUMMARY</p>
                <p>Skin sensitization study was performed to evaluate the sensitization following application of test item extracts of “XXXX” using rabbits Maximization Test Method as per Biological evaluation of medical devices - Part 10: Tests for Skin Sensitization, ISO 10993-10: 2021. This study also provides rational basis of risk assessment in humans.</p>
                <p>Thirty three animals were acclimatized and thirty were grouped into four groups, G1a-Polar Vehicle Control, G2a-Polar Test Item Extract, G1b-Non-polar Vehicle Control and G2b-Non-polar Test Item Extract.</p>
                <p>Fur of all animals was closely clipped about 24 hrs prior to induction phase (induction and topical application) and challenge application phase. In both the case, care was taken to avoid abrasion on the skin.</p>
                <p>On Day 1 intradermal induction phase with one each part of FCA and extract was used for intradermal administration. The animals from G1a and G1b, polar and non-polar Vehicle control for respective group whereas test groups G2a and G2b were injected with polar and non-polar test item extracts. The animals were injected at the shoulder region with 0.1 mL per injection of 3 pairs of intradermal injections. Injections 1 and 2 were given near the head region at least 1 cm apart and injection 3 was given 2 cm apart towards caudal part of the body. On Day 2 (24 hrs post intradermal administration) and Day 3 (48 hrs post intradermal administration) skin reactions for erythema and oedema were scored and recorded as per Draize method. Skin Irritation was observed (erythema/oedema) at this phase and hence SDS was not applied.</p>
                <p>Topical induction was carried out on Day 8 using patches of filter paper (2 cm x 4 cm) loaded with 0.5 mL of respective Vehicle control and test item extracts were applied over the dorsal clipped region of the animals and secured with semi occlusive dressing by hypoallergic tape for 48 hrs. On Day 10 (1-hr post patch removal) and Day 11 (24 hrs post patch removal) skin reactions for erythema and oedema were scored as per Draize method.</p>
                <p>Challenge exposure was carried out on Day 22 i.e., after 14 Days completion of the topical induction phase, Patches of filter paper (2 cm x 4 cm) loaded with 0.5 mL of Polar vehicle control and Polar test item extracts were applied to the anterior right flank and Anterior Left Flank of G1a and G2a group animals. Similarly, Patches of filter paper (2 cm x 4 cm) loaded with 0.5 mL of Non-Polar vehicle control and Non-Polar test item extracts were applied to the anterior right flank and anterior Left Flank of G1b and G2b group animals. Patches were held in contact for 24 hrs with semi occlusive dressing by hypoallergic tape. The Re-challenge phase was not performed as there were no skin reactions during Challenge exposure phase.</p>
                <p>All animals were observed for skin reactions (erythema) at 24h and 48h post removal of the dressings in the challenge phase. The skin reactions were scored as per Magnusson and Kligman grading scale.</p>
                <p>All the animals of were observed once daily for clinical signs and twice daily for mortality and morbidity till the end of observation period (Day 25). Body weights were measured on Day of acclimatization, day 1 and at the end of the observation period (Day 25). All the animals of were observed for skin reaction on day 2 (24h), 3 (48hr) after the intradermal administration, day 10 (1hr), 11 (24hr) post removal of dressing after induction (topical application) and day 24 (24hr), 25 (48hr) after removal of dressing in the challenge.</p>
                <p><b>Summary of Study Results:</b> No clinical signs and mortality/morbidity were observed. On Day 2 (24 hrs) none of the animals elicits any erythema/oedema and Day 3 (48 hrs) post intradermal injections, some elicits very slightly erythema and all the animals of vehicle control and test item extracts groups elicits very slight oedema this owing to FCA in the extracts and conforms the hyperreactive skin prior to topical and challenge phase. On Day 10 and Day 11 Post topical application, all the animals of vehicle control and test item extracts group revealed no erythema/oedema. In challenge phase, all animals of vehicle control and test item extracts group revealed no erythema. The body weights were unaffected by test item extracts.</p>
                <p><b>Conclusion:</b> Based on the above results, the graded (Magnusson and Kligman grading scale) score was 0. The comparison of the skin reaction (at the challenge phase) of the test item treated animals with those of the vehicle control group animals show that the test item “XXXX” is classified as “Non-sensitizer” to rabbits under the stated experimental condition.</p>
              </div>
            </section>

            <section id="sec11" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">11. STUDY COMPLIANCE</p>
                <p>
                  The study was performed in compliance with the following:
                  <li>ISO/IEC 17025:2017, General Requirements for the Competence of Testing and Calibration Laboratories</li>
                  <li>OECD Principles of GLP for testing of chemicals as specified by international [(C (97)186/Final] legislation.</li>
                  <li>The Standard Operating Procedures of Test Facility and the mutually agreed Study Plan.</li>
                </p>
              </div>
            </section>

            <section id="sec12" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">12. STUDY GUIDELINES</p>
                <p>The design of this study is based on the study objective and procedures as detailed in the study plan, the overall product development strategy for the test item and the below mentioned guidelines in principles as applicable:
                  <li>ISO 10993-10:2021 - Biological Evaluation of Medical Devices-Part 10: Tests for Skin Sensitization.</li>
                </p>
              </div>
            </section>

            <section id="sec13" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">13. IAEC APPROVAL</p>
                <p>This protocol has been approved by Liveon Biolabs Private Limited Institutional Animal Ethics Committee (IAEC). IAEC approved protocol number: <input type="text" class="form-control no-bord w-25 text-left d-inline" v-model="iaec_no"></p>
              </div>
            </section>

            <section id="sec14" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">14. ANIMAL WELFARE VETERINARY CARE</p>
                <p>Liveon Biolabs Private Limited is an AAALAC international accredited facility and registered with CPCSEA Department of Animal Husbandry and Dairying (DAHD), Ministry of Fisheries, Animal Husbandry and Dairying (MoFAH&D), Government of India. Also, Liveon Biolabs Pvt. Ltd. ensures that experiment/s on animals are performed in accordance with the recommendation of the guidelines for laboratory animal facility 2021.</p>
                <p>During study if any animal gets injured, ill or moribund, care will be taken as per the current veterinary practices. If required, for human reasons animals will be euthanized as per the standard procedures. The objective of the study will be considered before any decision and event of any unlikely situations will be intimated to the sponsor.</p>
              </div>
            </section>

            <section id="sec15" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">15. AMENDMENTS AND DEVIATIONS</p>
                <p>This Study Plan may be amended or subjected to alterations. The amendment to the approved Study Plan will be put in writing and realized only after written consent from the Study Sponsor. If immediate action is necessary, verbal agreement with the Sponsor will be confirmed as soon as possible by Study Plan Amendment.</p>
                <p>Any unintended change(s) to the Study Plan will be documented in the raw data and mentioned in the report as deviation(s).</p>
              </div>
            </section>

            <section id="sec16" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">16. SAFETY PRECAUTIONS</p>
                <p>The personnel involved in study conduct wore all necessary personnel protective equipment like gloves, head cap and face mask in addition to protective body garments and shoes to ensure adequate personnel health and safety and to avoid inhalation and skin contact with the test item.</p>
              </div>
            </section>

            <section id="sec17" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">17. MATERIALS AND METHODS</p>
                <p class="font-weight-bold">17.1 Materials</p>
                <p class="font-weight-bold">17.1.1 Test Item Information</p>
                <p>The Test Item Information provided by the sponsor to Liveon Biolabs Private Limited is furnished below:</p>
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
                <p>The Sponsor is responsible for authenticity of the test item and no further characterization of test item was performed at Liveon Biolabs Private Limited. Test Item information provided by the sponsor to Liveon Biolabs Private Limited through Test Item Information Sheet is presented as Annexure 7.</p>
              </div>
            </section>

            <section id="sec18" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">17.1.2 Test System</p>
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
            </section>

            <section id="sec19" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">17.1.3 Test System Management</p>
                <p class="font-weight-bold">17.1.3.1 Animal Room Preparation</p>
                <p>Prior to housing the animals, the experimental room was decontaminated by fumigation and microbial load were checked by settle plate method. The experimental room floor was mopped daily once.</p>
              </div>
            </section>

            <section id="sec20" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">17.1.3.2 Husbandry Conditions</p>
                <p>Animals were housed in an environment-controlled room temperature of <input type="text" class="form-control no-bord d-inline w-25 text-left" v-model="temp"> and relative humidity of 30-70%. The photoperiod was 12 hrs fluorescent light and 12hrs darkness. Adequate fresh air supply of 12 - 15 air cycles/hr and sound level of less than 80 dB was maintained in the experimental room.</p>
                <p>The relative humidity, maximum and minimum temperature in the experimental room was recorded once daily and temperature and relative humidity included in the study report and kept in study file.</p>
              </div>
            </section>

            <section id="sec21" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">17.1.3.3 Housing</p>
                <p>Individual animal was housed in a standard stainless-steel cage (<input type="text" class="form-control no-bord d-inline w-25 text-left" v-model="cage_size">) provided with stainless steel wire bottom grill facilitated with polycarbonate resting board, feed hopper and polycarbonate water bottle with stainless steel sipper tube. Additionally, hanging bells were be provided as an enrichment device to minimize the animal stress and promote overall wellbeing of animals. Litter trays were provided with bedding material.</p>
                <p>Steam sterilized corn cob were provided as bedding material in litter tray. Based on the latest analytical certificate/s available, there were no known contaminants in the bedding that were expected to interfere with the results of this study. The latest analysis reports of bedding material were included in the Study Report presented in Annexure 8 and 9.</p>
              </div>
            </section>

            <section id="sec22" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">17.1.3.4 Diet and Water</p>
                <p>AF- 1000M R&M Rabbits Diets manufactured by <input type="text" class="form-control d-inline no-bord w-25" v-model="mfg_by_name"> was provided ad <i>libitum</i> mice or others.</p>
                <p>Deep bore-well water subjected to filtration by reverse osmosis and UV sterilized, was provided ad <i>libitum</i> to Rabbits in polycarbonate bottles with stainless rubber corked steel sipper tubes.<br>There were no known contaminants in the food and water provided to the animals.<br>The latest analysis report of feed was included in the Annexure 10 & 11.</p>
                <p>The latest analysis report of water was included in the Annexure 12 & 13.</p>
              </div>
            </section>

            <section id="sec23" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">17.1.4 Test System Preparation</p>
                <p class="font-weight-bold">17.1.4.1 Acclimatization</p>
                <p>After examination for good health and the suitability for the study, the rabbits were acclimatized for 5 days prior to treatment. During acclimatization animals were observed daily once. Veterinary examination was performed before selecting the animals for the study.</p>
              </div>
            </section>

            <section id="sec24" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">17.1.4.2 Animal Identification</p>
                <p>During acclimatization period (Temporary identification), each animal was identified by ear marking with animal number written on the ear lobe using marker pen. The cages were identified with cage cards indicating study number, study code, species, strain, sex, acclimatization start and acclimatization end date.</p>
                <p>During treatment period (Permanent identification), each animal was identified by body marking using 1 % turmeric solution. The cages were identified with cage cards indicating study number, animal accession number, study code, species, strain, sex, treatment start date and experiment end date.</p>
              </div>
            </section>

            <section id="sec25" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">17.1.4.3 Randomization and Grouping</p>
                <p>The animals for the experiment were weighed and arranged in ascending order of their body weights. Animals were randomized during acclimatization using body weight stratification method of randomization and are grouped accordingly such that the mean body weight did not vary ± 20 percent among the groups on the Day 1 of administration.</p>
              </div>
            </section>

            <section id="sec25" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">17.1.4.3 Randomization and Grouping</p>
                <p>The animals for the experiment were weighed and arranged in ascending order of their body weights. Animals were randomized during acclimatization using body weight stratification method of randomization and are grouped accordingly such that the mean body weight did not vary ± 20 percent among the groups on the Day 1 of administration.</p>
              </div>
            </section>

            <section id="sec26" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">17.1.4.4 Clipping of Animals</p>
                <p>For induction phase, the fur of the animals was closely clipped before 24 hrs before the treatment from shoulder region (an area of 3 cm x 5 cm). For challenge phase, the fur was closely clipped from the required flank region [80 sq cm (8 cm x 10 cm)] 24 hrs before treatment. In both the cases care was taken to avoid abrasion on the skin.</p>
              </div>
            </section>

            <section id="sec29" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">17.2 Method</p>
                <p class="font-weight-bold">17.2.1 Experimental Procedure</p>
                <p class="font-weight-bold">17.2.1.1 Selection and Justification for the Choice of Extraction Medium</p>
                <p>The commercially available 0.9% w/v sodium chloride for injection (Normal saline) for polar extraction and sesame oil for non-polar extraction of test item and polar and non-polar vehicle control as per the guideline  ISO 10993 “Biological Evaluation of Medical Devices”, Part 12 (Sample preparation and reference materials).</p>
                <p>Sodium Chloride Injection (NaCl) – Polar Vehicle (Batch No: 2220973, Manufacture Date: 03/2022, Expiry Date: 02/2025 Mfd by: Otsuka Pharmaceutical India Pvt Ltd.</p>
                <p>Sesame oil – Non-Polar Vehicle (Batch No: G/P1, Manufacture Date: 22/03/2022, Expiry Date: 21/06/2023 Mfd by: KLF Nirmal Industries Pvt. Ltd.)</p>
              </div>
            </section>

            <section id="sec30" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">17.3 Test Procedure</p>
                <p class="font-weight-bold">17.3.1.1 Preparation of test item extract</p>
                <p>The Test Item received as a kit which contains 3 different samples Foam, Tubing Material and Thin film. As per ISO 10993-12:2021 (Annexure 1) the extraction ratio was selected as below.</p>
                <p>1) Foam and Tubing Material (0.2g/mL).<br>2) Thin film (6cm2/mL).</p>
                <p>The extraction condition was selected (37 ± 1) °C for (72 ± 2) hrs.</p>
                <p><b>Example For 30mL of Polar Extraction Preparation:</b> 2g and 2g of each Test Item (Foam and Tubing Material) and 60cm2 of Test Item (Thin film) was weighed / taken and transferred to the sterile beaker containing 44 mL of 0.9% NaCl</p>
                <p><b>Example For 30mL of Non-Polar Extraction Preparation:</b> 2g and 2g of each Test Item (Foam and Tubing Material) and 60cm2 of test item (Thin film) was weighed / taken and transferred to the sterile beaker containing 55 mL of sesame oil.
                </p>
                <p>Similar procedure was followed for polar and non-polar control without adding Test Item.</p>
                <p>All the (polar and non-polar test item and polar and non-polar control) were subjected to extraction at 37.0 °C with continuous agitation in orbital shaker incubator at 110 rpm.</p>
                <p>Pre and post extraction condition for the appearance of extracts was checked. The final extract was observed for the presence of visual particles. Extraction procedure was carried out under aseptic condition.</p>
                <p>Absorption ratio of the Form was determined and found to be in range of 14 mL for 0.9% NaCl and 25 mL for sesame oil.</p>
                <p>pH of polar and non-polar test item extracts and control was checked using pH strips and pH was measured between 6-7.</p>
                <p>The left over test item and test item extract after administration is stored in a container and send for disposal.</p>
              </div>
            </section>

            <section id="sec31" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">17.3.1.2 Extraction Conditions</p>
                <p>Vehicle and extraction condition is as depicted below:</p>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th rowspan="2">Date/phase</th>
                      <th rowspan="2">Vehicle</th>
                      <th colspan="3">Extraction Temperature (in ºC)</th>
                      <th rowspan="2">Total Extraction Time</th>
                      <th rowspan="2">Extract appearance</th>
                    </tr>
                    <tr>
                      <th>Set value</th>
                      <th>Maximum</th>
                      <th>Minimum</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowspan="4">From XX/XX/2022 to XX/XX/2022 / Intradermal induction phase</td>
                      <td>Polar Vehicle</td>
                      <td>37.0</td>
                      <td>37.1</td>
                      <td>37.0</td>
                      <td rowspan="4">XXX</td>
                      <td>Clear</td>
                    </tr>
                    <tr>
                      <td>Polar test item extract</td>
                      <td>37.0</td>
                      <td>37.1</td>
                      <td>37.0</td>
                      <td>Clear</td>
                    </tr>
                    <tr>
                      <td>Non-polar vehicle</td>
                      <td>37.0</td>
                      <td>37.1</td>
                      <td>37.0</td>
                      <td>Clear</td>
                    </tr>
                    <tr>
                      <td>Non-Polar test item extract</td>
                      <td>37.0</td>
                      <td>37.1</td>
                      <td>37.0</td>
                      <td>Clear</td>
                    </tr>
                    <tr>
                      <td rowspan="4">From XX/XX/2022 to XX/XX/2022 / Topical induction phase</td>
                      <td>Polar Vehicle</td>
                      <td>37.0</td>
                      <td>37.1</td>
                      <td>37.0</td>
                      <td rowspan="4">XXX</td>
                      <td>Clear</td>
                    </tr>
                    <tr>
                      <td>Polar test item extract</td>
                      <td>37.0</td>
                      <td>37.1</td>
                      <td>37.0</td>
                      <td>Clear</td>
                    </tr>
                    <tr>
                      <td>Non-polar vehicle</td>
                      <td>37.0</td>
                      <td>37.1</td>
                      <td>37.0</td>
                      <td>Clear</td>
                    </tr>
                    <tr>
                      <td>Non-Polar test item extract</td>
                      <td>37.0</td>
                      <td>37.1</td>
                      <td>37.0</td>
                      <td>Clear</td>
                    </tr>
                    <tr>
                      <td rowspan="4">From XX/XX/2022 to XX/XX/2022 / Challenge phase</td>
                      <td>Polar Vehicle</td>
                      <td>37.0</td>
                      <td>37.1</td>
                      <td>37.0</td>
                      <td rowspan="4">XXX</td>
                      <td>Clear</td>
                    </tr>
                    <tr>
                      <td>Polar test item extract</td>
                      <td>37.0</td>
                      <td>37.1</td>
                      <td>37.0</td>
                      <td>Clear</td>
                    </tr>
                    <tr>
                      <td>Non-polar vehicle</td>
                      <td>37.0</td>
                      <td>37.1</td>
                      <td>37.0</td>
                      <td>Clear</td>
                    </tr>
                    <tr>
                      <td>Non-Polar test item extract</td>
                      <td>37.0</td>
                      <td>37.1</td>
                      <td>37.0</td>
                      <td>Clear</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="sec32" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">17.3.1.3 Intradermal Induction Phase</p>
                <p>The animals of test groups (G2a and G2b) and control group (G1a and G1b) were injected with polar and non-polar test item extracts and polar and non-polar vehicle control respectively. The animals were injected at the shoulder region with 0.1 mL per injection of 3 pairs of intradermal injections. Injections 1 and 2 were given near the head region at least 1 cm apart and injections 3 were given 2 cm apart towards caudal part of the body.</p>
                <p><b>Figure 1:</b> Site of intra-dermal injections in the rabbits for maximization test of Magnusson and Kligman (Annexure 3).</p>
                <p>Site A: 1st pair of injection<br>Site B: 2nd pair of injection<br>Site C: 3rd pair of injection</p>
                <p class="font-weight-bold">Polar Vehicle Control (G1a)</p>
                <p>
                  <li>Site ‘A’ was injected intradermally with 0.1 mL of 1:1 mixture (v/v) of FCA in Physiological saline.</li>
                  <li>Site ‘B’ was injected intradermally with 0.1 mL of Polar Vehicle control.</li>
                  <li>Site ‘C’ was injected intradermally with 0.1 mL of 50% v/v polar Vehicle control  in 1:1 mixture (v/v) of FCA in in Physiological saline.</li>
                </p>
                <p class="font-weight-bold">Non-Polar Vehicle Control (G1b)</p>
                <p>
                  <li>Site ‘A’ was injected intradermally with 0.1 mL of 1:1 mixture (v/v) of FCA in Physiological saline </li>
                  <li>Site ‘B’ was injected intradermally with 0.1 mL of non-polar Vehicle control extract.</li>
                  <li>Site ‘C’ was injected intradermally with 0.1 mL of 50% v/v non-polar Vehicle control extract in 1:1 mixture (v/v) of FCA in in Physiological saline.</li>
                </p>
                <p class="font-weight-bold">Polar Test Item Extract (G2a)</p>
                <p>
                  <li>Site ‘A’ was injected intradermally with 0.1 mL of 1:1 mixture (v/v) of FCA in Physiological saline</li>
                  <li>Site ‘B’ was injected intradermally with 0.1 mL of undiluted polar test item extract.</li>
                  <li>Site ‘C’ was injected intradermally with 0.1 mL of 50% v/v undiluted polar test item extract in 1:1 mixture (v/v) of FCA in in Physiological saline.</li>
                </p>
                <p class="font-weight-bold">Non-Polar Test Item Extract (G2b)</p>
                <p>
                  <li>Site ‘A’ was injected intradermally with 0.1 mL of 1:1 mixture (v/v) of FCA in Physiological saline</li>
                  <li>Site ‘B’ was injected intradermally with 0.1 mL of undiluted non-polar test item extract.</li>
                  <li>Site ‘C’ was injected intradermally with 0.1 mL of 50% v/v undiluted Non- polar test item extract in 1:1 mixture (v/v) of FCA in in Physiological saline.</li>
                </p>
              </div>
            </section>

            <section id="sec33" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">17.3.1.5 Challenge Phase</p>
                <p>After 14 days, completion of the topical induction phase (i.e., Day 21), fur was removed from left and right flank areas using electric clipper.</p>
                <p>On day 22, the filter paper (2 cm x 4 cm) was loaded with 0.5mL respective vehicle control and test item extract as below:</p>
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <td rowspan="2">G1a</td>
                      <td>Anterior Right Flank</td>
                      <td>Polar Vehicle Control</td>
                    </tr>
                    <tr>
                      <td>Anterior Left Flank</td>
                      <td>Undiluted Polar Test Item Extract</td>
                    </tr>
                    <tr>
                      <td rowspan="2">G2a</td>
                      <td>Anterior Right Flank</td>
                      <td>Polar Vehicle Control</td>
                    </tr>
                    <tr>
                      <td>Anterior Left Flank</td>
                      <td>Undiluted Polar Test Item Extract</td>
                    </tr>
                    <tr>
                      <td rowspan="2">G1b</td>
                      <td>Anterior Right Flank</td>
                      <td>Non-polar Vehicle Control </td>
                    </tr>
                    <tr>
                      <td>Anterior Left Flank</td>
                      <td>Undiluted Non-Polar Test Item Extract</td>
                    </tr>
                    <tr>
                      <td rowspan="2">G2b</td>
                      <td>Anterior Right Flank</td>
                      <td>Non-polar Vehicle Control </td>
                    </tr>
                    <tr>
                      <td>Anterior Left Flank</td>
                      <td>Undiluted Non-Polar Test Item Extract</td>
                    </tr>
                  </tbody>
                </table>
                <p>The patches were secured with semi occlusive dressing. Patches were removed after 24 hrs.</p>
              </div>
            </section>

            <section id="sec34" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">17.3.1.6 Re-challenge Phase</p>
                <p>Re-challenge phase was not done as there was no signs of any irritation were observed during challenge phase.</p>
              </div>
            </section>

            <section id="sec35" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">18 OBSERVATIONS</p>
                <p class="font-weight-bold">18.1 Mortality, Morbidity and Clinical Signs</p>
                <p>Animals were observed twice daily for mortality, morbidity and once daily for clinical signs throughout the observation period. There were no clinical signs observed, hence the animals were observed once for morbidity and mortality during weekends and holidays.</p>
              </div>
            </section>

            <section id="sec38" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">19. RESULTS</p>
                <p class="font-weight-bold">19.1 Mortality , Morbidity and Clinical Signs</p>
                <p>Refer to Table 1 Appendix 1.</p>
                <p>There were no mortality, Morbidity and clinical signs observed in any of the animals during the study period.</p>
              </div>
            </section>

            <section id="sec39" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">19.2 Body Weights</p>
                <p>Refer to Table 2 and Appendix 2.</p>
                <p>There were no changes in body weight (g) and body weight gain (%) in the test animals when compared to respective Vehicle control during the study period.</p>
              </div>
            </section>

            <section id="sec41" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">20. CONCLUSION</p>
                <p>Based on the above results, the graded (Magnusson and Kligman grading scale) score was 0.The comparison of the skin reaction (at the challenge phase) of the test item treated animals with those of the Vehicle control group animals show that the test item “XLR8 Foam Dressing Kit Large / XF-DLGF1” is classified as “Non-sensitizer” to mice under the stated experimental condition.</p>
              </div>
            </section>

            <section id="sec42" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">21. DATA COMPILATION</p>
                <p>All individual animal data were presented in appendices and summarized and presented in tables. All findings were presented in the report.</p>
              </div>
            </section>

            <section id="sec43" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">22. ANIMAL EUTHANASIA AND DISPOSAL</p>
                <p>At the end of experiment period all the animals were sacrificed using carbon dioxide asphyxiation. The carcasses were stored in deep freezer and disposed of through Medicare Environmental Management Pvt. Ltd.</p>
              </div>
            </section>

            <section id="sec44" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">23. STUDY REPORT DISTRIBUTION</p>
                <p>The Final Study Report will be distributed as follows:<br>Copy No. 1/2 – Sponsor<br>Copy No. 2/2 – Archives, Liveon Biolabs Private Limited</p>
              </div>
            </section>

            <section id="sec45" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">24. ARCHIVING</p>
                <p>All study-related records, Study Plan, Raw Data, Study Report, and the Test Item sample was maintained in the archives of Liveon Biolabs Private Limited for <input type="text" class="form-control d-inline no-bord w-25" v-model="archive_1"> years from the date of study completion. All the records and test item was handled according OECD Principles of GLP for testing of chemicals as specified by international <input type="text" class="form-control d-inline no-bord w-25" v-model="archive_2"> legislation. After the completion of archiving period, the test facility management will coordinate with the sponsor for further course of action on archived material.</p>
              </div>
            </section>

            <section id="sec46" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">25. REFERENCES</p>
                <p>
                  <li>ISO 10993-1:2020: Biological Evaluation of Medical Devices-Part 1: Evaluation and testing within a risk management process.</li>
                  <li>ISO 10993-2:2006-Biological Evaluation of Medical Devices-Part 2: Animal welfare requirements.</li>
                  <li>OECD Principles of GLP for testing of chemicals as specified by international [(C (97)186/Final] legislation.</li>
                  <li>ISO 10993-10: 2021-Biological Evaluation of Medical Devices-Part 10: Tests for Skin Sensitization.</li>
                  <li>ISO 10993-12:2021-Biological Evaluation of Medical Devices-Part 12: Sample preparation and reference materials.</li>
                  <li>ISO/IEC 17025:2017, General Requirements for the Competence of Testing and Calibration Laboratories.</li>
                  <li>The Standard Operating Procedures of Test Facility and the mutually agreed Study Plan.</li>
                  <li>OECD 406: Skin Sensitization, Adopted by the Council on 17th July 1992, OECD Guidelines for Testing of Chemicals.</li>
                </p>
              </div>
            </section>

            <section id="sec47" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">Table 1. Summary of Mortality, Morbidity and Clinical Signs</p>
                <p>Refer to Appendix 1.</p>
                <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>Group</th>
                            <th>Treatment</th>
                            <th>Number of Animals</th>
                            <th>Mortality and Morbidity</th>
                            <th>Clinical Signs</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>G1a</td>
                            <td>Polar Vehicle Control</td>
                            <td>05</td>
                            <td>0/05</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>G2a</td>
                            <td>Polar Test Item Extract</td>
                            <td>10</td>
                            <td>0/10</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>G1b</td>
                            <td>Non-polar Vehicle Control</td>
                            <td>05</td>
                            <td>0/05</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>G2b</td>
                            <td>Non-polar Test Item Extract</td>
                            <td>10</td>
                            <td>0/10</td>
                            <td>1</td>
                          </tr>
                        </tbody>
                      </table>
                <p>1 - Normal; 0/5 = 0 denotes no mortality/morbidity out of 5 animals 0/10 = 0 denotes no mortality/morbidity out of 10 animals</p>
              </div>
            </section>

            <section id="sec48" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">Table 2. Summary of Body Weights (g) and Body Weight Gain (%)</p>
                <p>Refer to Appendix 2.</p>
                <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th rowspan="2">Group and Treatment</th>
                            <th colspan="2">Body Weights (g)</th>
                            <th>Body Weight Change (%)</th>
                          </tr>
                          <tr>
                            <th colspan="2">Day 1</th>
                            <th>Day 25</th>
                            <th>Day 1-25</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td rowspan="3">G1a & Polar Vehicle Control</td>
                            <td>Mean</td>
                            <td>367.64</td>
                            <td>417.89</td>
                            <td>13.74</td>
                          </tr>
                          <tr>
                            <td>± SD</td>
                            <td>17.02</td>
                            <td>12.70</td>
                            <td>1.89</td>
                          </tr>
                          <tr>
                            <td>N</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                          </tr>
                          <tr>
                            <td rowspan="3">G2a & Polar Test Item Extract</td>
                            <td>Mean</td>
                            <td>362.18</td>
                            <td>422.15</td>
                            <td>16.58</td>
                          </tr>
                          <tr>
                            <td>± SD</td>
                            <td>13.32</td>
                            <td>13.32</td>
                            <td>0.75</td>
                          </tr>
                          <tr>
                            <td>N</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                          </tr>
                          <tr>
                            <td rowspan="3">G1b & Non-polar Vehicle Control</td>
                            <td>Mean</td>
                            <td>364.34</td>
                            <td>425.67</td>
                            <td>16.89</td>
                          </tr>
                          <tr>
                            <td>± SD</td>
                            <td>12.85</td>
                            <td>7.12</td>
                            <td>2.19</td>
                          </tr>
                          <tr>
                            <td>N</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                          </tr>
                          <tr>
                            <td rowspan="3">G2b & Non-polar Test Item Extract</td>
                            <td>Mean</td>
                            <td>371.77</td>
                            <td>431.71</td>
                            <td>16.15</td>
                          </tr>
                          <tr>
                            <td>± SD</td>
                            <td>7.92</td>
                            <td>4.86</td>
                            <td>1.50</td>
                          </tr>
                          <tr>
                            <td>N</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                          </tr>
                        </tbody>
                      </table>
                <p>SD: Standard Deviation; N= Number of Animals per Group</p>
              </div>
            </section>

            <section id="sec49" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">Table 3. Summary of Skin Reactions Scoring Induction Phase</p>
                <p>Refer to Appendix 3.</p>
                <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th rowspan="4">Group and Sex</th>
                            <th rowspan="4">Treatment</th>
                            <th colspan="4">Intradermal Induction </th>
                            <th colspan="4">Topical Induction</th>
                          </tr>
                          <tr>
                            <th colspan="4">After Intradermal injection</th>
                            <th colspan="4">After Removal of the patches</th>
                          </tr>
                          <tr>
                            <th colspan="2">At 24 hrs</th>
                            <th colspan="2">At 48 hrs</th>
                            <th colspan="2">At 1 hr</th>
                            <th colspan="2">At 24 hrs</th>
                          </tr>
                          <tr>
                            <th>ERY</th>
                            <th>EDE</th>
                            <th>ERY</th>
                            <th>EDE</th>
                            <th>ERY</th>
                            <th>EDE</th>
                            <th>ERY</th>
                            <th>EDE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>G1a and Male / Female </td>
                            <td>Control</td>
                            <td>0*/05</td>
                            <td>0*/05</td>
                            <td>0*/05</td>
                            <td>0*/05</td>
                            <td>0*/05</td>
                            <td>0*/05</td>
                            <td>0*/05</td>
                            <td>0*/05</td>
                          </tr>
                          <tr>
                            <td>G2a and Male / Female</td>
                            <td>Treated</td>
                            <td>0*/10</td>
                            <td>0*/10</td>
                            <td>0*/10</td>
                            <td>0*/10</td>
                            <td>0*/10</td>
                            <td>0*/10</td>
                            <td>0*/10</td>
                            <td>0*/10</td>
                          </tr>
                          <tr>
                            <td>G1b and Male / Female</td>
                            <td>Control</td>
                            <td>0*/05</td>
                            <td>0*/05</td>
                            <td>0*/05</td>
                            <td>0*/05</td>
                            <td>0*/05</td>
                            <td>0*/05</td>
                            <td>0*/05</td>
                            <td>0*/05</td>
                          </tr>
                          <tr>
                            <td>G2b and Male / Female</td>
                            <td>Treated</td>
                            <td>0*/10</td>
                            <td>0*/10</td>
                            <td>0*/10</td>
                            <td>0*/10</td>
                            <td>0*/10</td>
                            <td>0*/10</td>
                            <td>0*/10</td>
                            <td>0*/10</td>
                          </tr>
                        </tbody>
                      </table>
                <p><b>Note:</b> * - Represents the number of animals showing Skin reactions out of the total number of animals’ induction phase in each group. ERY-Erythema, EDE-Oedema.</p>
              </div>
            </section>

            <section id="sec50" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">Table 4. Summary of Skin Reactions Scoring after Challenge Phase Patch Removal</p>
                <p>Refer to Appendix 4.</p>
                <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th rowspan="2">Group and Sex</th>
                            <th rowspan="2">Treatment</th>
                            <th colspan="2">Skin Reaction Scoring</th>
                          </tr>
                          <tr>
                            <th>24 Hrs after Challenge</th>
                            <th>48 Hrs after Challenge</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>G1a & Male / Female</td>
                            <td>Control</td>
                            <td>0*/05</td>
                            <td>0*/05</td>
                          </tr>
                          <tr>
                            <td>G2a & Male / Female</td>
                            <td>Treated</td>
                            <td>0*/10</td>
                            <td>0*/10</td>
                          </tr>
                          <tr>
                            <td>G1b & Male / Female</td>
                            <td>Control</td>
                            <td>0*/05</td>
                            <td>0*/05</td>
                          </tr>
                          <tr>
                            <td>G2b & Male / Female</td>
                            <td>Treated</td>
                            <td>0*/10</td>
                            <td>0*/10</td>
                          </tr>
                        </tbody>
                      </table>
                <p><b>Note:</b> * - Represents the number of animals showing sensitization response out of the total number of animals challenged in each group.</p>
              </div>
            </section>

            <section id="sec51" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">Appendix 1. Individual Animal Mortality, Morbidity and Clinical Signs</p>
                <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th rowspan="2">Group and Treatment</th>
                            <th rowspan="2">Animal No.</th>
                            <th colspan="25">Day</th>
                          </tr>
                          <tr>
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
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td rowspan="5">G1a & Polar Vehicle Control</td>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td rowspan="5">G2a & Polar Test Item Extract</td>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td rowspan="5">G1b & Non-Polar Vehicle Control</td>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td rowspan="5">G2b & Non-Polar Test Item Extract</td>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                        </tbody>
                      </table>
                <p>1 - Normal; there were no mortality/morbidity occurred in the study.</p>
              </div>
            </section>

            <section id="sec52" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">Appendix 2. Individual Animal Body Weights (g) and Body Weight Gain (%)</p>
                <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th rowspan="2">Group and Treatment</th>
                            <th rowspan="2">Sex</th>
                            <th rowspan="2">Animal No.</th>
                            <th colspan="2">Body Weights (g) on days</th>
                            <th>Body Weight Gain (%)</th>
                          </tr>
                          <tr>
                            <th>Day 1</th>
                            <th>Day 25</th>
                            <th>Day 1-25</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td rowspan="5">G1a & Polar Vehicle Control</td>
                            <td rowspan="20">Male / Female</td>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td rowspan="5">G2a & Polar Test Item Extract</td>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td rowspan="5">G1b & Non-polar Vehicle Control</td>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td rowspan="5">G2b & Non-polar Test Item Extract</td>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>GPbXXXX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                <p>SD: Standard Deviation; N= Number of Animals per Group</p>
              </div>
            </section>

            <section id="sec53" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">Appendix 3. Individual Animal Induction Phase Skin Reactions</p>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th rowspan="4">Animal No.</th>
                      <th rowspan="4">Group / Sex</th>
                      <th colspan="9">(Intradermal induction) Observations post administration</th>
                      <th colspan="4">(Topical Application– Boosting) Observation at post removal of the test patch at injection site</th>
                    </tr>
                    <tr>
                      <th rowspan="3">Injection site No.</th>
                      <th colspan="4">24 hours</th>
                      <th colspan="4">48 hours</th>
                      <th colspan="2">1 hour</th>
                      <th colspan="2">24 hours</th>
                    </tr>
                    <tr>
                      <th colspan="2">ERY</th>
                      <th colspan="2">EDE</th>
                      <th colspan="2">ERY</th>
                      <th colspan="2">EDE</th>
                      <th>ERY</th>
                      <th>EDE</th>
                      <th>ERY</th>
                      <th>EDE</th>
                    </tr>
                    <tr>
                      <th>L</th>
                      <th>R</th>
                      <th>L</th>
                      <th>R</th>
                      <th>L</th>
                      <th>R</th>
                      <th>L</th>
                      <th>R</th>
                      <th colspan="2">Dorsal Area</th>
                      <th colspan="2">Dorsal Area</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td rowspan="15">G1a / Male / Female</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td rowspan="15">G1b / Male / Female</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td rowspan="15">G2a / Male / Female</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td rowspan="15">G2b / Male / Female</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td rowspan="3">GPbXXXX</td>
                      <td>A</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                      <td rowspan="3">0</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>1</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
                <p><b>Key:</b> ERY-Erythema, EDE-Oedema, L-Left, R-Right, 0-No Visible Change, 1-very slight erythema/oedema</p>
              </div>
            </section>

            <section id="sec54" class="mt-0 pl-5 pr-5 pt-3 pb-3">
              <div class="col-12">
                <p class="font-weight-bold">Appendix 4. Individual Animal Skin Reactions Scoring after Challenge Phase Patch Removal</p>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th rowspan="4">Animal No.</th>
                      <th rowspan="4">Sex</th>
                      <th rowspan="4">Group</th>
                      <th colspan="4">(Challenge) Observation at post removal of the test patches at right and left flank</th>
                    </tr>
                    <tr>
                      <th colspan="2">24 hrs</th>
                      <th colspan="2">48 hrs</th>
                    </tr>
                    <tr>
                      <th colspan="2">ERY</th>
                      <th colspan="2">ERY</th>
                    </tr>
                    <tr>
                      <th>Test Site</th>
                      <th>Control Site</th>
                      <th>Test Site</th>
                      <th>Control Site</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GPbXXXX</td>
                      <td rowspan="20">Male / Female</td>
                      <td rowspan="5">G1a</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>GPbXXXX</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>GPbXXXX</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>GPbXXXX</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>GPbXXXX</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>      
                    <tr>
                      <td>GPbXXXX</td>
                      <td rowspan="5">G2a</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>GPbXXXX</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>GPbXXXX</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>GPbXXXX</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>GPbXXXX</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr> 
                    <tr>
                      <td>GPbXXXX</td>
                      <td rowspan="5">G1b</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>GPbXXXX</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>GPbXXXX</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>GPbXXXX</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>GPbXXXX</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr> 
                    <tr>
                      <td>GPbXXXX</td>
                      <td rowspan="5">G2b</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>GPbXXXX</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>GPbXXXX</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>GPbXXXX</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>GPbXXXX</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>   
                  </tbody>
                      </table>
                <p><b>Key:</b> ERY-Erythema, EDE-Oedema, 0-No Visible Change.</p>
              </div>
            </section>

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
  name: 'Study_Report',
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
