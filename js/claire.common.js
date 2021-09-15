// filenamePattern: $1.min.$2, minifier: yui-js, buffer: 8388608, minifierOptions: "charset = utf-8"
// Global functions

window.addListenerMulti = function (el, s, fn) {
  _.each(s.split(' '), function(e){ el.addEventListener(e, fn, false) });
}

window._switchLang = function(lang){
  _.each(document.querySelectorAll('#language-panel a.active'), function(x){ x.classList.remove('active') })
  _.each(document.querySelectorAll('#language-panel a[lang="' + lang + '"], #language-panel a[data-lang="' + lang + '"]'), function(x){ x.classList.add('active') })
  if (typeof myVue === 'object') {                          // For main app
    this.language = lang
  } else if (document.querySelectorAll('.multilingual')) {  // For landing page
    _.each(document.querySelectorAll('.multilingual'), function(y){
      y.innerHTML = y.getAttribute(lang) || y.getAttribute('en')
      y.setAttribute('lang', lang)
    })
    _.each(document.querySelectorAll('.swap-language:not([lang="' +  lang + '"])'), function(z){
      z.style.display = 'none'
    })
    _.each(document.querySelectorAll('.swap-language[lang="' +  lang + '"]'), function(z){
      z.style.display = 'block'
    })
  }

}

window._panLanguages = function(touchorigin){
  var myLocation = touchorigin.changedPointers[0] || touchorigin.changedTouches[0]
    , realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY)
    , targetLang = realTarget.getAttribute('data-lang') || realTarget.getAttribute('lang') || 'en' // 'en' for out-of-bounds
  if (!_.isUndefined(targetLang) && this.language != targetLang) {
    if (typeof myVue === 'object') {
      this.switchLang(targetLang)       // main app
    } else if (document.querySelectorAll('.multilingual')) {
      this._switchLang(targetLang)      // landing page
    }
  }
}

// Make hover work properly on mobile, too
_.each(document.querySelectorAll('a:not([lang]):not([data-lang]), #how-it-works img'), function(x){
  addListenerMulti(x, 'touchstart mouseenter', function(){ this.classList.add('active') })
  addListenerMulti(x, 'touchend mouseleave', function(){ this.classList.remove('active') })
})
window.toggleHover = function(el){ el.classList.toggle('active') }

// Android 4.2/4.3 native browser handling
var ua = navigator.userAgent
window.isOldAndroidNonChrome = function(){
  if (/Android 4\.[23]/.test(ua)) {
    return (/Chrome/.test(ua)) ? false : true
  }
  return false
}

if (isOldAndroidNonChrome()) {
  var currentLoc = location.hostname + location.pathname
  // http://stackoverflow.com/questions/12013416/is-there-any-way-in-android-to-force-open-a-link-to-open-in-chrome
  window.location = "googlechrome://navigate?url=" + currentLoc
  _.defer(function(){ window.location.replace('/oldandroid.html') }) // In case they don't have Chrome
}

if (/iP/.test(ua) && /Version\/[1-7]\./.test(ua)) window.location.replace('/oldios.html')
