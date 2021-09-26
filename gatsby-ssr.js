import * as React from 'react';
import { getCssText } from './src/theme/stiches.config';
import { globalStyles } from './src/theme/GlobalStyles';

globalStyles();
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style
      id="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssText(),
      }}
    />,
  ]);
};
