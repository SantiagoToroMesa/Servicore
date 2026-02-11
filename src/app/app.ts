import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "./core/ui/layout/sidebar/sidebar";
import { Topbar } from "./core/ui/layout/topbar/topbar";
import { BrandLogo } from "./core/ui/layout/components/brand-logo/brand-logo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, Topbar, BrandLogo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('servicore');
}
