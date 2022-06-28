import React from 'react';

import { ListUsersView } from './features/user/ui/ListUsersView';
import { Content } from './shared/ui/Content';

function App() {
  return (
    <Content>
      <ListUsersView />
    </Content>
  );
}

export default App;
