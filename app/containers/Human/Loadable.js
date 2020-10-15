/**
 *
 * Asynchronously loads the component for Human
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
