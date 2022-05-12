# @minargs/cli

This CLI is a companion/utility to [`minargs`](https://npmjs.com/package/minargs) allowing you to test out what the parser will return in various scenarios.

### Installation

```bash
# install package globally & call bin...
npm install @minargs/cli -g && minargs

# or, use `npx` to install & call bin...
npx -- @minargs/cli "<args>" [<options>]
```

### Usage

```bash
minargs "<args>" [<options>]
```

### Options

- `--alias` (alias: `a`)
- `--recursive` (alias: `r`) Default: `false`
- `--positionalValues` (alias: `p`) Default: `false`

### Examples

#### Get the # of times a arg was defined (also, using alias')...

```bash
minargs "--foo -f -f -ffff" -a f:foo | jq '.args.foo | length'
```

#### Reading from `stdin`...
```bash
"--foo --bar baz" | minargs
```
