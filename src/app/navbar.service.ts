import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  visibleSU: boolean;
  visibleCA: boolean;
  visibleVS: boolean;

  constructor() {
    this.visibleSU = false;
    this.visibleCA = false;
    this.visibleVS = false;
  }

  hideSU() {
    this.visibleSU = false;
  }
  hideCA() {
    this.visibleCA = false;
  }
  hideVS() {
    this.visibleVS = false;
  }

  showSU() {
    this.visibleSU = true;
  }

  showCA() {
    this.visibleCA = true;
  }

  showVS() {
    this.visibleVS = true;
  }

  // toggle() { this.visible = !this.visible; }

}
