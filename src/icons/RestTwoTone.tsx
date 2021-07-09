// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const RestTwoToneSvg = {"name":"rest","theme":"twotone"};

@tag('o-rest-two-tone')
export default class RestTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'RestTwoTone';
  static tagName = 'o-rest-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RestTwoToneSvg} />;
  };
}