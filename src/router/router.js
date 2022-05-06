import { createRouter, createWebHashHistory } from 'vue-router';
import isAuthenticatedGuard from './auth-guard';

// Para que no se carguen todos los componentes de manera innecesaria
// y que se vayan cargando de manera independiente, usamos LAZY LOAD
const routes = [
    {
        path: '/',
        redirect: '/dbz',
    },

    {
        path: '/pokemon',
        name: 'pokemon',
        component: () =>
            /*webpackChunkName: "PokemonLayout"*/
            import('@/modules/pokemon/layouts/PokemonLayout.vue'),
        children: [
            // En las rutas hijas no se pone la barra delante en la prop path
            {
                name: 'pokemon-home',
                path: 'home',
                component: () => import('@/modules/pokemon/pages/ListPage.vue'),
            },
            {
                name: 'pokemon-about',
                path: 'about',
                component: () => import('@/modules/pokemon/pages/AboutPage.vue'),
            },
            {
                name: 'pokemon-id',
                path: 'single/:id',
                component: () => import('@/modules/pokemon/pages/PokemonPage.vue'),
                props: (route) => {
                    const id = Number(route.params.id);
                    return isNaN(id) ? { id: 1 } : { id };
                },
            },
            {
                // Path vacio para que sea la home por defecte
                path: '',
                redirect: { name: 'pokemon-home' },
            },
        ],
    },

    {
        path: '/dbz',
        name: 'dbz',
        // Para aplicarle el guard de las auth
        beforeEnter: [isAuthenticatedGuard],
        component: () =>
            /*webpackChunkName: "DBZ Layout"*/
            import('@/modules/dbz/layouts/DbzLayout.vue'),
        children: [
            {
                name: 'dbz-characters',
                path: 'characters',
                component: () =>
                    /*webpackChunkName: "DBZ Characters"*/
                    import('@/modules/dbz/pages/Characters.vue'),
            },
            {
                name: 'dbz-about',
                path: 'about',
                component: () =>
                    /*webpackChunkName: "DBZ About"*/
                    import('@/modules/dbz/pages/About.vue'),
            },
            {
                path: '',
                redirect: { name: 'dbz-characters' },
            },
        ],
    },

    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/modules/shared/pages/NoPageFound.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// Guard global - Sincrono
// router.beforeEach((to, from, next) => {
//     // console.log({ to, from, next });

//     const logged = false;

//     // Si no tiene este next, no se carga la página,
//     // poniendo un condicional podemos hacer rutas privadas
//     logged ? next() : next({ name: 'pokemon-home' });
// });
//

// Guard global - Asincrono
// const canAccess = () => {
//     return new Promise((resolve) => {
//         const random = Math.random() * 100;
//         if (random > 50) {
//             console.log('Autenticado');
//             resolve(true);
//         } else {
//             console.log('NO Autenticado');
//             resolve(false);
//         }
//     });
// };

// router.beforeEach(async (to, from, next) => {
//     const authorized = await canAccess();

//     authorized ? next() : next({ name: 'pokemon-home' });
// });

export default router;
