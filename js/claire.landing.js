// filenamePattern: $1.min.$2, minifier: yui-js, buffer: 8388608, minifierOptions: "charset = utf-8"

fullpage.initialize('#fullpage', { css3: true })
// use a default instance of Hammer.js on the body to make fullPage.js autoScroll functionality work on iOS
new Hammer(document.querySelector('body'));

// =============================================================================
// Activate the language panel (slightly different behavior than main app)
// =============================================================================

var langPanel = document.querySelector('#language-panel')

_.each(langPanel.querySelectorAll('a'), function(x){
  addListenerMulti(x, 'mouseover touchstart', function(){
    var lang = this.getAttribute('data-lang') || this.getAttribute('lang')
    _switchLang(lang)
  })
})

var langHammer = new Hammer(langPanel)
langHammer.on('pan', function(touchorigin){ _panLanguages(touchorigin) })
langHammer.on('tap', function(e){ e.preventDefault(); return false })

// disable context menu on Android - http://stackoverflow.com/a/28748222
langPanel.addEventListener('contextmenu', function(e){
  e.preventDefault();
  e.stopPropagation();
  return false;
})

// =============================================================================
// Activate the "How it works" section
// =============================================================================
var defaultCaptionHead = "But how does Claire work?"
  , defaultCaptionBody = "Touch a picture to learn more."
  , hiw                = document.getElementById('how-it-works').querySelectorAll('img[heading]')
  , hiwCaptionHead     = document.getElementById('hiw-caption-head')
  , hiwCaptionBody     = document.getElementById('hiw-caption')
_.each(hiw, function(x){
  addListenerMulti(x, 'mouseenter touchstart', function(){
    hiwCaptionHead.innerHTML = this.getAttribute('heading')
    hiwCaptionBody.innerHTML = this.getAttribute('paragraph')
    smartquotes()
  })
  x.addEventListener('mouseleave', function(){
    hiwCaptionHead.innerHTML = defaultCaptionHead
    hiwCaptionBody.innerHTML = defaultCaptionBody
  })
})

smartquotes()

// Prevent fullPage.js FOUC
var mask = document.getElementById('loading-mask')
mask.classList.remove('show')

// Fix strange issue on Firefox
langPanel.style.position = 'absolute'
_.defer(function(){ langPanel.style.position = 'fixed' })

_.delay(function(){ mask.parentNode.removeChild(mask)}, 501)
