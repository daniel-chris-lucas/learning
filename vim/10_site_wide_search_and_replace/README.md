## 10 - Site-Wide Search and Replace

### Commands

- `:Ag 'John Doe'` - Search for 'John Doe' in project
- `:Gsearch` - Start search tool for replacing
- `Select text using visual mode + :s/from/to` - Replace text in selection
- `:Greplace` - Confirm replacements
- `:wa` - Write all files
- `G` - Bottom of file
- `gg` - Top of the file

### Plugins

[Ag](https://github.com/rking/ag.vim)
[greplace](http://github.com/skwp/greplace.vim)

Ag needs `the_silver_searcher` to be installed. [the_silver_searcher](https://github.com/ggreer/the_silver_searcher)

For MacOS: `brew install the_silver_searcher`

### Vimrc file

```
set nocompatible              				"We want the latest vim settings/options.

so ~/.vim/plugins.vim


syntax enable
set backspace=indent,eol,start				"Make backspace behave like every other editor.
let mapleader = ','					"The default leader is \, but a comma is much better
set number						"Let's activate line numbers.




"------------Visuals-------------"
colorscheme atom-dark
set t_CO=256						"Use 256 colors. This is useful for Terminal vim.
set guifont=Fira_Code:h14				"Set the default font family and size.
set guioptions-=e					"We don't want Gui tabs.
set linespace=15					"Macvim-specific line-height.

set guioptions-=l					"Disable Gui Scrollbars.
set guioptions-=L
set guioptions-=r
set guioptions-=R

"We'll fake a custom left padding for each window.
hi LineNr guibg=bg
set foldcolumn=2
hi foldcolumn guibg=bg

"Get rid of ugly split borders.
hi vertsplit guifg=bg guibg=bg




"------------Search-------------"
set hlsearch						"Highlight all matched terms.
set incsearch						"Incrementally highlight, as we type.




"------------Split Management-------------"
set splitbelow						"Make splits default to below...
set splitright						"And to the right. This feels more natural.

"We'll set simpler mappings to switch between splits.
nmap <C-J> <C-W><C-J>
nmap <C-K> <C-W><C-K>
nmap <C-H> <C-W><C-H>
nmap <C-L> <C-W><C-L>




"------------Mappings-------------"

" Make it easy to edit the Vimrc file.
nmap <Leader>ev :tabedit $MYVIMRC<cr>

" Add simple highlight removal.
nmap <Leader><space> :nohlsearch<cr>

" Quickly browse to any tag/symbol in the project.
" Tip: run ctags -R to regenerate the index.
nmap <Leader>f :tag<space>




"------------Plugins-------------"

"/
"/ CtrlP
"/
let g:ctrlp_custom_ignore = 'node_modules\|DS_Store\|git'
let g:ctrlp_match_window = 'top,order:ttp,min:1,max:30,results:30'

nmap <D-p> :CtrlP<cr>
nmap <D-r> :CtrlPBufTag<cr>
nmap <D-e> :CtrlPMRUFiles<cr>


"/
"/ NERDTree
"/
let NERDTreeHijackNetrw = 0

" Make NERDTree easier to toggle.
nmap <C-K><C-B> :NERDTreeToggle<cr>


"/
"/ Greplace.vim
"/
set grepprg=ag						"We want to use Ag for the search.

let g:grep_cmd_opts = '--line-numbers --noheading'




"------------Auto-Commands-------------"

" Automatically source the Vimrc file on save.
augroup autosourcing
	autocmd!
	autocmd BufWritePost .vimrc source %
augroup END




" Notes and Tips
" - Press 'zz' to instantly center the line where the cursor is located.
```

### Gvimrc file

```
" Disable the print key for Macvim.
if has("gui_macvim")
	macmenu &File.Print key=<nop>
	set macligatures					"We want pretty symbols, when available.
endif
```

### Plugins.vim file

```
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
Plugin 'tpope/vim-vinegar'
Plugin 'scrooloose/nerdtree'
Plugin 'kien/ctrlp.vim'
Plugin 'rking/ag.vim'
Plugin 'skwp/greplace.vim'

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
```
