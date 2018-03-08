import {Component} from '@angular/core';
import {Person} from './person';
@Component({
    selector: 'form-app',
    templateUrl: 'app/form.component.html'
})
export class FormComponent {
    person = new Person();
	onSubmitPersonForm(fm) {
		console.log('Form Validated:'+fm.form.valid);
		console.log(this.person.pname);
		console.log('Form is being submitted');
	}
} 