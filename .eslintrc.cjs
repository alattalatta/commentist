require('@alattalatta/eslint-config/patch')

module.exports = {
  extends: ['@alattalatta/eslint-config/react', 'next/core-web-vitals'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
}
