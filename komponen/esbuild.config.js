// esbuild.config.js
require('esbuild').build({
    entryPoints: ['./src/index.js'],
    bundle: true,
    outfile: 'out.js',
    external: ['@fortawesome/fontawesome-svg-core'], // Menandai sebagai eksternal
  }).catch(() => process.exit(1));
  