<h1 align="center">⁂<br/>web3.storage</h1>
<h3 align="center">💾 w3 command line interface.</h3>
<p align="center">
  <a href="https://github.com/web3-storage/w3cli/actions/workflows/test.yml"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/web3-storage/w3cli/test.yml?branch=main&style=for-the-badge" /></a>
  <a href="https://discord.com/channels/806902334369824788/864892166470893588"><img src="https://img.shields.io/badge/chat-discord?style=for-the-badge&logo=discord&label=discord&logoColor=ffffff&color=7389D8" /></a>
  <a href="https://github.com/web3-storage/w3cli/blob/main/LICENSE.md"><img alt="License: Apache-2.0 OR MIT" src="https://img.shields.io/badge/LICENSE-Apache--2.0%20OR%20MIT-yellow?style=for-the-badge" /></a>
</p>

> ### ⚠️❗ w3cli and the underlying APIs are currently beta preview features
> Please read the beta [Terms of Service](https://purrfect-tracker-45c.notion.site/w3up-beta-Terms-of-Service-39cb5c13439849beae327a2efec9164a) for more details.
>
> Open an issue on the repo or reach out to the #web3-storage channel on [IPFS Discord](https://docs.ipfs.tech/community/chat/#discord) if you have any 
questions!

## Getting started 

Install the CLI from npm :

```console
npm install -g @web3-storage/w3cli
```

Create a new space for storing your data and register it:

```console
w3 space create Documents # pick a good name!
w3 space register alice@example.com
```

Upload a file or directory:

```console
w3 up recipies.txt
```

## Commands

* Basics
  * [`w3 up`](#w3-up-path-path)
  * [`w3 ls`](#w3-ls)
  * [`w3 rm`](#w3-rm-root-cid) <sup>coming soon!</sup>
  * [`w3 open`](#w3-open-cid)
  * [`w3 whoami`](#w3-whoami)
* Space management
  * [`w3 space add`](#w3-space-add-proofucan)
  * [`w3 space create`](#w3-space-create-name)
  * [`w3 space ls`](#w3-space-ls)
  * [`w3 space register`](#w3-space-register-email)
  * [`w3 space use`](#w3-space-use-did)
* Capability management
  * [`w3 delegation create`](#w3-delegation-create-audience-did)
  * [`w3 delegation ls`](#w3-delegation-ls)
  * [`w3 proof add`](#w3-proof-add-proofucan)
  * [`w3 proof ls`](#w3-proof-ls)
* Advanced usage
  * [`w3 can space info`](#w3-can-space-info-did) <sup>coming soon!</sup>
  * [`w3 can space recover`](#w3-can-space-recover-email) <sup>coming soon!</sup>
  * [`w3 can store add`](#w3-can-store-add-car-path)
  * [`w3 can store ls`](#w3-can-store-ls) <sup>coming soon!</sup>
  * [`w3 can store rm`](#w3-can-store-rm-car-cid) <sup>coming soon!</sup>
  * [`w3 can upload add`](#w3-can-upload-add-root-cid-shard-cid-shard-cid)
  * [`w3 can upload ls`](#w3-can-upload-ls) <sup>coming soon!</sup>
  * [`w3 can upload rm`](#w3-can-upload-rm-root-cid) <sup>coming soon!</sup>

---

### `w3 up <path> [path...]`

Upload file(s) to web3.storage. The IPFS Content ID (CID) for your files is calculated on your machine, and sent up along with your files. web3.storage makes your content available on the IPFS network

- `--no-wrap` Don't wrap input files with a directory.
- `-H, --hidden` Include paths that start with ".".
- `-c, --car` File is a CAR file.
- `--shard-size` Shard uploads into CAR files of approximately this size in bytes.
- `--concurrent-requests` Send up to this many CAR shards concurrently.

### `w3 ls`

List all the uploads registered in the current space.

- `--json` Format as newline delimted JSON
- `--shards` Pretty print with shards in output

### `w3 rm <root-cid>`

Remove an upload from the uploads listing. Note that this command does not remove the data from the IPFS network, nor does it remove it from space storage (by default).

- `--shards` Also remove all shards referenced by the upload from the store. Use with caution and ensure other uploads do not reference the same shards.

### `w3 open <cid>`

Open a CID on https://w3s.link in your browser. You can also pass a CID and a path.

```bash
# opens a browser to https://w3s.link/ipfs/bafybeidluj5ub7okodgg5v6l4x3nytpivvcouuxgzuioa6vodg3xt2uqle
w3 open bafybeidluj5ub7okodgg5v6l4x3nytpivvcouuxgzuioa6vodg3xt2uqle

# opens a browser to https://w3s.link/ipfs/bafybeidluj5ub7okodgg5v6l4x3nytpivvcouuxgzuioa6vodg3xt2uqle/olizilla.png
w3 open bafybeidluj5ub7okodgg5v6l4x3nytpivvcouuxgzuioa6vodg3xt2uqle/olizilla.png
```

### `w3 whoami`

Print information about the current agent.

### `w3 space add <proof.ucan>`

Add a space to the agent. The proof is a CAR encoded delegation to _this_ agent.

### `w3 space create [name]`

Create a new w3 space with an optional name.

### `w3 space ls`

List spaces known to the agent.

### `w3 space register <email>`

Claim the space by associating it with your email address.

### `w3 space use <did>`

Set the current space in use by the agent.

### `w3 delegation create <audience-did>`

Create a delegation to the passed audience for the given abilities with the _current_ space as the resource.

* `--can` One or more abilities to delegate, default `*` (everything).
* `--name` Human readable name for the audience receiving the delegation.
* `--type` Type of the audience receiving the delegation, one of: device, app, service.
* `--output` Path of file to write the exported delegation data to.

### `w3 delegation ls`

List delegations created by this agent for others.

- `--json` Format as newline delimted JSON

### `w3 proof add <proof.ucan>`

Add a proof delegated to this agent. The proof is a CAR encoded delegation to _this_ agent. Note: you probably want to use `w3 space add` unless you know the delegation you received targets a resource _other_ than a w3 space.

### `w3 proof ls`

List proofs of delegated capabilities. Proofs are delegations with an audience matching the agent DID.

- `--json` Format as newline delimted JSON

### `w3 can space info <did>`

### `w3 can space recover <email>`

### `w3 can store add <car-path>`

Store a [CAR](https://ipld.io/specs/transport/car/carv1/) file to web3.storage.

### `w3 can store ls`

### `w3 can store rm <car-cid>`

### `w3 can upload add <root-cid> <shard-cid> [shard-cid...]`

Register an upload - a DAG with the given root data CID that is stored in the given CAR shard(s), identified by CAR CIDs.

### `w3 can upload ls`

### `w3 can upload rm <root-cid>`

## Contributing

Feel free to join in. All welcome. Please read our [contributing guidelines](https://github.com/web3-storage/w3cli/blob/main/CONTRIBUTING.md) and/or [open an issue](https://github.com/web3-storage/w3cli/issues)!

## License

Dual-licensed under [MIT + Apache 2.0](https://github.com/web3-storage/w3cli/blob/main/LICENSE.md)
