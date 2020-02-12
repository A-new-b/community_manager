const routers = [
    {
        path: '/',
        component: 'component/app',
        children: [
            {
                path: '/asd',
                component: 'component/topics',
                children: [
                    {
                        path: '/asd/login',
                        component: 'component/home'
                    }
                ]
            }
        ]
    }
];

export default routers
