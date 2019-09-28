### React Autocomplete

A react autocomplete component.

### Package

See: https://github.com/lnwu/autocomplete/packages/27897

### Docs

See: https://lnwu.github.io/autocomplete/

### CI

Using github actions.  
See: https://github.com/lnwu/autocomplete/actions


### Tasks

- [x] Component Feature
- [x] Component Style
- [x] Lint
- [x] Test
- [x] Storybook Docs
- [x] Publish Package

TODO:  
1. For now publish will failed with `yarn publish --patch` no git config setting but publish success  
Need to use `yarn publish --new-version ${GIT_TAG}`  
Need to define `GIT_TAG var in CI`  

2. Fix skipped test