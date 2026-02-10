export interface ItemSidebar {
  label: string;
  icon: string;
  route?: string;
  children?: ItemSidebar[];
}
