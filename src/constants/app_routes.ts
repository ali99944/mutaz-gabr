const AppRoutes = Object.freeze({
    home: '/',
    about: '/about',
    services: '/services',
    gallery: '/gallery',
    projects: '/projects',
    contact: '/contact',
    terms: '/terms',
    privacy: '/privacy',
    projectDetails: '/project/:id',

    getFreeConsultation: '/consultation',

    interior: '/interior',
    kithen: '/kitchen',

    admin: {
        create_manager: '/admin/managers/new',
        login: '/admin/login',
        managers: '/admin/managers',
    }
    
})

export default AppRoutes