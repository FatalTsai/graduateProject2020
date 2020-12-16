import { Component} from '@angular/core';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private httpClient: HttpClient,private toastr: ToastrService) {

    this.socket$ = new WebSocketSubject('ws://localhost:8999');
    //https://medium.com/factory-mind/angular-websocket-node-31f421c753ff
    this.socket$
        .subscribe(
        (message) => {
          console.log(message)
          if(message['content'] == "there is a bitch")
            this.showNotification('bottom','left')
       

        }),
        (err) => console.error(err),
        () => console.warn('Completed!')
}


products: any = [];

  ngOnInit(){
    // this.httpClient.get("assets/fileList.json").subscribe(data =>{
    //   console.log(data);
    //   this.products = data;
    // })
  }

  private showNotification(from, align){

    var audio = new Audio("./assets/beep-06.mp3"); 
    audio.play(); 

    var color = Math.floor((Math.random() * 5) + 1);
    color = 4 

    switch(color){
      case 1:
      this.toastr.info('<span class="now-ui-icons ui-1_bell-53" style="z-index:2147483647"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
         timeOut: 8000,
         closeButton: true,
         enableHtml: true,
         toastClass: "alert alert-info alert-with-icon",
         positionClass: 'toast-' + from + '-' +  align
       });
      break;
      case 2:
      this.toastr.success('<span class="now-ui-icons ui-1_bell-53" style="z-index:2147483647"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
         timeOut: 8000,
         closeButton: true,
         enableHtml: true,
         toastClass: "alert alert-success alert-with-icon",
         positionClass: 'toast-' + from + '-' +  align
       });
      break;
      case 3:
      this.toastr.warning('<span class="now-ui-icons ui-1_bell-53" style="z-index:2147483647"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
         timeOut: 8000,
         closeButton: true,
         enableHtml: true,
         toastClass: "alert alert-warning alert-with-icon",
         positionClass: 'toast-' + from + '-' +  align
       });
      break;
      case 4:
      this.toastr.error('<span class="now-ui-icons ui-1_bell-53" style="z-index:2147483647"></span> fuck off <b>bitches</b> - Please go fucking away.', '', {
         timeOut: 8000,
         enableHtml: true,
         closeButton: true,
         toastClass: "alert alert-danger alert-with-icon",
         positionClass: 'toast-' + from + '-' +  align
       });
       break;
       case 5:
       this.toastr.show('<span class="now-ui-icons ui-1_bell-53" style="z-index:2147483647"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-primary alert-with-icon",
          positionClass: 'toast-' + from + '-' +  align
        });
      break;
      default:
      break;
    }
}


}
