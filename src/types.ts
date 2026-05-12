export type Category = 'Breakfast (Quraac)' | 'Lunch (Qado)' | 'Dinner (Casho)' | 'Drinks';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
