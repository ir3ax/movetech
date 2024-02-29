import { RouteObject } from 'react-router-dom';
import Container from './container';

export const PublicRoutes: RouteObject = {
	path: '/',
	element: <Container />,
	children: [
		// {
		// 	path: '/testing',
		// 	element: <TestingPage />,
		// },
	]
}