module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        "browser": true,
        "node": true,
        "es6": true
    },
    plugins: [
        '@typescript-eslint',
        'prettier'
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        "typescript"
    ],
    parserOptions: {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    rules: {
        '@typescript-eslint/indent': 'off',
        "no-console": ["error", "allow"],
        indent: ["error", 4]
    }
};