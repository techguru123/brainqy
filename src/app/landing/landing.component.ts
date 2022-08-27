import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  cards = new Array(4).fill({body: ''});
  constructor() { }

  ngOnInit(): void {
    this.cards[0] = { body: 'In an effort to make the world more mentally resilient, we developed Brainqy - an AI chatbot that leverages evidence-based cognitive-behavioral techniques (CBT) to make you feel heard. Blended with professional human support, Brainqy provides 24/7 high-quality mental health support.'}
    this.cards[1] = { body: 'This card has supporting text below as a natural lead-in to additional content.'}
    this.cards[2] = { body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'}
 

    this.slides[0] = {
      id: 0,
      src: './assets/img/banner1.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: './assets/img/banner1.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    this.slides[2] = {
      id: 2,
      src: './assets/img/banner1.jpg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  }

}
