const mock = () => {
    let storage = {};
    return {
      getItem: key => key in storage ? storage[key] : null,
      setItem: (key, value) => storage[key] = value || '',
      removeItem: key => delete storage[key],
      clear: () => storage = {},
    };
  };

const mockLocation = () => {
    return {
      pathname: '/somepathname/end'
    };
  };

Object.defineProperty(window, 'localStorage', {value: mock()});
Object.defineProperty(window, 'sessionStorage', {value: mock()});
Object.defineProperty(window, 'getComputedStyle', {
    value: () => ['-webkit-appearance']
  });
Object.defineProperty(window, 'location', {value: mockLocation()});
Object.defineProperty(document, 'execCommand', {value: () => {}});
