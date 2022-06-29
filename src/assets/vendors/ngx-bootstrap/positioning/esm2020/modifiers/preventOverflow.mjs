import { getBoundaries, isModifierEnabled } from '../utils';
export function preventOverflow(data) {
    if (!isModifierEnabled(data.options, 'preventOverflow')) {
        return data;
    }
    // NOTE: DOM access here
    // resets the target Offsets's position so that the document size can be calculated excluding
    // the size of the targetOffsets element itself
    const transformProp = 'transform';
    const targetStyles = data.instance.target.style; // assignment to help minification
    const { top, left, [transformProp]: transform } = targetStyles;
    targetStyles.top = '';
    targetStyles.left = '';
    targetStyles[transformProp] = '';
    const boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    data.options.modifiers.preventOverflow?.boundariesElement || 'scrollParent', false // positionFixed
    );
    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    targetStyles.top = top;
    targetStyles.left = left;
    targetStyles[transformProp] = transform;
    const order = ['left', 'right', 'top', 'bottom'];
    const check = {
        primary(placement) {
            let value = data.offsets.target[placement];
            // options.escapeWithReference
            if ((data.offsets.target[placement] ?? 0) < (boundaries[placement] ?? 0)) {
                value = Math.max(data.offsets.target[placement] ?? 0, boundaries[placement] ?? 0);
            }
            return { [placement]: value };
        },
        secondary(placement) {
            const isPlacementHorizontal = placement === 'right';
            const mainSide = isPlacementHorizontal ? 'left' : 'top';
            const measurement = isPlacementHorizontal ? 'width' : 'height';
            let value = data.offsets.target[mainSide];
            // escapeWithReference
            if ((data.offsets.target[placement] ?? 0) > (boundaries[placement] ?? 0)) {
                value = Math.min(data.offsets.target[mainSide] ?? 0, (boundaries[placement] ?? 0) - data.offsets.target[measurement]);
            }
            return { [mainSide]: value };
        }
    };
    order.forEach((placement) => {
        const side = ['left', 'top', 'start'].indexOf(placement) !== -1 ? check['primary'] : check['secondary'];
        data.offsets.target = {
            ...data.offsets.target,
            ...side(placement)
        };
    });
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmVudE92ZXJmbG93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3Bvc2l0aW9uaW5nL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUc1RCxNQUFNLFVBQVUsZUFBZSxDQUFDLElBQVU7SUFDeEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsRUFBRTtRQUN2RCxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsd0JBQXdCO0lBQ3hCLDZGQUE2RjtJQUM3RiwrQ0FBK0M7SUFDL0MsTUFBTSxhQUFhLEdBQUcsV0FBVyxDQUFDO0lBQ2xDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGtDQUFrQztJQUNuRixNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLFlBQVksQ0FBQztJQUMvRCxZQUFZLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUN0QixZQUFZLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUN2QixZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRWpDLE1BQU0sVUFBVSxHQUFHLGFBQWEsQ0FDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUNsQixDQUFDLEVBQUUsVUFBVTtJQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxpQkFBaUIsSUFBSSxjQUFjLEVBQzNFLEtBQUssQ0FBQyxnQkFBZ0I7S0FDdkIsQ0FBQztJQUVGLHdCQUF3QjtJQUN4Qiw4RUFBOEU7SUFDOUUsWUFBWSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDdkIsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDekIsWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUV4QyxNQUFNLEtBQUssR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRWpELE1BQU0sS0FBSyxHQUFHO1FBQ1osT0FBTyxDQUFDLFNBQXdCO1lBQzlCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNDLDhCQUE4QjtZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ3hFLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDbkY7WUFFRCxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsU0FBUyxDQUFDLFNBQXdCO1lBQ2hDLE1BQU0scUJBQXFCLEdBQUcsU0FBUyxLQUFLLE9BQU8sQ0FBQztZQUNwRCxNQUFNLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDeEQsTUFBTSxXQUFXLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQy9ELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTFDLHNCQUFzQjtZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ3hFLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFDbEMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQ2hFLENBQUM7YUFDSDtZQUVELE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQy9CLENBQUM7S0FDRixDQUFDO0lBRUYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1FBQzFCLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHO1lBQ3BCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLEdBQUcsSUFBSSxDQUFDLFNBQTBCLENBQUM7U0FDcEMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Qm91bmRhcmllcywgaXNNb2RpZmllckVuYWJsZWQgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBEYXRhLCBPZmZzZXRzIH0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhkYXRhOiBEYXRhKSB7XG4gIGlmICghaXNNb2RpZmllckVuYWJsZWQoZGF0YS5vcHRpb25zLCAncHJldmVudE92ZXJmbG93JykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8vIE5PVEU6IERPTSBhY2Nlc3MgaGVyZVxuICAvLyByZXNldHMgdGhlIHRhcmdldCBPZmZzZXRzJ3MgcG9zaXRpb24gc28gdGhhdCB0aGUgZG9jdW1lbnQgc2l6ZSBjYW4gYmUgY2FsY3VsYXRlZCBleGNsdWRpbmdcbiAgLy8gdGhlIHNpemUgb2YgdGhlIHRhcmdldE9mZnNldHMgZWxlbWVudCBpdHNlbGZcbiAgY29uc3QgdHJhbnNmb3JtUHJvcCA9ICd0cmFuc2Zvcm0nO1xuICBjb25zdCB0YXJnZXRTdHlsZXMgPSBkYXRhLmluc3RhbmNlLnRhcmdldC5zdHlsZTsgLy8gYXNzaWdubWVudCB0byBoZWxwIG1pbmlmaWNhdGlvblxuICBjb25zdCB7IHRvcCwgbGVmdCwgW3RyYW5zZm9ybVByb3BdOiB0cmFuc2Zvcm0gfSA9IHRhcmdldFN0eWxlcztcbiAgdGFyZ2V0U3R5bGVzLnRvcCA9ICcnO1xuICB0YXJnZXRTdHlsZXMubGVmdCA9ICcnO1xuICB0YXJnZXRTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSAnJztcblxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhcbiAgICBkYXRhLmluc3RhbmNlLnRhcmdldCxcbiAgICBkYXRhLmluc3RhbmNlLmhvc3QsXG4gICAgMCwgLy8gcGFkZGluZ1xuICAgIGRhdGEub3B0aW9ucy5tb2RpZmllcnMucHJldmVudE92ZXJmbG93Py5ib3VuZGFyaWVzRWxlbWVudCB8fCAnc2Nyb2xsUGFyZW50JyxcbiAgICBmYWxzZSAvLyBwb3NpdGlvbkZpeGVkXG4gICk7XG5cbiAgLy8gTk9URTogRE9NIGFjY2VzcyBoZXJlXG4gIC8vIHJlc3RvcmVzIHRoZSBvcmlnaW5hbCBzdHlsZSBwcm9wZXJ0aWVzIGFmdGVyIHRoZSBvZmZzZXRzIGhhdmUgYmVlbiBjb21wdXRlZFxuICB0YXJnZXRTdHlsZXMudG9wID0gdG9wO1xuICB0YXJnZXRTdHlsZXMubGVmdCA9IGxlZnQ7XG4gIHRhcmdldFN0eWxlc1t0cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zZm9ybTtcblxuICBjb25zdCBvcmRlciA9IFsnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJ107XG5cbiAgY29uc3QgY2hlY2sgPSB7XG4gICAgcHJpbWFyeShwbGFjZW1lbnQ6IGtleW9mIE9mZnNldHMpIHtcbiAgICAgIGxldCB2YWx1ZSA9IGRhdGEub2Zmc2V0cy50YXJnZXRbcGxhY2VtZW50XTtcbiAgICAgIC8vIG9wdGlvbnMuZXNjYXBlV2l0aFJlZmVyZW5jZVxuICAgICAgaWYgKChkYXRhLm9mZnNldHMudGFyZ2V0W3BsYWNlbWVudF0gPz8gMCkgPCAoYm91bmRhcmllc1twbGFjZW1lbnRdID8/IDApKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5tYXgoZGF0YS5vZmZzZXRzLnRhcmdldFtwbGFjZW1lbnRdID8/IDAsIGJvdW5kYXJpZXNbcGxhY2VtZW50XSA/PyAwKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgW3BsYWNlbWVudF06IHZhbHVlIH07XG4gICAgfSxcbiAgICBzZWNvbmRhcnkocGxhY2VtZW50OiBrZXlvZiBPZmZzZXRzKSB7XG4gICAgICBjb25zdCBpc1BsYWNlbWVudEhvcml6b250YWwgPSBwbGFjZW1lbnQgPT09ICdyaWdodCc7XG4gICAgICBjb25zdCBtYWluU2lkZSA9IGlzUGxhY2VtZW50SG9yaXpvbnRhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgICAgY29uc3QgbWVhc3VyZW1lbnQgPSBpc1BsYWNlbWVudEhvcml6b250YWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG4gICAgICBsZXQgdmFsdWUgPSBkYXRhLm9mZnNldHMudGFyZ2V0W21haW5TaWRlXTtcblxuICAgICAgLy8gZXNjYXBlV2l0aFJlZmVyZW5jZVxuICAgICAgaWYgKChkYXRhLm9mZnNldHMudGFyZ2V0W3BsYWNlbWVudF0gPz8gMCkgPiAoYm91bmRhcmllc1twbGFjZW1lbnRdID8/IDApKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5taW4oXG4gICAgICAgICAgZGF0YS5vZmZzZXRzLnRhcmdldFttYWluU2lkZV0gPz8gMCxcbiAgICAgICAgICAoYm91bmRhcmllc1twbGFjZW1lbnRdID8/IDApIC0gZGF0YS5vZmZzZXRzLnRhcmdldFttZWFzdXJlbWVudF1cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgW21haW5TaWRlXTogdmFsdWUgfTtcbiAgICB9XG4gIH07XG5cbiAgb3JkZXIuZm9yRWFjaCgocGxhY2VtZW50KSA9PiB7XG4gICAgY29uc3Qgc2lkZSA9IFsnbGVmdCcsICd0b3AnLCAnc3RhcnQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xID8gY2hlY2tbJ3ByaW1hcnknXSA6IGNoZWNrWydzZWNvbmRhcnknXTtcblxuICAgIGRhdGEub2Zmc2V0cy50YXJnZXQgPSB7XG4gICAgICAuLi5kYXRhLm9mZnNldHMudGFyZ2V0LFxuICAgICAgLi4uc2lkZShwbGFjZW1lbnQgYXMga2V5b2YgT2Zmc2V0cylcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiJdfQ==