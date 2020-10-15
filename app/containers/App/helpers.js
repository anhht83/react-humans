export const Storage = {
  get: (name, defaultValue = null) =>
    window.sessionStorage.getItem(name) ||
    window.localStorage.getItem(name) ||
    defaultValue,
  set: (name, value, remember = true) =>
    remember
      ? window.localStorage.setItem(name, value)
      : window.sessionStorage.setItem(name, value),
  remove: name => {
    window.sessionStorage.removeItem(name);
    window.localStorage.removeItem(name);
  },
};
