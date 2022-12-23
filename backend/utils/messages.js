import htmlTemplate from './htmlTemplate.js';

const { noAccessWrapper, notFoundPage } = htmlTemplate

const messages = {

    noAccess: () => noAccessWrapper('Access Denied','You dont have permission to view this site.', '403 Forbidden'),

    serverError: () => noAccessWrapper('Server Error', 'The server has encountered a situation it does not know how to handle.', '500 Internal Server Error'),

    notFound: () => notFoundPage('Page Not Found'),

    notFoundJSON: 'the JSON file you\'re looking for cannot be located.',

    notFoundText: 'the Text file you\'re looking for cannot be located.',

    root:  () => noAccessWrapper('No Access', 'Please set to production.', '401 Unauthorized'),

    accessDenied: 'Access Denied! You dont have permission to view this site.',

    errorWithServer: 'Server Error. The server has encountered a situation it does not know how to handle.',

    noContent: 'No Content. The server has successfully processed the request and is not returning any content.',

}

export default messages;
