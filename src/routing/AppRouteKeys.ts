
enum AppRouteKeys {
    root = '/',
    aboutUs = '/aboutus',
    services = '/services',
    contact = '/contactus',
    gasandHeating = '/services/gas-and-heating',
    plumbing = '/services/plumbing',
    electrics ='/services/electrics',
    drain = '/services/drain',
    lock = '/services/lock',
    privacy ='/terms/privacy',
    contactSupport ='/terms/contact-support',
    faqs ='/terms/faqs',
    termsofuse ='/terms/terms-of-use',
    careers ='/aboutus/careers',
    ourStory ='/aboutus/our-story',
    ourTeam ='/about/our-team'


}

export type AppRouteType = {
    label: string;
    role: string
}


export const AppRouteMap: { [key in AppRouteKeys]: AppRouteType } = {
    '/aboutus': {
        label: 'About Us',
        role: 'none'
    },
    '/contactus': {
        label: 'Contact Us',
        role: 'none'
    },
    '/services': {
        label: 'Services',
        role: 'none'
    },
    '/': {
        label: 'Home',
        role: 'none'
    },
    '/services/gas-and-heating': {
        label: 'Gas & Heating repairs',
        role: 'none'
    },
    '/services/plumbing': {
        label: 'Plumbing',
        role: 'none'
    },
    '/services/electrics' : {
        label: 'Electrics',
        role: 'none'
    },
    '/services/drain' : {
        label: 'Drain',
        role: 'none'
    },
    '/services/lock' : {
        label: 'Lock',
        role: 'none'
    },
    '/terms/contact-support': {
        label: 'Contact Support',
        role: 'none'
    },
    '/terms/faqs' : {
        label: 'FAQs',
        role: 'none'
    },
    '/terms/privacy':{
        label: 'Privacy',
        role: 'none'
    },
    '/terms/terms-of-use' : {
        label: 'Terms of Use',
        role: 'none'
    },
    '/about/our-team' : {
        label: 'Our Team',
        role: 'none'
    },
    '/aboutus/careers' : {
        label: 'Careers',
        role: 'none'
    },
    '/aboutus/our-story' : {
        label: 'Our Story',
        role: 'none'
    }

}

export const AppRouteMapLabel = [
    //{
    //    label: 'Home',
    //    path: '/',
    //    order: 1
    //},
    {
        label: 'About Us',
        path: '/aboutus',
        order: 2
    },
    {
        label: 'Services',
        path: '/services',
        order: 3
    }, {
        label: 'Contact Us',
        path: '/contactus',
        order: 4
    }

]

export default AppRouteKeys;