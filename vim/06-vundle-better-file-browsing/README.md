## 06 - Vundle and better file browsing

### Commands

- `:e .` = Display current working directory (navigate with hjkl)
- :PluginInstall = Install listed plugins

### Plugins

[Vundle](https://github.com/VundleVim/Vundle.vim)
[vinegar.vim](https://github.com/tpope/vim-vinegar)
[Nerdtree](https://github.com/scrooloose/nerdtree)

### Vinegar (Simple directory explorer)

- `-` = Open directory explorer. Press `-` to go up a directory
- `d` = Create a directory
- `D` = Delete directory / file
- `%` = Create a file

### NERD Tree (Sidebar)

- `:NERDTreeToggle` = Display/Hide sidebar

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

" Make NERDTree easier to toggle.
nmap <C-K><C-B> :NERDTreeToggle<cr>




"------------Auto-Commands-------------"

" Automatically source the Vimrc file on save.
augroup autosourcing
	autocmd!
	autocmd BufWritePost .vimrc source %
augroup END
```

### ~/.vim/plugins.vim file

```
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
Plugin 'tpope/vim-vinegar'
Plugin 'scrooloose/nerdtree'

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
```
