import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oheader',
  templateUrl: './oheader.component.html',
  styleUrls: ['./oheader.component.scss']
})
export class OheaderComponent implements OnInit {
  public showContainer: boolean = false;
  constructor(public breakpointObserver: BreakpointObserver) {}


  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showContainer = true;
          console.log("Minimum width matches 400 px");
        } else {
          this.showContainer = false;
          console.log("Minimum width  does not matches 400 px");
        }
      });
  }

}
