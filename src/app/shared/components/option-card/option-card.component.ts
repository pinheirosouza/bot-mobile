import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
	selector: 'app-option-card',
	templateUrl: './option-card.component.html',
	styleUrls: ['./option-card.component.scss']
})
export class OptionCardComponent implements OnInit {
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
