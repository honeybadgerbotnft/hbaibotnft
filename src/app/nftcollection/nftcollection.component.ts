import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var data : any;
declare var VanillaTilt:any;

@Component({
	selector: 'app-nftcollection',
	templateUrl: './nftcollection.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./nftcollection.component.css']

})

export class nftcollectionComponent implements OnInit,AfterViewInit {
	public nftcollectionData  = data['nftcollection'];
	public checkScreenSize : boolean = screen.width >= 768;

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}

	ngAfterViewInit(): void {
		if (this.checkScreenSize) {
			let box: any = document.querySelectorAll('.box');
			VanillaTilt.init(box, {
				max: 25,
				speed: 400,
				startX: 0,
				startY: 0,
				scale: 1.03
			});
		}
    }
}
