// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const RedEnvelopeTwoToneSvg: AntdIconProps['icon'] = {"name":"red-envelope","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V193.1l260.3 204.1c11.6 9.1 27.9 9.1 39.5 0L792 193.1V888zm0-751.3h-31.7L512 331.3 263.7 136.7H232v-.7h560v.7z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M492.3 397.2L232 193.1V888h560V193.1L531.8 397.2a31.99 31.99 0 01-39.5 0zm99.4 60.9h47.8a8.45 8.45 0 017.4 12.4l-87.2 161h45.9c4.6 0 8.4 3.8 8.4 8.4V665c0 4.6-3.8 8.4-8.4 8.4h-63.3V702h63.3c4.6 0 8.4 3.8 8.4 8.4v25c.2 4.7-3.5 8.5-8.2 8.5h-63.3v49.9c0 4.6-3.8 8.4-8.4 8.4h-43.7c-4.6 0-8.4-3.8-8.4-8.4v-49.9h-63c-4.6 0-8.4-3.8-8.4-8.4v-25.1c0-4.6 3.8-8.4 8.4-8.4h63v-28.6h-63c-4.6 0-8.4-3.8-8.4-8.4v-25.1c0-4.6 3.8-8.4 8.4-8.4h45.4L377 470.4a8.4 8.4 0 013.4-11.4c1.3-.6 2.6-1 3.9-1h48.8c3.2 0 6.1 1.8 7.5 4.6l71.7 142 71.9-141.9a8.6 8.6 0 017.5-4.6z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M232 136.7h31.7L512 331.3l248.3-194.6H792v-.7H232z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M440.6 462.6a8.38 8.38 0 00-7.5-4.6h-48.8c-1.3 0-2.6.4-3.9 1a8.4 8.4 0 00-3.4 11.4l87.4 161.1H419c-4.6 0-8.4 3.8-8.4 8.4V665c0 4.6 3.8 8.4 8.4 8.4h63V702h-63c-4.6 0-8.4 3.8-8.4 8.4v25.1c0 4.6 3.8 8.4 8.4 8.4h63v49.9c0 4.6 3.8 8.4 8.4 8.4h43.7c4.6 0 8.4-3.8 8.4-8.4v-49.9h63.3c4.7 0 8.4-3.8 8.2-8.5v-25c0-4.6-3.8-8.4-8.4-8.4h-63.3v-28.6h63.3c4.6 0 8.4-3.8 8.4-8.4v-25.1c0-4.6-3.8-8.4-8.4-8.4h-45.9l87.2-161a8.45 8.45 0 00-7.4-12.4h-47.8c-3.1 0-6 1.8-7.5 4.6l-71.9 141.9-71.7-142z", "fill": primaryColor } }] }; }};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-red-envelope-two-tone']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-red-envelope-two-tone')
export default class RedEnvelopeTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'RedEnvelopeTwoTone';
  static tagName = 'o-red-envelope-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={RedEnvelopeTwoToneSvg} />;
  };
}