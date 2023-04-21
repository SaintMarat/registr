import Registrationform from '../registratinon/index' ;
import Loginform from '../LogIn/index'
import UsersList from "../userList/index"

export const RouterNames = {
  HOME: '/',
  USERS_LIST: '/users-list',
  LOGIN: '/login',
  USER_DETAILS:'/user-details'
}


export const  PublicRoutes = [
  {
    path: RouterNames.HOME,
    component: <Registrationform/>,
    linkName: 'Registration'
  },
  {
    path: RouterNames.LOGIN,
    component: <Loginform/>,
    linkName: 'Login'
  },
  {
    path: RouterNames.USERS_LIST,
    component: <UsersList/>,
    linkName: 'Users List'
  }

]
export const PrivateRoutes = []
