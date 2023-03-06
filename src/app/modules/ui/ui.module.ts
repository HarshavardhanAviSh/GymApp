import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzEmptyModule } from "ng-zorro-antd/empty";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzNotificationModule } from "ng-zorro-antd/notification";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { NzSpinModule } from "ng-zorro-antd/spin";
import { NzPopoverModule } from "ng-zorro-antd/popover";

import { NzUploadFile } from "ng-zorro-antd/upload";
import { IconDefinition } from "@ant-design/icons-angular";
import { PlusOutline } from "@ant-design/icons-angular/icons";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { NzResultModule } from "ng-zorro-antd/result";

import { NzPopconfirmModule } from "ng-zorro-antd/popconfirm";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzAlertModule } from "ng-zorro-antd/alert";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzAffixModule } from "ng-zorro-antd/affix";
import { NzSpaceModule } from "ng-zorro-antd/space";


const arrays = [
  CommonModule,
  NzLayoutModule,
  NzMenuModule,
  NzBreadCrumbModule,
  NzButtonModule,
  NzFormModule,
  NzInputModule,
  NzGridModule,
  NzSelectModule,
  NzCheckboxModule,
  NzEmptyModule,
  NzTabsModule,
  NzModalModule,
  NzTableModule,
  NzDividerModule,
  NzNotificationModule,
  NzPopconfirmModule,
  CommonModule,
  NzLayoutModule,
  NzMenuModule,
  NzBreadCrumbModule,
  NzButtonModule,
  NzFormModule,
  NzInputModule,
  NzGridModule,
  NzSelectModule,
  NzCheckboxModule,
  NzEmptyModule,
  NzTabsModule,
  NzTagModule,
  NzTableModule,
  NzModalModule,
  NzIconModule,
  FormsModule,
  NzDatePickerModule,
  ReactiveFormsModule,
  NzDropDownModule,
  NzSpinModule,
  NzResultModule,
  NzCollapseModule,
  ClipboardModule,
  NzAlertModule,
  NzAffixModule,
  NzToolTipModule,
  NzSpaceModule,
  NzPopoverModule,
];

@NgModule({
  declarations: [],
  imports: [arrays],
  exports: [arrays],
})
export class UiModule {}