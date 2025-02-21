#!/usr/bin/env node

import sade from 'sade'
import open from 'open'
import { getPkg } from './lib.js'
import {
  createSpace,
  registerSpace,
  addSpace,
  listSpaces,
  useSpace,
  createDelegation,
  listDelegations,
  addProof,
  listProofs,
  upload,
  remove,
  list,
  whoami
} from './index.js'
import {
  storeAdd,
  uploadAdd
} from './can.js'

const cli = sade('w3')

cli
  .version(getPkg().version)
  .example('up path/to/files')

cli.command('up <file>')
  .alias('upload', 'put')
  .describe('Store a file(s) to the service and register an upload.')
  .option('--no-wrap', 'Don\'t wrap input files with a directory.', false)
  .option('-H, --hidden', 'Include paths that start with ".".')
  .option('-c, --car', 'File is a CAR file.', false)
  .option('--shard-size', 'Shard uploads into CAR files of approximately this size in bytes.')
  .option('--concurrent-requests', 'Send up to this many CAR shards concurrently.')
  .action(upload)

cli.command('open <cid>')
  .describe('Open CID on https://w3s.link')
  .action(cid => open(`https://w3s.link/ipfs/${cid}`))

cli.command('ls')
  .alias('list')
  .describe('List uploads in the current space')
  .option('--json', 'Format as newline delimted JSON')
  .option('--shards', 'Pretty print with shards in output')
  .action(list)

cli.command('rm <root-cid>')
  .example('rm bafy...')
  .describe('Remove an upload from the uploads listing. Pass --shards to delete the actual data if you are sure no other uploads need them')
  .option('--shards', 'Remove all shards referenced by the upload from the store. Use with caution and ensure other uploads do not reference the same shards.')
  .action(remove)

cli.command('whoami')
  .describe('Print information about the current agent.')
  .action(whoami)

cli.command('space')
  .describe('Create and mangage w3 spaces')

cli.command('space create [name]')
  .describe('Create a new w3 space')
  .action(createSpace)

cli.command('space register <email>')
  .describe('Claim the space by associating it with your email address')
  .action(registerSpace)

cli.command('space add <proof>')
  .describe('Add a space to the agent. The proof is a CAR encoded delegation to _this_ agent.')
  .action(addSpace)

cli.command('space ls')
  .describe('List spaces known to the agent')
  .action(listSpaces)

cli.command('space use <did>')
  .describe('Set the current space in use by the agent')
  .action(useSpace)

cli.command('delegation create <audience-did>')
  .describe('Create a delegation to the passed audience for the given abilities with the _current_ space as the resource.')
  .option('-c, --can', 'One or more abilities to delegate.', '*')
  .option('-n, --name', 'Human readable name for the audience receiving the delegation.')
  .option('-t, --type', 'Type of the audience receiving the delegation, one of: device, app, service.')
  .option('-e, --expiration', 'Unix timestamp when the delegation is no longer valid. Zero indicates no expiration.', 0)
  .option('-o, --output', 'Path of file to write the exported delegation data to.')
  .action(createDelegation)

cli.command('delegation ls')
  .describe('List delegations created by this agent for others.')
  .option('--json', 'Format as newline delimted JSON')
  .action(listDelegations)

cli.command('proof add <proof>')
  .describe('Add a proof delegated to this agent.')
  .option('--json', 'Format as newline delimted JSON')
  .option('--dry-run', 'Decode and view the proof but do not add it')
  .action(addProof)

cli.command('proof ls')
  .describe('List proofs of capabilities delegated to this agent.')
  .option('--json', 'Format as newline delimted JSON')
  .action(listProofs)

cli.command('can store add <car-path>')
  .describe('Store a CAR file with the service.')
  .action(storeAdd)

cli.command('can upload add <root-cid> <shard-cid>')
  .describe('Register an upload - a DAG with the given root data CID that is stored in the given CAR shard(s), identified by CAR CIDs.')
  .action(uploadAdd)

cli.parse(process.argv)
