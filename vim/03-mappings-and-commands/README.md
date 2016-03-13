## 03 - Mappings and commands

### Commands

- o = Insert on line below
- / = search
- :echo $MYVIMRC = Display path of vimrc file
- :tabedit = open in new tab
- tabc = close tab
- :bd = destroy buffer
- zz = move cursor to center of screen
- [Shift]+V y p = Copy line then paste
- yyp = Copy line then paste
- . = Redo last command

### Vimrc file:

```
  1 syntax enable
  2
  3 colorscheme desert
  4
  5
  6 set backspace=indent,eol,start                 "Make backspace behave like every other editor.
  7 let mapleader = ','                            "The default leader is \, but a comma is much better.
  8 set number                                     "Let's activate line numbers.
  9 set linespace=15                               "Macvim-specific line-height.
 10
 11
 12
 13 "-------------Search-------------"
 14 set hlsearch
 15 set incsearch
 16 set incsearch
 17
 18
 19
 20 "-------------Mappings-------------"
 21
 22 "Make it easy to edit Vimrc file.
 23 nmap <Leader>ev :tabedit $MYVIMRC<cr>
 24 nmap <Leader><space> :nohlsearch<cr>
 25
 26
 27
 28 "-------------Auto-Commands-------------"
 29
 30 "Automatically source the Vimrc file on save.
 31 augroup autosourcing
 32         autocmd!
 33         autocmd BufWritePost .vimrc source %
 34 augroup END
 35
 36 " Wrap gitcommit file types at the appropriate length
 37 filetype indent plugin on
```
