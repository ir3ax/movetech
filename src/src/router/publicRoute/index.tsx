import { RouteObject } from 'react-router-dom';
import { ProductDetails } from '../../pages/product-details';
import { AppLayout } from '../../components/appLayout';
import { Cart } from '../../pages/cart';
import TermsOfService from '../../pages/termsofservice';
import PrivacyPolicy from '../../pages/privacypolicy';
import CheckOut from '../../pages/checkout';
import { Success } from '../../pages/success';

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
		{
			path: '/cart',
			element: <Cart />
		},
		{
			path: '/termsofservice',
			element: <TermsOfService />
		},
		{
			path: '/privacypolicy',
			element: <PrivacyPolicy />
		},
		{
			path: '/checkout',
			element: <CheckOut />
		},
		{
			path: '/success',
			element: <Success />
		},
	]
}