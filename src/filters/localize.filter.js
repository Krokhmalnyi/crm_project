import store from '../store'

const locales = {
    'ua-UA': {
        "ProfileTitle": 'Профіль',
        "Name": 'Імя',
        "Message_EnterName": 'Вкажіть імя',
        "Update": 'Оновити'
    },
    'en-US': {
        "ProfileTitle": 'Profile',
        "Name": 'Name',
        "Message_EnterName": 'Enter your name',
        "Update": 'Update'
    
    }
}

export default function localizeFilter(key) {
    const locale = store.getters.info.locale || 'ua-UA'
    return locales[locale] [key] || `[Localize error]: key ${key} not found`
}