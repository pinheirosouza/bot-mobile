import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
	selector: 'app-switch',
	templateUrl: './switch.component.html',
	styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
	@Input()
	public label: string

	@Input()
	public control: FormControl

	@Input()
	public value = ''

	@Input()
	public checked = false

	@Input()
	public disabled = false

	constructor() {}

	ngOnInit() {}
}
