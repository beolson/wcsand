import { Config } from '@stencil/core';
import tailwind from 'stencil-tailwind-plugin';
import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';
import { defaultExtractor } from 'tailwindcss/lib/lib/defaultExtractor'; 



const x = defaultExtractor as any as string[];
export const config: Config = {
  namespace: 'test',
  globalStyle: 'www/tailwind.css',
  plugins: [

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
