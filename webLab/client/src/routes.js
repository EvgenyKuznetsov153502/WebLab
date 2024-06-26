import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from './pages/ProductPage'
import Error from "./pages/Error";
import { ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PRODUCT_ROUTE, HOME_ROUTE, Error_ROUTE } from "./utils/consts";

export const authRoutes = [
	{
		path: ADMIN_ROUTE,
		Component: Admin,
	},
	{
		path: BASKET_ROUTE,
		Component: Basket ,
	},
]

export const publicRoutes = [
	{
		path: SHOP_ROUTE,
		Component: Shop,
	},
	{
		path: HOME_ROUTE,
		Component: Home,
	},
	{
		path: LOGIN_ROUTE,
		Component: Login,
	},
	{
		path: REGISTRATION_ROUTE,
		Component: Auth,
	},
	{
		path: PRODUCT_ROUTE + '/:id',
		Component: ProductPage,
	},
	{
		path: Error_ROUTE,
		Component: Error,
	},
]