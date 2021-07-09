// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FrownTwoToneSvg: AntdIconProps['icon'] = {"name":"frown","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zM288 421a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm376 272h-48.1c-4.2 0-7.8-3.2-8.1-7.4C604 636.1 562.5 597 512 597s-92.1 39.1-95.8 88.6c-.3 4.2-3.9 7.4-8.1 7.4H360a8 8 0 01-8-8.4c4.4-84.3 74.5-151.6 160-151.6s155.6 67.3 160 151.6a8 8 0 01-8 8.4zm24-224a48.01 48.01 0 010-96 48.01 48.01 0 010 96z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M288 421a48 48 0 1096 0 48 48 0 10-96 0zm224 112c-85.5 0-155.6 67.3-160 151.6a8 8 0 008 8.4h48.1c4.2 0 7.8-3.2 8.1-7.4 3.7-49.5 45.3-88.6 95.8-88.6s92 39.1 95.8 88.6c.3 4.2 3.9 7.4 8.1 7.4H664a8 8 0 008-8.4C667.6 600.3 597.5 533 512 533zm128-112a48 48 0 1096 0 48 48 0 10-96 0z", "fill": primaryColor } }] }; }};

@tag('o-frown-two-tone')
export default class FrownTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FrownTwoTone';
  static tagName = 'o-frown-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FrownTwoToneSvg} />;
  };
}