module.exports = {
   env: {
      // browser: false,
      commonjs: true,
      es6: true,
      node: true,
      browser: true,
   },
   plugins: [
      "eslint-plugin-import",
      "eslint-plugin-import-helpers",
      "import",
      "prettier",
      "simple-import-sort",
   ],
   extends: [
      "next/core-web-vitals",
      "airbnb-base",
      "plugin:prettier/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
   ],
   parserOptions: {
      ecmaVersion: "latest",
      ecmaFeatures: {
         experimentalObjectRestSpread: true,
         jsx: false,
      },
   },

   rules: {
      "simple-import-sort/imports": "warn",
      "no-restricted-imports": [
         "error",
         {
            paths: [
               {
                  name: "rxjs/Rx",
                  message: "Please import directly from 'rxjs' instead",
               },
            ],
         },
      ],
      "no-restricted-syntax": [
         "warn",
         {
            selector:
               "CallExpression[callee.object.name='console'][callee.property.name=/^(debug|log|time|timeEnd|trace)$/]",
            message: "Unexpected property on console object was called",
         },
      ],
      "object-curly-spacing": ["error", "always"],
      "no-multi-spaces": ["error"],
      "arrow-body-style": "error",
      complexity: ["warn", 20],
      "constructor-super": "error",
      curly: "error",
      "dot-notation": "error",
      "eol-last": "error",
      eqeqeq: ["error", "smart"],
      "guard-for-in": "error",
      "id-match": "error",
      "import/no-default-export": "off",
      "import/no-deprecated": "warn",
      "import/no-internal-modules": "off",
      "import/order": "off",
      "max-classes-per-file": ["error", 1],
      // "max-len": [
      //    "warn",
      //    {
      //       code: 150,
      //    },
      // ],
      "new-parens": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-cond-assign": "error",
      "no-debugger": "error",
      "no-duplicate-case": "error",
      "no-duplicate-imports": "error",
      "no-empty": "warn",
      "no-eval": "error",
      "no-extra-bind": "error",
      "no-fallthrough": "error",
      "no-invalid-this": "error",
      "no-irregular-whitespace": "error",
      "no-multiple-empty-lines": [
         "error",
         {
            max: 1,
         },
      ],
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-redeclare": "error",
      "no-return-await": "error",
      "no-sequences": "error",
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "error",
      "no-shadow": [
         "error",
         {
            hoist: "all",
         },
      ],
      "no-throw-literal": "error",
      "no-trailing-spaces": "error",
      "no-undef-init": "error",
      "no-unsafe-finally": "error",
      "no-unused-expressions": "error",
      "no-unused-labels": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-const": "error",
      "prefer-object-spread": "error",
      "quote-props": ["error", "as-needed"],
      radix: "error",
      "use-isnan": "error",
      "valid-typeof": "off",

      "import-helpers/order-imports": [
         "warn",
         {
            // example configuration
            newlinesBetween: "always",
            groups: ["module", "/^@shared/", ["index", "sibling", "parent"]],
            alphabetize: { order: "asc", ignoreCase: true },
         },
      ],
      "import/newline-after-import": ["error", { count: 1 }],

      "no-continue": "off",
      "no-promise-executor-return": "off",
      "consistent-return": "off",
      "no-plusplus": "off",
      "no-await-in-loop": "off",
      // allow multiple line
      "prettier/prettier": "off",
      "no-unused-vars": "warn",
   },
};
