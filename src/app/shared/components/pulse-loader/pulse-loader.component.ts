import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-pulse-loader',
	templateUrl: './pulse-loader.component.html',
	styleUrls: ['./pulse-loader.component.scss']
})
export class PulseLoaderComponent implements OnInit {
	@Input()
	completed = false

	@Input()
	info = 'Aguarde...'

	constructor() {}

	ngOnInit(): void {}
}
