import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  // newServerName = '';
  // newServerContent = '';

  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();

  @Output() bluePrintCreated=new EventEmitter<{serverName:string,serverContent:string}>();

  @ViewChild('serverContentInput',{ static: false }) serverContentInput:ElementRef;

  onAddServer(nameInput:HTMLInputElement) {
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    });
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    });
  }
}
