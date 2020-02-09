import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../json-placeholder.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-data',
  templateUrl: './task-data.component.html',
  styleUrls: ['./task-data.component.scss']
})
export class TaskDataComponent implements OnInit {

  constructor(private connect : JsonPlaceholderService,private http: HttpClient) { }
  apiUrl;
  api_server;
  commonJson = {};
  storeApi :any = {};
  ngOnInit() {
    this.http.get('assets/frontend-config/ip-config-custom.json')
    .subscribe((data : any) =>{
      this.api_server = data["ip"][0].api_server;
      this.apiUrl = this.api_server;
    });
  this.storeApi = [{
      "Name": "post",
      "url": "gettingPost/"
      },
      {
      "Name": "comment",
      "url": "gettingComments/"
      },
      {
      "Name": "album",
      "url": "gettingAlbums/"
      },
      {
      "Name": "photo",
      "url": "gettingPhotos/"
      },
      {
      "Name": "todo",
      "url": "gettingTodos/"
      },
      {
      "Name": "user",
      "url": "gettingUser/"
      }
    ]
  }

  gettingData(option) {
    this.commonJson = {
        "mode": "Save"
    }
    if (option != null || option != '' || option != undefined) {
        for (var i = 0; i < this.storeApi.length; i++) {
            if (this.storeApi[i].Name === option) {
                var storeName = this.storeApi[i].Name;
                var storeUrl = this.storeApi[i].url;
                this.connect.gettingDumpData(this.apiUrl, this.commonJson, storeUrl).subscribe(data => {
                    alert(storeName + "data getting seccessfully")
                });
            }
        }
    }
}

}
