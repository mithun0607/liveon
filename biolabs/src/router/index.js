import { createRouter, createWebHistory } from 'vue-router'

import MainHome from '../components/MainHome'
import LoginHome from '../components/LoginHome'
import SecurityLogin from '../components/SecurityLogin.vue'
import BdLogin from '../components/BdLogin.vue'
import TfmLogin from '../components/TfmLogin.vue'
import TicoLogin from '../components/TicoLogin.vue'
import QaLogin from '../components/QaLogin.vue'
import StudyLogin from '../components/StudyLogin.vue'
import AfmLogin from '../components/AfmLogin.vue'
import SecurityDashboard from '../components/SecurityDashboard.vue'
import SecurityDashboardAdd from '../components/SecurityDashboardAdd.vue'
import SecurityDashboardView from '../components/SecurityDashboardView.vue'
import BdDashboard from '../components/BdDashboard.vue'
import BdDashboardAdd from '../components/BdDashboardAdd.vue'
import BdView from '../components/BdView.vue'
import Tfm_BdDashboard from '../components/Tfm_BdDashboard.vue'
import Tfm_BdView from '../components/Tfm_BdView.vue'
import Tfm_ProjDashboard from '../components/Tfm_ProjDashboard.vue'
import Tfm_ProjView from '../components/Tfm_ProjView.vue'
import Tfm_ProjInner from '../components/Tfm_ProjInner.vue'
import Tico_SecDashboard from '../components/Tico_SecDashboard.vue'
import Tico_SecView from '../components/Tico_SecView.vue'
import TicoDashboard from '../components/TicoDashboard.vue'
import TicoView from '../components/TicoView.vue'
import TicoAdd from '../components/TicoAdd.vue'
import TicoAdd1 from '../components/TicoAdd1.vue'
import Qa_BdDashboard from '../components/Qa_BdDashboard.vue'
import Qa_BdView from '../components/Qa_BdView.vue'
import Qa_ProjDashboard from '../components/Qa_ProjDashboard.vue'
import Qa_ProjView from '../components/Qa_ProjView.vue'
import Qa_ProjInner from '../components/Qa_ProjInner.vue'
import Study_NewDashboard from '../components/Study_NewDashboard.vue'
import Study_NewGpmt from '../components/Study_NewGpmt.vue'
import Study_OngoingDashboard from '../components/gpmt/Study_OngoingDashboard.vue'
import Study_FinalPlan from '../components/gpmt/Study_FinalPlan.vue'
import Study_Schedule from '../components/gpmt/Study_Schedule.vue'
import Study_Data from '../components/gpmt/Study_Data.vue'
import Study_DraftReport from '../components/gpmt/Study_DraftReport.vue'
import Study_Report from '../components/gpmt/Study_Report.vue'
import Study_Allocate from '../components/gpmt/Study_Allocate.vue'
import Study_Comment from '../components/gpmt/Study_Comment.vue'
import Study_OngoingDashboardAst from '../components/ast/Study_OngoingDashboard.vue'
import Study_FinalPlanAst from '../components/ast/Study_FinalPlan.vue'
import Study_ScheduleAst from '../components/ast/Study_Schedule.vue'
import Study_DataAst from '../components/ast/Study_Data.vue'
import Study_DraftReportAst from '../components/ast/Study_DraftReport.vue'
import Study_ReportAst from '../components/ast/Study_Report.vue'
import Study_AllocateAst from '../components/ast/Study_Allocate.vue'
import Study_CommentAst from '../components/ast/Study_Comment.vue'
import Study_OngoingDashboardIrtnzw from '../components/irtnzw/Study_OngoingDashboard.vue'
import Study_FinalPlanIrtnzw from '../components/irtnzw/Study_FinalPlan.vue'
import Study_ScheduleIrtnzw from '../components/irtnzw/Study_Schedule.vue'
import Study_DataIrtnzw from '../components/irtnzw/Study_Data.vue'
import Study_DraftReportIrtnzw from '../components/irtnzw/Study_DraftReport.vue'
import Study_ReportIrtnzw from '../components/irtnzw/Study_Report.vue'
import Study_AllocateIrtnzw from '../components/irtnzw/Study_Allocate.vue'
import Study_CommentIrtnzw from '../components/irtnzw/Study_Comment.vue'
import AfmDashboard from '../components/AfmDashboard.vue'

const routes = [
	{
		path: '/',
		component: MainHome
	},
	{
		path: '/loginhome',
		component: LoginHome
	},
	{
		path: '/security',
		component: SecurityLogin
	},
	{
		path: '/bd',
		component: BdLogin
	},
	{
		path: '/tfm',
		component: TfmLogin
	},
	{
		path: '/tico',
		component: TicoLogin
	},
	{
		path: '/qa',
		component: QaLogin
	},
	{
		path: '/study',
		component: StudyLogin
	},
	{
		path: '/afm',
		component: AfmLogin
	},
	{
		path: '/secdash',
		component: SecurityDashboard
	},
	{
		path: '/secdashadd',
		component: SecurityDashboardAdd
	},
	{	
		name: 'SecViewID',
		path: '/secdashview/:id',
		component: SecurityDashboardView
	},
	{
		path: '/bddash',
		component: BdDashboard
	},
	{
		path: '/bddashadd',
		component: BdDashboardAdd
	},
	{	
		name: 'BDViewID',
		path: '/bdview/:id',
		component: BdView
	},
	{
		path: '/tfmbddash',
		component: Tfm_BdDashboard
	},
	{	
		name: 'TfmBdViewID',
		path: '/tfmbdview/:id',
		component: Tfm_BdView
	},
	{
		path: '/tfmprojdash',
		component: Tfm_ProjDashboard
	},
	{	
		name: 'TfmProjViewID',
		path: '/tfmprojview/:id',
		component: Tfm_ProjView
	},
	{	
		name: 'TfmProjInnerViewID',
		path: '/tfmprojinner/:id',
		component: Tfm_ProjInner
	},
	{
		path: '/ticosecdash',
		component: Tico_SecDashboard
	},
	{	
		name: 'TicoSecViewID',
		path: '/ticosecview/:id',
		component: Tico_SecView
	},
	{
		path: '/ticodash',
		component: TicoDashboard
	},
	{	
		name: 'TicoViewID',
		path: '/ticoview/:id',
		component: TicoView
	},
	{
		path: '/ticoadd',
		component: TicoAdd
	},
	{	
		name: 'TicoAdd1ID',
		path: '/ticoadd1/:id',
		component: TicoAdd1
	},
	{
		path: '/qabddash',
		component: Qa_BdDashboard
	},
	{	
		name: 'QaBdViewID',
		path: '/qabdview/:id',
		component: Qa_BdView
	},
	{
		path: '/qaprojdash',
		component: Qa_ProjDashboard
	},
	{	
		name: 'QaProjViewID',
		path: '/qaprojview/:id',
		component: Qa_ProjView
	},
	{	
		name: 'QaProjInnerViewID',
		path: '/qaprojinner/:id',
		component: Qa_ProjInner
	},
	{
		path: '/studynewdash',
		component: Study_NewDashboard
	},
	{	
		name: 'NewGpmtViewID',
		path: '/studynewgpmt/:id',
		component: Study_NewGpmt
	},
	{	
		name: 'GpmtViewID',
		path: '/studyongoingdash/:id',
		component: Study_OngoingDashboard
	},
	{	
		name: 'FinalPlanGpmtViewID',
		path: '/studyfinalplan/:id',
		component: Study_FinalPlan
	},
	{	
		name: 'StudySchdGpmtViewID',
		path: '/studyschd/:id',
		component: Study_Schedule
	},
	{	
		name: 'StudyDataGpmtViewID',
		path: '/studydata/:id',
		component: Study_Data
	},
	{	
		name: 'StudyDraftReportGpmtViewID',
		path: '/studydraftreport/:id',
		component: Study_DraftReport
	},
	{	
		name: 'StudyReportGpmtViewID',
		path: '/studyreport/:id',
		component: Study_Report
	},
	{
		path: '/studyallocate',
		component: Study_Allocate
	},
	{	
		name: 'GpmtCommentView',
		path: '/studycomment/:id',
		component: Study_Comment
	},
	{	
		name: 'AstViewID',
		path: '/studyongoingdashast/:id',
		component: Study_OngoingDashboardAst
	},
	{	
		name: 'FinalPlanAstViewID',
		path: '/studyfinalplanast/:id',
		component: Study_FinalPlanAst
	},
	{	
		name: 'StudySchdAstViewID',
		path: '/studyschdast/:id',
		component: Study_ScheduleAst
	},
	{	
		name: 'StudyDataAstViewID',
		path: '/studydataast/:id',
		component: Study_DataAst
	},
	{	
		name: 'StudyDraftReportAstViewID',
		path: '/studydraftreportast/:id',
		component: Study_DraftReportAst
	},
	{	
		name: 'StudyReportAstViewID',
		path: '/studyreportast/:id',
		component: Study_ReportAst
	},
	{
		path: '/studyallocateast',
		component: Study_AllocateAst
	},
	{	
		name: 'AstCommentView',
		path: '/studycommentast/:id',
		component: Study_CommentAst
	},
	{	
		name: 'IrtnzwViewID',
		path: '/studyongoingdashirtnzw/:id',
		component: Study_OngoingDashboardIrtnzw
	},
	{	
		name: 'FinalPlanIrtnzwViewID',
		path: '/studyfinalplanirtnzw/:id',
		component: Study_FinalPlanIrtnzw
	},
	{	
		name: 'StudySchdIrtnzwViewID',
		path: '/studyschdirtnzw/:id',
		component: Study_ScheduleIrtnzw
	},
	{	
		name: 'StudyDataIrtnzwViewID',
		path: '/studydatairtnzw/:id',
		component: Study_DataIrtnzw
	},
	{	
		name: 'StudyDraftReportIrtnzwViewID',
		path: '/studydraftreportirtnzw/:id',
		component: Study_DraftReportIrtnzw
	},
	{	
		name: 'StudyReportIrtnzwViewID',
		path: '/studyreportirtnzw/:id',
		component: Study_ReportIrtnzw
	},
	{
		path: '/studyallocateirtnzw',
		component: Study_AllocateIrtnzw
	},
	{	
		name: 'IrtnzwCommentView',
		path: '/studycommentirtnzw/:id',
		component: Study_CommentIrtnzw
	},
	{
		path: '/afmdash',
		component: AfmDashboard
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router


