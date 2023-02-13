import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { registerLicense} from '@syncfusion/ej2-base' 

registerLicense("Mgo+DSMBaFt/QHRqVVhjVFpGaV5HQmFJfFBmR2lde1RwckU3HVdTRHRcQlxiT35Rck1nXntYd30=;Mgo+DSMBPh8sVXJ0S0J+XE9HflRAQmJMYVF2R2BJfVR0cF9GZkwgOX1dQl9gSX9ScEVhXXdad3BdRmk=;ORg4AjUWIQA/Gnt2VVhkQlFadVdJX3xIe0x0RWFab1x6cFFMYFpBNQtUQF1hSn5Sd0NjW3tWdHNRT2JV;OTQ1Njc5QDMyMzAyZTM0MmUzMFF1VUxhdFY2MzVEK09HankxWElYZ2F6RFdnYzE5L2ZZcEgzYlZXQkVjTWc9;OTQ1NjgwQDMyMzAyZTM0MmUzMFNmSG5WQzB5bTV3SnFmTEJFNldoWnByR3Fud0NQL3Z4Z2Y2RWdXcUs4Zkk9;NRAiBiAaIQQuGjN/V0Z+WE9EaFxKVmFWf1ZpR2NbfE5yflFCalxXVAciSV9jS31Td0RlWX1aeHBSQ2RZWA==;OTQ1NjgyQDMyMzAyZTM0MmUzMENYSzJRREcxdGV5aGhwQVhCUXN4N2N6ZCtTYTNwOFJ1VExDbSs3dHVJWDg9;OTQ1NjgzQDMyMzAyZTM0MmUzMG1MWm41MVgySWRQU08zVTlaRFlmTmZDNlZKditGR0VzRFRsaHRjQjk3Szg9;Mgo+DSMBMAY9C3t2VVhkQlFadVdJX3xIe0x0RWFab1x6cFFMYFpBNQtUQF1hSn5Sd0NjW3tWdHNQT2hV;OTQ1Njg1QDMyMzAyZTM0MmUzMEdnamJES2JoZlNkRE5XM1FZYzFrVGE5MFo4YmpmeWRjUXhIRks4cVdRRjA9;OTQ1Njg2QDMyMzAyZTM0MmUzMExhMlBQNXkxU2tWci9qbUd1NS9saVhoUkd5TGlWK1NWNEE0UUNGOXdHb3M9;OTQ1Njg3QDMyMzAyZTM0MmUzMENYSzJRREcxdGV5aGhwQVhCUXN4N2N6ZCtTYTNwOFJ1VExDbSs3dHVJWDg9");

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faEye, faEnvelope, faAngleDown)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')

// https://github.com/SyncfusionExamples/getting-started-with-the-vue-schedular

// ALTER TABLE draftnzw_plan
// ADD COLUMN short1 text NOT NULL AFTER study_end_date,
// ADD COLUMN full1 text NOT NULL AFTER short1,
// ADD COLUMN short2 text NOT NULL AFTER full1,
// ADD COLUMN full2 text NOT NULL AFTER short2,
// ADD COLUMN short3 text NOT NULL AFTER full2,
// ADD COLUMN full3 text NOT NULL AFTER short3,
// ADD COLUMN short4 text NOT NULL AFTER full3,
// ADD COLUMN full4 text NOT NULL AFTER short4,
// ADD COLUMN short5 text NOT NULL AFTER full4,
// ADD COLUMN full5 text NOT NULL AFTER short5,
// ADD COLUMN short6 text NOT NULL AFTER full5,
// ADD COLUMN full6 text NOT NULL AFTER short6,
// ADD COLUMN short7 text NOT NULL AFTER full6,
// ADD COLUMN full7 text NOT NULL AFTER short7,
// ADD COLUMN short8 text NOT NULL AFTER full7,
// ADD COLUMN full8 text NOT NULL AFTER short8,
// ADD COLUMN short9 text NOT NULL AFTER full8,
// ADD COLUMN full9 text NOT NULL AFTER short9,
// ADD COLUMN short10 text NOT NULL AFTER full9,
// ADD COLUMN full10 text NOT NULL AFTER short10,
// ADD COLUMN short11 text NOT NULL AFTER full10,
// ADD COLUMN full11 text NOT NULL AFTER short11,
// ADD COLUMN short12 text NOT NULL AFTER full11,
// ADD COLUMN full12 text NOT NULL AFTER short12,
// ADD COLUMN short13 text NOT NULL AFTER full12,
// ADD COLUMN full13 text NOT NULL AFTER short13,
// ADD COLUMN short14 text NOT NULL AFTER full13,
// ADD COLUMN full14 text NOT NULL AFTER short14,
// ADD COLUMN short15 text NOT NULL AFTER full14,
// ADD COLUMN full15 text NOT NULL AFTER short15,
// ADD COLUMN short16 text NOT NULL AFTER full15,
// ADD COLUMN full16 text NOT NULL AFTER short16,
// ADD COLUMN short17 text NOT NULL AFTER full16,
// ADD COLUMN full17 text NOT NULL AFTER short17,
// ADD COLUMN short18 text NOT NULL AFTER full17,
// ADD COLUMN full18 text NOT NULL AFTER short18,
// ADD COLUMN short19 text NOT NULL AFTER full18,
// ADD COLUMN full19 text NOT NULL AFTER short19,
// ADD COLUMN short20 text NOT NULL AFTER full19,
// ADD COLUMN full20 text NOT NULL AFTER short20,
// ADD COLUMN short21 text NOT NULL AFTER full20,
// ADD COLUMN full21 text NOT NULL AFTER short21,
// ADD COLUMN short22 text NOT NULL AFTER full21,
// ADD COLUMN full22 text NOT NULL AFTER short22;