// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const EyeInvisibleTwoToneSvg: AntdIconProps['icon'] = {"name":"eye-invisible","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M254.89 758.85l125.57-125.57a176 176 0 01248.82-248.82L757 256.72Q651.69 186.07 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q69.27 145.91 173.09 221.05zM942.2 486.2Q889.46 375.11 816.7 305L672.48 449.27a176.09 176.09 0 01-227.22 227.21L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zM878.63 165.56L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z", "fill": primaryColor } }] }; }};

@tag('o-eye-invisible-two-tone')
export default class EyeInvisibleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'EyeInvisibleTwoTone';
  static tagName = 'o-eye-invisible-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={EyeInvisibleTwoToneSvg} />;
  };
}