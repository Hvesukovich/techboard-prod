import {Component, OnInit} from "@angular/core";
import {RequestsService} from "../../services/requests.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public name: string;
    public email: string;
    public phone: string;
    public password: string;
    public confirmPassword: string;

  constructor(private requestsService: RequestsService) {
  }

  ngOnInit() {
  }

    public createUser(name: string, email: string, phone: string, password: string, confirmPassword: string){
        // console.log(name + '; ' + email + '; ' + phone + '; ' + password + '; ' + confirmPassword + ';');
        if(password === confirmPassword){
            // this.requestsService.registrationUser(name, email, phone, password);
            console.log(name + '; ' + email + '; ' + phone + '; ' + password + '; ' + confirmPassword + ';');
        }
    }
}
