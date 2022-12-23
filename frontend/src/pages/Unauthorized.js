import { AccessDeniedIcon } from 'globals/img';
import { AlertPage, Layout } from 'Layout';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ErrorBoundary from 'state/ErrorBoundary';

const Unauthorized = () => {

	const { settings, isLoading } = useSelector(state => state.settings);

	const navigate = useNavigate();

	useEffect(() => {
		window.onbeforeunload = () => {
			navigate('/');
		}
		return () => {
			window.onbeforeunload = null;
		}
	}, [navigate]);

	return (
		<Layout
			settings={settings}
			isLoading={isLoading}
		>
			<ErrorBoundary>
				<AlertPage
					title="Unauthorized Access."
					label="Go Back"
					BackGroundSVG={AccessDeniedIcon}
					onClickHandler={() => navigate('/')}
				/>
			</ErrorBoundary>
		</Layout>
	)
}

export default Unauthorized
