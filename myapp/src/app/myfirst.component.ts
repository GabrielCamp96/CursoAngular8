import { Component } from '@angular/core';

@Component({
    selector: 'myfirst', // invocar via tag,
    // selector: '[myfirst]', // diretiva
    // selector: '.myfirst', // css
    templateUrl: './myfirst.component.html',
    styleUrls: ['./myfirst.component.css']
    //   2° forma
    // styles: [`
    //     .box1 {
    //         width: 200px;
    //         height: 100px;
    //         background: chartreuse;
    //         box-shadow: 5px 10px #cccccc;
    //         padding: 5px;
    //         margin: 10px;
    //     }
    // `]
})
export class MyFirstComponent {

}