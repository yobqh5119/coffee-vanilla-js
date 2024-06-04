const Router = {
  init: function init(){
    document.querySelectorAll('a.navlink').forEach(anchor => {
      anchor.addEventListener('click', function handleClick(e) {
        e.preventDefault()
        const url = anchor.getAttribute('href')
        Router.go(url)
      })
    })

    // Check the initial URL
    Router.go(location.pathname)

    window.addEventListener('popstate', function handleURLChange(event) {
      Router.go(event.state.route, false)
      console.log(event.state)
    })


  },
  go: function nextPage(route, addToHistory=true){
    if (addToHistory) {
      history.pushState({ route },'',route)
    }

    let pageElement = null

    switch (route) {
      case '/':
        pageElement = document.createElement('h1')
        pageElement.textContent = "Menu"
        break;

      case '/order':
        pageElement = document.createElement('h1')
        pageElement.textContent = "Your Order"
        break;

      default:
        if(route.startsWith("/product-")) {
          pageElement = document.createElement('h1')
          pageElement.textContent = 'Details'
          const paramId = route.substring(route.lastIndexOf("-")+1)
          pageElement.dataset.id = paramId
        }
    }
    if (pageElement) {
      const mainElement = document.querySelector('main')
      mainElement.innerHTML = ""
      mainElement.appendChild(pageElement)
      window.scrollX = 0
      window.scrollY = 0
    }
  }
}

export default Router