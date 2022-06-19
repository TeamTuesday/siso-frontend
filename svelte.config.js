const sveltePreprocess = require('svelte-preprocess');

const preprocessOptions = {
    defaults: {
        script: "typescript",
        style: "scss",
    },
    scss: {
        prependData: `@import 'src/variables.scss';`
    },
};

module.exports = {
    preprocess: sveltePreprocess(preprocessOptions),

    // Export this to allow rollup.config.js to inherit the same preprocess options.
    preprocessOptions,
}