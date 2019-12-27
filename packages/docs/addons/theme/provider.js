import React, { useState, useEffect } from 'react';
import { addons, makeDecorator } from '@storybook/addons';

import { Provider as ProviderWeb, themes as themesWeb } from '@naturacosmeticos/natds-web';
import { PANEL_ID, CHANGE, PARAM_KEY } from './shared';
import { FORCE_RE_RENDER } from '@storybook/core-events';

const THEME_PROVIDERS = {
  web: {
    provider: ProviderWeb,
    themes: themesWeb,
    defaultTheme: themesWeb.natura.light
  }
};

function getProvider(context) {
  return THEME_PROVIDERS[context] || THEME_PROVIDERS.web;
}

const knobsChange = 'storybookjs/knobs/change';

const backgroundStyles = {
  boxShadow: 'rgba(255,255,255,.1) 0 0 0 1px inset',
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 0
}

const storyStyles = {
  width: '100%',
  position: 'relative',
  zIndex: 1
}

const DEFAULT_BACKGROUND = "transparent";

export const withTheme = makeDecorator({
  name: 'withTheme',
  parameterName: PARAM_KEY,
  skipIfNoParametersOrOptions: true,
  allowDeprecatedUsage: true,
  wrapper: (getStory, storyContext, { options, parameters }) => {
    const channel = addons.getChannel();
    const { context, disableBackground } = parameters;
    const { provider: Provider, themes, defaultTheme } = getProvider(context || options);
    const [theme, setTheme] = useState(defaultTheme);

    useEffect(() => {
      channel.on(CHANGE, ({ type, name }) => {
        setTheme(themes[name][type]);
      });

      channel.on(knobsChange, () => {
        channel.emit(FORCE_RE_RENDER);
      });

      return () => {
        channel.removeListener(CHANGE)
        channel.removeListener(knobsChange)
      }
    }, []);

    const background = disableBackground
      ? DEFAULT_BACKGROUND
      : theme.palette.background.default;

    return (
      <Provider theme={theme}>
        <div style={storyStyles}>{getStory(storyContext)}</div>
        <div style={{ ...backgroundStyles, background }} />
      </Provider>
    );
  },
});
