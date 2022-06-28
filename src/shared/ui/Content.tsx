import React, { PropsWithChildren } from 'react';

import { Pane, majorScale, Heading, Link } from 'evergreen-ui';
import { CreateUser } from '../../features/user/ui/CreateUser';

export const Content: React.FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <Pane>
      <Pane
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height={majorScale(8)}
        backgroundColor="#edeff5"
        paddingX={majorScale(5)}>
        <Heading size={600}>Merehead test</Heading>
        <CreateUser />
      </Pane>
      <Pane paddingX={majorScale(5)} marginY={majorScale(3)}>
        {children}
      </Pane>
    </Pane>
  );
};
