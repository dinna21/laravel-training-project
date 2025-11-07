import BlogController from './BlogController'
import AdminController from './AdminController'
const Admin = {
    BlogController: Object.assign(BlogController, BlogController),
AdminController: Object.assign(AdminController, AdminController),
}

export default Admin