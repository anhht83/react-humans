import uuidv4 from 'uuid/dist/v4';
import { Storage } from '../App/helpers';

export const fetchHumans = searchText => {
  const humans = JSON.parse(Storage.get('humans', {}));
  const result = {};
  if (searchText) {
    Object.keys(humans).forEach(id => {
      if (humans[id].name.search(searchText) > -1) {
        result[id] = humans[id];
      }
    });
    return result;
  }
  return humans;
};

export const findHumanById = id => {
  const humans = JSON.parse(Storage.get('humans', {}));
  return humans[id] || null;
};

export const storeHuman = data => {
  const humans = JSON.parse(Storage.get('humans', '{}'));
  const id = data.id || uuidv4();

  humans[id] = { ...(humans[id] || {}), ...data, id };

  Storage.set('humans', JSON.stringify(humans));
  return humans[id];
};

export const removeHuman = id => {
  const humans = JSON.parse(Storage.get('humans', '{}'));
  delete humans[id];
  Storage.set('humans', JSON.stringify(humans));
  return id;
};
