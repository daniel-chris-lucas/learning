## 09 - Browse Like a Pro with Ctags

### Commands

- `ctags -R` - Build tags index for the current directory
- `:tag {query}` - Open file containing the given method name
- `:tn` - Go to the next occurrence of the tag
- `:tp` - Go to previous occurrence of the tag
- `:ts` - Select from list of tags
- `di(` - Delete text inside the ()
- `di'` - Delete text inside the ''
- `ci'` - Change text inside the ''
- `vi`` - Select text inside the ''
- `va{` - Select all text inside {} including the braces
- `:!{command}` - Execute command (eg: :!ls)
- `CTRL+D` - Go down a page
- `gt` - Switch tabs
- `CTRL+]` - Go to function definition

### Note

Ctags might complain about forbidden argument -R. To fix see the following gist :

https://gist.github.com/nazgob/1570678

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

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
```
