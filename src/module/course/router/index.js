import Home from '@/module/home/page/home.vue'
import courseList from '@/module/course/page/course_list.vue'
import courseAdd from '@/module/course/page/course_add.vue'
import courseManage from '@/module/course/page/course_manage.vue'
import courseSummary from '@/module/course/page/course_manage/course_summary.vue'
import coursePicture from '@/module/course/page/course_manage/course_picture.vue'
import courseBaseinfo from '@/module/course/page/course_manage/course_baseinfo.vue'
import courseMarketinfo from '@/module/course/page/course_manage/course_marketinfo.vue'
import courseTeacher from '@/module/course/page/course_manage/course_teacher.vue'
import coursePlan from '@/module/course/page/course_manage/course_plan.vue'
import coursePub from '@/module/course/page/course_manage/course_pub.vue'
export default [
  {
    path: '/course',
    component: Home,
    name: '课程管理',
    hidden: false,
    iconCls: 'el-icon-document',
    children: [
      { path: '/course/list', name: '我的课程', component: courseList, hidden: false },
      { path: '/course/add/base', name: '新增课程', component: courseAdd, hidden: true },
      { path: '/course/manager/:courseid',
        name: '管理课程',
        component: courseManage,
        hidden: true,
        children: [
          { path: '/course/manage/plan/:courseid', name: '课程计划', component: coursePlan, hidden: false },
          { path: '/course/manage/baseinfo/:courseid', name: '基本信息', component: courseBaseinfo, hidden: false },
          { path: '/course/manage/picture/:courseid', name: '课程图片', component: coursePicture, hidden: false },
          { path: '/course/manage/marketinfo/:courseid', name: '营销信息', component: courseMarketinfo, hidden: false },
          { path: '/course/manage/teacher/:courseid', name: '教师信息', component: courseTeacher, hidden: false },
          { path: '/course/manage/pub/:courseid', name: '发布课程', component: coursePub, hidden: false },
          { path: '/course/manage/summary/:courseid', name: '课程首页', component: courseSummary, hidden: false }
        ]}
    ]
  }
]
