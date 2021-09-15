// filenamePattern: $1.min.$2, minifier: yui-js, buffer: 8388608, minifierOptions: "charset = utf-8"

var claireApiServer = '//learnengli.sh/api'

/*if (/localhost/.test(window.location.hostname) || /ngrok/.test(window.location.hostname)) {
	console.log("Using local dev server for Claire API, port 5000")
  var claireApiServer = '//localhost:5000'
}*/

helpTranslations = {
  "inputPrompt": {
    "en": "Type your sentence here.",
    "es": "Introduzca aquí una frase en inglés.",
    "pt": "Digite aqui uma frase em inglês.",
    "fr": "Tapez ici une phrase en anglais.",
    "de": "Tippen Sie hier auf Englisch einen Satz.",
    "jp": "ここに英語の文章を入力してください。",
    "kr": "여기 영어 문장을 입녁하세요.",
    "zh-CN": "在这里用英语输入句子。",
    "zh-TW": "在這裡用英語輸入句子。",
    "hi": "यहाँ इंग्लिश में वाक्य टाइप करें ।",
    "ml": "ഇവിടെ ഇംഗ്ലിഷിൽ വാചകം ടൈപ്പ് ചെയ്യുക."
  },
  "subject": {
    "en": "subject",
    "es": "sujeto",
    "pt": "sujeito",
    "fr": "sujet",
    "de": "Subjekt",
    "jp": "主語",
    "kr": "주어",
    "zh-CN": "主语",
    "zh-TW": "主語",
    "hi": "कर्ता",
    "ml": "കർത്താവ്"
  },
  "verb": {
    "en": "verb",
    "es": "verbo",
    "pt": "verbo",
    "fr": "verbe",
    "de": "Verb",
    "jp": "動詞",
    "kr": "동사",
    "zh-CN": "动词",
    "zh-TW": "動詞",
    "hi": "क्रिया",
    "ml": "ക്രിയ"
  },
  "object": {
    "en": "object",
    "es": "objeto",
    "pt": "objeto",
    "fr": "objet",
    "de": "Objekt",
    "jp": "目的語",
    "kr": "목적어",
    "zh-CN": "受词",
    "zh-TW": "受詞",
    "hi": "कारक",
    "ml": "കർമ്മം"
  },
  "tense": {
    "en": "tense",
    "es": "tiempo",
    "pt": "tempo",
    "fr": "temps",
    "de": "Zeit",
    "jp": "自制",
    "kr": "텐스",
    "zh-CN": "时态",
    "zh-TW": "時態",
    "hi": "काल",
    "ml": "കാലം"
  },
  "complexPhrase": {
    "en": "a complex phrase",
    "es": "una frase compleja",
    "pt": "uma frase complexa",
    "fr": "une phrase complexe",
    "de": "ein komplex Satzteil,",
    "jp": "複雑な節",
    "kr": "복잡한 어절",
    "zh-CN": "这复杂的短语",
    "zh-TW": "這複雜的短語",
    "hi": "मिश्रित उपवाक्य",
    "ml": "ഈ സങ്കീര്‍ണ്ണമായ ഉപവാക്യത്തിന്"
  },
  "modifyingPhrase": {
    "en": "that has a modifying phrase",
    "es": "que tiene una frase modificador",
    "pt": "que tem uma frase modificador",
    "fr": "qui a une phrase modificateur",
    "de": "der einen Attributsatz habe",
    "jp": "その節を修飾する節",
    "kr": "그 어절을 수식하는 어절",
    "zh-CN": "有修饰短语",
    "zh-TW": "有修飾短語",
    "hi": "जिस के पास अश्रित उपवाक्य है",
    "ml": "ആശ്രിത ഉപവാക്യമുണ്ട്"
  },
  "purpleWords": {
    "en": "purple words",
    "es": "palabras moradas",
    "pt": "palavras roxas",
    "fr": "mots violets",
    "de": "lila Wörter",
    "jp": "すみれ色の言葉",
    "kr": "보라색 단어",
    "zh-CN": "雪青色的单词",
    "zh-TW": "雪青色的單詞",
    "hi": "बैंगनी में शब्द",
    "ml": "പർപ്പിളിലുള്ള\nവാക്കുകൾ"
  },
  "orangeWords": {
    "en": "orange words",
    "es": "palabras naranjas",
    "pt": "palavras laranjas",
    "fr": "mots oranges",
    "de": "orange Wörter",
    "jp": "オレンジ色の単語",
    "kr": "주황색 단어",
    "zh-CN": "橘黄色的单词",
    "zh-TW": "橘黃色的單詞",
    "hi": "नारंगी में शब्द",
    "ml": "ഓറഞ്ചിലുള്ള\nവാക്കുകൾ"
  },
  "seeMoreInfo": {
    "en": "see more information\nabout your entry",
    "es": "ver más informaciones\nsobre su frase",
    "pt": "ver mais informações\nsobre a sua frase",
    "fr": "voir plus d'informations\nsur votre phrase",
    "de": "weitere Informationen\nüber Ihren Satz sehen",
    "jp": "文章の詳細を見る",
    "kr": "문장의 상세한 것을 보다",
    "zh-CN": "显示句子的详细信息",
    "zh-TW": "顯示句子的詳細信息",
    "hi": "इस अभिलेख के बारेमें\nविस्तार से जानना",
    "ml": "വാചകത്തിനെ കുറിച്ചുള്ള\nകൂടുതൽ വിവരങ്ങൾക്ക്"
  },
  "copyToClipboard": {
    "en": "copy to clipboard",
    "es": "copiar al portapapeles",
    "pt": "copiar para o clipboard",
    "fr": "copier dans le presse-papiers",
    "de": "in Zwischenablage kopieren",
    "jp": "クリップボードにコピー",
    "kr": "클립보드에 카피하다",
    "zh-CN": "复制到剪贴板",
    "zh-TW": "複製到剪貼板",
    "hi": "क्लिपबोर्ड पे कॉपी करना",
    "ml": "ക്ലിപ്പ്ബോർഡിലേക്ക്\nകോപ്പി ചെയ്യുക"
  }
}

// =============================================================================
// Utility / window-scope functions
// =============================================================================

function getStyle(el, prop){
  var style = window.getComputedStyle(el, null).getPropertyValue(prop)
  return (/^\d+/.test(style)) ? parseInt(style, 10) : style
}

function clearSelection() { // http://stackoverflow.com/a/6562764
  if (document.selection) {
    document.selection.empty();
  } else if (window.getSelection) {
    window.getSelection().removeAllRanges();
  }
}

function isDescendantOfClass(child, cls){
  var node = child.parentNode
  while (node != null && node != document) {
    if (node.classList.contains(cls)) return true
    node = node.parentNode
  }
  return false
}

// adapted from http://codepen.io/Merri/pen/nhijD
function mousewheelCompatibility(e) {
	// here we do only compatibility stuff
	// very old IE support
	if (!e) e = window.event;
	// no need to convert more than this, we normalize the value anyway
	e.deltaY = -e.wheelDelta;
	// and then call our main handler
	wheelHandler(e);
}
function wheelHandler(e) {
	var html            = document.getElementsByTagName('html')[0]
		, htmlTop         = 0
		, htmlBlockScroll = 0
		, minDeltaY
	// normalize Y delta
	if (minDeltaY > Math.abs(e.deltaY) || !minDeltaY) {
		minDeltaY = Math.abs(e.deltaY);
	}

	// prevent other wheel events and bubbling in general
	if(e.stopPropagation) {
		e.stopPropagation();
	} else {
		e.cancelBubble = true;
	}

	// most often you want to prevent default scrolling behavior (full page scroll!)
	if( (e.deltaY < 0 && this.scrollTop === 0) || (e.deltaY > 0 && this.scrollHeight === this.scrollTop + this.clientHeight) ) {
		if(e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
	} else {
		// safeguard against fast scroll in IE
		if(!htmlBlockScroll) {
			htmlTop = html.scrollTop;
		}
		htmlBlockScroll++;
		// even IE11 updates scrollTop after the wheel event :/
		setTimeout(function() {
			htmlBlockScroll--;
			if(!htmlBlockScroll && html.scrollTop !== htmlTop) {
				html.scrollTop = htmlTop;
			}
		}, 0);
	}
}
function confineScroll(element){
	isIE8 = document.createElement('a');
	// do not add twice!
	if(element.removeWheelListener) return;
	// I think this is the most reliable way to detect IE8
	isIE8.innerHTML = '<!--[if IE 8]><span></span><![endif]-->';
	isIE8 = isIE8.children.length > 0;
	// use standard method except if the browser is IE8
	if (element.addEventListener && !isIE8) {
		element.addEventListener('wheel', wheelHandler, false);
		element.addEventListener('mousewheel', mousewheelCompatibility, false);
		// expose a remove method
		element.removeWheelListener = function() {
			element.removeEventListener('wheel', wheelHandler, false);
			element.removeEventListener('mousewheel', mousewheelCompatibility, false);
			element.removeWheelListener = undefined;
		};
	} else if (element.attachEvent) {
		// IE8 and older
		element.attachEvent('onmousewheel', mousewheelCompatibility);
		// expose a remove method
		element.removeWheelListener = function() {
			element.detachEvent('onmousewheel', wheelHandler);
			element.removeWheelListener = undefined;
		};
	}
}

function positionAnnotationBlock(host, block){

  var aStyle = block.style
	if (aStyle.display === 'block') return // already styled this block

	aStyle.left = (host.offsetWidth / 2) + 'px' // horizontally center on center axis of syntagma
	aStyle.display = 'block' // mark as already-styled

  var pAnns = block.classList.contains('paragraph-annotations')
    , aRect = block.getBoundingClientRect()
		, rightEdge = window.innerWidth
  // paragraph stub blocks go to left side
  if (pAnns) {
    aStyle.left = '-250px'
  // RIGHT SIDE PROBLEMS: if the annotation block would leak past the right side,
  // pin it to 20px from right side
  } else if (aRect.right > rightEdge) {
    var difference = aRect.right - rightEdge
    aStyle.left = (host.offsetWidth / 2 - difference - 20) + 'px'
  }

  var bottom = document.getElementById('output')
    , footerHeight = document.querySelector('footer').offsetHeight
	  , footerTop = document.querySelector('footer').offsetTop
    , top = getStyle(bottom, 'padding-top')
    , availableSpace = window.innerHeight - footerHeight - top
  // BOTTOM SIDE PROBLEMS: if the annotation block is taller than the available #output space,
  // limit it to the available space & make it scroll
  if (aRect.height > availableSpace) {
    aStyle.height = (availableSpace - 25) + 'px'
    aStyle.overflowY = 'scroll'
    aStyle.top = (top - aRect.top + 70) + 'px'
    if (pAnns) _.defer(function(){ aStyle.left = '-270px' }) // scrollbar should not overlap zoom button
		confineScroll(block)
    return // don't go further (otherwise zoom-button blocks get messed up)
  }
  if (pAnns) aStyle.top = '-20px'
  // if a zoom-button block or normal block would leak over the footer,
  // flush the bottom with the footer
  if (aRect.bottom > footerTop) {
    var difference = aRect.bottom - footerTop
    aStyle.top = (footerHeight - difference) + 'px'
  }
}

var blanket = document.getElementById('blanket')
var fixedFace = document.getElementById('fixed-claire-face')

function focusOnInput() {
  document.getElementById('input-box').focus()
  blanket.classList.add('show')
  if (!document.querySelector('#input .claire-face').offsetParent) fixedFace.classList.add('show')
  if (!_.isUndefined(myVue.helpIsOn)) myVue.helpIsOn = false
}

function hideBlanket() {
  _.map([blanket, fixedFace], function(x){ x.classList.remove('show') })
}

function resizeInput(){
  var textbox      = document.getElementById('input-box')
    , scrollval    = textbox.value ? textbox.scrollHeight : getStyle(textbox, 'min-height')
  textbox.style.height = scrollval + 'px'
  textbox.parentNode.style.height = (scrollval + 20) + 'px'
  // push the output down by increasing the top padding
  // (input div has fixed position, but behavior is a little different between vertical/full view)
  var isVerticlaire = getStyle(document.querySelector('#input-left'), 'display') === 'none'
    , bottom        = document.getElementById('output')
    , topCurHeight  = parseInt(textbox.parentNode.style.height, 10)
    , topEl         = isVerticlaire ? document.querySelector('#input-right .bubble') : document.querySelector('#input-left')
    , topMinHeight  = isVerticlaire ? getStyle(topEl, 'min-height') : getStyle(topEl, 'min-height') + getStyle(topEl, 'padding-top')
    , z             = isVerticlaire ? 50 : 0 // mobile view - equal spacing whether min or not
  bottom.style.paddingTop = (Math.max(topMinHeight, topCurHeight) + z) + 'px'

  // Don't auto-scrollToTop on mobile because (1) scrolling up and down triggers the browser chrome on/off,
  // which resizes the window and causes a delayed scroll without resize-intent from the user and
  // (2) the window can't be resized anyway
  if (!('ontouchstart' in window)) zenscroll.toY(0)
}

var lazyResize = _.debounce(resizeInput, 200)

// =============================================================================
// Vue instance
// =============================================================================

Vue.filter('markdown', function(input){
	return smartquotes(micromarkdown.parse(input))
})

Vue.use(VueTouch)

var Annotation = Vue.extend({
  template: '#annotation',
  props: ['paraIndex', 'sentIndex', 'syntagmaIndex', 'annotation'],
  ready: function(){
    var host  = this.$el.parentNode.parentNode
      , block = this.$el.parentNode
    if (!host) return
    positionAnnotationBlock(host, block)
  }
})

var Syntagma = Vue.extend({
  template: '#syntagma',
  props: ['paraIndex', 'sentIndex', 'syntagmaIndex', 'syntagma'],
  components: {
    'annotation': Annotation
  },
  data: function(){
    return {
      showingLabel: false,
      showingAnnotations: false,
      highlightStatus: {
        'active': false,
        'subject': false,
        'object': false,
        'dependent': false
      }
    }
  },
  computed: {
    // Only used for the "underline" display
    height: function(){ return this.syntagma.height ? this.syntagma.height : 0 }
  },
  methods: {
    unfocus: function(){
      this.showingLabel = false
      this.$dispatch('triggerHighlights') // hide all highlights
    },
    focus: function(){
      this.showingLabel = true
      this.$dispatch('triggerHighlights', this)
    },
    // Only used for the special touchstart behavior
    // The entire interaction CAN be handled cleanly with just MOUSEENTER & MOUSELEAVE, on desktop and mobile.
    // However, on mobile, MOUSELEAVE is only triggered by a TOUCHEND directly on another element, not TOUCHSTART.
    // To get the feeling of "instant" responsiveness, use TOUCHSTART, but make it do the work of MOUSELEAVE(others) + MOUSEENTER(thisOne).
    unfocusAndFocus: function(event){

			if (isDescendantOfClass(event.target, 'annotation-block')) {
				// Touch an annotation block: DO NOT preventDefault() - that will disable scrolling the annotation block if necessary
			} else if (this.showingLabel && /Android/.test(navigator.userAgent) && this.$el.contains(event.target)) {
				return // On Android, don't redraw if user clicks on the currently-focused syntagma - it's very laggy, esp. when clicking the zoom button
			} else {
				this.$parent.$parent.$broadcast('reset') // Touch a syntagma - hide all other open elements
				event.preventDefault() // prevent Android from triggering mouse events
			}

      this.$parent.$parent.$broadcast('noLabels')
      var that = this
      _.defer(function(){ that.focus() })

    },
    showAnnotations: function(){
      this.$parent.$parent.$broadcast('reset')
			this.$parent.$parent.$emit('hideHelp')
      this.showingAnnotations = true
    }
  },
  events: {
    noLabels: function(){
      this.showingLabel = false
    },
    reset: function(){
      this.showingAnnotations = false
    }
  }
})

var ParagraphInfo = Vue.extend({
  template: '#paragraph-info',
  props: ['paraIndex', 'original', 'firstpass', 'allchanges', 'annotationCount', 'entryNumber', 'revision'],
  ready: function(){
    var host  = this.$el.parentNode.parentNode
      , block = this.$el.parentNode
    if (!host) return
    positionAnnotationBlock(host, block)
  }
})

var Paragraph = Vue.extend({
  template: '#paragraph',
  components: {
    'syntagma': Syntagma,
    'paragraph-info': ParagraphInfo,
    'annotation': Annotation
  },
  data: function(){
    return {
      showingMobileAnnotations: false,
      showingParagraphInfo: false,
      copyboxExists: false,
      showingCopybox: false,
      showingSuccessbox: false,
      iOS: (/iP/.test(navigator.userAgent))
    }
  },
  computed: {
    entryNumber: function(){
      return this.totalParagraphs - this.paraIndex
    },
    allAnnotations: function(){
      anns = []
      _.each(this.paragraph, function(sent){
        _.each(sent, function(syn){
          anns = anns.concat(syn.annotations)
        })
      })
      return anns
    },
    // Get annotation type + total occurence for the entire sentence.
    annotationCount: function(){
      var types = _.pluck(this.allAnnotations, 'type')
      var counted = _.countBy(_.sortBy(types))
      return counted
    },
    noAnnotations: function(){
      return this.allAnnotations.length === 0
    }
  },
  events: { // These will be triggered by a parent or child component
    reset: function(){
      this.showingParagraphInfo = false
      return true
    },
    resetMobileAnnotations: function(){
      this.showingMobileAnnotations = false
    },
    noLabels: function(){ // Only used for the special touchstart behavior
      this.$emit('triggerHighlights')
      return true
    },
    triggerHighlights: function(activeSyntagma){
      // change class of all highlight divs depending on hover status & syntagma data (subject, object, jurisdiction)
      // if activeSyntagma is not specified, then remove all highlights
      _.each(this.$children, function(someSyn){
        if (!_.isUndefined(activeSyntagma) && someSyn.sentIndex === activeSyntagma.sentIndex) {
          someSyn.highlightStatus = {
            'active': someSyn.syntagmaIndex === activeSyntagma.syntagmaIndex,
            'subject': someSyn.syntagmaIndex === activeSyntagma.syntagma.subject,
            'object': someSyn.syntagmaIndex === activeSyntagma.syntagma.object,
            'dependent': _.contains(activeSyntagma.syntagma.jurisdiction, someSyn.syntagmaIndex)
          }
        } else {
          someSyn.highlightStatus = {
            'active': false,
            'subject': false,
            'object': false,
            'dependent': false
          }
        } // end if
      }) // end each
    } // end function
  },
  methods: {
    toggleMobileParagraphInfo: function(){

      if (this.showingMobileAnnotations) {
        this.showingMobileAnnotations = false
      } else {
        this.$parent.$broadcast('resetMobileAnnotations')
        this.showingMobileAnnotations = true
        var zoomButton = this.$el.querySelector('.mobile-only .zoom')
        // the expand animation takes 300ms, so don't bother calculating the scroll destination until then
        _.delay(function(){
          var topSpace    = getStyle(document.getElementById('output'), 'padding-top')
            , target      = zoomButton.parentNode.parentNode.parentNode // originally `zoomButton` when this was in the top center
            , destination = document.body.scrollTop + target.getBoundingClientRect().top - topSpace - 20
          zenscroll.toY(destination)
        }, 400)
      }

    },
    toggleFullParagraphInfo: function(){
      if (this.showingParagraphInfo) {
        this.showingParagraphInfo = false
      } else {
				this.$parent.$emit('hideHelp')
        this.$parent.$broadcast('reset')
				this.$parent.$broadcast('noLabels')
        this.showingParagraphInfo = true
      }
    },
    // One-click copy of the revised text. Normal copy-paste is not possible because the output is divided into chunks.
    copyRevision: function(){
      this.copyboxExists = true
      var that = this
      _.defer(function(){ // defer b/c copyboxExists causes a transition from {display: none} to {display: block}
        that.$el.querySelector('.copybox input').select()
        // Chrome allows copying via JavaScript
        try {
          var successful = document.execCommand('copy') || copy(getSelection().toString())
          // but sometimes execCommand doesn't work, so fall back to copy() - http://stackoverflow.com/a/33321129
          if (successful) {
            that.copyboxExists = false
            that.showingSuccessbox = true
            _.delay(function(){ that.showingSuccessbox = false }, 750)
            return true
          }
        } catch (err) {

        }
        // Safari doesn't, and neither does Firefox if it's not triggered by the user - toggle copybox display
        if (that.showingCopybox) {
          that.showingCopybox = false
          _.delay(function(){ that.copyboxExists = false }, 300)
        } else {
          that.showingCopybox = true
        }

      }) // end defer
    },
    destroyCopybox: function(){
      this.showingCopybox = false
      this.copyboxExists = false
    }
  },
  props: ['paraIndex', 'paragraph', 'totalParagraphs']
})

var myVue = new Vue({
  el: '#app',
  data: {
    input: '',
    paragraphs: [],
    waitingForAPI: false,    // for loader
    speechRecognizer: undefined,
    isListeningToVoice: false,     // for Google Voice API
    finalTranscript: '',
    inactiveParagraphs: [],  // for demo
    demoData: [],            // for demo
    demoMode: false,         // for demo
    demoAppend: true,        // for demo
    helpIsOn: false,         // for help
    language: 'en',          // for help
    help: helpTranslations   // for help
  },
  components: {
    'paragraph': Paragraph
  },
  computed: {
    totalParagraphs: function(){ return this.paragraphs.length }
  },
  events: {
    clearInput: function(){
      var that = this
      _.delay(function(){ that.input = '' }, 100)
    },
		hideHelp: function(){
			this.helpIsOn = false
		}
  },
  ready: function(){
    if (/Android/.test(navigator.userAgent)) {
      // ignore android for now, browser support for speech rec is a question mark
    } else if (window.webkitSpeechRecognition) {
      this.speechRecognizer = new webkitSpeechRecognition()
      this.speechRecognizer.continuous = true
      this.speechRecognizer.interimResults = false
      this.speechRecognizer.onstart = function() {
        myVue.isListeningToVoice = true
      }
      this.speechRecognizer.onerror = function(event) {
        //if (event.error == 'no-speech') ignore_onend = true
        //if (event.error == 'audio-capture') ignore_onend = true
        //if (event.error == 'not-allowed') ignore_onend = true
      }
      this.speechRecognizer.onend = function() {
        myVue.isListeningToVoice = false
        //if (ignore_onend) return
        if (!myVue.finalTranscript) return
      }
      this.speechRecognizer.onresult = function(event) {
        //myVue.interimTranscript = ''
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            myVue.finalTranscript += event.results[i][0].transcript
          } else {
            //myVue.interimTranscript += event.results[i][0].transcript
          }
        }
        myVue.input = myVue.finalTranscript
      }
    } // end if
  }, // end ready
  methods: {
    reset: function(event){ // click outside annotation to hide it
      if (isDescendantOfClass(event.target, 'annotation-block') || event.target.classList.contains('zoom')) return false
      this.$broadcast('reset')
      if ('ontouchstart' in document.documentElement) this.$broadcast('noLabels')
    },
		loadDemoData: function(){

			if (!/demodata/.test(document.getElementsByTagName('script')[0].src)) {
				this.waitingForAPI = true
				var scriptTag = document.createElement('script')
				scriptTag.src = "/js/claire.demodata.js"
				scriptTag.type = 'text/javascript'
				scriptTag.async = true
				var headTag = document.getElementsByTagName('head')[0]
				headTag.appendChild(scriptTag)
			}
			if (typeof claireDemoData === 'object') {
				this.waitingForAPI = false
				this.demoData = _.shuffle(claireDemoData)
				this.toggleDemoMode() // note, 'event' is undefined
			} else {
				window.setTimeout(myVue.loadDemoData, 100)
			}

		},
    toggleDemoMode: function(event){
			if (!_.isUndefined(event)) { // copy-button clicks, and context-menu clicks
				if (event.target.classList.contains('copy') || event.srcEvent.ctrlKey === true) return
			}

      if (this.demoMode) { // Deactivate demo
        this.demoMode = false
        this.demoData = _.compact(this.demoData.concat(this.paragraphs))
        this.paragraphs = this.inactiveParagraphs
        this.inactiveParagraphs = []
			} else if (!this.demoData.length) {
				this.loadDemoData()
			} else { // Activate demo
        this.demoMode = true
        this.inactiveParagraphs = this.paragraphs
        this.paragraphs = []
      }

    },
    toggleVoice: function() {
      if (!this.speechRecognizer) return false
      if (this.isListeningToVoice) {
        this.speechRecognizer.stop()
        return
      }
      this.finalTranscript = ''
      this.speechRecognizer.lang = 'en-US'
      this.speechRecognizer.start()
    },
    addParagraph: function(ev) {

      _.defer(function(){
        // Compensate for enterKey-as-submit quirk
        if (/\n$/.test(myVue.input)) myVue.input = myVue.input.slice(0, -1)
        myVue.input = myVue.input.trim()
      })

      if (this.demoMode) {

        if (ev.keyCode === 13) {
          alert('To enter your own sentences, please exit demo mode.')
          this.$emit('clearInput')
          return
        }

        this.$broadcast('reset')
        this.$broadcast('resetMobileAnnotations')
        if (this.demoAppend) {
          this.paragraphs.unshift(this.demoData.shift())
          if (!this.demoData.length) this.demoAppend = false
        } else {
          this.demoData.unshift(this.paragraphs.shift())
          if (!this.paragraphs.length) this.demoAppend = true
        }
        return
      }

      // prevent overloading, double-Entering, etc
      if (this.waitingForAPI) return true

      // Quick sanity check
      var userInput = this.input
      userInput.replace(/<.*?>/ig, '')
      if (userInput.length > 1000) {
        alert("Please shorten your text to 1000 characters or less.")
        return true
      } else if (userInput.split(' ').length < 3) {
        alert("Please type in a sentence of three or more words.")
        if (!/\w/.test(userInput)) this.$emit('clearInput')
        return true
      }

      // AJAX request
      this.waitingForAPI = true
      this.$http({url: claireApiServer, data: { 'text': userInput }, method: 'GET'})
        .then(function(response) { // success callback
          if (typeof(response.data) === 'object') {
            myVue.$broadcast('reset')
            myVue.$broadcast('resetMobileAnnotations')
            myVue.paragraphs.unshift(response.data)
            myVue.$emit('clearInput')
            _.defer(smartquotes)

          } else if (response.data == 'NOT_ENGLISH') {
            alert("Sorry, Claire only understands English.")
          } else if (response.data == 'INPUT_TOO_SHORT') {
            alert("Please type in a sentence of three or more words.")
          // FIXME: What about INPUT_TOO_LONG?
          } else if (response.data == 'CLAIRE_IS_SLEEPING') {
            alert('Sorry, Claire seems to be sleeping at the moment. Try again later.')
          } else if (response.data == 'IGNORE_REQUEST') {

          } else if (response.data == 'CLAIRE_BUG') {
            alert('Whoops! It looks like you found a bug in Claire. Your text has been logged. Try modifying your sentence a little bit and try again.')
          }

          myVue.waitingForAPI = false
          document.getElementById('input-box').blur()
          zenscroll.toY(0); hideBlanket(); lazyResize() // clean up

        }, function(response) { // error callback

          console.log(response.status, response.statusText)
          document.getElementById('input-box').blur()
          myVue.waitingForAPI = false
          alert('The server could not be reached. Please check your Internet connection or try again later.')

        })
    },
    panLanguages: _panLanguages,
    switchLang: _switchLang,
    toggleHelp: function(){
      document.getElementById('input-box').blur()
      if (this.helpIsOn) {
        this.helpIsOn = false
      } else {
        this.helpIsOn = true
        var that = this
        _.defer(function(){ that.switchLang(that.language) }) // force currently active lang to be ".active"
      }
    }
  }
})

// =============================================================================
// Events for static elements & misc init stuff
// =============================================================================

window.addEventListener('load', resizeInput)
window.addEventListener('resize', lazyResize)
window.addEventListener('orientationchange', resizeInput)
document.querySelector('#input-right .bubble').addEventListener('click', function(e){
  if (e.target === this) focusOnInput()
})

var inputBox = document.getElementById('input-box')
inputBox.addEventListener('keyup', function(e) {
  this.value ? focusOnInput() : hideBlanket()
  lazyResize()
})
blanket.addEventListener('touchstart', function(){ inputBox.blur() })

document.documentElement.classList.remove('no-fouc') // Otherwise, #help section is FOUC'ed
