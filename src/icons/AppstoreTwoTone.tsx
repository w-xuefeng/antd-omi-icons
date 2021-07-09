// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const AppstoreTwoToneSvg = {"name":"appstore","theme":"twotone"};

@tag('o-appstore-two-tone')
export default class AppstoreTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'AppstoreTwoTone';
  static tagName = 'o-appstore-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AppstoreTwoToneSvg} />;
  };
}