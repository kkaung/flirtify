import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { ionCaretDown, ionClose, ionMenu } from '@ng-icons/ionicons';

@NgModule({
  declarations: [],
  imports: [
    NgIconsModule.withIcons({
      ionClose,
      ionMenu,
      ionCaretDown,
    }),
  ],
  exports: [NgIconsModule],
})
export class SharedModule {}
