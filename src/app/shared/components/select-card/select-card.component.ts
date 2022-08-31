import { Component, ElementRef, Input, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
	selector: 'app-select-card',
	templateUrl: './select-card.component.html',
	styleUrls: ['./select-card.component.scss']
})
export class SelectCardComponent implements OnInit {
	@Input()
	public featured = false

	@Input()
	public label = ''

	@Input()
	public subtext = ''

	@Input()
	public control: FormControl

	@Input()
	value = true

	@Input()
	public disabled = false

	@Input()
	public form: FormGroup

	@Input()
	public name

	public el: ElementRef

	public active = false

	constructor(el: ElementRef) {
		this.el = el
	}

	ngOnInit(): void {
		this.active = this.value === this.form.get(this.name).value

		this.form.valueChanges.subscribe((data) => {
			const value = data[this.name]
			this.active = this.value === value
		})
	}
}
