import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
	selector: 'app-myjourney',
	templateUrl: './myjourney.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./myjourney.component.css']
})
export class myjourneyComponent implements OnInit {
	public myjourneyData = data['myjourney'];
	public darkTheme : boolean = true;

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
		setInterval(() => {
			this.darkTheme = !this.darkTheme;
			this.changeDetectorRef.detectChanges();
		}, 7100);
	}
}
