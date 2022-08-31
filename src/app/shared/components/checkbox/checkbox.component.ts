import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
	@Input()
	public label: string
	@Input()
	public control: FormControl = new FormControl()
	@Input()
	public disabled = false
	@Input()
	public checked = false

	constructor() {}

	ngOnInit(): void {}
}
