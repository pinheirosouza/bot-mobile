import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { OptionCardComponent } from './components/option-card/option-card.component';
import { SwitchComponent } from './components/switch/switch.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { SelectComponent } from './components/select/select.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { SelectCardComponent } from './components/select-card/select-card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PulseLoaderComponent } from './components/pulse-loader/pulse-loader.component';
import { SecureWebsiteTagComponent } from './components/secure-website-tag/secure-website-tag.component';

const DECLARATIONS_MODULES = [
  InputComponent,
  ButtonComponent,
  OptionCardComponent,
  SwitchComponent,
  TextareaComponent,
  SelectComponent,
  VideoPlayerComponent,
  SelectCardComponent,
  LoaderComponent,
  CheckboxComponent,
  HeaderComponent,
  FooterComponent,
  PulseLoaderComponent,
  SecureWebsiteTagComponent,
];
const IMPORTS_MODULES = [CommonModule, RouterModule, ReactiveFormsModule];

@NgModule({
  declarations: [
    ...DECLARATIONS_MODULES,
    PulseLoaderComponent,
    SecureWebsiteTagComponent,
  ],
  imports: [...IMPORTS_MODULES],
  providers: [FormGroupDirective],
  exports: [...DECLARATIONS_MODULES, ...IMPORTS_MODULES],
})
export class SharedModule {}
