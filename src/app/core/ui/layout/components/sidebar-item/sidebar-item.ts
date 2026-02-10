import { Component, Input } from '@angular/core';
import { LucideIconData } from 'lucide-angular';

interface ItemSidebar {
  label: string;
  icon: LucideIconData;
  route: string;
}

@Component({
  selector: 'app-sidebar-item',
  imports: [],
  templateUrl: './sidebar-item.html',
  styleUrl: './sidebar-item.css',
})
export class SidebarItem {
  @Input() label!: string;
  @Input() icon!: LucideIconData;
  @Input() items!: ItemSidebar[];
}
