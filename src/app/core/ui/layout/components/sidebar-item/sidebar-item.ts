import { Component, Input, signal } from '@angular/core';
import { LucideIconData } from 'lucide-angular';
import { RouterLink } from "@angular/router";
import { ItemSidebar } from "../../../../../shared/models/sidebar-item.model";

@Component({
  selector: 'app-sidebar-item',
  imports: [RouterLink],
  templateUrl: './sidebar-item.html',
  styleUrl: './sidebar-item.css',
})
export class SidebarItem {
  @Input({required: true}) item!: ItemSidebar;

  isOpen = signal(false);

  toggle() {
    if(this.item.children) {
      this.isOpen.update((state) => !state);
    }
  }




}
