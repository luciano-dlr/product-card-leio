import * as ReactDOM from 'react-dom/client';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = ReactDOM.createRoot(div);
    root.unmount();
  });
});
