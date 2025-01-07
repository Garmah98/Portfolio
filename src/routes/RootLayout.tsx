import { Outlet } from 'react-router';
export default function RootLayout() {
	return (
		<>
			<h1 className='absolute text-red-600'>FUTURE NAVIGATION HERE</h1>
			<Outlet />
		</>
	);
}
