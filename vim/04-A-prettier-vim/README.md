## 04 - A prettier vim

### Adding themes

- If it doesn't already exist create `~/.vim/colors` directory
- Download themes inside the directory then in .vimrc use `colorscheme {name}`
- Fonts: guifont={Fontname}:h{size}
- Use guioptions to remove scrollbars and separators

### Vimrc file:

```
syntax enable

set backspace=indent,eol,start                 "Make backspace behave like every other editor.
let mapleader = ','                            "The default leader is \, but a comma is much better.
set number                                     "Let's activate line numbers.




"-------------Visuals-------------"
colorscheme atom-dark
set t_CO=256                                   "Use 256 colors. This is useful for Terminal Vim.
set guifont=Fira_Code:h13
set linespace=15                               "Macvim-specific line-height.

set guioptions-=l
set guioptions-=L
set guioptions-=r
set guioptions-=R




"-------------Search-------------"
set hlsearch
set incsearch
set incsearch




"-------------Mappings-------------"

"Make it easy to edit Vimrc file.
nmap <Leader>ev :tabedit $MYVIMRC<cr>
nmap <Leader><space> :nohlsearch<cr>




"-------------Auto-Commands-------------"

"Automatically source the Vimrc file on save.
augroup autosourcing
	autocmd!
	autocmd BufWritePost .vimrc source %
augroup END
```
