function createMenubar() {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = `${window.location.origin}/global/components/menubar/menubar.css`
  document.head.appendChild(link)

  const nav = document.querySelector('nav')
  const ul = document.createElement('ul')
  ul.classList.add('menubar_list')

  const logoBox = document.createElement('div')
  logoBox.className = 'logo_box'

  const logoText = document.createElement('span')
  logoText.className = 'logo_text'
  logoText.textContent = 'WeBuilding'

  logoBox.appendChild(logoText)
  nav.appendChild(logoBox)

  nav.appendChild(ul)
  const menuItems = [
    { name: 'ホーム', link: '/' },
    { name: 'サービス', link: '/services' },
    { name: 'お問い合わせ', link: '/contact' },
    { name: '制作の流れ', link: '/flow' },
    { name: '会社概要', link: '/company' }
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
}

createMenubar()

