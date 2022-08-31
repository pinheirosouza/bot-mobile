import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class LoaderService {
	public loaderChange = new BehaviorSubject({ isLoading: false, message: '' })

	constructor() {}

	public show(message): void {
		this.loaderChange.next({ isLoading: true, message })
	}

	public hide(): void {
		this.loaderChange.next({ isLoading: false, message: '' })
	}

	public changeMessage(message: string): void {
		this.loaderChange.next({
			isLoading: this.loaderChange.value.isLoading,
			message
		})
	}
}
