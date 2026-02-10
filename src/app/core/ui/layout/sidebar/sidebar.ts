import { Component } from '@angular/core';
import { ItemSidebar } from '../../../../shared/models/sidebar-item.model';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  menuitems: ItemSidebar[] = [
    {
      label: 'TPS',
      icon: 'Wrench',
      children: [
        {
          label: 'Service Orders',
          icon: 'bar-chart-2',
          route: '/tps/service-orders'
        },
        {
          label: 'Create Order',
          icon: 'plus',
          route: '/tps/create-order'
        },
        {
          label: 'Clients',
          icon: 'users',
          route: '/tps/clients'
        },
        {
          label: 'Equipment',
          icon: 'monitor',
          route: '/tps/equipment'
        },
        {
          label: 'Technicians',
          icon: 'user',
          route: '/tps/technicians'
        },
        {
          label: 'Spare Parts',
          icon: 'box',
          route: '/tps/spare-parts'
        }
      ]
    },
    {
      label: 'MIS',
      icon: 'FileText',
      children: [
        {
          label: 'Daily Orders',
          icon: 'bar-chart-2',
          route: '/mis/daily-orders'
        },
        {
          label: 'Common Failures',
          icon: 'alert-triangle',
          route: '/mis/common-failures'
        },
        {
          label: 'Technician Productivity',
          icon: 'user-check',
          route: '/mis/technician-productivity'
        },
        {
          label: 'Monthly Summary',
          icon: 'calendar',
          route: '/mis/monthly-summary'
        }
      ]
    },
    {
      label: 'DSS',
      icon: 'Cpu',
      children: [
        {
          label: 'Analytics Dashboard',
          icon: 'file-text',
          route: '/dss/Analytics-dashboard'
        },
        {
          label: 'Failure Prediction',
          icon: 'pie-chart',
          route: '/dss/failure-prediction'
        },
        {
          label: 'Brand Comparison',
          icon: 'bar-chart-2',
          route: '/dss/brand-comparison'
        },
        {
          label: 'Repair Time Analysis',
          icon: 'clock',
          route: '/dss/repair-time-analysis'
        }
      ]
    },
    {
      label: 'ESS',
      icon: 'Settings',
      children: [
        {
          label: 'Executive Dashboard',
          icon: 'bar-chart-2',
          route: '/ess/executive-dashboard'
        },
      ]
    },
    {
      label: 'KWS',
      icon: 'Key',
      children: [
        {
          label: 'Search Knowledge Base',
          icon: 'key',
          route: '/kws/search-knowledge-base'
        },
        {
          label: 'New Diagnostic Report',
          icon: 'lock',
          route: '/kws/new-diagnostic-report'
        }
      ]
    }
  ];
}

