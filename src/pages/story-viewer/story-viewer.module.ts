import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoryViewerPage } from './story-viewer';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    StoryViewerPage,
  ],
  imports: [
    IonicPageModule.forChild(StoryViewerPage),
    DirectivesModule
  ],
})
export class StoryViewerPageModule {}
