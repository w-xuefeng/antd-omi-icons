// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FundTwoToneSvg = {"name":"fund","theme":"twotone"};

@tag('o-fund-two-tone')
export default class FundTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FundTwoTone';
  static tagName = 'o-fund-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FundTwoToneSvg} />;
  };
}