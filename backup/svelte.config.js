import sveltePreprocess from 'svelte-preprocess';

const preprocessOptions = {
  defaults: {
    script: 'typescript',
    style: 'scss'
  },
  postcss: true
};

export default {
  preprocess: sveltePreprocess(preprocessOptions),

  // Export this to allow rollup.config.js to inherit the same preprocess options.
  preprocessOptions
};
