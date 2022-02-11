import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import SearchPage from '@/views/SearchPage.vue';
import Parts from '@/views/Parts.vue';
import BrowseParts from '@/components/BrowseParts.vue';
import RobotHeads from '@/components/RobotHeads.vue';
import RobotArms from '@/components/RobotArms.vue';
import RobotTorsos from '@/components/RobotTorsos.vue';
import RobotBases from '@/components/RobotBases.vue';
import TopBannerStandard from '@/components/TopBannerStandard.vue';
import TopBannerBuild from '@/components/TopBannerBuild.vue';
import RobotBuilder from '@/components/RobotBuilder.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      topbanner: TopBannerStandard,
    },
  },
  {
    path: '/build',
    name: 'Build',
    components: {
      default: RobotBuilder,
      topbanner: TopBannerBuild,
    },
  },
  {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        name: 'BrowseHeads',
        path: 'heads',
        component: RobotHeads,
      },
      {
        name: 'BrowseArms',
        path: 'arms',
        component: RobotArms,
      },
      {
        name: 'BrowseTorsos',
        path: 'torsos',
        component: RobotTorsos,
      },
      {
        name: 'BrowseBases',
        path: 'bases',
        component: RobotBases,
      },

    ],
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: Parts,
    props: true,
    // route guard
    beforeEnter(to, from, next) {
      const isValidId = Number.isInteger(Number(to.params.id));
      next(isValidId);
    },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchPage,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
