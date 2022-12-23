import { useContext } from 'react';
import ErrorBoundary from 'state/ErrorBoundary';
import { BrandComponent } from 'components/Blocks';
import { SettingsContext } from 'contexts';
import clsx from 'clsx';

const Header = ({ settings, isLoading }) => {

	const { isSmall } = useContext(SettingsContext).screen;

	const developer = settings?.developer;
	const siteBranding = settings?.siteBranding;

	return (
		<header className="d-print-none">
			<nav
				className="navbar navbar-expand-md navbar-dark navbar-vibrant"
				aria-label="primary"
			>
				<div className="container-fluid">
					<div className={clsx(isSmall ? 'pb-1' : 'ms-5 pb-2')}>
						<ErrorBoundary>
							<BrandComponent
								baseName={siteBranding?.brand || developer?.name}
								isLoading={isLoading}
								small={isSmall}
							/>
						</ErrorBoundary>
					</div>
				</div>
			</nav>
		</header>
	)
};

export default Header;
