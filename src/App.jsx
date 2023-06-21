import { useState } from 'react'
import Title from './Title'
import menu from './data'
import Menu from './Menu'
import Categories from './Categories'

// const tempCategories = menu.map((item) => item.category)
// const tempSet = new Set(tempCategories)
// const tempItems = ['all', ...tempSet]
// console.log(tempItems)

const allCategories = ['all', ...new Set(menu.map((item) => item.category))]
// console.log(allCategories)

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)
  // console.log(categories)

  const filterItems = (category) => {
    // console.log(category)
    if (category === 'all') {
      setMenuItems(menu)
      return
    }
    const newItem = menu.filter((item) => item.category === category)
    setMenuItems(newItem)
  }

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
