import { Component, Input, OnInit } from '@angular/core'
import { LoaderService } from './loader.service'
@Component({
	selector: 'app-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
	public isLoading: boolean
	public message: string
	public interval
	constructor(private loaderService: LoaderService) {
		this.loaderService.loaderChange.subscribe((data) => {
			this.isLoading = data.isLoading
			clearInterval(this.interval)
			if (Array.isArray(data.message)) {
				this.changeMessageByTime(data.message)
				return
			}
			this.message = data.message
		})
	}

	ngOnInit(): void {}

	private changeMessageByTime(message: Array<string>) {
		this.message = message[0]
		let messageIndex = 1
		this.interval = setInterval(() => {
			if (this.isLoading == false) {
				return
			}
			this.message = message[messageIndex]
			messageIndex++
			if (messageIndex >= message.length) {
				messageIndex = message.length
			}
		}, 5000)
	}
}
