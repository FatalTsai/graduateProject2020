import { Component} from '@angular/core';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
import { HttpClient } from '@angular/common/http';

// import * as data from './assets/fileList.json';

export class Message {
  constructor(
      public sender: string,
      public content: string,
      public isBroadcast = false,
  ) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private socket$: WebSocketSubject<Message>;
  constructor(private httpClient: HttpClient) {

    this.socket$ = new WebSocketSubject('ws://localhost:8999');
    //https://medium.com/factory-mind/angular-websocket-node-31f421c753ff
    this.socket$
        .subscribe(
        (message) => {
          //console.log(message)

        },
        (err) => console.error(err),
        () => console.warn('Completed!')
        );
}
products: any = [];

  ngOnInit(){
    // this.httpClient.get("assets/fileList.json").subscribe(data =>{
    //   console.log(data);
    //   this.products = data;
    // })
  }


}
