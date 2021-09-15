// filenamePattern: $1.min.$2, minifier: yui-js, buffer: 8388608, minifierOptions: "charset = utf-8"

var claireApiServer = '//learnengli.sh'

/*if (/localhost/.test(window.location.hostname) || /ngrok/.test(window.location.hostname)) {
	console.log("Using local dev server for Claire API, port 5000")
  var claireApiServer = '//localhost:5000'
}*/

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

// =============================================================================
// Vue instance
// =============================================================================

Vue.filter('markdown', function(input){
	return smartquotes(micromarkdown.parse(input))
})

Vue.use(VueTouch)

var Paragraph = Vue.extend({
  template: '#paragraph',
  props: ['oid', 'paragraph'],
  data: function(){
    return {
      humanCorrection: this.paragraph.human_correction,
      suggestion: ''
    }
  },
  methods: {
    addSuggestion: function() {
      var that = this
      that.$http({url: claireApiServer + '/suggest/', params: { 'oid': that.oid, 'suggestion': that.suggestion }, method: 'POST'})
        .then(function(){
          that.humanCorrection = that.suggestion
          that.suggestion = ''
        }, function(){
          alert('The server could not be reached. Please check your Internet connection or try again later.')
          that.suggestion = that.suggestion.trim()
        })
    }
  }
})

var myVue = new Vue({
  el: '#app',
  computed: {
    years: function(){
      var today    = new Date()
        , thisYear = today.getFullYear()
        , res      = []
      for ( var i=2016; i<=thisYear; ++i ) {
        res.push(i)
      }
      return res
    },
    monthString: function() {
      var m = (typeof this.targetMonth === 'string') ? parseInt(this.targetMonth, 10) : this.targetMonth
      return ('0' + (m + 1)).slice(-2)
    },
    dateString: function() {
      return ('0' + this.targetDay).slice(-2)
    }
  },
  data: {
    waitingForAPI: false,
    paragraphs: [],
    months: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    eachDayInMonth: [31,28,31,30,31,30,31,31,30,31,30,31],
    targetYear: 0,
    targetMonth: 0,
    targetDay: 1
  },
  components: {
    'paragraph': Paragraph
  },
  methods: {
    disallowImpossibleDates() {
      if (this.targetMonth > this.eachDayInMonth[this.targetMonth]) {
        this.targetDay = this.eachDayInMonth[this.targetDay]
      }
    },
    previousDay: function() {
      var mm     = parseInt(this.monthString, 10) - 1
        , dd     = parseInt(this.dateString, 10)
        , myDate = new Date(this.targetYear, mm, dd)
      myDate.setDate(myDate.getDate() - 1)
      this.$set('targetYear', myDate.getFullYear())
      this.$set('targetMonth', myDate.getMonth())
      this.$set('targetDay', myDate.getDate())
      this.getLog()
    },
    nextDay: function() {
      var mm     = parseInt(this.monthString, 10) - 1
        , dd     = parseInt(this.dateString, 10)
        , myDate = new Date(this.targetYear, mm, dd)
      myDate.setDate(myDate.getDate() + 1)
      this.$set('targetYear', myDate.getFullYear())
      this.$set('targetMonth', myDate.getMonth())
      this.$set('targetDay', myDate.getDate())
      this.getLog()
    },
    getLog: function() {
      this.disallowImpossibleDates()
      var myDate = this.targetYear + '-' + this.monthString + '-' + this.dateString

      this.waitingForAPI = true
      this.$http({url: claireApiServer + '/logs/', data: { 'date': myDate }, method: 'GET'})
        .then(function(response) { // success callback

          myVue.waitingForAPI = false
          myVue.$set('paragraphs', response.data)

        }, function(response) { // error callback

          console.log(response.status, response.statusText)
          myVue.waitingForAPI = false
          alert('The server could not be reached. Please check your Internet connection or try again later.')

        })
    }
  },
  ready: function() {
    var today = new Date()
    this.$set('targetYear', today.getFullYear())
    this.$set('targetMonth', today.getMonth())
    this.$set('targetDay', today.getDate())
    this.getLog()
  }
})

// =============================================================================
// Events for static elements & misc init stuff
// =============================================================================

document.documentElement.classList.remove('no-fouc') // Otherwise, #help section is FOUC'ed
