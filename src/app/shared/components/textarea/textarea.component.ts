import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
	selector: 'app-textarea',
	templateUrl: './textarea.component.html',
	styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
	@Input()
	public label: string
	@Input()
	public type: 'text' | 'tel' | 'number' | 'email' | 'password' = 'text'
	@Input()
	public placeholder = ''
	@Input()
	public control: FormControl
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
}
