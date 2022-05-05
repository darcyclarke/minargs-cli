# @minargs/cli

This CLI is a companion/utility to [`minargs`](https://npmjs.com/package/minargs) allowing you to test out what the parser will return in various scenarios.

### Installation

```bash
# install package globally & call bin...
npm install minargs -g && minargs

# or, use `npx` to install & call bin...
npx minargs
```

### Usage

```bash
minargs "<args>" [<options>]
```

### Options

- `--known` (alias: `k`)
- `--multiple` (alias: `m`)
- `--alias` (alias: `a`)
- `--positionalValues` (alias: `p`) Default: `false`

### Examples

#### Get the # of times a arg was defined (using multiples & alias')...

```bash
minargs "--foo -f -f -ffff" -m foo -a f:foo | jq.values.length
```

#### Reading from `stdin`...
```bash
"--foo --bar baz" | minargs -k bar -v bar -s
```
