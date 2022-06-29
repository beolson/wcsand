import { Config } from '@stencil/core';
import tailwind from 'stencil-tailwind-plugin';

export const config: Config = {
  namespace: 'test',
  plugins: [
    tailwind()
  ],
  devServer: {
    reloadStrategy: 'pageReload'
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
