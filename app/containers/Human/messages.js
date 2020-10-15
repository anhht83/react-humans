/*
 * Human Messages
 *
 * This contains all the text for the Human container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Human';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Human container!',
  },
});
