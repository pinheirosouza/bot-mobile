import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	ViewChild,
	ViewChildren,
	ViewEncapsulation
} from '@angular/core'

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
	@Input()
	label: string
	@Input()
	public disabled: boolean
	@Input()
	public type: 'button' | 'submit' = 'button'
	@Input()
	public routePath?: string
	@Input()
	public isLoading = false
	@Input()
	public icon: string
	@Input()
	public className: string
	@Output()
	public clickEvent: EventEmitter<any> = new EventEmitter()

	constructor() {}

	ngOnInit(): void {}

	public btnClicked(): void {
		this.clickEvent.emit()
	}
}
