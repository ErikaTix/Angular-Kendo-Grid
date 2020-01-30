import { Component } from '@angular/core';
import { products } from './products';
import { ResponsiveService } from '@progress/kendo-angular-grid';

// Must add a width to each column or the layout will not be Responsive

@Component({
  selector: 'my-app',
  // styles: [`.k-icon.pencil`],
  template: `
  <kendo-grid [data]="gridData" [height]="400">
    <kendo-grid-column media="(max-width: 450px)" title="Items">
    <!-- template for mobile view -->
    <ng-template kendoGridCellTemplate let-dataItem>
      <h4 [class.active]="dataItem.Active">
        {{ dataItem.Name}}
      </h4>
      <dl>
        <dt>Name</dt>
        <dd>{{dataItem.Name}}</dd>

        <dt>Rule ID</dt>
        <dd>{{dataItem.RuleID}}</dd>

        <dt>Notifications</dt>
        <dd>{{dataItem.Notifications}}</dd>

        <dt>Modified By</dt>
        <dd>{{dataItem.Category.Modify}}</dd>

        <dt>Modified At</dt>
        <dd>{{dataItem.ModifyAt}}</dd>

        <dt>Actions</dt>
        <dd><button kendoButton [icon]="'edit'" look="flat">Edit</button>
        <button kendoButton [icon]="'copy'" look="flat">Clone</button>
        <button kendoButton [icon]="'clock'" look="flat">History</button></dd>

        <dd>Active <input type="checkbox" [checked]="dataItem.Active" disabled/></dd>
      </dl>
    </ng-template>
    </kendo-grid-column>


  <!-- template for mid size screens -->
  <kendo-grid-column media="(min-width:450px)" field="Name" title="Name" width="100">
  </kendo-grid-column>
  <kendo-grid-column media="(min-width:450px)" field="RuleID" title="Rule ID" width="75">
  </kendo-grid-column>
  <kendo-grid-column media="(min-width:450px)" field="Category.Modify" title="Modified By" width="100">
  </kendo-grid-column>
  <kendo-grid-column media="(min-width:450px)" field="ModifyAt" title="Modified At" width="100">
  </kendo-grid-column>
  <kendo-grid-column media="(min-width:450px)" field="Notifications" title="Notifications" width="110">
  </kendo-grid-column>
  <kendo-grid-column media="(min-width:450px)" field="Active" title="Active" width="75">
      <ng-template kendoGridCellTemplate let-dataItem>
          <input type="checkbox" [checked]="dataItem.Active" disabled/>
      </ng-template>
  </kendo-grid-column>
  <kendo-grid-column media="(min-width:450px)" field="Actions" title="Actions" width="120">
    <ng-template kendoGridCellTemplate let-dataItem>
      <button kendoButton [icon]="'edit'" look="flat">Edit</button>
      <button kendoButton [icon]="'copy'" look="flat">Clone</button>
      <button kendoButton [icon]="'clock'" look="flat">History</button>
    </ng-template>
  </kendo-grid-column>

</kendo-grid>
`
})
export class AppComponent {
  public gridData: any[] = products;
  }

