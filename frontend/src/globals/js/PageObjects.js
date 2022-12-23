import React from 'react';
import { ChartIcon } from 'globals/img';

const PageObjects = {

	PATHS: [
		{
			_id: "calculators",
			label: "Calculators",
			path: 'calculators',
			pageHeader: true,
			icon: <ChartIcon />,
			iconPath: 'lineChart',
			page: 'Calculators',
			pageGroup: 'Resources',
			parentID: "resources",
			baseTitle: 'Calculate Precious Metals Prices',
			allowedUsers: ['admin', 'read']
		}
	],

	FILE: (pid) => PageObjects.PATHS.find(_ => _._id === pid),

	groupPages: (group) => PageObjects.PATHS.filter(page => page.pageGroup === group),

	HEADER_NAV: (pid) => PageObjects
		.groupPages(PageObjects.FILE(pid).pageGroup)
		.map(page => ({
			_id: page._id,
			allowedUsers: page?.allowedUsers,
			path: page.path,
			label: page.label,
			active: page._id === pid
		})),

	pageIDs: (group) => Array.from(PageObjects.groupPages(group), ({ _id }) => _id) || [],

	allowedUsers: (pid) => PageObjects.PATHS.find(_ => _._id === pid)?.allowedUsers,

	groupPageIDs: () => PageObjects.PATHS.filter(page => page.pageHeader).map(_ => _._id)
};

export default PageObjects;
