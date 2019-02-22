import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { StoryViewerPage } from '../story-viewer/story-viewer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private stories = new Array<any>();

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController
  ) {
    let storyItem1 = {
      userPicture: "https://scontent.fcwb2-2.fna.fbcdn.net/v/t1.0-1/p320x320/29694979_1644219845645881_889544671636414105_n.jpg?_nc_cat=109&_nc_ht=scontent.fcwb2-2.fna&oh=28f49cbb3c7c0bebe614d2b16503c374&oe=5CF05E29",
      userId: 1,
      userName: "Igor",
      currentItem: 0,
      items: [{
        date: "há 20 minutos",
        duration: "5",
        id: "3",
        media: "https://instagram.fcwb2-2.fna.fbcdn.net/vp/2b7af4870350ede1a37748e56dbbe23a/5C7282B8/t51.12442-15/fr/e15/p1080x1080/29717075_156896381671693_2434478765787578368_n.jpg?_nc_ht=instagram.fcwb2-2.fna.fbcdn.net",
        seen: true,
        type: "0",
        views: 5
      }],
      seen: true
    };

    let storyItem2 = {
      userPicture: "https://scontent.fcwb2-2.fna.fbcdn.net/v/t1.0-9/51329002_2139113679501568_6563218904603164672_o.jpg?_nc_cat=110&_nc_ht=scontent.fcwb2-2.fna&oh=971b3633a2cd851261140c4da14702ea&oe=5CE7C1EC",
      userId: 2,
      userName: "Flávio",
      currentItem: 0,
      seen: false,
      items: [{
        date: "há 30 minutos",
        duration: "4",
        id: "64",
        media: "https://instagram.fcwb2-2.fna.fbcdn.net/vp/a44688db252f31b9d8eabb0e3ede7bfa/5C72503C/t51.12442-15/sh0.08/e35/p750x750/31702667_1034435710044864_4812581550329692160_n.jpg?_nc_ht=instagram.fcwb2-2.fna.fbcdn.net",
        seen: false,
        type: "0",
        views: null
      },{
        date: "há 30 minutos",
        duration: "3",
        id: "74",
        media: "https://instagram.fcwb2-2.fna.fbcdn.net/vp/0724c2ed3d054ccd3fcf43d3ce9cbe9b/5C727EAC/t51.12442-15/e35/35928195_1888618371200734_7309460019060146176_n.jpg?_nc_ht=instagram.fcwb2-2.fna.fbcdn.net",
        seen: false,
        type: "0",
        views: null
      },{
        date: "há 1 hora",
        duration: null,
        id: "84",
        media: "https://instagram.fcwb2-2.fna.fbcdn.net/vp/e83ff2c51f8bffd52f193ddc8b8281cd/5C71EB4B/t50.12441-16/52551118_322645848357833_2157888653832718677_n.mp4?_nc_ht=instagram.fcwb2-2.fna.fbcdn.net",
        seen: false,
        type: "1",
        views: null
      }]
    };

    let storyItem3 = {
      userPicture: "https://scontent.fcwb2-2.fna.fbcdn.net/v/t1.0-1/p320x320/29694979_1644219845645881_889544671636414105_n.jpg?_nc_cat=109&_nc_ht=scontent.fcwb2-2.fna&oh=28f49cbb3c7c0bebe614d2b16503c374&oe=5CF05E29",
      userId: 1,
      userName: "Igor",
      currentItem: 0,
      items: [{
        date: "há 20 minutos",
        duration: "5",
        id: "3",
        media: "https://instagram.fcwb2-2.fna.fbcdn.net/vp/2b7af4870350ede1a37748e56dbbe23a/5C7282B8/t51.12442-15/fr/e15/p1080x1080/29717075_156896381671693_2434478765787578368_n.jpg?_nc_ht=instagram.fcwb2-2.fna.fbcdn.net",
        seen: true,
        type: "0",
        views: 5
      }],
      seen: true
    };

    let storyItem4 = {
      userPicture: "https://scontent.fcwb2-2.fna.fbcdn.net/v/t1.0-9/51329002_2139113679501568_6563218904603164672_o.jpg?_nc_cat=110&_nc_ht=scontent.fcwb2-2.fna&oh=971b3633a2cd851261140c4da14702ea&oe=5CE7C1EC",
      userId: 2,
      userName: "Flávio",
      currentItem: 0,
      seen: false,
      items: [{
        date: "há 30 minutos",
        duration: "4",
        id: "64",
        media: "https://instagram.fcwb2-2.fna.fbcdn.net/vp/a44688db252f31b9d8eabb0e3ede7bfa/5C72503C/t51.12442-15/sh0.08/e35/p750x750/31702667_1034435710044864_4812581550329692160_n.jpg?_nc_ht=instagram.fcwb2-2.fna.fbcdn.net",
        seen: false,
        type: "0",
        views: null
      },{
        date: "há 30 minutos",
        duration: "3",
        id: "74",
        media: "https://instagram.fcwb2-2.fna.fbcdn.net/vp/0724c2ed3d054ccd3fcf43d3ce9cbe9b/5C727EAC/t51.12442-15/e35/35928195_1888618371200734_7309460019060146176_n.jpg?_nc_ht=instagram.fcwb2-2.fna.fbcdn.net",
        seen: false,
        type: "0",
        views: null
      },{
        date: "há 1 hora",
        duration: null,
        id: "84",
        media: "https://instagram.fcwb2-2.fna.fbcdn.net/vp/e83ff2c51f8bffd52f193ddc8b8281cd/5C71EB4B/t50.12441-16/52551118_322645848357833_2157888653832718677_n.mp4?_nc_ht=instagram.fcwb2-2.fna.fbcdn.net",
        seen: false,
        type: "1",
        views: null
      }]
    };

    let storyItem5 = {
      userPicture: "https://scontent.fcwb2-2.fna.fbcdn.net/v/t1.0-1/p320x320/29694979_1644219845645881_889544671636414105_n.jpg?_nc_cat=109&_nc_ht=scontent.fcwb2-2.fna&oh=28f49cbb3c7c0bebe614d2b16503c374&oe=5CF05E29",
      userId: 1,
      userName: "Igor",
      currentItem: 0,
      items: [{
        date: "há 20 minutos",
        duration: "5",
        id: "3",
        media: "https://instagram.fcwb2-2.fna.fbcdn.net/vp/2b7af4870350ede1a37748e56dbbe23a/5C7282B8/t51.12442-15/fr/e15/p1080x1080/29717075_156896381671693_2434478765787578368_n.jpg?_nc_ht=instagram.fcwb2-2.fna.fbcdn.net",
        seen: true,
        type: "0",
        views: 5
      }],
      seen: true
    };

    let storyItem6 = {
      userPicture: "https://scontent.fcwb2-2.fna.fbcdn.net/v/t1.0-9/51329002_2139113679501568_6563218904603164672_o.jpg?_nc_cat=110&_nc_ht=scontent.fcwb2-2.fna&oh=971b3633a2cd851261140c4da14702ea&oe=5CE7C1EC",
      userId: 2,
      userName: "Flávio",
      currentItem: 0,
      seen: false,
      items: [{
        date: "há 30 minutos",
        duration: "4",
        id: "64",
        media: "https://instagram.fcwb2-2.fna.fbcdn.net/vp/a44688db252f31b9d8eabb0e3ede7bfa/5C72503C/t51.12442-15/sh0.08/e35/p750x750/31702667_1034435710044864_4812581550329692160_n.jpg?_nc_ht=instagram.fcwb2-2.fna.fbcdn.net",
        seen: false,
        type: "0",
        views: null
      },{
        date: "há 30 minutos",
        duration: "3",
        id: "74",
        media: "https://instagram.fcwb2-2.fna.fbcdn.net/vp/0724c2ed3d054ccd3fcf43d3ce9cbe9b/5C727EAC/t51.12442-15/e35/35928195_1888618371200734_7309460019060146176_n.jpg?_nc_ht=instagram.fcwb2-2.fna.fbcdn.net",
        seen: false,
        type: "0",
        views: null
      },{
        date: "há 1 hora",
        duration: null,
        id: "84",
        media: "https://instagram.fcwb2-2.fna.fbcdn.net/vp/e83ff2c51f8bffd52f193ddc8b8281cd/5C71EB4B/t50.12441-16/52551118_322645848357833_2157888653832718677_n.mp4?_nc_ht=instagram.fcwb2-2.fna.fbcdn.net",
        seen: false,
        type: "1",
        views: null
      }]
    };

    this.stories.push(storyItem1);
    this.stories.push(storyItem2);
    this.stories.push(storyItem3);
    this.stories.push(storyItem4);
    this.stories.push(storyItem5);
    this.stories.push(storyItem6);

    this.reorderStories();
  }

  openStoryViewer(index: number) {
    let modal = this.modalCtrl.create(StoryViewerPage, { stories: this.stories, tapped: index });
    modal.onDidDismiss(() => {
      this.reorderStories();
    });
    modal.present();
  }

  reorderStories() {
    this.stories.sort((a, b) => {
      if (a.seen) return 1;
      if (b.seen) return -1;

      return 0;
    });
  }
}