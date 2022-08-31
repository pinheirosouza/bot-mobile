import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
	@Input()
	public label: string
	@Input()
	public type: 'search' | 'text' | 'tel' | 'number' | 'email' | 'password' =
		'text'
	@Input()
	public placeholder = ''
	@Input()
	public control: FormControl = new FormControl()
	@Input()
	public mask = ''
	@Input()
	public disabled = false

	constructor() {}

	ngOnInit() {
		// this.control.valueChanges.subscribe((res) =>
		//   console.log(this.control.errors)
		// )
	}

	show() {
		if (this.type === 'password') {
			this.type = 'search'
		} else {
			this.type = 'password'
		}
	}
}
