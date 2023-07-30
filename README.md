# Learn TypeScript

## Setup Guides

- `tsc src/index.ts`
- `tsc --init`
  - generate tsconfig.json
- `tsc -w`
  - compile after configuring `rootdir` and `outdir` in `tsconfig`
  - `-w` flag for hotfixes
- `npm init -y`
  - generate package.json
- `npm install nodemon concurrently`
  - nodemon: run app with hotfixes after every compilation
  - concurrently: run multiple scripts (i.e. compile & run) in one cmd
