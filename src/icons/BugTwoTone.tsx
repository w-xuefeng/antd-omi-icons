// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const BugTwoToneSvg: AntdIconProps['icon'] = {"name":"bug","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M308 412v268c0 36.78 9.68 71.96 27.8 102.9a205.39 205.39 0 0073.3 73.3A202.68 202.68 0 00512 884c36.78 0 71.96-9.68 102.9-27.8a205.39 205.39 0 0073.3-73.3A202.68 202.68 0 00716 680V412H308zm484 172v96c0 6.5-.22 12.95-.66 19.35C859.94 728.64 908 796.7 908 876a8 8 0 01-8 8h-56a8 8 0 01-8-8c0-44.24-23.94-82.89-59.57-103.7a278.63 278.63 0 01-22.66 49.02 281.39 281.39 0 01-100.45 100.45C611.84 946.07 563.55 960 512 960s-99.84-13.93-141.32-38.23a281.39 281.39 0 01-100.45-100.45 278.63 278.63 0 01-22.66-49.02A119.95 119.95 0 00188 876a8 8 0 01-8 8h-56a8 8 0 01-8-8c0-79.3 48.07-147.36 116.66-176.65A284.12 284.12 0 01232 680v-96H84a8 8 0 01-8-8v-56a8 8 0 018-8h148V412c-76.77 0-139-62.23-139-139a8 8 0 018-8h60a8 8 0 018 8 63 63 0 0063 63h560a63 63 0 0063-63 8 8 0 018-8h60a8 8 0 018 8c0 76.77-62.23 139-139 139v100h148a8 8 0 018 8v56a8 8 0 01-8 8H792zM368 272a8 8 0 01-8 8h-56a8 8 0 01-8-8c0-40.04 8.78-76.75 25.9-108.07a184.57 184.57 0 0174.03-74.03C427.25 72.78 463.96 64 504 64h16c40.04 0 76.75 8.78 108.07 25.9a184.57 184.57 0 0174.03 74.03C719.22 195.25 728 231.96 728 272a8 8 0 01-8 8h-56a8 8 0 01-8-8c0-28.33-5.94-53.15-17.08-73.53a112.56 112.56 0 00-45.39-45.4C573.15 141.95 548.33 136 520 136h-16c-28.33 0-53.15 5.94-73.53 17.08a112.56 112.56 0 00-45.4 45.39C373.95 218.85 368 243.67 368 272z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M308 412v268c0 36.78 9.68 71.96 27.8 102.9a205.39 205.39 0 0073.3 73.3A202.68 202.68 0 00512 884c36.78 0 71.96-9.68 102.9-27.8a205.39 205.39 0 0073.3-73.3A202.68 202.68 0 00716 680V412H308z", "fill": secondaryColor } }] }; }};

@tag('o-bug-two-tone')
export default class BugTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'BugTwoTone';
  static tagName = 'o-bug-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BugTwoToneSvg} />;
  };
}