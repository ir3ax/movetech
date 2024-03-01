import { RouteObject } from 'react-router-dom';
import { ProductDetails } from '../../pages/product-details';
import { AppLayout } from '../../components/appLayout';

export const PublicRoutes: RouteObject = {
	children: [
		{
			path: '/',
			element: <AppLayout />,
		},
		{
			path: '/product-details/:productId',
			element: <ProductDetails />,
		},
	]
}