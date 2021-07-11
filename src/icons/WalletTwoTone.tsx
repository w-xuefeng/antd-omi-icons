// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const WalletTwoToneSvg: AntdIconProps['icon'] = {"name":"wallet","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0-192H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200H184V184h656v200z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M528 576h312V448H528v128zm92-104c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M580 512a40 40 0 1080 0 40 40 0 10-80 0z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M184 840h656V640H496c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32h344V184H184v656z", "fill": secondaryColor } }] }; }};

@tag('o-wallet-two-tone')
export default class WalletTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'WalletTwoTone';
  static tagName = 'o-wallet-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={WalletTwoToneSvg} />;
  };
}