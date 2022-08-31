import { Component, Input, OnChanges, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, OnChanges {
	@Input()
	public label: string
	@Input()
	public placeholder: string = 'Selecione uma opção...'
	@Input()
	public options: {
		label: string
		value: string | number | boolean
	}[]
	@Input()
	public control: FormControl

	constructor() {}

	ngOnInit(): void {}

	ngOnChanges(): void {
		// console.log(this.options);
	}
}
