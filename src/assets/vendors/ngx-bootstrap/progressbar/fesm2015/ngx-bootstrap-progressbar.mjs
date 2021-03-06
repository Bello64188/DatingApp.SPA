import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, Injectable, NgModule } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';

class BarComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        /** maximum total value of progress element */
        this.max = 100;
        /** current value of progress bar */
        this.value = 0;
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** If `true`, striped classes are applied */
        this.striped = false;
        /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
        this.type = 'info';
        this.percent = 100;
    }
    get isBs3() {
        return isBs3();
    }
    ngOnChanges(changes) {
        var _a, _b;
        if (changes["value"] || changes["max"]) {
            this.percent = 100 * (Number(((_a = changes["value"]) === null || _a === void 0 ? void 0 : _a.currentValue) || this.value)
                / Number((((_b = changes["max"]) === null || _b === void 0 ? void 0 : _b.currentValue) || this.max) || 100));
        }
        if (changes["type"]) {
            this.applyTypeClasses();
        }
    }
    applyTypeClasses() {
        if (this._prevType) {
            const barTypeClass = `progress-bar-${this._prevType}`;
            const bgClass = `bg-${this._prevType}`;
            this.renderer.removeClass(this.el.nativeElement, barTypeClass);
            this.renderer.removeClass(this.el.nativeElement, bgClass);
            this._prevType = void 0;
        }
        if (this.type) {
            const barTypeClass = `progress-bar-${this.type}`;
            const bgClass = `bg-${this.type}`;
            this.renderer.addClass(this.el.nativeElement, barTypeClass);
            this.renderer.addClass(this.el.nativeElement, bgClass);
            this._prevType = this.type;
        }
    }
}
BarComponent.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BarComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.????FactoryTarget.Component });
BarComponent.??cmp = i0.????ngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: BarComponent, selector: "bar", inputs: { max: "max", value: "value", animate: "animate", striped: "striped", type: "type" }, host: { attributes: { "role": "progressbar", "aria-valuemin": "0" }, properties: { "class.progress-bar": "true", "class.progress-bar-animated": "!isBs3 && animate", "class.progress-bar-striped": "striped", "class.active": "isBs3 && animate", "attr.aria-valuenow": "value", "attr.aria-valuetext": "percent ? percent.toFixed(0) + \"%\" : \"\"", "attr.aria-valuemax": "max", "style.height.%": "\"100\"", "style.width.%": "percent" } }, usesOnChanges: true, ngImport: i0, template: "<ng-content></ng-content>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bar', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        role: 'progressbar',
                        'aria-valuemin': '0',
                        '[class.progress-bar]': 'true',
                        '[class.progress-bar-animated]': '!isBs3 && animate',
                        '[class.progress-bar-striped]': 'striped',
                        '[class.active]': 'isBs3 && animate',
                        '[attr.aria-valuenow]': 'value',
                        '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                        '[attr.aria-valuemax]': 'max',
                        '[style.height.%]': '"100"',
                        '[style.width.%]': 'percent'
                    }, template: "<ng-content></ng-content>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { max: [{
                type: Input
            }], value: [{
                type: Input
            }], animate: [{
                type: Input
            }], striped: [{
                type: Input
            }], type: [{
                type: Input
            }] } });

class ProgressbarConfig {
    constructor() {
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** maximum total value of progress element */
        this.max = 100;
    }
}
ProgressbarConfig.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ProgressbarConfig, deps: [], target: i0.????FactoryTarget.Injectable });
ProgressbarConfig.??prov = i0.????ngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ProgressbarConfig, providedIn: 'root' });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ProgressbarConfig, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class ProgressbarComponent {
    constructor(config) {
        /** maximum total value of progress element */
        this.max = 100;
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** If `true`, striped classes are applied */
        this.striped = false;
        this.isStacked = false;
        this._value = 0;
        Object.assign(this, config);
    }
    /** current value of progress bar. Could be a number or array of objects
     * like {"value":15,"type":"info","label":"15 %"}
     */
    set value(value) {
        this.isStacked = Array.isArray(value);
        if (typeof value === 'number') {
            this._value = value;
            this._values = void 0;
        }
        else {
            this._value = void 0;
            this._values = value;
        }
    }
}
ProgressbarComponent.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ProgressbarComponent, deps: [{ token: ProgressbarConfig }], target: i0.????FactoryTarget.Component });
ProgressbarComponent.??cmp = i0.????ngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: ProgressbarComponent, selector: "progressbar", inputs: { max: "max", animate: "animate", striped: "striped", type: "type", value: "value" }, host: { properties: { "class.progress": "true", "attr.max": "max" } }, ngImport: i0, template: "<ng-container *ngIf=\"!isStacked then NotStacked else Stacked\"></ng-container>\n\n<ng-template #NotStacked>\n  <bar [type]=\"type\" [value]=\"_value\" [max]=\"max\" [animate]=\"animate\" [striped]=\"striped\">\n    <ng-content></ng-content>\n  </bar>\n</ng-template>\n\n<ng-template #Stacked>\n  <bar *ngFor=\"let item of _values\"\n       [type]=\"item.type\" [value]=\"item.value\" [max]=\"item.max || max\" [animate]=\"animate\" [striped]=\"striped\">{{ item.label }}</bar>\n</ng-template>\n", styles: [":host{width:100%;display:flex}\n"], components: [{ type: BarComponent, selector: "bar", inputs: ["max", "value", "animate", "striped", "type"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ProgressbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'progressbar', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.progress]': 'true',
                        '[attr.max]': 'max'
                    }, styles: [`
    :host {
      width: 100%;
      display: flex;
    } `], template: "<ng-container *ngIf=\"!isStacked then NotStacked else Stacked\"></ng-container>\n\n<ng-template #NotStacked>\n  <bar [type]=\"type\" [value]=\"_value\" [max]=\"max\" [animate]=\"animate\" [striped]=\"striped\">\n    <ng-content></ng-content>\n  </bar>\n</ng-template>\n\n<ng-template #Stacked>\n  <bar *ngFor=\"let item of _values\"\n       [type]=\"item.type\" [value]=\"item.value\" [max]=\"item.max || max\" [animate]=\"animate\" [striped]=\"striped\">{{ item.label }}</bar>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: ProgressbarConfig }]; }, propDecorators: { max: [{
                type: Input
            }], animate: [{
                type: Input
            }], striped: [{
                type: Input
            }], type: [{
                type: Input
            }], value: [{
                type: Input
            }] } });

class ProgressbarModule {
    static forRoot() {
        return { ngModule: ProgressbarModule, providers: [] };
    }
}
ProgressbarModule.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ProgressbarModule, deps: [], target: i0.????FactoryTarget.NgModule });
ProgressbarModule.??mod = i0.????ngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ProgressbarModule, declarations: [BarComponent, ProgressbarComponent], imports: [CommonModule], exports: [BarComponent, ProgressbarComponent] });
ProgressbarModule.??inj = i0.????ngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ProgressbarModule, imports: [[CommonModule]] });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ProgressbarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [BarComponent, ProgressbarComponent],
                    exports: [BarComponent, ProgressbarComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule };
//# sourceMappingURL=ngx-bootstrap-progressbar.mjs.map
