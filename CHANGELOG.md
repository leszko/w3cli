# Changelog

## [1.2.0](https://github.com/web3-storage/w3cli/compare/v1.1.1...v1.2.0) (2023-01-27)


### Features

* `proof add --dry-run --json` to view a delegation ([#40](https://github.com/web3-storage/w3cli/issues/40)) ([c32283a](https://github.com/web3-storage/w3cli/commit/c32283afa4e77895b35ea2055b1a9edf264bd360))

## [1.1.1](https://github.com/web3-storage/w3cli/compare/v1.1.0...v1.1.1) (2023-01-13)


### Bug Fixes

* dont error on systems that cant pass flags to env in shebang ([#38](https://github.com/web3-storage/w3cli/issues/38)) ([1e24e9f](https://github.com/web3-storage/w3cli/commit/1e24e9f581059c0d26d92a8882b0c37f997dc66b))

## [1.1.0](https://github.com/web3-storage/w3cli/compare/v1.0.1...v1.1.0) (2023-01-11)


### Features

* add support for sharded CAR uploads ([#36](https://github.com/web3-storage/w3cli/issues/36)) ([b055c78](https://github.com/web3-storage/w3cli/commit/b055c781e5a955249aaf8a4a07d094c3314a895b))
* adds `w3 rm &lt;root-cid&gt;` cmd ([#20](https://github.com/web3-storage/w3cli/issues/20)) ([899a4d4](https://github.com/web3-storage/w3cli/commit/899a4d4b5b427e1d1814ce2a7702faa6bb916177))


### Bug Fixes

* remove warnings using shebang ([#33](https://github.com/web3-storage/w3cli/issues/33)) ([f3a1aac](https://github.com/web3-storage/w3cli/commit/f3a1aac15eb88cd1096c45d83104fe8b75534c66))

## [1.0.1](https://github.com/web3-storage/w3cli/compare/v1.0.0...v1.0.1) (2022-12-14)


### Bug Fixes

* missing file name when only single path passed to filesFromPaths ([#31](https://github.com/web3-storage/w3cli/issues/31)) ([fc3b5a0](https://github.com/web3-storage/w3cli/commit/fc3b5a0b22b275a3ecd5e680d69dafed099b82fd))

## 1.0.0 (2022-12-14)


### Features

* add `list` command ([#10](https://github.com/web3-storage/w3cli/issues/10)) ([b6cb1f0](https://github.com/web3-storage/w3cli/commit/b6cb1f0be92071622ab413dc3b9a8fb9b7cffc5a))
* add `proof add` command ([#24](https://github.com/web3-storage/w3cli/issues/24)) ([eb32d28](https://github.com/web3-storage/w3cli/commit/eb32d2834b716a352c2e9de7813c69c004b20066))
* add `space` command with `create` and `register` ([#3](https://github.com/web3-storage/w3cli/issues/3)) ([9c25a2d](https://github.com/web3-storage/w3cli/commit/9c25a2dba25f8c2dfafbf18df3f1a733580d9488))
* add `w3 can store add` and `w3 can upload add` commands ([#26](https://github.com/web3-storage/w3cli/issues/26)) ([07fa1b0](https://github.com/web3-storage/w3cli/commit/07fa1b0b1b1500dfebddb8a855807bd45843dba6))
* add `whoami` to print agent DID ([#11](https://github.com/web3-storage/w3cli/issues/11)) ([e3f2497](https://github.com/web3-storage/w3cli/commit/e3f2497514c79c0d1018d92f0ae254d8f2c8ac1e))
* add delegation create command ([#5](https://github.com/web3-storage/w3cli/issues/5)) ([272c53a](https://github.com/web3-storage/w3cli/commit/272c53ab15766c7728b2ec9b8a54fe05b2ad876c))
* add old CLI bin reference ([#4](https://github.com/web3-storage/w3cli/issues/4)) ([9a0716c](https://github.com/web3-storage/w3cli/commit/9a0716c9b33a7c14a5b597287e9fd777bd0474f2))
* delegation ls and proof ls commands ([#22](https://github.com/web3-storage/w3cli/issues/22)) ([04a7d31](https://github.com/web3-storage/w3cli/commit/04a7d31111213a64c5a4a4b9133480c67efeef33))
* sade cli skeleton ([#1](https://github.com/web3-storage/w3cli/issues/1)) ([3104b9f](https://github.com/web3-storage/w3cli/commit/3104b9f70c38682544099f84e150953e2fc7d5b3))
* up command ([#7](https://github.com/web3-storage/w3cli/issues/7)) ([283b938](https://github.com/web3-storage/w3cli/commit/283b93835804b849299ec3c336207348cd305f6a))


### Bug Fixes

* add expiration parameter ([#21](https://github.com/web3-storage/w3cli/issues/21)) ([9457841](https://github.com/web3-storage/w3cli/commit/945784105d54f2b7d051f58dfead48b18a861999))
* better error reporting ([#19](https://github.com/web3-storage/w3cli/issues/19)) ([0f6a2a6](https://github.com/web3-storage/w3cli/commit/0f6a2a66897d2dd117841db59f21e040101b7fb4)), closes [#15](https://github.com/web3-storage/w3cli/issues/15) [#16](https://github.com/web3-storage/w3cli/issues/16)
* create space on register ([#13](https://github.com/web3-storage/w3cli/issues/13)) ([f4a1a0f](https://github.com/web3-storage/w3cli/commit/f4a1a0f996ec091dd514478fb12ed7d3d0aebaec))
* dont emit warnings for fetch api ([#9](https://github.com/web3-storage/w3cli/issues/9)) ([cf52922](https://github.com/web3-storage/w3cli/commit/cf52922157e5601d2dd61c9af29123d27b33bf51))
* files-from-path with common path prefix removed ([#27](https://github.com/web3-storage/w3cli/issues/27)) ([c849d8e](https://github.com/web3-storage/w3cli/commit/c849d8e2699ac32f4babc661a9b1a8267803cc54))
* no build ([72b0bfb](https://github.com/web3-storage/w3cli/commit/72b0bfb7e9ae531edde2629e2f6db9add8add317))
* no-wrap parameter ([#25](https://github.com/web3-storage/w3cli/issues/25)) ([38aa353](https://github.com/web3-storage/w3cli/commit/38aa3539b20c2a1cf309f223eda55c0a944efe07)), closes [#17](https://github.com/web3-storage/w3cli/issues/17)
* space create and register improvements ([#8](https://github.com/web3-storage/w3cli/issues/8)) ([8617b49](https://github.com/web3-storage/w3cli/commit/8617b49ea509e4fec493b77d9c91fc17126e02e3))
