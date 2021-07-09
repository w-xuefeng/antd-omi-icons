// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const BankTwoToneSvg = {"name":"bank","theme":"twotone"};

@tag('o-bank-two-tone')
export default class BankTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'BankTwoTone';
  static tagName = 'o-bank-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BankTwoToneSvg} />;
  };
}