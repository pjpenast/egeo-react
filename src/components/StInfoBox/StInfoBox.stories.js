import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

import { StInfoBox } from 'egeo-react';

storiesOf('Info Box', module)
  .addWithInfo('default with title and content', () =>
    <StInfoBox title="MAIN TITLE">
      <p>You can put any content here</p>
    </StInfoBox>
  )
  .addWithInfo('default with title and icon', () =>
    <StInfoBox title="Cassandra" icon="icon-cassandra">
      <p>You can put any content here</p>
    </StInfoBox>
  );
