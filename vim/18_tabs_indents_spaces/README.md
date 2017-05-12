## Tabs, Indents and Spaces

### Commands

- `vat` - Select all tag
- `selection + >` - Indent selection
- `selection + <` - Unindent selection
- `:set tabstop=4` - Make tabs equal to 4 spaces
- `:set shiftwidth=4` - Make indentations equal to 4 spaces in normal mode
- `:set softtabstop=4` - Make indentations equal to 4 spaces in insert mode
- `:set expandtab` - Use spaces for tabs

### .vimrc file

```
set nocompatible              				"We want the latest vim settings/options.

so ~/.vim/plugins.vim


syntax enable
set backspace=indent,eol,start				"Make backspace behave like every other editor.
let mapleader = ','					"The default leader is \, but a comma is much better
set number						"Let's activate line numbers.
set noerrorbells visualbell t_vb=			"No damn bells!
set autowriteall 					"Automatically write the file when switching buffers.
set complete=.,w,b,u 					"Set our desired autocompletion matching.
set tabstop=8
set expandtab
set softtabstop=4
set shiftwidth=4




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
nmap <Leader>es :e ~/.vim/snippets/

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


"/
"/ vim-php-cs-fixer.vim
"/
let g:php_cs_fixer_level = "psr2"

nnoremap <silent><Leader>pf :call PhpCsFixerFixFile()<cr>




"------------Laravel-Specific-------------"
nmap <Leader>lr :e routes/web.php<cr>
nmap <Leader>lm :!php artisan make:
nmap <Leader>lfc :e app/Http/Controllers/<cr>
nmap <Leader>lfm :e app/<cr>
nmap <Leader>lfv :e resources/views/<cr>




"------------Auto-Commands-------------"

" Automatically source the Vimrc file on save.
augroup autosourcing
	autocmd!
	autocmd BufWritePost .vimrc source %
augroup END

function! IPhpInsertUse()
	call PhpInsertUse()
	call feedkeys('a', 'n')
endfunction
autocmd FileType php inoremap <Leader>n <Esc>:call IPhpInsertUse()<cr>
autocmd FileType php noremap <Leader>n :call PhpInsertUse()<cr>

function! IPhpExpandClass()
	call PhpExpandClass()
	call feedkeys('a', 'n')
endfunction
autocmd FileType php inoremap <Leader>nf <Esc>:call IPhpExpandClass()<cr>
autocmd FileType php noremap <Leader>nf :call PhpExpandClass()<cr>

"Sort PHP use statements
"http://stackoverflow.com/questions/11531073/how-do-you-sort-a-range-of-lines-by-length
vmap <Leader>su ! awk '{ print length(), $0 \| "sort -n \| cut -d\\  -f2-" }'<cr>



" Notes and Tips
" - Press 'zz' to instantly center the line where the cursor is located.
```

### .gvimrc file

```
" Disable the print key for Macvim.
if has("gui_macvim")
	macmenu &File.Print key=<nop>
	set macligatures					"We want pretty symbols, when available.
endif
```

### plugins.vim file

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
Plugin 'marcweber/vim-addon-mw-utils'
Plugin 'tomtom/tlib_vim'
Plugin 'garbas/vim-snipmate'
Plugin 'tpope/vim-surround'
Plugin 'StanAngeloff/php.vim'
Plugin 'arnaud-lb/vim-php-namespace'
Plugin 'ervandew/supertab'
Plugin 'stephpy/vim-php-cs-fixer'

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
```
