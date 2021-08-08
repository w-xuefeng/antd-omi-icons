// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FolderTwoToneSvg: AntdIconProps['icon'] = {"name":"folder","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M372.5 256H184v512h656V370.4H492.1z", "fill": secondaryColor } }] }; }};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-folder-two-tone']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-folder-two-tone')
export default class FolderTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderTwoTone';
  static tagName = 'o-folder-two-tone';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={FolderTwoToneSvg} />;
  };
}