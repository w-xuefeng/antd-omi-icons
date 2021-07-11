// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const PlayCircleTwoToneSvg: AntdIconProps['icon'] = {"name":"play-circle","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm164.1 378.2L457.7 677.1a8.02 8.02 0 01-12.7-6.5V353a8 8 0 0112.7-6.5l218.4 158.8a7.9 7.9 0 010 12.9z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M676.1 505.3L457.7 346.5A8 8 0 00445 353v317.6a8.02 8.02 0 0012.7 6.5l218.4-158.9a7.9 7.9 0 000-12.9z", "fill": primaryColor } }] }; }};

@tag('o-play-circle-two-tone')
export default class PlayCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PlayCircleTwoTone';
  static tagName = 'o-play-circle-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={PlayCircleTwoToneSvg} />;
  };
}