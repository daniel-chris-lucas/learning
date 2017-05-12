## 19 - Fun with Macros

### Commands

- `q {key}` - Start recording macro for specified key.
- `Esc q` - Finish recording
- `@ {key}` - Replay macro for key
- `:reg` - View list of existing macros
- `" {key} p` - Print macro including pressed keys.

To make persistent macros, add let @{key} = "Something" into the vimrc file
