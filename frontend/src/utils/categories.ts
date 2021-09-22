
export type GameCategoryType = {
  category: 'WISHLIST' | 'BACKLOG' | 'PLAYING' | 'FINISHED' | 'ABANDONED'
}

export const categories = [
  { id: '1', title: 'Wishlist', icon: 'cart'},
  { id: '2', title: 'Biblioteca', icon: 'library'},
  { id: '3', title: 'Jogando', icon: 'controller-classic'},
  { id: '4', title: 'Finalizados', icon: 'check-circle'},
  { id: '5', title: 'Abandonados', icon: 'cancel'},
]

export const categoriesSelect = [
  { id: '1', label: 'Wishlist', value: 'WISHLIST'},
  { id: '2', label: 'Biblioteca', value: 'BACKLOG'},
  { id: '3', label: 'Jogando', value: 'PLAYING'},
  { id: '4', label: 'Finalizados', value: 'FINISHED'},
  { id: '5', label: 'Abandonados', value: 'ABANDONED'},
]