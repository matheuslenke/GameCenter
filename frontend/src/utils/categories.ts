
export type GameCategoryType = {
  category: 'WISHLIST' | 'BACKLOG' | 'PLAYING' | 'FINISHED' | 'ABANDONED'
}

export const categories = [
  { id: '1', title: 'Wishlist', icon: 'cart', value: 'WISHLIST'},
  { id: '2', title: 'Biblioteca', icon: 'library', value: 'BACKLOG'},
  { id: '3', title: 'Jogando', icon: 'controller-classic', value: 'PLAYING'},
  { id: '4', title: 'Finalizados', icon: 'check-circle', value: 'FINISHED'},
  { id: '5', title: 'Abandonados', icon: 'cancel', value: 'ABANDONED'},
]

export const categoriesSelect = [
  { id: '1', label: 'Wishlist', value: 'WISHLIST'},
  { id: '2', label: 'Biblioteca', value: 'BACKLOG'},
  { id: '3', label: 'Jogando', value: 'PLAYING'},
  { id: '4', label: 'Finalizados', value: 'FINISHED'},
  { id: '5', label: 'Abandonados', value: 'ABANDONED'},
]