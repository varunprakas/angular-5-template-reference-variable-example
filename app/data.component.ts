import {Component} from '@angular/core';
@Component({
    selector: 'data-app',
    templateUrl: 'app/data.component.html'
})
export class DataComponent {
    colors = ['RED', 'CYAN', 'BLUE'];
	getData(mob : number, stat : string, cnt: string) {
		console.log(mob);
		console.log(stat);
		console.log(cnt);
	}
	setData(val) {
	    console.log(val);
	}
} 