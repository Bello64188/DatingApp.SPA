import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { TooltipContainerComponent } from './tooltip-container.component';
import { TooltipConfig } from './tooltip.config';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { OnChange, warnOnce, parseTriggers } from 'ngx-bootstrap/utils';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { timer } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/component-loader";
import * as i2 from "./tooltip.config";
import * as i3 from "ngx-bootstrap/positioning";
let id = 0;
export class TooltipDirective {
    constructor(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._positionService = _positionService;
        this.tooltipId = id++;
        /** sets disable adaptive position */
        this.adaptivePosition = true;
        /** Fired when tooltip content changes */
        this.tooltipChange = new EventEmitter();
        /**
         * Placement of a tooltip. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'hover focus';
        /**
         * Css class for tooltip container
         */
        this.containerClass = '';
        /**
         * Allows to disable tooltip
         */
        this.isDisabled = false;
        /**
         * Delay before showing the tooltip
         */
        this.delay = 0;
        /** @deprecated - removed, will be added to configuration */
        this.tooltipAnimation = true;
        /** @deprecated */
        this.tooltipFadeDuration = 150;
        /** @deprecated */
        this.tooltipStateChanged = new EventEmitter();
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, this._renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    /**
     * Returns whether or not the tooltip is currently being shown
     */
    get isOpen() {
        return this._tooltip.isShown;
    }
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /** @deprecated - please use `tooltip` instead */
    set htmlContent(value) {
        warnOnce('tooltipHtml was deprecated, please use `tooltip` instead');
        this.tooltip = value;
    }
    /** @deprecated - please use `placement` instead */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _placement(value) {
        warnOnce('tooltipPlacement was deprecated, please use `placement` instead');
        this.placement = value;
    }
    /** @deprecated - please use `isOpen` instead */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _isOpen(value) {
        warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
        this.isOpen = value;
    }
    get _isOpen() {
        warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
        return this.isOpen;
    }
    /** @deprecated - please use `isDisabled` instead */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _enable(value) {
        warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
        this.isDisabled = !value;
    }
    get _enable() {
        warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
        return this.isDisabled;
    }
    /** @deprecated - please use `container="body"` instead */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _appendToBody(value) {
        warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
        this.container = value ? 'body' : this.container;
    }
    get _appendToBody() {
        warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
        return this.container === 'body';
    }
    /** @deprecated - will replaced with customClass */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _popupClass(value) {
        warnOnce('tooltipClass deprecated');
    }
    /** @deprecated - removed */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _tooltipContext(value) {
        warnOnce('tooltipContext deprecated');
    }
    /** @deprecated */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _tooltipPopupDelay(value) {
        warnOnce('tooltipPopupDelay is deprecated, use `delay` instead');
        this.delay = value;
    }
    /** @deprecated -  please use `triggers` instead */
    get _tooltipTrigger() {
        warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
        return this.triggers;
    }
    set _tooltipTrigger(value) {
        warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
        this.triggers = (value || '').toString();
    }
    ngOnInit() {
        this._tooltip.listen({
            triggers: this.triggers,
            show: () => this.show()
        });
        this.tooltipChange.subscribe((value) => {
            if (!value) {
                this._tooltip.hide();
            }
        });
        this.onShown.subscribe(() => {
            this.setAriaDescribedBy();
        });
        this.onHidden.subscribe(() => {
            this.setAriaDescribedBy();
        });
    }
    setAriaDescribedBy() {
        this._ariaDescribedby = this.isOpen ? `tooltip-${this.tooltipId}` : void 0;
        if (this._ariaDescribedby) {
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
        }
        else {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
        }
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    show() {
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this.adaptivePosition
                },
                preventOverflow: {
                    enabled: this.adaptivePosition,
                    boundariesElement: this.boundariesElement || 'scrollParent'
                }
            }
        });
        if (this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip) {
            return;
        }
        const showTooltip = () => {
            if (this._delayTimeoutId) {
                this._delayTimeoutId = undefined;
            }
            this._tooltip
                .attach(TooltipContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({
                content: this.tooltip,
                placement: this.placement,
                containerClass: this.containerClass,
                id: `tooltip-${this.tooltipId}`
            });
        };
        const cancelDelayedTooltipShowing = () => {
            if (this._tooltipCancelShowFn) {
                this._tooltipCancelShowFn();
            }
        };
        if (this.delay) {
            if (this._delaySubscription) {
                this._delaySubscription.unsubscribe();
            }
            this._delaySubscription = timer(this.delay).subscribe(() => {
                showTooltip();
                cancelDelayedTooltipShowing();
            });
            if (this.triggers) {
                parseTriggers(this.triggers)
                    .forEach((trigger) => {
                    if (!trigger.close) {
                        return;
                    }
                    this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, trigger.close, () => {
                        this._delaySubscription?.unsubscribe();
                        cancelDelayedTooltipShowing();
                    });
                });
            }
        }
        else {
            showTooltip();
        }
    }
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    hide() {
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        if (this._tooltip.instance?.classMap) {
            this._tooltip.instance.classMap["in"] = false;
        }
        setTimeout(() => {
            this._tooltip.hide();
        }, this.tooltipFadeDuration);
    }
    ngOnDestroy() {
        this._tooltip.dispose();
        this.tooltipChange.unsubscribe();
        if (this._delaySubscription) {
            this._delaySubscription.unsubscribe();
        }
        this.onShown.unsubscribe();
        this.onHidden.unsubscribe();
    }
}
TooltipDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: TooltipDirective, deps: [{ token: i0.ViewContainerRef }, { token: i1.ComponentLoaderFactory }, { token: i2.TooltipConfig }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i3.PositioningService }], target: i0.ɵɵFactoryTarget.Directive });
TooltipDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.1.1", type: TooltipDirective, selector: "[tooltip], [tooltipHtml]", inputs: { adaptivePosition: "adaptivePosition", tooltip: "tooltip", placement: "placement", triggers: "triggers", container: "container", containerClass: "containerClass", boundariesElement: "boundariesElement", isOpen: "isOpen", isDisabled: "isDisabled", delay: "delay", htmlContent: ["tooltipHtml", "htmlContent"], _placement: ["tooltipPlacement", "_placement"], _isOpen: ["tooltipIsOpen", "_isOpen"], _enable: ["tooltipEnable", "_enable"], _appendToBody: ["tooltipAppendToBody", "_appendToBody"], tooltipAnimation: "tooltipAnimation", _popupClass: ["tooltipClass", "_popupClass"], _tooltipContext: ["tooltipContext", "_tooltipContext"], _tooltipPopupDelay: ["tooltipPopupDelay", "_tooltipPopupDelay"], tooltipFadeDuration: "tooltipFadeDuration", _tooltipTrigger: ["tooltipTrigger", "_tooltipTrigger"] }, outputs: { tooltipChange: "tooltipChange", onShown: "onShown", onHidden: "onHidden", tooltipStateChanged: "tooltipStateChanged" }, exportAs: ["bs-tooltip"], ngImport: i0 });
__decorate([
    OnChange(),
    __metadata("design:type", Object)
], TooltipDirective.prototype, "tooltip", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: TooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tooltip], [tooltipHtml]',
                    exportAs: 'bs-tooltip'
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i1.ComponentLoaderFactory }, { type: i2.TooltipConfig }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i3.PositioningService }]; }, propDecorators: { adaptivePosition: [{
                type: Input
            }], tooltip: [{
                type: Input
            }], tooltipChange: [{
                type: Output
            }], placement: [{
                type: Input
            }], triggers: [{
                type: Input
            }], container: [{
                type: Input
            }], containerClass: [{
                type: Input
            }], boundariesElement: [{
                type: Input
            }], isOpen: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], delay: [{
                type: Input
            }], onShown: [{
                type: Output
            }], onHidden: [{
                type: Output
            }], htmlContent: [{
                type: Input,
                args: ['tooltipHtml']
            }], _placement: [{
                type: Input,
                args: ['tooltipPlacement']
            }], _isOpen: [{
                type: Input,
                args: ['tooltipIsOpen']
            }], _enable: [{
                type: Input,
                args: ['tooltipEnable']
            }], _appendToBody: [{
                type: Input,
                args: ['tooltipAppendToBody']
            }], tooltipAnimation: [{
                type: Input
            }], _popupClass: [{
                type: Input,
                args: ['tooltipClass']
            }], _tooltipContext: [{
                type: Input,
                args: ['tooltipContext']
            }], _tooltipPopupDelay: [{
                type: Input,
                args: ['tooltipPopupDelay']
            }], tooltipFadeDuration: [{
                type: Input
            }], _tooltipTrigger: [{
                type: Input,
                args: ['tooltipTrigger']
            }], tooltipStateChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdG9vbHRpcC90b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUVULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQsT0FBTyxFQUFtQixzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBVyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxLQUFLLEVBQWdCLE1BQU0sTUFBTSxDQUFDOzs7OztBQUczQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFNWCxNQUFNLE9BQU8sZ0JBQWdCO0lBbUwzQixZQUNFLGlCQUFtQyxFQUNuQyxHQUEyQixFQUMzQixNQUFxQixFQUNiLFdBQXVCLEVBQ3ZCLFNBQW9CLEVBQ3BCLGdCQUFvQztRQUZwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7UUF4TDlDLGNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUNqQixxQ0FBcUM7UUFDNUIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBT2pDLHlDQUF5QztRQUV6QyxrQkFBYSxHQUFnRCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWhGOztXQUVHO1FBQ00sY0FBUyxHQUF3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ZUFBZTtnQkFlbEIsYUFBYTtzQkFEaEIsS0FBSzt1QkFBQyxxQkFBcUI7Z0JBaUJuQixnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBS0YsV0FBVztzQkFEZCxLQUFLO3VCQUFDLGNBQWM7Z0JBUWpCLGVBQWU7c0JBRGxCLEtBQUs7dUJBQUMsZ0JBQWdCO2dCQVFuQixrQkFBa0I7c0JBRHJCLEtBQUs7dUJBQUMsbUJBQW1CO2dCQU9qQixtQkFBbUI7c0JBQTNCLEtBQUs7Z0JBSUYsZUFBZTtzQkFEbEIsS0FBSzt1QkFBQyxnQkFBZ0I7Z0JBY3ZCLG1CQUFtQjtzQkFEbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRvb2x0aXBDb25maWcgfSBmcm9tICcuL3Rvb2x0aXAuY29uZmlnJztcblxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IE9uQ2hhbmdlLCB3YXJuT25jZSwgcGFyc2VUcmlnZ2VycywgVHJpZ2dlciB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5cbmltcG9ydCB7IHRpbWVyLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF2YWlsYmxlQlNQb3NpdGlvbnMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcblxubGV0IGlkID0gMDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3Rvb2x0aXBdLCBbdG9vbHRpcEh0bWxdJyxcbiAgZXhwb3J0QXM6ICdicy10b29sdGlwJ1xufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICB0b29sdGlwSWQgPSBpZCsrO1xuICAvKiogc2V0cyBkaXNhYmxlIGFkYXB0aXZlIHBvc2l0aW9uICovXG4gIEBJbnB1dCgpIGFkYXB0aXZlUG9zaXRpb24gPSB0cnVlO1xuICAvKipcbiAgICogQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgYXMgdG9vbHRpcC5cbiAgICovXG4gIEBPbkNoYW5nZSgpXG4gIEBJbnB1dCgpXG4gIHRvb2x0aXA/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx1bmtub3duPjtcbiAgLyoqIEZpcmVkIHdoZW4gdG9vbHRpcCBjb250ZW50IGNoYW5nZXMgKi9cbiAgQE91dHB1dCgpXG4gIHRvb2x0aXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBUZW1wbGF0ZVJlZjx1bmtub3duPj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFBsYWNlbWVudCBvZiBhIHRvb2x0aXAuIEFjY2VwdHM6IFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogQXZhaWxibGVCU1Bvc2l0aW9ucyA9ICd0b3AnO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXG4gICAqIGV2ZW50IG5hbWVzLlxuICAgKi9cbiAgQElucHV0KCkgdHJpZ2dlcnMgPSAnaG92ZXIgZm9jdXMnO1xuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSB0b29sdGlwIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lcj86IHN0cmluZztcbiAgLyoqXG4gICAqIENzcyBjbGFzcyBmb3IgdG9vbHRpcCBjb250YWluZXJcbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lckNsYXNzID0gJyc7XG4gIEBJbnB1dCgpIGJvdW5kYXJpZXNFbGVtZW50PzogKCd2aWV3cG9ydCcgfCAnc2Nyb2xsUGFyZW50JyB8ICd3aW5kb3cnKTtcbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHRvb2x0aXAgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwLmlzU2hvd247XG4gIH1cblxuICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0byBkaXNhYmxlIHRvb2x0aXBcbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogRGVsYXkgYmVmb3JlIHNob3dpbmcgdGhlIHRvb2x0aXBcbiAgICovXG4gIEBJbnB1dCgpIGRlbGF5ID0gMDtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgdG9vbHRpcCBpcyBzaG93blxuICAgKi9cbiAgQE91dHB1dCgpIG9uU2hvd246IEV2ZW50RW1pdHRlcjx1bmtub3duPjtcbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHRvb2x0aXAgaXMgaGlkZGVuXG4gICAqL1xuICBAT3V0cHV0KCkgb25IaWRkZW46IEV2ZW50RW1pdHRlcjx1bmtub3duPjtcblxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGB0b29sdGlwYCBpbnN0ZWFkICovXG4gIEBJbnB1dCgndG9vbHRpcEh0bWwnKVxuICAgIHNldCBodG1sQ29udGVudCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dW5rbm93bj4pIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcEh0bWwgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYHRvb2x0aXBgIGluc3RlYWQnKTtcbiAgICB0aGlzLnRvb2x0aXAgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYHBsYWNlbWVudGAgaW5zdGVhZCAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ3Rvb2x0aXBQbGFjZW1lbnQnKVxuICBzZXQgX3BsYWNlbWVudCh2YWx1ZTogQXZhaWxibGVCU1Bvc2l0aW9ucykge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwUGxhY2VtZW50IHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBwbGFjZW1lbnRgIGluc3RlYWQnKTtcbiAgICB0aGlzLnBsYWNlbWVudCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgaXNPcGVuYCBpbnN0ZWFkICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgndG9vbHRpcElzT3BlbicpXG4gIHNldCBfaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBJc09wZW4gd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGlzT3BlbmAgaW5zdGVhZCcpO1xuICAgIHRoaXMuaXNPcGVuID0gdmFsdWU7XG4gIH1cblxuICBnZXQgX2lzT3BlbigpOiBib29sZWFuIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcElzT3BlbiB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNPcGVuYCBpbnN0ZWFkJyk7XG5cbiAgICByZXR1cm4gdGhpcy5pc09wZW47XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBpc0Rpc2FibGVkYCBpbnN0ZWFkICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgndG9vbHRpcEVuYWJsZScpXG4gIHNldCBfZW5hYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBFbmFibGUgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGlzRGlzYWJsZWRgIGluc3RlYWQnKTtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSAhdmFsdWU7XG4gIH1cblxuICBnZXQgX2VuYWJsZSgpOiBib29sZWFuIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcEVuYWJsZSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNEaXNhYmxlZGAgaW5zdGVhZCcpO1xuXG4gICAgcmV0dXJuIHRoaXMuaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYGNvbnRhaW5lcj1cImJvZHlcImAgaW5zdGVhZCAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ3Rvb2x0aXBBcHBlbmRUb0JvZHknKVxuICBzZXQgX2FwcGVuZFRvQm9keSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHdhcm5PbmNlKFxuICAgICAgJ3Rvb2x0aXBBcHBlbmRUb0JvZHkgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGNvbnRhaW5lcj1cImJvZHlcImAgaW5zdGVhZCdcbiAgICApO1xuICAgIHRoaXMuY29udGFpbmVyID0gdmFsdWUgPyAnYm9keScgOiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxuXG4gIGdldCBfYXBwZW5kVG9Cb2R5KCk6IGJvb2xlYW4ge1xuICAgIHdhcm5PbmNlKFxuICAgICAgJ3Rvb2x0aXBBcHBlbmRUb0JvZHkgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGNvbnRhaW5lcj1cImJvZHlcImAgaW5zdGVhZCdcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyID09PSAnYm9keSc7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgLSByZW1vdmVkLCB3aWxsIGJlIGFkZGVkIHRvIGNvbmZpZ3VyYXRpb24gKi9cbiAgQElucHV0KCkgdG9vbHRpcEFuaW1hdGlvbiA9IHRydWU7XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gd2lsbCByZXBsYWNlZCB3aXRoIGN1c3RvbUNsYXNzICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgndG9vbHRpcENsYXNzJylcbiAgc2V0IF9wb3B1cENsYXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcENsYXNzIGRlcHJlY2F0ZWQnKTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHJlbW92ZWQgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCd0b29sdGlwQ29udGV4dCcpXG4gIHNldCBfdG9vbHRpcENvbnRleHQodmFsdWU6IHVuZGVmaW5lZCkge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwQ29udGV4dCBkZXByZWNhdGVkJyk7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCd0b29sdGlwUG9wdXBEZWxheScpXG4gIHNldCBfdG9vbHRpcFBvcHVwRGVsYXkodmFsdWU6IG51bWJlcikge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwUG9wdXBEZWxheSBpcyBkZXByZWNhdGVkLCB1c2UgYGRlbGF5YCBpbnN0ZWFkJyk7XG4gICAgdGhpcy5kZWxheSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIEBJbnB1dCgpIHRvb2x0aXBGYWRlRHVyYXRpb24gPSAxNTA7XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gIHBsZWFzZSB1c2UgYHRyaWdnZXJzYCBpbnN0ZWFkICovXG4gIEBJbnB1dCgndG9vbHRpcFRyaWdnZXInKVxuICBnZXQgX3Rvb2x0aXBUcmlnZ2VyKCk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcFRyaWdnZXIgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYHRyaWdnZXJzYCBpbnN0ZWFkJyk7XG5cbiAgICByZXR1cm4gdGhpcy50cmlnZ2VycztcbiAgfVxuXG4gIHNldCBfdG9vbHRpcFRyaWdnZXIodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBUcmlnZ2VyIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGB0cmlnZ2Vyc2AgaW5zdGVhZCcpO1xuICAgIHRoaXMudHJpZ2dlcnMgPSAodmFsdWUgfHwgJycpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgQE91dHB1dCgpXG4gIHRvb2x0aXBTdGF0ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwcm90ZWN0ZWQgX2RlbGF5VGltZW91dElkPzogbnVtYmVyO1xuICBwcm90ZWN0ZWQgX3Rvb2x0aXBDYW5jZWxTaG93Rm4/OiAoKSA9PiB2b2lkO1xuXG4gIHByaXZhdGUgX3Rvb2x0aXA6IENvbXBvbmVudExvYWRlcjxUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBfZGVsYXlTdWJzY3JpcHRpb24/OiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2FyaWFEZXNjcmliZWRieT86IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICAgIGNvbmZpZzogVG9vbHRpcENvbmZpZyxcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25TZXJ2aWNlOiBQb3NpdGlvbmluZ1NlcnZpY2VcbiAgKSB7XG5cbiAgICB0aGlzLl90b29sdGlwID0gY2lzXG4gICAgICAuY3JlYXRlTG9hZGVyPFRvb2x0aXBDb250YWluZXJDb21wb25lbnQ+KFxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLFxuICAgICAgICBfdmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgdGhpcy5fcmVuZGVyZXJcbiAgICAgIClcbiAgICAgIC5wcm92aWRlKHtwcm92aWRlOiBUb29sdGlwQ29uZmlnLCB1c2VWYWx1ZTogY29uZmlnfSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gICAgdGhpcy5vblNob3duID0gdGhpcy5fdG9vbHRpcC5vblNob3duO1xuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl90b29sdGlwLm9uSGlkZGVuO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fdG9vbHRpcC5saXN0ZW4oe1xuICAgICAgdHJpZ2dlcnM6IHRoaXMudHJpZ2dlcnMsXG4gICAgICBzaG93OiAoKSA9PiB0aGlzLnNob3coKVxuICAgIH0pO1xuICAgIHRoaXMudG9vbHRpcENoYW5nZS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXAuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vblNob3duLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNldEFyaWFEZXNjcmliZWRCeSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbkhpZGRlbi5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRBcmlhRGVzY3JpYmVkQnkoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldEFyaWFEZXNjcmliZWRCeSgpOiB2b2lkIHtcbiAgICB0aGlzLl9hcmlhRGVzY3JpYmVkYnkgPSB0aGlzLmlzT3BlbiA/IGB0b29sdGlwLSR7dGhpcy50b29sdGlwSWR9YCA6IHZvaWQgMDtcblxuICAgIGlmICh0aGlzLl9hcmlhRGVzY3JpYmVkYnkpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhcmlhLWRlc2NyaWJlZGJ5JywgdGhpcy5fYXJpYURlc2NyaWJlZGJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBhbiBlbGVtZW504oCZcyB0b29sdGlwLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgdG9vbHRpcC5cbiAgICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhbiBlbGVtZW504oCZcyB0b29sdGlwLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgdG9vbHRpcC5cbiAgICovXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5fcG9zaXRpb25TZXJ2aWNlLnNldE9wdGlvbnMoe1xuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIGZsaXA6IHtcbiAgICAgICAgICBlbmFibGVkOiB0aGlzLmFkYXB0aXZlUG9zaXRpb25cbiAgICAgICAgfSxcbiAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgZW5hYmxlZDogdGhpcy5hZGFwdGl2ZVBvc2l0aW9uLFxuICAgICAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiB0aGlzLmJvdW5kYXJpZXNFbGVtZW50IHx8ICdzY3JvbGxQYXJlbnQnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMuaXNPcGVuIHx8XG4gICAgICB0aGlzLmlzRGlzYWJsZWQgfHxcbiAgICAgIHRoaXMuX2RlbGF5VGltZW91dElkIHx8XG4gICAgICAhdGhpcy50b29sdGlwXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1Rvb2x0aXAgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fZGVsYXlUaW1lb3V0SWQpIHtcbiAgICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Rvb2x0aXBcbiAgICAgICAgLmF0dGFjaChUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgICAudG8odGhpcy5jb250YWluZXIpXG4gICAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogdGhpcy5wbGFjZW1lbnR9KVxuICAgICAgICAuc2hvdyh7XG4gICAgICAgICAgY29udGVudDogdGhpcy50b29sdGlwLFxuICAgICAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXG4gICAgICAgICAgY29udGFpbmVyQ2xhc3M6IHRoaXMuY29udGFpbmVyQ2xhc3MsXG4gICAgICAgICAgaWQ6IGB0b29sdGlwLSR7dGhpcy50b29sdGlwSWR9YFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGNhbmNlbERlbGF5ZWRUb29sdGlwU2hvd2luZyA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl90b29sdGlwQ2FuY2VsU2hvd0ZuKSB7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBDYW5jZWxTaG93Rm4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuZGVsYXkpIHtcbiAgICAgIGlmICh0aGlzLl9kZWxheVN1YnNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLl9kZWxheVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9kZWxheVN1YnNjcmlwdGlvbiA9IHRpbWVyKHRoaXMuZGVsYXkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHNob3dUb29sdGlwKCk7XG4gICAgICAgIGNhbmNlbERlbGF5ZWRUb29sdGlwU2hvd2luZygpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnRyaWdnZXJzKSB7XG4gICAgICAgIHBhcnNlVHJpZ2dlcnModGhpcy50cmlnZ2VycylcbiAgICAgICAgICAuZm9yRWFjaCgodHJpZ2dlcjogVHJpZ2dlcikgPT4ge1xuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyLmNsb3NlKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3Rvb2x0aXBDYW5jZWxTaG93Rm4gPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICAgdHJpZ2dlci5jbG9zZSxcbiAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlbGF5U3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIGNhbmNlbERlbGF5ZWRUb29sdGlwU2hvd2luZygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzaG93VG9vbHRpcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYW4gZWxlbWVudOKAmXMgdG9vbHRpcC4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHRvb2x0aXAuXG4gICAqL1xuICBoaWRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kZWxheVRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5VGltZW91dElkKTtcbiAgICAgIHRoaXMuX2RlbGF5VGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fdG9vbHRpcC5pc1Nob3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Rvb2x0aXAuaW5zdGFuY2U/LmNsYXNzTWFwKSB7XG4gICAgICB0aGlzLl90b29sdGlwLmluc3RhbmNlLmNsYXNzTWFwW1wiaW5cIl0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3Rvb2x0aXAuaGlkZSgpO1xuICAgIH0sIHRoaXMudG9vbHRpcEZhZGVEdXJhdGlvbik7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl90b29sdGlwLmRpc3Bvc2UoKTtcbiAgICB0aGlzLnRvb2x0aXBDaGFuZ2UudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5fZGVsYXlTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2RlbGF5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMub25TaG93bi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMub25IaWRkZW4udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19