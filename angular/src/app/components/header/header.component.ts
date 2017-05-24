import {Component, OnInit} from "@angular/core";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
  }

    public createUser(name: string, email: string, phone: string, password: string, confirmPassword: string){
        if(password === confirmPassword){
            console.log(name + '; ' + email + '; ' + phone + '; ' + password + '; ' + confirmPassword + ';');
            this.usersService.createUser(name, email, phone, password);
        }
    }

    public openUser(username, userpassword){
        this.usersService.openUser(username, userpassword);
    }
    
    public exitUser(){
        this.usersService.exitUser();
    }
}
