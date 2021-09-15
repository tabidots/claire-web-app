// filenamePattern: $1.min.$2, minifier: yui-js, buffer: 8388608, minifierOptions: "charset = utf-8"
zenscroll.setup(300, 15)

// Auto-generate dynamic reactive TOC
var sections = document.querySelectorAll('.info-section')
function highlightToc(target, trigger){
  if (trigger != 'click' && zenscroll.moving()) return
  if (target.classList.contains('sub-level-link')) {
    var h1 = target.parentNode.parentNode.parentNode.querySelector('.top-level-link')
      , ul = h1.parentNode.querySelector('.sub-list')
      , h2 = target
  } else {
    var h1 = target
      , ul = h1.parentNode.querySelector('.sub-list')
      , h2 = undefined
  }
  _.each(document.querySelectorAll('.top-level-link, .sub-list, .sub-level-link'), function(el){
    el.classList.remove('active')
    if (_.contains([h1, ul, h2], el)) el.classList.add('active')
  })
}

_.each(sections, function(section){
  var listItem = document.createElement('li')
    , navLink  = document.createElement('a')
    , subList  = document.createElement('ul')
  navLink.innerHTML = section.querySelector('h1').innerHTML
  navLink.setAttribute('href', '#' + section.id)
  navLink.classList.add('top-level-link')

  _.each(section.querySelectorAll('h2'), function(subHead){ // h2 = subsection
    var subListItem = document.createElement('li')
      , subNavLink  = document.createElement('a')
    subHeadText = subHead.innerHTML
    if (subHeadText.length > 40) {
      subHeadText = subHeadText.substring(0, 40) + '...'
    }
    subNavLink.innerHTML = subHeadText
    subNavLink.setAttribute('href', '#' + subHead.id)
    subNavLink.classList.add('sub-level-link')
    subListItem.appendChild(subNavLink)
    subList.appendChild(subListItem)

    var subWaypoint = new Waypoint({
      element: subHead,
      offset: 50,
      handler: function() { highlightToc(subNavLink) }
    })

  })
  subList.classList.add('sub-list')

  listItem.appendChild(navLink)
  listItem.appendChild(subList)
  listItem.classList.add('top-level-item')
  document.getElementById('toc').appendChild(listItem)

  var waypoint = new Waypoint({
    element: section,
    offset: (section.id === 'whyclaire') ? 0 : 50, // 0 for first section
    handler: function() {
      highlightToc(navLink)
    }
  })
})

_.each(document.querySelectorAll('#toc a'), function(link){
  addListenerMulti(link, 'mouseup touchstart', function(e){
    highlightToc(link, 'click')
  })
})

if (window.location.hash) { // Enforce proper scroll offset if user comes directly to page with hash
  var hashid = window.location.hash.substring(1)
    , target = document.getElementById(hashid)
    , tocTarget = document.querySelector('a[href="' + window.location.hash + '"]')
  if (target) {
    highlightToc(tocTarget)
    zenscroll.to(target)
  }
} else { // so that the first item is highlighted by default
  tocTarget = document.querySelector('.top-level-link')
  highlightToc(tocTarget)
  zenscroll.toY(0)
}

function toggleMenu(direction){
  var menu = document.getElementById('info-head')
  if (!menu.classList.contains('active') || direction === 'in') {
    menu.classList.add('active')
  } else {
    menu.classList.remove('active')
  }
}
_.each(document.querySelectorAll('#features li'), function(el){
  el.innerHTML = el.innerHTML.replace(/%X%/g, '<div class="icon cross"></div>')
  el.innerHTML = el.innerHTML.replace(/√/g, '<div class="icon check"></div>')
})

document.getElementById('info-menu-button').addEventListener('click', function(){
  toggleMenu()
})
window.addEventListener('orientationchange', function(){
  toggleMenu('in')
})

smartquotes()
