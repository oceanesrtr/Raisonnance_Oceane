import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import CreateDecoder from '../pages/CreateDecoder.vue';
import AssociateDecoder from '../pages/AssociateDecoder.vue';
import DissociateDecoder from '../pages/DissociateDecoder.vue';
import CreateChannel from '../pages/CreateChannel.vue';
import AssociateChannel from '../pages/AssociateChannel.vue';
import DissociateChannel from '../pages/DissociateChannel.vue';
import CreateClient from '../pages/CreateClient.vue';
import EditClient from '../pages/EditClient.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/create-decoder', component: CreateDecoder },
    { path: '/associate-decoder', component: AssociateDecoder },
    { path: '/dissociate-decoder', component: DissociateDecoder },
    { path: '/create-channel', component: CreateChannel },
    { path: '/associate-channel', component: AssociateChannel },
    { path: '/dissociate-channel', component: DissociateChannel },
    { path: '/create-client', component: CreateClient },
    { path: '/edit-client', component: EditClient },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
