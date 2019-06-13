import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [{
        path: '/',
        component: resolve => require(['@/views/home/index'], resolve)
        // redirect: '/home/index'
    },
    {
        path: '/home/index',
        name: 'indexs',
        component: resolve => require(['@/views/home/index'], resolve),

        // meta: [{
        //     title: '1中科梧桐-国内领先的人才大数据综合服务提供商-人才研究院'
        // }, {
        //     name: 'keyWords',
        //     content: '人才大数据平台、国际人才共享中心、人才大数据库平台开发、国际院士工作站、国际博士工作站、知识产权专利成果转化、人才研究院'
        // },
        // {
        //     name: 'Description',
        //     content: '致力于应用和融合大数据技术与互联网技术，面向政府提供人才招引方面的综合服务。通过创建良好的人才信息服务模式，为其解决在人才的信息采集、管理、分析、评价、匹配和人才引进工作中的问题'
        // }]

    },
    {
        path: '/aboutus/index',
        name: 'aboutus',
        component: resolve => require(['@/views/aboutus/index'], resolve),
    },
    {
        path: '/service/index',
        name: 'service',
        component: resolve => require(['@/views/service/index'], resolve),
    },
    {
        path: '/service/talent_evaluating',
        name: 'talent_evaluating',
        component: resolve => require(['@/views/service/talent_evaluating'], resolve),
    },
    {
        path: '/service/chengguo',
        name: 'chengguo',
        component: resolve => require(['@/views/service/chengguo'], resolve),
    },
    {
        path: '/solution/index',
        name: 'solution',
        component: resolve => require(['@/views/solution/index'], resolve),
    },
    {
        path: '/bigdata/index',
        name: 'bigdata',
        component: resolve => require(['@/views/bigdata/index'], resolve),
    }, {
        path: '/bigdata/talentspolicy_talentsList',
        namae: 'talentspolicy_talentsList',
        component: resolve => require(['@/views/bigdata/talentspolicy_talentsList'], resolve),
    },
    {
        path: '/bigdata/resumedetails',
        name: 'resumeDetails',
        component: resolve => require(['@/views/bigdata/resumeDetails'], resolve),
    },
    {
        path: '/bigdata/talentspolicy',
        name: 'talentspolicy',
        component: resolve => require(['@/views/bigdata/talentspolicy'], resolve),
    },
    {
        path: '/bigdata/policydetail',
        name: 'policyDetail',
        component: resolve => require(['@/views/bigdata/policyDetail'], resolve),
    }],
    linkActiveClass: 'selected'
})