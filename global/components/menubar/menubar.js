function createMenubar() {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = `${window.location.origin}/global/components/menubar/menubar.css`
  document.head.appendChild(link)

  const nav = document.querySelector('nav')
  nav.classList.add('menubar-container')

  // Logo Container
  const logoBox = document.createElement('div')
  logoBox.className = 'logo_box'
  const logoText = document.createElement('span')
  logoText.className = 'logo_text'
  logoText.textContent = 'WeBuilding'
  logoBox.appendChild(logoText)
  nav.appendChild(logoBox)

  // Hamburger Button
  const hamburger = document.createElement('button')
  hamburger.className = 'hamburger'
  hamburger.innerHTML = '<span></span><span></span><span></span>'
  hamburger.ariaLabel = 'Menu'
  nav.appendChild(hamburger)

  // Menu List
  const ul = document.createElement('ul')
  ul.classList.add('menubar_list')

  const menuItems = [
    { name: 'ホーム', link: '/' },
    { name: 'サービス', link: '/services' },
    { name: '制作の流れ', link: '/flow' },
    { name: '会社概要', link: '/company' },
    { name: 'お問い合わせ', link: '/contact' },
  ]

  menuItems.forEach(item => {
    const li = document.createElement('li')
    li.classList.add('menu_item')
    const a = document.createElement('a')
    a.href = item.link
    a.textContent = item.name
    li.appendChild(a)
    ul.appendChild(li)
  })
  nav.appendChild(ul)

  // Toggle Logic
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    ul.classList.toggle('active')
  })
}

createMenubar()

