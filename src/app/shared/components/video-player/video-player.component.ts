import {
	Component,
	ElementRef,
	Input,
	OnInit,
	Output,
	ViewChild,
	EventEmitter
} from '@angular/core'

@Component({
	selector: 'app-video-player',
	templateUrl: './video-player.component.html',
	styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
	@Input()
	public url: string
	@Input()
	public thumb: string
	@Input()
	public type: string
	@Output()
	public watchedUpdateEmit = new EventEmitter<{
		currentTime: number
		percent: number
	}>()

	@ViewChild('videoPlayer')
	videoPlayer: ElementRef

	@ViewChild('videoPlayerContainer')
	videoPlayerContainer: ElementRef

	@ViewChild('volumeRanger')
	volumeRanger: ElementRef

	public isPlaying = false
	public isMuted = false
	public isThumb = true
	public isFullscreen = false
	public volume = 1

	public percent = 0
	public videoDuration = ''
	public currentTime = ''

	constructor() {}

	public setFullscreenData(state: boolean): void {
		this.videoPlayerContainer.nativeElement.setAttribute(
			'data-fullscreen',
			!!state
		)

		this.isFullscreen = !!state
	}

	public handleFullscreen(): void {
		if (this.isFullscreen) {
			if (document.exitFullscreen) {
				document.exitFullscreen()
			}

			this.setFullscreenData(false)
		} else {
			if (this.videoPlayerContainer.nativeElement.requestFullscreen) {
				this.videoPlayerContainer.nativeElement.requestFullscreen()
			} else if (this.videoPlayerContainer.nativeElement.mozRequestFullScreen) {
				this.videoPlayerContainer.nativeElement.mozRequestFullScreen()
			} else if (
				this.videoPlayerContainer.nativeElement.webkitRequestFullScreen
			) {
				this.videoPlayer.nativeElement.webkitRequestFullScreen()
			} else if (this.videoPlayerContainer.nativeElement.msRequestFullscreen) {
				this.videoPlayerContainer.nativeElement.msRequestFullscreen()
			}

			this.setFullscreenData(true)
		}
	}

	public toogleMute() {
		this.videoPlayer.nativeElement.muted = !this.isMuted
		this.isMuted = !this.isMuted

		this.videoPlayer.nativeElement.volume = this.isMuted ? 0 : 1
		this.volumeRanger.nativeElement.value = this.isMuted ? 0 : 1
	}

	public toogleVolume(volume) {
		this.videoPlayer.nativeElement.volume = volume
		this.volume = volume
	}

	public tooglePlay(): void {
		if (
			this.videoPlayer.nativeElement.paused ||
			this.videoPlayer.nativeElement.ended
		) {
			this.videoPlayer.nativeElement.play()
			this.isPlaying = true
		} else {
			this.videoPlayer.nativeElement.pause()
			this.isPlaying = false
		}
	}

	public closeThumb(): void {
		this.isThumb = false
		this.tooglePlay()
	}

	public onTimeUpdate(): void {
		let total = 0
		const played = this.videoPlayer.nativeElement.played

		for (let i = 0; i < played.length; i++) {
			total += played.end(i) - played.start(i)
		}

		const formatDuration = (s) => {
			let m: any = Math.floor(s / 60)
			m = m >= 10 ? m : '0' + m
			s = Math.floor(s % 60)
			s = s >= 10 ? s : '0' + s
			return m + ':' + s
		}

		const percent = (total / this.videoPlayer.nativeElement.duration) * 100
		const videoDuration = this.videoPlayer.nativeElement.duration.toFixed(2)
		const currentTime = this.videoPlayer.nativeElement.currentTime

		this.watchedUpdateEmit.emit({ currentTime, percent })

		this.percent = percent
		this.videoDuration = formatDuration(videoDuration)
		this.currentTime = formatDuration(currentTime)
	}

	ngOnInit(): void {}
}
