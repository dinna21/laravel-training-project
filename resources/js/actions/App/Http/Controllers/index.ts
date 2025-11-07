import LandinController from './LandinController'
import CompanyController from './CompanyController'
import ServicesController from './ServicesController'
import Admin from './Admin'
import AboutController from './AboutController'
import Settings from './Settings'
import Auth from './Auth'
const Controllers = {
    LandinController: Object.assign(LandinController, LandinController),
CompanyController: Object.assign(CompanyController, CompanyController),
ServicesController: Object.assign(ServicesController, ServicesController),
Admin: Object.assign(Admin, Admin),
AboutController: Object.assign(AboutController, AboutController),
Settings: Object.assign(Settings, Settings),
Auth: Object.assign(Auth, Auth),
}

export default Controllers