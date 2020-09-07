$(function () {
  var script = document.getElementById('click-show-text')
  var mb = script.getAttribute('mobile')
  if (mb === 'false' && /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
    return
  }

  const co = function () {
    const colorElements = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'
    const colorArray = colorElements.split(',')
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += colorArray[Math.floor(Math.random() * 16)]
    }
    return color
  }

  let aIdx = 0

  const $body = $('body')

  $($body).on('click', function (e) {
    const config = GLOBAL_CONFIG.ClickShowText
    const a = config.text.split(',')
    const $i = $('<span/>').text(a[aIdx])
    aIdx = (aIdx + 1) % a.length
    const x = e.pageX
    const y = e.pageY
    $i.css({
      'z-index': 150,
      top: y - 20,
      left: x - 20,
      position: 'absolute',
      'font-weight': 'bold',
      color: co(),
      cursor: 'default',
      'font-size': config.fontSize || 'inherit',
      'word-break': 'break-word'
    })
    $body.append($i)
    $i.animate(
      {
        top: y - 180,
        opacity: 0
      },
      1500,
      function () {
        $i.remove()
      }
    )
  })
})
