import * as React from 'react';

import Table from '@addons/Table/Table';
import SpacingScale from './Spacing.scale';
import SpacingPadding from './Spacing.padding';
import SpacingMargin from './Spacing.margin';
import tokensParams from '../shared';

import { tokens } from '@naturacosmeticos/natds-styles';

const { spacing } = tokens;

function mapSchema(item: any) {
  return [
    {
      name: item[0],
      type: 'text'
    },
    {
      name: item[1],
      type: 'text'
    }
  ];
}

const spacingSchema = {
  head: ['name', 'value'],
  body: Object.entries(spacing).map(mapSchema)
};

export default {
  title: 'Design Tokens|Spacing',
  parameters: {
    docs: {
      container: null,
      page: () => (<Table schema={spacingSchema} title="Spacing" />)
    },
    ...tokensParams
  }
};

export const Scale = () => (
  <SpacingScale spacing={spacing} />
);

export const Padding = () => (
  <SpacingPadding spacing={spacing} />
);

export const Margin = () => (
  <SpacingMargin spacing={spacing} />
);
